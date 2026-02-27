'use client';

import { useState } from 'react';
import { createTemplate, updateTemplate, deleteTemplate } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Edit, Plus, Trash2, Tag } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  subject: string;
  content: string;
}

export default function TemplateManager({ initialTemplates }: { initialTemplates: Template[] }) {
  const [templates, setTemplates] = useState<Template[]>(initialTemplates);
  const [editingTemplate, setEditingTemplate] = useState<Template | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetState = () => {
    setEditingTemplate(null);
    setIsCreating(false);
    setError(null);
  };

  const saveTemplate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    
    // Add existing ID if editing
    if (editingTemplate) {
      formData.append('id', editingTemplate.id);
    }

    const result = editingTemplate 
      ? await updateTemplate(formData)
      : await createTemplate(formData);

    if (!result.success) {
      setError(result.message);
      return;
    }

    // Rather than dealing with server action revalidation easily, 
    // let's just do a hard refresh to get latest data
    window.location.reload();
  };

  const handleCreate = () => {
    resetState();
    setIsCreating(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.')) return;
    
    const formData = new FormData();
    formData.append('id', id);
    const result = await deleteTemplate(formData);
    
    if (result.success) {
      setTemplates(prev => prev.filter(t => t.id !== id));
    } else {
      alert(result.message);
    }
  };

  const renderForm = (template?: Template | null) => (
    <div className="bg-white border rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">
        {template ? 'Template bearbeiten' : 'Neues Template erstellen'}
      </h2>
      
      {error && <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">{error}</div>}
      
      <form onSubmit={saveTemplate} className="space-y-4">
        <div>
          <Label>Name (z.B. &quot;Baustellen Köln Erstkontakt&quot;)</Label>
          <Input name="name" defaultValue={template?.name || ''} required />
        </div>
        
        <div>
          <Label>Betreffzeile</Label>
          <Input name="subject" defaultValue={template?.subject || ''} required />
          <p className="text-xs text-gray-500 mt-1">Variablen: {'{{company}}'}</p>
        </div>

        <div>
          <Label>E-Mail Inhalt</Label>
          <Textarea 
            name="content" 
            defaultValue={template?.content || ''} 
            required 
            rows={10} 
            className="font-mono text-sm"
          />
          <div className="text-xs text-gray-500 mt-2 space-y-1">
            <p><strong>Variablen:</strong></p>
            <p className="flex items-center gap-1"><Tag size={12}/> {'{{salutation}}'} (Hallo Herr X, / Sehr geehrte...)</p>
            <p className="flex items-center gap-1"><Tag size={12}/> {'{{company}}'} (Firmenname)</p>
            <p className="flex items-center gap-1"><Tag size={12}/> {'{{name}}'} (Vor- und Nachname)</p>
            <p className="flex items-center gap-1"><Tag size={12}/> {'{{offerCode}}'} (z.B. TOPGUN30)</p>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button type="button" variant="outline" onClick={resetState}>Abbrechen</Button>
          <Button type="submit">Speichern</Button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* List */}
      <div className="md:col-span-1 space-y-4">
        <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg text-gray-800">Gespeicherte Vorlagen</h2>
            <Button size="sm" onClick={handleCreate}>
                <Plus size={16} className="mr-1"/> Neu
            </Button>
        </div>

        {templates.length === 0 ? (
          <p className="text-sm text-gray-500 italic">Noch keine Templates angelegt.</p>
        ) : (
          <div className="space-y-3">
            {templates.map(t => (
              <div 
                key={t.id} 
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${editingTemplate?.id === t.id ? 'border-amber-500 bg-amber-50/50' : 'bg-white hover:border-gray-400'}`}
                onClick={() => setEditingTemplate(t)}
              >
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-semibold text-gray-900">{t.name}</h3>
                        <p className="text-xs text-gray-500 truncate mt-1" title={t.subject}>{t.subject}</p>
                    </div>
                </div>
                <div className="flex justify-end mt-3 gap-2">
                     <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-gray-500 h-8 px-2"
                        onClick={(e) => { e.stopPropagation(); setEditingTemplate(t); }}
                     >
                        <Edit size={14} />
                     </Button>
                     <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 px-2"
                        onClick={(e) => { e.stopPropagation(); handleDelete(t.id); }}
                     >
                        <Trash2 size={14} />
                     </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Editor Space */}
      <div className="md:col-span-2">
        {isCreating ? renderForm() : editingTemplate ? renderForm(editingTemplate) : (
             <div className="h-64 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center text-gray-400">
             Wähle links eine Vorlage aus oder erstelle eine neue.
           </div>
        )}
      </div>

    </div>
  );
}
