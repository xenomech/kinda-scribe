import { Button } from '@/components/ui/button';
import { CalendarIcon } from '@heroicons/react/solid';
import { Loader2, SendIcon } from 'lucide-react';

interface FooterProps {
  isSaving: boolean;
  handleSave: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
function EditorFooter({ isSaving, handleSave }: FooterProps) {
  return (
    <div className="px-4 py-5 border-t border-gray-200 shrink-0 sm:px-6">
      <div className="flex flex-row gap-2 sm:gap-6 sm:justify-between sm:items-center">
        <div className="flex items-center justify-start gap-2 sm:gap-4">
          <Button
            type="button"
            className="inline-flex items-center justify-center gap-2 transition-all duration-150 rounded-full bg-white px-3 py-2 sm:px-4 sm:py-2.5 text-sm font-semibold text-gray-700 shadow-xs ring-1 hover:text-gray-900 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Save as Draft
          </Button>
        </div>
        <div className="flex items-center justify-end flex-1 gap-2 sm:gap-4">
          <Button
            type="button"
            className="inline-flex items-center justify-center gap-2 transition-all duration-150 rounded-full bg-white px-3 py-2 sm:px-4 sm:py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-900 group shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <CalendarIcon className="w-5 h-5 -ml-0.5 text-gray-400 transition-all duration-150 group-hover:text-gray-500" />
            Schedule
          </Button>
          <Button
            type="button"
            variant="default"
            className="rounded-full text-sm font-semibold"
            onClick={(e) => handleSave(e)}
          >
            {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Publish
            <SendIcon className="w-4 h-4 rotate-45 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditorFooter;
