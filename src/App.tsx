import { Suspense, lazy, useState } from 'react';
const FormulaEditor = lazy(
  () => import('./FormulaEditor' /* webpackChunkName: "FormulaEditor" */)
);

import { completionItems } from './constants';

import Box, { DocList, Heading, Text } from './components';
import DocBlock from './components/DocBlock';
import { evaluatePayrollFormula } from './utils';

const App = () => {
  const [isEditorLoaded, setIsEditorLoaded] = useState(false);
  const [value, setValue] = useState('');
  const [costants, setConstants] = useState<Array<[string, number]>>([
    ['BASIC', 1000],
    ['HRA', 500],
    ['DA', 300],
    ['PF', 200],
    ['ESIC', 100],
    ['PT', 50],
    ['LTA', 150],
  ]);

  // function to update contants by index
  const updateConstants = (index: number, value: string) => {
    setConstants((prev) => {
      const updated = [...prev];
      updated[index] = [updated[index][0], parseFloat(value)];
      return updated;
    });
  };

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
        overflowY="auto"
      >
        <Box minWidth="65%" maxWidth={'65%'} overflowY="auto">
          <Box>
            <Box
              borderColor="surface.border.gray.normal"
              backgroundColor="surface.background.gray.moderate"
              borderWidth={'thinner'}
            >
              <Box
                display="flex"
                gap="spacing.7"
                paddingY="spacing.6"
                paddingX="spacing.7"
              >
                <Box>
                  {/* Render and input with on change handler for all constants */}
                  {costants.map(([constant, value], index) => (
                    <Box
                      key={constant}
                      display="flex"
                      alignItems="center"
                      gap="spacing.2"
                    >
                      <Text color="surface.text.gray.muted" size="small">
                        {constant} ={' '}
                      </Text>
                      <input
                        type="number"
                        value={value}
                        onChange={(e) => updateConstants(index, e.target.value)}
                      />
                    </Box>
                  ))}
                </Box>
                <Box>
                  <Text color="surface.text.gray.muted">Result</Text>
                  <Box>
                    <Text color="surface.text.gray.normal">
                      {evaluatePayrollFormula(value, costants)}
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box height="calc(100vh - 330px)" overflowY='auto'>
                <Suspense fallback={'Loading editor'}>
                  <FormulaEditor
                    onLoad={() => setIsEditorLoaded(true)}
                    onChange={(editorValue) => {
                      setValue(editorValue);
                    }}
                  />
                </Suspense>
              </Box>
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
