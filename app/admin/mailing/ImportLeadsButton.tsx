
'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Upload, Loader2 } from 'lucide-react';
import { importLeadsAction } from './actions';
import { useRouter } from 'next/navigation';

export default function ImportLeadsButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const router = useRouter();

    async function clientAction(formData: FormData) {
        setMessage(null);
        const res = await importLeadsAction(formData);
        if (res.success) {
            setMessage(res.message || "Success");
            router.refresh();
            setTimeout(() => {
                setIsOpen(false);
                setMessage(null);
            }, 2000);
        } else {
            setMessage("Error: " + res.message);
        }
    }

    if (!isOpen) {
        return (
            <button 
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                title="Import Leads CSV"
            >
                <Upload size={16} /> Import CSV
            </button>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Import Leads</h3>
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600" aria-label="Close">&times;</button>
                </div>
                
                <form action={clientAction}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">CSV File</label>
                            <input 
                                type="file" 
                                name="csvFile" 
                                accept=".csv,.txt"
                                required
                                title="CSV File"
                                className="block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-primary/10 file:text-primary
                                hover:file:bg-primary/20
                                "
                            />
                            <p className="mt-1 text-xs text-gray-500">Supports simple list of emails or CSV with an &apos;email&apos; column.</p>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Source Tag</label>
                            <input 
                                type="text" 
                                name="source" 
                                defaultValue="import_v1"
                                placeholder="e.g. linkedin_contacts"
                                title="Source Tag"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                            />
                        </div>

                        {message && (
                            <div className={`p-3 rounded text-sm ${message.includes('Error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                                {message}
                            </div>
                        )}

                        <div className="flex justify-end gap-3 pt-2">
                             <button 
                                type="button" 
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <SubmitBtn />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

function SubmitBtn() {
    const { pending } = useFormStatus();
    return (
        <button 
            type="submit" 
            disabled={pending}
            className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 disabled:opacity-50 flex items-center gap-2"
        >
            {pending ? <Loader2 className="animate-spin" size={16} /> : <Upload size={16} />}
            {pending ? 'Importing...' : 'Upload Leads'}
        </button>
    )
}
