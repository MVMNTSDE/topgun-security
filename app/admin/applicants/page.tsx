
import { getApplicants } from "./actions"; 
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react";
import { Applicant } from "../types";

export default async function ApplicantsPage() {
  const applicants: Applicant[] = await getApplicants();

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8 flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold text-gray-900">Applicants</h1>
            <p className="text-gray-500">Manage job applications and recruitment pipeline.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded shadow-sm text-sm font-medium hover:bg-primary/90 transition-colors">
            <Plus size={16} /> Add Applicant
        </button>
      </header>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6 flex gap-4">
          <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search applicants..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-primary focus:border-primary"
              />
          </div>
           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter size={16} /> Filter
          </button>
      </div>

      {/* KanBan or List View? List for now */}
       <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Position</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Applied</th>
                        <th className="px-6 py-3 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {applicants.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="px-6 py-8 text-center text-gray-500">No applicants found.</td>
                        </tr>
                    ) : (
                        applicants.map((app) => (
                            <tr key={app.id} className="bg-white hover:bg-gray-50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="font-medium text-gray-900">{app.full_name}</div>
                                    <div className="text-xs text-gray-500">{app.email}</div>
                                </td>
                                <td className="px-6 py-4 text-gray-700">{app.position || '-'}</td>
                                <td className="px-6 py-4">
                                    <StatusBadge status={app.status || 'new'} />
                                </td>
                                <td className="px-6 py-4 text-gray-500">
                                    {new Date(app.created_at).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100" aria-label="Actions">
                                        <MoreHorizontal size={16} />
                                    </button>
                                </td>
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

function StatusBadge({ status }: { status: string }) {
    const colors: Record<string, string> = {
        new: 'bg-blue-100 text-blue-800',
        interviewed: 'bg-yellow-100 text-yellow-800',
        hired: 'bg-green-100 text-green-800',
        rejected: 'bg-red-100 text-red-800',
        screened: 'bg-indigo-100 text-indigo-800'
    };
    
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[status] || 'bg-gray-100 text-gray-800'}`}>
            {status}
        </span>
    );
}
