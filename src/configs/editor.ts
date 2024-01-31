import { CloseTool } from '@/components/compounds/editor';

import Code from '@editorjs/code';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import InlineCode from '@editorjs/inline-code';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import Table from '@editorjs/table';
import Underline from '@editorjs/underline';
import Strikethrough from '@sotaproject/strikethrough';

const tools = {
  header: Header,
  linkTool: LinkTool,
  list: List,
  code: Code,
  inlineCode: InlineCode,
  table: Table,
  embed: Embed,
  strikethrough: Strikethrough,
  Underline: Underline,
  close: {
    class: CloseTool,
  },
};

export default tools;
