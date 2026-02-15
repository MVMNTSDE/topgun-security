
import { getClients } from "./actions";
import { Plus, MapPin, Phone, Mail } from "lucide-react";
import { Client } from "../types";

export default async function ClientsPage() {
  const clients: Client[] = await getClients();

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8 flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold text-gray-900">Clients & Sites</h1>
            <p className="text-gray-500">Manage customer contracts and object locations.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded shadow-sm text-sm font-medium hover:bg-primary/90 transition-colors">
            <Plus size={16} /> Add Client
        </button>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {clients.length === 0 ? (
             <div className="py-12 text-center text-gray-500 bg-white border border-dashed border-gray-300 rounded-lg">
                  No clients found.
              </div>
        ) : (
            clients.map((client) => (
                <div key={client.id} className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-sm transition-shadow">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-lg font-bold text-gray-900">{client.company_name}</h3>
                            <span className={`px-2 py-0.5 rounded text-xs font-semibold uppercase ${client.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                                {client.status}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                             <div className="flex items-center gap-1">
                                <MapPin size={14} /> {client.address || 'No address'}
                            </div>
                            <div className="flex items-center gap-1">
                                <UserIcon /> {client.contact_person}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 text-sm text-gray-600">
                         {client.email && (
                            <a href={`mailto:${client.email}`} className="flex items-center gap-2 hover:text-primary">
                                <Mail size={14} /> {client.email}
                            </a>
                         )}
                         {client.phone && (
                            <a href={`tel:${client.phone}`} className="flex items-center gap-2 hover:text-primary">
                                <Phone size={14} /> {client.phone}
                            </a>
                         )}
                    </div>
                </div>
            ))
        )}
      </div>
    </div>
  );
}

function UserIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    )
}
