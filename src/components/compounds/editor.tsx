import usePost from '@/hooks/use-post';
import EditorJS from '@editorjs/editorjs';
import { BoldIcon, ItalicIcon, Loader2, XIcon } from 'lucide-react';
import React, { useCallback } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '../ui/button';
const Editor = () => {
  const ref = React.useRef<EditorJS>();
  const [isSaving, setIsSaving] = React.useState<boolean>(false);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const { post, setPost } = usePost();

  const initializeEditor = React.useCallback(async () => {
    const Strikethrough = (await import('@sotaproject/strikethrough')).default;
    const Underline = (await import('@editorjs/underline')).default;
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
        tools: {
          strikethrough: Strikethrough,
          Underline: Underline,
          close: {
            class: CloseTool,
          },
        },
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

  const handleSave = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(post);
    setIsSaving((prev) => !prev);
    const data = await ref?.current?.save();
    setPost(data);
    setIsSaving((prev) => !prev);
  };
  const handleSaveCallback = useCallback(handleSave, [post, setPost]);
  React.useEffect(() => {
    const interval = setInterval(handleSaveCallback, 15000);
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
    <form>
      <div>
        <BoldIcon className="w-4 h-4" />
        <ItalicIcon className="w-4 h-4" />
      </div>
      <div className="grid w-full gap-10">
        <div className="prose prose-stone mx-auto w-[800px] dark:prose-invert">
          <div id="editor" className="min-h-[500px]" />
        </div>
      </div>
      <div>
        <div className="flex w-full items-center justify-between">
          <Button onClick={handleSave}>
            {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            <span>Save</span>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Editor;

class CloseTool {
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
