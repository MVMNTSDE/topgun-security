
'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { sendCampaignBatchAction } from './actions';
import { useRouter } from 'next/navigation';
import TemplateSelector from './components/TemplateSelector';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export default function StartCampaignButton() {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [selectedTemplateId, setSelectedTemplateId] = useState<string>('');
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const router = useRouter();

    async function handleStart() {
        if (!selectedTemplateId) {
             if (!confirm("Start campaign WITHOUT a template (using default)?")) return;
        }
        
        setIsLoading(true);
        setMessage(null);
        
        const res = await sendCampaignBatchAction(5, selectedTemplateId); // Pass templateId
        
        if (res.success) {
            setMessage(res.message || "Done");
            router.refresh();
            setIsPopoverOpen(false);
        } else {
            setMessage("Error: " + res.message);
        }
        setIsLoading(false);
    }

    return (
        <div className="flex flex-col items-end">
             <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                    <Button>
                        <Send className="mr-2 h-4 w-4" /> Start Campaign
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <div className="space-y-4">
                        <h4 className="font-medium leading-none">Campaign Settings</h4>
                        <p className="text-sm text-muted-foreground">Select a template to send to the next 5 leads.</p>
                        
                        <TemplateSelector onSelect={setSelectedTemplateId} />

                        <Button 
                            onClick={handleStart} 
                            disabled={isLoading} 
                            className="w-full"
                        >
                            {isLoading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : null}
                            {isLoading ? 'Sending...' : 'Confirm & Send'}
                        </Button>
                        
                        {message && <p className="text-xs text-red-500">{message}</p>}
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
