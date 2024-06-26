import * as monaco from 'monaco-editor';
import { useEffect, useRef } from 'react';
import Box, { BoxProps } from './components';
import { PAYROLL_LANGUAGE } from './constants';
import useEditorConfig from './useEditorConfig';

const FormulaEditor = ({
  onLoad,
  onChange,
  ...boxProps
}: {
  onLoad?: (editor: monaco.editor.IStandaloneCodeEditor) => void;
  onChange?: (value: string) => void;
} & BoxProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const value = `MAX(BASIC, HRA) + DA + 100`;

  const { initEditor, disposeEditor } = useEditorConfig(PAYROLL_LANGUAGE);

  useEffect(() => {
    if (containerRef.current) {
      const { editor } = initEditor(containerRef.current, value);
      editorRef.current = editor; // store editor reference
      onLoad?.(editor);
      onChange?.(editor.getValue());
      editor.onDidChangeModelContent(() => {
        onChange?.(editor.getValue());
      });
    }
    // destroy editor on unmount
    return () => {
      disposeEditor();
    };
  }, []);

  return (
    <Box {...boxProps}>
      <Box ref={containerRef} id="container" height="100%" />
    </Box>
  );
};

export default FormulaEditor;
