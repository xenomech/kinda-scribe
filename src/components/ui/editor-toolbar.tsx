import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  DocumentIcon,
  EmojiHappyIcon,
  PaperClipIcon,
  PhotographIcon,
  SparklesIcon,
} from '@heroicons/react/solid';
import { BoldIcon, ItalicIcon } from 'lucide-react';

const PrimaryTools = [
  {
    name: 'Bold',
    icon: BoldIcon,
    action: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
    },
  },
  {
    name: 'Italics',
    icon: ItalicIcon,
    action: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
    },
  },

  {
    name: 'Insert Emoji',
    icon: EmojiHappyIcon,
    action: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
    },
  },
  {
    name: 'Rewrite with AI',
    icon: SparklesIcon,
    action: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
    },
  },
];
const SecondaryTools = [
  {
    name: 'sadase',
    icon: DocumentIcon,
    action: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
    },
  },
  {
    name: 'Add Image',
    icon: PhotographIcon,
    action: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
    },
  },

  {
    name: 'attach',
    icon: PaperClipIcon,
    action: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
    },
  },
];
function EditorToolbar() {
  return (
    <TooltipProvider>
      <div className="py-3 px-5 border-b border-gray-200">
        <div className="flex items-center justify-between gap-1 -ml-2">
          <div className="flex gap-2 items-center">
            {PrimaryTools.map((item, index) => (
              <Tooltip key={index + 1}>
                <TooltipTrigger>
                  <Button
                    variant="plain"
                    size="plain"
                    type="button"
                    className="inline-flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-150 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500"
                    onClick={item.action}
                  >
                    <item.icon className="w-5 h-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{item.name}</TooltipContent>
              </Tooltip>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            {SecondaryTools.map((item, index) => (
              <Tooltip key={index + 1}>
                <TooltipTrigger>
                  <Button
                    variant="plain"
                    size="plain"
                    type="button"
                    className="inline-flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-150 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500"
                    onClick={item.action}
                  >
                    <item.icon className="w-5 h-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{item.name}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

export default EditorToolbar;
