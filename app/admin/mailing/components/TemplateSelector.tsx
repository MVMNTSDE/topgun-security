
'use client';

import { useState, useEffect } from 'react';
import { getTemplates, EmailTemplate } from '../templates/actions';
import { Label } from '@/components/ui/label';

interface TemplateSelectorProps {
    onSelect: (templateId: string) => void;
}

export default function TemplateSelector({ onSelect }: TemplateSelectorProps) {
    const [templates, setTemplates] = useState<EmailTemplate[]>([]);
    const [selectedId, setSelectedId] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTemplates().then((data) => {
            setTemplates(data);
            if (data.length > 0) {
                 // Don't auto-select to force conscious choice? Or auto-select first?
                 // Let's not auto-select to allow "Default (No Template)" option if we wanted, 
                 // but for now let's just show placeholder.
            }
            setLoading(false);
        });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.target.value;
        setSelectedId(id);
        onSelect(id);
    };

    if (loading) return <div className="text-sm text-gray-500">Loading templates...</div>;

    return (
        <div className="space-y-2">
            <Label htmlFor="template-select">Choose Email Template</Label>
            <select 
                id="template-select"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={selectedId}
                onChange={handleChange}
            >
                <option value="">-- Select a Template --</option>
                {templates.map(t => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                ))}
            </select>
            {selectedId && (
                <p className="text-xs text-gray-500">
                    Subject: {templates.find(t => t.id === selectedId)?.subject}
                </p>
            )}
        </div>
    );
}
