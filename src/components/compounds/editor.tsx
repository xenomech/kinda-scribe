import EditorJS from '@editorjs/editorjs';
import { XIcon } from 'lucide-react';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '../ui/button';

const Editor = () => {
  const ref = React.useRef<EditorJS>();
  // const [isSaving, setIsSaving] = React.useState<boolean>(false);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  // const [data, setData] = React.useState<EditorJS.OutputData>();

  const initializeEditor = React.useCallback(async () => {
    const EditorJS = (await import('@editorjs/editorjs')).default;
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
        // data,
        tools: {
          strikethrough: Strikethrough,
          Underline: Underline,
          close: {
            class: CloseTool,
          },
        },
      });
    }
  }, []);

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
  return (
    <form>
      <div className="grid w-full gap-10">
        <div className="flex w-full items-center justify-between">
          <Button type="submit">
            {/* {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} */}
            <span>Save</span>
          </Button>
        </div>
        <div className="prose prose-stone mx-auto w-[800px] dark:prose-invert">
          <div id="editor" className="min-h-[500px]" />
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
