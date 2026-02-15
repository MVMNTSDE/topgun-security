import { getMailingStats, getRecentLeads } from "./actions";
import { Users, Ban, CheckCircle, BarChart as BarChartIcon } from "lucide-react";
import ImportLeadsButton from "./ImportLeadsButton";
import StartCampaignButton from "./StartCampaignButton";

interface Lead {
  id: string;
  email: string;
  status: string;
  source: string | null;
  created_at: string;
}

export default async function MailingDashboard() {
  const stats = await getMailingStats();
  const recentLeads = await getRecentLeads(20);

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8 flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold text-gray-900">Mailing Campaigns</h1>
            <p className="text-gray-500">Manage cold acquisition leads and sending status.</p>
        </div>
        <div className="flex gap-3">
            <ImportLeadsButton />
            <StartCampaignButton />
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Leads" value={stats.total} icon={Users} color="bg-blue-50 text-blue-600" />
        <StatCard title="Contacted" value={stats.contacted} icon={CheckCircle} color="bg-green-50 text-green-600" />
        <StatCard title="Unsubscribed" value={stats.unsubscribed} icon={Ban} color="bg-red-50 text-red-600" />
        <StatCard title="Response Rate" value="0%" icon={BarChartIcon} color="bg-purple-50 text-purple-600" note="(Coming Soon)" />
      </div>


      {/* Leads Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Recent Leads</h3>
            <span className="text-xs text-gray-500">Showing last 20</span>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                    <tr>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Source</th>
                        <th className="px-6 py-3">Created</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {recentLeads?.length === 0 ? (
                        <tr>
                            <td colSpan={4} className="px-6 py-4 text-center text-gray-500">No leads found. Import some CSVs!</td>
                        </tr>
                    ) : (
                        recentLeads?.map((lead: Lead) => (
                            <tr key={lead.id} className="bg-white hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">{lead.email}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                                        ${lead.status === 'new' ? 'bg-blue-100 text-blue-800' : 
                                          lead.status === 'contacted' ? 'bg-green-100 text-green-800' : 
                                          lead.status === 'unsubscribed' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                                        {lead.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-500">{lead.source || 'Manual'}</td>
                                <td className="px-6 py-4 text-gray-500">{new Date(lead.created_at).toLocaleDateString()}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}


interface StatCardProps {
    title: string;
    value: number | string;
    icon: React.ElementType;
    color: string;
    note?: string;
}

function StatCard({ title, value, icon: Icon, color, note }: StatCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-start justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
                {note && <span className="text-xs text-gray-400">{note}</span>}
            </div>
            <div className={`p-3 rounded-lg ${color}`}>
                <Icon size={20} />
            </div>
        </div>
    )
}
