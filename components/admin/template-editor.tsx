"use client"

import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CampaignEmailTemplate } from '@/components/campaign-email-template'

interface TemplateEditorProps {
  initialContent?: string;
}

export function TemplateEditor({ initialContent = "" }: TemplateEditorProps) {
  const [content, setContent] = useState(initialContent)

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      <div className="flex-1 space-y-2">
        <Label htmlFor="content">E-Mail Content (HTML / Text)</Label>
        <Textarea 
            id="content" 
            name="content" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="<p>Hallo {{name}},</p>"
            className="min-h-[500px] font-mono text-sm"
            required 
        />
        <p className="text-xs text-muted-foreground mt-2">
            Verfügbare Variablen: {"{"}{"{"}name{"}"}{"}"}, {"{"}{"{"}company{"}"}{"}"}, {"{"}{"{"}salutation{"}"}{"}"}
        </p>
      </div>

      <div className="flex-1 border-l pl-6 flex flex-col">
        <Label className="mb-4">Echtzeit Vorschau</Label>
        <div className="w-full max-w-[600px] bg-white border border-gray-200 shadow-sm p-0 h-[500px] overflow-y-auto mx-auto shrink-0 relative">
            <div className="p-4 w-[600px]">
                <CampaignEmailTemplate 
                company="Muster GmbH" 
                name="Mustermann"
                salutation="Hallo Herr Mustermann,"
                content={content}
                unsubscribeLink="https://topgun-security.de/unsubscribe"
                />
            </div>
            
            {!content && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50/80 pointer-events-none">
                 <p className="text-sm text-gray-500">Tippe links, um das Design zu sehen.</p>
              </div>
            )}
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
            Die Vorschau zeigt das exakte Design und Framing der ausgehenden E-Mail. 
            Perfekt, um einen Screenshot zur Freigabe zu machen!
        </p>
      </div>
    </div>
  )
}
