
import { getMailLogs } from './actions';
import { CheckCircle, XCircle } from 'lucide-react';

export default async function LogsPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}) {
    const params = await searchParams;
    const page = Number(params.page) || 1;
    const { logs, count } = await getMailLogs(page);

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Mail Logs <span className="text-sm font-normal text-gray-500 ml-2">Total sent: {count}</span></h1>

            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <table className="w-full text-sm text-left">
                     <thead className="bg-gray-50 text-gray-500 font-medium">
                        <tr>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Recipient</th>
                            <th className="px-6 py-3">Campaign</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Details</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {logs?.map((log: { id: string, status: string, recipient_email: string, campaign_name: string, created_at: string, error_message?: string }) => (
                            <tr key={log.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                     {log.status === 'sent' ? (
                                         <span className="flex items-center text-green-600 gap-2"><CheckCircle size={16} /> Sent</span>
                                     ) : (
                                         <span className="flex items-center text-red-600 gap-2"><XCircle size={16} /> Failed</span>
                                     )}
                                </td>
                                <td className="px-6 py-4 font-medium">{log.recipient_email}</td>
                                <td className="px-6 py-4 text-gray-500">{log.campaign_name}</td>
                                <td className="px-6 py-4 text-gray-500">{new Date(log.created_at).toLocaleString()}</td>
                                <td className="px-6 py-4 text-xs text-gray-400 max-w-xs truncate">
                                    {log.error_message || '-'}
                                </td>
                            </tr>
                        ))}
                         {logs?.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">No logs found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
