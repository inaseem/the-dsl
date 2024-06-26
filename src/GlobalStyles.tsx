import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.typography.fonts.family.text}
}
html {
  height: 100%
}

body {
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.typography.fonts.family.text};
  height: 100%;
  background-color: ${(props) =>
    props.theme.colors.surface.background.gray.subtle}
}

#root {
  height: inherit;
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${(props) => props.theme.typography.fonts.family.heading};
}

code {
    font-family: ${(props) => props.theme.typography.fonts.family.code};
    word-wrap: break-word;
    white-space: normal;
    overflow: auto;
    font-size : ${(props) => props.theme.typography.fonts.size[75]}px;
}

input {
  font-family: ${(props) => props.theme.typography.fonts.family.text};
  background-color: ${(props) => props.theme.colors.surface.background.gray.moderate};
  color: ${(props) => props.theme.colors.surface.text.gray.normal};
  border: none;
  outline: none;
  font-size: ${(props) => props.theme.typography.fonts.size[75]}px;
}

`;
