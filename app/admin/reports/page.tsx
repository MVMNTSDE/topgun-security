
import { getReports } from "./actions";
import { FileText, AlertTriangle, ShieldCheck } from "lucide-react";
import { Report } from "../types";

export default async function ReportsPage() {
  const reports: Report[] = await getReports();

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8 flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold text-gray-900">Reports (Wachbuch)</h1>
            <p className="text-gray-500">Daily logs, incidents, and patrol reports.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded shadow-sm text-sm font-medium hover:bg-primary/90 transition-colors">
            <FileText size={16} /> New Report
        </button>
      </header>

      <div className="space-y-4">
        {reports.length === 0 ? (
             <div className="py-12 text-center text-gray-500 bg-white border border-dashed border-gray-300 rounded-lg">
                  No reports logged yet.
              </div>
        ) : (
            reports.map((report) => (
                <div key={report.id} className="bg-white p-5 rounded-lg border border-gray-200 hover:border-primary/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                            {report.type === 'incident' ? (
                                <AlertTriangle className="text-red-500" size={20} />
                            ) : (
                                <ShieldCheck className="text-blue-500" size={20} />
                            )}
                            <h3 className="font-semibold text-gray-900 capitalize">{report.type} Report</h3>
                        </div>
                        <span className="text-xs text-gray-400">{new Date(report.created_at).toLocaleString()}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3">
                        {report.content.length > 200 ? report.content.substring(0, 200) + '...' : report.content}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-400 border-t border-gray-50 pt-3">
                         {report.employees && (
                            <span>By: {report.employees.first_name} {report.employees.last_name}</span>
                         )}
                         {report.clients && (
                            <span>Site: {report.clients.company_name}</span>
                         )}
                         {report.severity && report.type === 'incident' && (
                             <span className={`px-2 py-0.5 rounded capitalize ${
                                 report.severity === 'critical' || report.severity === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                             }`}>
                                 {report.severity} Priority
                             </span>
                         )}
                    </div>
                </div>
            ))
        )}
      </div>
    </div>
  );
}
