import { CloseTool } from '@/components/compounds/editor';

import Code from '@editorjs/code';
import InlineCode from '@editorjs/inline-code';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import Table from '@editorjs/table';
import Underline from '@editorjs/underline';
import Strikethrough from '@sotaproject/strikethrough';

const tools = {
  linkTool: LinkTool,
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
