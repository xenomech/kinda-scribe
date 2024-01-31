import { Button } from '@/components/ui/button';
import { ChevronsUpDownIcon, GaugeIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

function EditorHeader() {
  return (
    <div className="editor_header px-4 py-2 h-16 border-b sm:px-6">
      <div className="flex items-center justify-between gap-2 sm:gap-6">
        <h1 className="text-lg font-semibold text-gray-900 sm:text-xl">
          Write Post
        </h1>
        <div className="flex items-center justify-end gap-5">
          <Button
            type="button"
            variant="plain"
            size="plain"
            className="cursor-pointer inline-flex items-center justify-center text-gray-600 transition-all duration-150 bg-white rounded-full ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-gray-700 px-3 py-1.5 gap-1.5 text-sm font-semibold group shadow-xs"
          >
            <GaugeIcon className="w-5 h-5 text-gray-500 transition-all duration-150 group-hover:text-gray-600" />
            Check Score
          </Button>
          <div className="w-px h-6 bg-gray-200"></div>
          <div>
            <div className="relative z-100">
              <div className="inline-flex items-center gap-0.5 group">
                <Avatar>
                  <AvatarImage
                    className="w-14 h-14 object-cover"
                    src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="user"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <ChevronsUpDownIcon className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorHeader;
