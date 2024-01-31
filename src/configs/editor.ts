import { CloseTool } from '@/components/compounds/editor';

import Code from '@editorjs/code';
import { ToolConstructable, ToolSettings } from '@editorjs/editorjs';
import InlineCode from '@editorjs/inline-code';
import List from '@editorjs/list';
import Table from '@editorjs/table';
import Underline from '@editorjs/underline';
import Strikethrough from '@sotaproject/strikethrough';

const tools:{
  [toolName: string]: ToolConstructable|ToolSettings;
} = {
  list: List,
  code: Code,
  inlineCode: InlineCode,
  table: Table,
  strikethrough: Strikethrough,
  Underline: Underline,
  close: {
    class: CloseTool,
  },
};

export default tools;
