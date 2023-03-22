import React from "react";
import { useSelector } from "react-redux";
import { EditorContent } from "@tiptap/react";

import { controller } from "../../../../../src/state/StateController";

interface Props {
  editor: any;
}

const MenuBar = ({ editor }: any) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "is-active bg-black text-white px-1 border border-black"
            : "border px-1"
        }
      >
        bold
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? "is-active bg-black text-white px-1 border border-black"
            : "border px-1"
        }
      >
        italic
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike")
            ? "is-active bg-black text-white px-1 border border-black"
            : "border px-1"
        }
      >
        strike
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={
          editor.isActive("code")
            ? "is-active bg-black text-white px-1 border border-black"
            : "border px-1"
        }
      >
        code
      </button>
      <button
        type="button"
        className="border px-1"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        clear marks
      </button>
      <button
        type="button"
        className="border px-1"
        onClick={() => editor.chain().focus().clearNodes().run()}
      >
        clear nodes
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={
          editor.isActive("paragraph")
            ? "is-active bg-black text-white px-1 border border-black"
            : "border px-1"
        }
      >
        paragraph
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 })
            ? "is-active bg-black text-white px-1 border border-black"
            : "border px-1"
        }
      >
        h1
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "is-active bg-black text-white px-1 border border-black"
            : "border px-1"
        }
      >
        h2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive("heading", { level: 3 })
            ? "is-active bg-black text-white px-1 border border-black"
            : "border px-1"
        }
      >
        h3
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={
          editor.isActive("heading", { level: 4 })
            ? "is-active bg-black text-white px-1 border border-black"
            : "border px-1"
        }
      >
        h4
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={
          editor.isActive("heading", { level: 5 })
            ? "is-active bg-black text-white px-1 border border-black"
            : "border px-1"
        }
      >
        h5
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={
          editor.isActive("heading", { level: 6 })
            ? "is-active bg-black text-white px-1 border border-black"
            : "border px-1"
        }
      >
        h6
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive("bulletList")
            ? "is-active bg-black text-white px-1 border border-black"
            : "border px-1"
        }
      >
        bullet list
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList")
            ? "is-active bg-black text-white px-1 border border-black"
            : "border px-1"
        }
      >
        ordered list
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={
          editor.isActive("codeBlock")
            ? "is-active bg-black text-white px-1 border border-black"
            : "border px-1"
        }
      >
        code block
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive("blockquote")
            ? "is-active bg-black text-white px-1 border border-black"
            : "border px-1"
        }
      >
        blockquote
      </button>
      <button
        type="button"
        className="border px-1"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        horizontal rule
      </button>
      <button
        className="border px-1"
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        hard break
      </button>
      <button
        type="button"
        className="border px-1"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </button>
      <button
        type="button"
        className="border px-1"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" })
            ? "is-active bg-black text-white px-1 border border-black"
            : "border px-1"
        }
      >
        purple
      </button>
    </div>
  );
};

const SharedTiptap: React.FC<Props> = ({ editor }) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="border p-2 min-h-[150px]">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default SharedTiptap;
