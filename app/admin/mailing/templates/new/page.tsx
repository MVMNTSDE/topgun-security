
'use client';

import { createTemplate } from '../actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

export default function NewTemplatePage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
       <div className="mb-8">
            <Link href="/admin/mailing/templates" className="text-sm text-gray-500 hover:text-gray-900 mb-4 block">
                ← Back to Templates
            </Link>
            <h1 className="text-3xl font-bold tracking-tight">New Template</h1>
        </div>

        <form action={async (formData) => { 
            const res = await createTemplate(formData);
            if (res.success) window.location.href = '/admin/mailing/templates';
            else alert(res.message);
        }} className="bg-white p-8 rounded-lg border space-y-6">
            <div className="space-y-2">
                <Label htmlFor="name">Template Name (Internal)</Label>
                <Input id="name" name="name" placeholder="e.g. Cold Outreach V1" required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="subject">Email Subject</Label>
                <Input id="subject" name="subject" placeholder="Sicherheit für {{company}}..." required />
                <p className="text-xs text-gray-500">You can use {'{{company}}'} placeholder.</p>
            </div>

            <div className="space-y-2">
                <Label htmlFor="content">Content (HTML allowed)</Label>
                <Textarea 
                    id="content" 
                    name="content" 
                    placeholder="<p>Hallo {{salutation}},</p>..." 
                    className="min-h-[300px] font-mono text-sm"
                    required 
                />
                <p className="text-xs text-gray-500">Standard HTML tags supported. Use {'{{salutation}}'}, {'{{name}}'}, {'{{offerCode}}'}.</p>
            </div>

            <div className="flex justify-end gap-4 pt-4">
                <Link href="/admin/mailing/templates">
                    <Button variant="outline" type="button">Cancel</Button>
                </Link>
                <Button type="submit">Create Template</Button>
            </div>
        </form>
    </div>
  );
}
