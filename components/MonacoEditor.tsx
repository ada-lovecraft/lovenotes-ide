"use client";

import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Editor } from '@monaco-editor/react';

const MonacoEditor = () => {
  const editorRef = useRef(null);
  const [code, setCode] = useState('// Type your code here');

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const handleEditorChange = (value, event) => {
    setCode(value);
  };

  return (
    <Editor
      height="70vh"
      defaultLanguage="javascript"
      defaultValue={code}
      onMount={handleEditorDidMount}
      onChange={handleEditorChange}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
      }}
    />
  );
};

export default dynamic(() => Promise.resolve(MonacoEditor), { ssr: false });