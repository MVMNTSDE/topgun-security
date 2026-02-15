
import { Users, FileText, AlertTriangle, Briefcase } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

// Init admin client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function getDashboardStats() {
    try {
        const [applicants, employees, clients, incidents] = await Promise.all([
             supabase.from('applicants').select('*', { count: 'exact', head: true }).eq('status', 'new'),
             supabase.from('employees').select('*', { count: 'exact', head: true }).eq('status', 'active'),
             supabase.from('clients').select('*', { count: 'exact', head: true }).eq('status', 'active'),
             supabase.from('reports').select('*', { count: 'exact', head: true }).eq('type', 'incident'),
        ]);

        return {
            newApplicants: applicants.count || 0,
            activeEmployees: employees.count || 0,
            activeClients: clients.count || 0,
            totalIncidents: incidents.count || 0
        };
    } catch (e) {
        return { newApplicants: 0, activeEmployees: 0, activeClients: 0, totalIncidents: 0 };
    }
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Company OS Overview</h1>
      <p className="text-gray-500 mb-8">Welcome to the Topgun Security Command Center.</p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="New Applicants" value={stats.newApplicants} icon={Users} color="bg-blue-50 text-blue-600" />
        <StatCard title="Active Guards" value={stats.activeEmployees} icon={Briefcase} color="bg-green-50 text-green-600" />
        <StatCard title="Active Clients" value={stats.activeClients} icon={Users} color="bg-purple-50 text-purple-600" />
        <StatCard title="Incidents Logged" value={stats.totalIncidents} icon={AlertTriangle} color="bg-orange-50 text-orange-600" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                  <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded text-sm font-medium text-gray-700 transition-colors">
                      + Add New Employee
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded text-sm font-medium text-gray-700 transition-colors">
                      + Create Incident Report
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded text-sm font-medium text-gray-700 transition-colors">
                       + Add New Client
                  </button>
              </div>
          </div>
          
           <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">System Status</h3>
               <div className="space-y-4">
                  <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Database Connection</span>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Mailing Service</span>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Operational</span>
                  </div>
                   <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Storage</span>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Operational</span>
                  </div>
               </div>
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
}

function StatCard({ title, value, icon: Icon, color }: StatCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-start justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
            </div>
            <div className={`p-3 rounded-lg ${color}`}>
                <Icon size={20} />
            </div>
        </div>
    )
}
