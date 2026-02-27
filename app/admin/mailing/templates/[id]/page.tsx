
import { getTemplate, updateTemplate } from '../actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TemplateEditor } from '@/components/admin/template-editor';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

export default async function EditTemplatePage({ params }: { params: { id: string } }) {
  const template = await getTemplate(params.id);

  if (!template) {
    notFound();
  }

  const submitAction = async (formData: FormData) => {
    "use server";
    await updateTemplate(formData);
    redirect('/admin/mailing/templates');
  };

  return (
    <div className="max-w-6xl mx-auto p-4 lg:p-8">
       <div className="mb-8">
            <Link href="/admin/mailing/templates" className="text-sm text-gray-500 hover:text-gray-900 mb-4 block">
                ← Back to Templates
            </Link>
            <h1 className="text-3xl font-bold tracking-tight">Edit Template: {template.name}</h1>
        </div>

        <form action={submitAction} className="bg-white p-8 rounded-lg border space-y-6">
            <input type="hidden" name="id" value={template.id} />
            <div className="space-y-2">
                <Label htmlFor="name">Template Name (Internal)</Label>
                <Input id="name" name="name" defaultValue={template.name} required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="subject">Email Subject</Label>
                <Input id="subject" name="subject" defaultValue={template.subject} required />
            </div>

            <TemplateEditor initialContent={template.content} />

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
