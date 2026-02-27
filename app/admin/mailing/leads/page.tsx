
import { getLeads, deleteLeadAction, updateLeadStatusAction } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Trash2, Ban, Info } from 'lucide-react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function LeadsPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string; status?: string; search?: string }>;
}) {
    const params = await searchParams;
    const page = Number(params.page) || 1;
    const status = params.status || 'all';
    const search = params.search || '';
    
    const { leads, count } = await getLeads(page, 50, status, search);
    const totalPages = Math.ceil(count / 50);

    async function handleDelete(formData: FormData) {
        'use server';
        const id = formData.get('id') as string;
        await deleteLeadAction(id);
        revalidatePath('/admin/mailing/leads');
    }
    
    async function handleStatusUpdate(formData: FormData) {
        'use server';
        const id = formData.get('id') as string;
        const newStatus = formData.get('status') as string;
        await updateLeadStatusAction(id, newStatus);
        revalidatePath('/admin/mailing/leads');
    }

    async function handleSearch(formData: FormData) {
        'use server';
        const searchTerm = formData.get('search') as string;
        redirect(`/admin/mailing/leads?search=${searchTerm}&status=${status}`);
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Leads Management</h1>
                <div className="text-sm text-gray-500">Total: {count}</div>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-lg shadow-sm border mb-6 flex gap-4 items-center">
                <form action={handleSearch} className="flex gap-2 flex-1">
                    <Input 
                        name="search" 
                        defaultValue={search} 
                        placeholder="Search email or company..." 
                        className="max-w-xs"
                    />
                    <Button type="submit" variant="secondary">
                        <Search size={16} />
                    </Button>
                </form>
                
                <div className="flex gap-2">
                    <FilterButton current={status} value="all" label="All" />
                    <FilterButton current={status} value="new" label="New" />
                    <FilterButton current={status} value="contacted" label="Contacted" />
                    <FilterButton current={status} value="unsubscribed" label="Unsub" />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <table className="w-full text-sm text-left">
                     <thead className="bg-gray-50 text-gray-500 font-medium">
                        <tr>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Company</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Source</th>
                            <th className="px-4 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {leads?.map((lead: { id: string, email: string, company?: string, first_name?: string, last_name?: string, status: string, source: string }) => (
                            <tr key={lead.id} className="hover:bg-gray-50">
                                <td className="px-4 py-3">{lead.email}</td>
                                <td className="px-4 py-3">{lead.company || '-'}</td>
                                <td className="px-4 py-3">{lead.first_name} {lead.last_name}</td>
                                <td className="px-4 py-3">
                                     <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium 
                                        ${lead.status === 'new' ? 'bg-blue-100 text-blue-800' : 
                                          lead.status === 'contacted' ? 'bg-green-100 text-green-800' : 
                                          lead.status === 'unsubscribed' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                                        {lead.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-gray-400 text-xs">{lead.source}</td>
                                <td className="px-4 py-3 text-right flex justify-end gap-2">
                                    <Link href={`/admin/mailing/leads/${lead.id}`} title="View Details" className="text-gray-400 hover:text-primary">
                                        <Info size={16} />
                                    </Link>
                                    <form action={handleStatusUpdate}>
                                        <input type="hidden" name="id" value={lead.id} />
                                        <input type="hidden" name="status" value="unsubscribed" />
                                        <button title="Mark Unsubscribed" className="text-gray-400 hover:text-red-500">
                                            <Ban size={16} />
                                        </button>
                                    </form>
                                    <form action={handleDelete}>
                                        <input type="hidden" name="id" value={lead.id} />
                                        <button title="Delete" className="text-gray-400 hover:text-red-500" onClick={e => !confirm('Delete?') && e.preventDefault()}>
                                            <Trash2 size={16} />
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                         {leads?.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-4 py-8 text-center text-gray-500">No leads found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
            {/* Pagination Controls could go here */}
        </div>
    );
}

function FilterButton({ current, value, label }: { current: string, value: string, label: string }) {
    const isActive = current === value;
    return (
        <a 
            href={`?status=${value}`}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                isActive ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
            {label}
        </a>
    )
}
