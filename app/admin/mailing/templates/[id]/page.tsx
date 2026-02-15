
import { getTemplate, updateTemplateAction } from '../actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function EditTemplatePage({ params }: { params: { id: string } }) {
  const template = await getTemplate(params.id);

  if (!template) {
    notFound();
  }

  // Bind ID to server action
  const updateWithId = updateTemplateAction.bind(null, template.id);

  return (
    <div className="max-w-3xl mx-auto p-8">
       <div className="mb-8">
            <Link href="/admin/mailing/templates" className="text-sm text-gray-500 hover:text-gray-900 mb-4 block">
                ← Back to Templates
            </Link>
            <h1 className="text-3xl font-bold tracking-tight">Edit Template: {template.name}</h1>
        </div>

        <form action={updateWithId} className="bg-white p-8 rounded-lg border space-y-6">
            <div className="space-y-2">
                <Label htmlFor="name">Template Name (Internal)</Label>
                <Input id="name" name="name" defaultValue={template.name} required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="subject">Email Subject</Label>
                <Input id="subject" name="subject" defaultValue={template.subject} required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea 
                    id="content" 
                    name="content" 
                    defaultValue={template.content}
                    className="min-h-[300px] font-mono text-sm"
                    required 
                />
            </div>

            <div className="flex justify-end gap-4 pt-4">
                <Link href="/admin/mailing/templates">
                    <Button variant="outline" type="button">Cancel</Button>
                </Link>
                <Button type="submit">Save Changes</Button>
            </div>
        </form>
    </div>
  );
}
