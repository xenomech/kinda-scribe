import usePost from '@/hooks/use-post';
import EditorJS from '@editorjs/editorjs';
import { Loader2, XIcon } from 'lucide-react';
import React, { useCallback } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import EditorFooter from '../ui/editor-footer';
import EditorHeader from '../ui/editor-header';
import EditorToolbar from '../ui/editor-toolbar';
const Editor = () => {
  const ref = React.useRef<EditorJS>();
  const [isSaving, setIsSaving] = React.useState<boolean>(false);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const { post, setPost } = usePost();

  const initializeEditor = React.useCallback(async () => {
    const tools = (await import('@/configs/editor')).default;
    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editor',
        onReady() {
          ref.current = editor;
        },
        placeholder: 'Type here to write your post...',
        inlineToolbar: true,
        data: post,
        sanitizer: {
          a: {
            href: true,
          },
        },
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

  const handleSave = async (e?: React.MouseEvent<HTMLElement>) => {
    e && e.preventDefault();
    console.log(post);
    setIsSaving((prev) => !prev);
    const data = await ref?.current?.save();
    setPost(data);
    setIsSaving((prev) => !prev);
  };
  const handleSaveCallback = useCallback(handleSave, [post, setPost]);
  React.useEffect(() => {
    const interval = setInterval(handleSaveCallback, 10000);
    return () => clearInterval(interval);
  }, [handleSaveCallback]);
  if (!isMounted) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  return (
    <form className="flex-1 flex flex-col justify-between">
      <div>
        <EditorHeader />
        <EditorToolbar />
        <div className="mt-4 grid w-full gap-10">
          <div className="prose prose-stone mx-auto w-[800px] dark:prose-invert">
            <div id="editor" className="min-h-[500px]" />
          </div>
        </div>
      </div>
      <EditorFooter isSaving={isSaving} handleSave={handleSave} />
    </form>
  );
};

export default Editor;

export class CloseTool {
  private api;
  private button: HTMLButtonElement | null;
  iconClasses: { base: string };

  static get isInline() {
    return true;
  }
  constructor({ api }: { api: EditorJS.API }) {
    this.button = null;
    this.api = api;
    this.iconClasses = {
      base: this.api.styles.inlineToolButton,
    };
    this.render();
  }

  render(): HTMLButtonElement {
    this.button = document.createElement('button');
    this.button.innerHTML = renderToStaticMarkup(
      //should ignore the div for highlight
      <div className="px-1 border-l">
        <XIcon height="16px" width="16px" />
      </div>
    );
    this.button.classList.add(this.iconClasses.base);
    this.button.addEventListener('click', () => this.close());

    return this.button;
  }
  close() {
    this.api.inlineToolbar.close();
  }
  checkState(): void {}
  surround(): void {}
}
