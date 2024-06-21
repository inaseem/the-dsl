import { Badge, Box, Heading, Text } from '@razorpay/blade/components';
import { useCallback } from 'react';
import { CompletionItem } from '../types';
import { colorizeExampleCode } from '../utils';
import * as monaco from 'monaco-editor';

const DocBlock = ({ item }: { item: CompletionItem }) => {
  const exampleCode = item.documentation.example || item.insertText;
  const codeRef = useCallback((node: HTMLElement) => {
    if (node !== null) {
      colorizeExampleCode(exampleCode, node);
    }
  }, []);

  const isFunction = item.kind === monaco.languages.CompletionItemKind.Function;

  const blockKind = isFunction ? 'Function' : 'Variable';

  return (
    <li key={item.label.toString()}>
      <Box
        borderWidth="thin"
        borderColor="surface.border.gray.subtle"
        padding="spacing.5"
      >
        <Box
          display="flex"
          alignItems={'center'}
          justifyContent="space-between"
          gap="spacing.3"
        >
          <Heading size="small" color="surface.text.gray.normal">
            {item.label.toString()}
          </Heading>
          <Badge color={isFunction ? 'information' : 'positive'}>
            {blockKind}
          </Badge>
        </Box>
        <Box marginTop="spacing.2">
          <Text color="surface.text.gray.subtle">
            {item.documentation?.value}
          </Text>
          {exampleCode ? (
            <Box
              display="flex"
              gap="spacing.3"
              marginTop="spacing.2"
              alignItems={'center'}
            >
              <Text color="surface.text.gray.muted">Example: </Text>
              <code ref={codeRef} />
            </Box>
          ) : null}
        </Box>
      </Box>
    </li>
  );
};

export default DocBlock;
