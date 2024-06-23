import { Suspense, lazy, useState } from 'react';
const FormulaEditor = lazy(
  () => import('./FormulaEditor' /* webpackChunkName: "FormulaEditor" */)
);

import { completionItems } from './constants';

import Box, { DocList, Heading, Text } from './components';
import DocBlock from './components/DocBlock';

const App = () => {
  const [isEditorLoaded, setIsEditorLoaded] = useState(false);

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box
        paddingX={'spacing.7'}
        paddingY={'spacing.5'}
        backgroundColor="surface.background.gray.moderate"
      >
        <Heading size="large" color="surface.text.gray.normal">
          Payroll Lang
        </Heading>
      </Box>
      <Box
        flex={1}
        display="flex"
        gap="spacing.7"
        paddingLeft="spacing.3"
        paddingY="spacing.6"
        paddingRight="spacing.6"
        justifyContent="spaced-evenly"
        maxHeight="calc(100vh - 60px)"
      >
        <Box minWidth="65%" maxWidth={'65%'}>
          <Box height="100%" display="flex" flexDirection="column">
            <Box
              flex={1}
              paddingTop="spacing.6"
              borderColor="surface.border.gray.normal"
              backgroundColor="surface.background.gray.moderate"
              borderWidth={'thinner'}
            >
              <Suspense fallback={'Loading editor'}>
                <FormulaEditor onLoad={() => setIsEditorLoaded(true)} />
              </Suspense>
            </Box>
            <Box>
              <Box
                marginTop="spacing.6"
                display="flex"
                alignItems={'start'}
                justifyContent="center"
                gap="spacing.2"
              >
                <Text
                  color="feedback.text.neutral.intense"
                  size="small"
                  textAlign="center"
                >
                  Press <kbd>Ctrl/Command</kbd> + <kbd>Space</kbd> to get code
                  completion and hover over text to view their documentation.
                  <br />
                  The documentation is available for functions and variables on
                  the panel on the right.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        {isEditorLoaded && (
          <Box
            flex="1"
            overflowY="auto"
            backgroundColor="surface.background.gray.moderate"
          >
            <Box paddingX="spacing.6" paddingY="spacing.4">
              <Heading color="surface.text.gray.normal">Documentation</Heading>
            </Box>
            <Box>
              <DocList>
                {completionItems.map((item) => (
                  <DocBlock item={item} key={item.label.toString()} />
                ))}
              </DocList>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default App;
