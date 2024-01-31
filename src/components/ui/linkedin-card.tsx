import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BREAKPOINTS } from '@/constants';
import { cn } from '@/lib/utils';
import { GlobeIcon } from '@heroicons/react/solid';
import {
  ForwardIcon,
  MessageSquareMoreIcon,
  SendIcon,
  ThumbsUpIcon,
} from 'lucide-react';
import { HTMLAttributes, PropsWithChildren } from 'react';
interface LinkedinCardProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  breakpoint: keyof typeof BREAKPOINTS;
}
const ACTIONS = [
  {
    title: 'Like',
    icon: ThumbsUpIcon,
    to: '#',
  },
  {
    title: 'Comment',
    icon: MessageSquareMoreIcon,
    to: '#',
  },
  {
    title: 'Share',
    icon: ForwardIcon,
    to: '#',
  },
  {
    title: 'Send',
    icon: SendIcon,
    to: '#',
  },
];
function LinkedinCard({
  children,
  className,
  breakpoint = 'mobile',
}: LinkedinCardProps) {
  return (
    <div className={cn('mx-auto', className, BREAKPOINTS[breakpoint].width)}>
      <div className="overflow-hidden bg-white rounded-lg shadow font-system ring-1 ring-inset ring-gray-200">
        <div className="py-5 pl-4 pr-6">
          <div className="flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3">
                <span className="relative inline-block shrink-0">
                  <Avatar>
                    <AvatarImage
                      className="w-14 h-14 object-cover"
                      src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="user"
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate"></p>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-normal text-gray-500">
                      Now
                    </span>
                    <span className="text-xs font-normal text-gray-500">•</span>
                    <GlobeIcon className="w-3 h-3 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-5">
            <div className="text-sm font-normal text-gray-900 whitespace-pre-wrap">
              {children}
            </div>
          </div>
        </div>

        <div className="pt-3 pb-3 pl-4 pr-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <img className="w-auto h-5" src="/reaction.svg" alt="" />
              <span className="text-xs font-medium text-gray-500">100</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs font-medium text-gray-500">
                0 comments
              </span>
              <span className="text-xs font-medium text-gray-500">•</span>
              <span className="text-xs font-medium text-gray-500">
                0 repost
              </span>
            </div>
          </div>
          <hr className="mt-3 border-gray-200" />
          <div className="flex items-center justify-between mt-2">
            {ACTIONS.map((item, index) => (
              <a
                key={index + 1}
                href={item.to}
                className="flex items-center justify-center gap-1.5 px-1.5 py-2 text-sm font-semibold text-gray-500 rounded-lg hover:bg-gray-100"
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkedinCard;
