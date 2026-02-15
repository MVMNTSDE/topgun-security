
import Link from 'next/link';
import { getTemplates } from './actions';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default async function TemplatesPage() {
  const templates = await getTemplates();

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Email Templates</h1>
            <p className="text-muted-foreground">Manage your reusable email content.</p>
        </div>
        <Link href="/admin/mailing/templates/new">
            <Button>
                <Plus className="mr-2 h-4 w-4" /> Create Template
            </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-lg">{template.name}</h3>
                    <div className="flex gap-2">
                        <Link href={`/admin/mailing/templates/${template.id}`} className="text-gray-500 hover:text-blue-600">
                            <Edit size={16} />
                        </Link>
                        {/* Delete logic needed here */}
                    </div>
                </div>
                <p className="text-sm text-gray-500 mb-4 truncate">{template.subject}</p>
                <div className="text-xs text-gray-400">
                    Updated: {new Date(template.updated_at).toLocaleDateString()}
                </div>
            </div>
        ))}
        {templates.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500 border-2 border-dashed rounded-lg">
                No templates found. Create your first one!
            </div>
        )}
      </div>
    </div>
  );
}
