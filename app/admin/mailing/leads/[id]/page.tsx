import { getLeadById } from '../actions';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, Globe, MapPin, Building, Calendar, Info } from 'lucide-react';

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const lead = await getLeadById(resolvedParams.id);

  if (!lead) {
    notFound();
  }

  const metadata = lead.metadata || {};

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/mailing/leads">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            {lead.company || `${lead.first_name || ''} ${lead.last_name || ''}`.trim() || lead.email}
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium shadow-sm border border-transparent
              ${lead.status === 'new' ? 'bg-blue-100 text-blue-800' : 
                lead.status === 'contacted' ? 'bg-green-100 text-green-800 border-green-200' : 
                lead.status === 'unsubscribed' ? 'bg-red-100 text-red-800 border-red-200' : 'bg-gray-100 text-gray-800'}`}>
                {lead.status.toUpperCase()}
            </span>
          </h1>
          <p className="text-gray-500 mt-1">Lead Details & FastPal Extracted Data</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Info Card */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold border-b pb-3 mb-4 flex items-center gap-2">
              <Building className="h-5 w-5 text-gray-400" />
              Company Info
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              <div>
                <span className="block text-sm text-gray-500 mb-1">Company Name</span>
                <span className="font-medium">{lead.company || '-'}</span>
              </div>
              <div>
                <span className="block text-sm text-gray-500 mb-1">Contact Name</span>
                <span className="font-medium">
                  {`${lead.first_name || ''} ${lead.last_name || ''}`.trim() || '-'}
                </span>
              </div>
              <div className="sm:col-span-2">
                <span className="block text-sm text-gray-500 mb-1 flex items-center gap-1">
                  <Mail className="h-3 w-3" /> Email
                </span>
                <a href={`mailto:${lead.email}`} className="font-medium text-primary hover:underline">{lead.email}</a>
              </div>
              <div>
                <span className="block text-sm text-gray-500 mb-1 flex items-center gap-1">
                  <Phone className="h-3 w-3" /> Phone
                </span>
                {lead.phone ? (
                  <a href={`tel:${lead.phone}`} className="font-medium text-primary hover:underline">{lead.phone}</a>
                ) : '-'}
              </div>
              <div>
                <span className="block text-sm text-gray-500 mb-1 flex items-center gap-1">
                  <Globe className="h-3 w-3" /> Website
                </span>
                {lead.website ? (
                  <a href={lead.website.startsWith('http') ? lead.website : `https://${lead.website}`} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline truncate block">
                    {lead.website}
                  </a>
                ) : '-'}
              </div>
              <div className="sm:col-span-2">
                <span className="block text-sm text-gray-500 mb-1 flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Address
                </span>
                <span className="font-medium">
                  {lead.address || '-'} 
                  {metadata['PLZ'] ? ` ${metadata['PLZ']}` : ''} 
                  {metadata['Stadt'] ? ` ${metadata['Stadt']}` : ''}
                </span>
              </div>
            </div>
          </div>

          {/* FastPal Summary / Description */}
          {metadata['Zusammenfassung'] && (
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50/50 rounded-xl shadow-sm border border-indigo-100 p-6">
              <h2 className="text-lg font-semibold text-indigo-950 mb-3 flex items-center gap-2">
                <Info className="h-5 w-5 text-indigo-400" />
                FastPal Summary
              </h2>
              <p className="text-indigo-900/80 text-sm leading-relaxed whitespace-pre-wrap">
                {metadata['Zusammenfassung']}
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl border p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              System Data
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Source:</span>
                <span className="font-medium max-w-[150px] truncate" title={lead.source || undefined}>{lead.source}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Imported:</span>
                <span className="font-medium">{new Date(lead.created_at).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Last Contact:</span>
                <span className="font-medium">{lead.last_contacted_at ? new Date(lead.last_contacted_at).toLocaleDateString() : 'Never'}</span>
              </div>
               <div className="flex justify-between border-gray-200 pb-2">
                <span className="text-gray-500">Lead ID:</span>
                <span className="font-medium text-xs text-gray-400 break-all">{lead.id.split('-')[0]}...</span>
              </div>
            </div>
          </div>

          {/* Additional Metadata keys from FastPal */}
          {Object.keys(metadata).length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">Raw Metadata fields</h3>
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {Object.entries(metadata).map(([key, value]) => {
                  if (['Zusammenfassung', 'E-Mail', 'Company', 'Vorname', 'Nachname', 'Telefonnummer', 'Webseite', 'Straße'].some(k => key.includes(k))) return null;
                  if (!value || typeof value !== 'string') return null;
                  return (
                    <div key={key} className="text-xs">
                      <span className="font-medium text-gray-700 block">{key}:</span>
                      <span className="text-gray-500 break-words">{value}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
