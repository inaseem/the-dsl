import * as monaco from 'monaco-editor';
import { useEffect, useRef } from 'react';
import { PAYROLL_LANGUAGE } from './constants';
import useEditorConfig from './useEditorConfig';
import { Box } from '@razorpay/blade/components';

const FormulaEditor = ({
  onLoad,
}: {
  onLoad?: (editor: monaco.editor.IStandaloneCodeEditor) => void;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const value = `MAX(BASIC, HRA) + DA + 100`;

  const { initEditor, disposeEditor } = useEditorConfig(PAYROLL_LANGUAGE);

  useEffect(() => {
    // Hover on each property to see its docs!
    if (containerRef.current) {
      const { editor } = initEditor(containerRef.current, value);
      editorRef.current = editor; // store editor reference
      onLoad?.(editor);
    }
    // destroy editor on unmount
    return () => {
      disposeEditor();
    };
  }, [value, initEditor]);

  return (
    <Box height="100%">
      <Box ref={containerRef} id="container" height="100%" />
    </Box>
  );
};

export default FormulaEditor;
