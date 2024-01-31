import LinkedinCard from '@/components/ui/linkedin-card';
import { BREAKPOINTS } from '@/constants';
import usePost from '@/hooks/use-post';
import { cn } from '@/lib/utils';
import EditorJS from '@editorjs/editorjs';
import React from 'react';

const Preview = () => {
  const ref = React.useRef<EditorJS>();
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const [device, setDevice] =
    React.useState<keyof typeof BREAKPOINTS>('mobile');
  const { post } = usePost();
  const initializeEditor = React.useCallback(async () => {
    const tools = (await import('@/configs/editor')).default;
    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'preview',
        onReady() {
          ref.current = editor;
        },
        data: post,
        readOnly: true,
        minHeight: 10,
        tools,
      });
    }
  }, [post]);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);
    }
  }, []);

  React.useEffect(() => {
    if (isMounted) {
      initializeEditor();

      return () => {
        ref.current?.destroy();
        ref.current = undefined;
      };
    }
  }, [isMounted, initializeEditor]);
  console.log(post);
  return (
    <div className="border-l bg-gray-50 flex items-center flex-col justify-start gap-6 flex-1">
      <div className="px-4 h-16 bg-white py-3.5 w-full flex items-center justify-between border-b">
        <div className="text-base font-semibold text-gray-900">
          Post Preview
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-gray-600">Devices :</p>
          {Object.values(BREAKPOINTS).map((item, index) => (
            <div
              key={index + 1}
              className={cn(
                'w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100',
                item.dev === device && 'bg-primary/40'
              )}
              onClick={() => setDevice(item.dev)}
            >
              <item.icon
                className={cn(
                  '!h-5 !w-5 text-gray-400 hover:text-gray-600',
                  item.dev === device && 'text-primary'
                )}
              />
            </div>
          ))}
        </div>
      </div>
      <LinkedinCard breakpoint={device}>
        <div className={BREAKPOINTS[device].width} id="preview"></div>
      </LinkedinCard>
    </div>
  );
};

export default Preview;
