import styled, { CSSProperties, css } from 'styled-components';
import {
  BorderRadiusPath,
  BorderWidthPath,
  ColorPath,
  SpacingPath,
  getTokenValue,
} from '../theme';

export const DocList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li + li {
    margin-top: ${({ theme }) => theme.spacing[4]};
  }
`;

type Spacing = SpacingPath;

type BoxProps = {
  display?: CSSProperties['display'];
  gap?: Spacing;
  paddingLeft?: Spacing;
  padding?: Spacing;
  paddingY?: Spacing;
  paddingX?: Spacing;
  paddingRight?: Spacing;
  justifyContent?: CSSProperties['justifyContent'];
  maxHeight?: CSSProperties['maxHeight'];
  backgroundColor?: ColorPath;
  minWidth?: CSSProperties['minWidth'];
  maxWidth?: CSSProperties['maxWidth'];
  height?: CSSProperties['height'];
  flex?: CSSProperties['flex'];
  flexDirection?: CSSProperties['flexDirection'];
  borderColor?: ColorPath;
  borderWidth?: BorderWidthPath;
  marginTop?: Spacing;
  alignItems?: CSSProperties['alignItems'];
  paddingTop?: Spacing;
  overflowY?: CSSProperties['overflowY'];
  borderRadius?: BorderRadiusPath;
};

const Box = styled.div<BoxProps>`
  ${(props) =>
    props.display &&
    css`
      display: ${props.display};
    `}
  ${(props) =>
    props.gap &&
    css`
      gap: ${getTokenValue(props.gap, props.theme)}px;
    `}
    ${(props) =>
    props.padding &&
    css`
      padding: ${getTokenValue(props.padding, props.theme)}px;
    `}
  ${(props) =>
    props.paddingLeft &&
    css`
      padding-left: ${getTokenValue(props.paddingLeft, props.theme)}px;
    `}
  ${(props) =>
    props.paddingY &&
    css`
      padding-top: ${getTokenValue(props.paddingY, props.theme)}px;
      padding-bottom: ${getTokenValue(props.paddingY, props.theme)}px;
    `}
  ${(props) =>
    props.paddingX &&
    css`
      padding-left: ${getTokenValue(props.paddingX, props.theme)}px;
      padding-right: ${getTokenValue(props.paddingX, props.theme)}px;
    `}
  ${(props) =>
    props.paddingRight &&
    css`
      padding-right: ${getTokenValue(props.paddingRight, props.theme)}px;
    `}
  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}
  ${(props) =>
    props.maxHeight &&
    css`
      max-height: ${props.maxHeight};
    `}
  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${getTokenValue(
        props.backgroundColor,
        props.theme.colors
      )};
    `}
    ${(props) =>
    props.minWidth &&
    css`
      min-width: ${props.minWidth};
    `}
    ${(props) =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth};
    `}

    ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
    ${(props) =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}
    ${(props) =>
    props.flexDirection &&
    css`
      flex-direction: ${props.flexDirection};
    `}
    ${(props) =>
    props.borderColor &&
    css`
      border: 1px solid;
      border-color: ${getTokenValue(props.borderColor, props.theme.colors)};
    `}
    ${(props) =>
    props.borderWidth &&
    css`
      border-width: ${getTokenValue(props.borderWidth, props.theme)}px;
    `}
    ${(props) =>
    props.marginTop &&
    css`
      margin-top: ${getTokenValue(props.marginTop, props.theme)}px;
    `}
    ${(props) =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}
    ${(props) =>
    props.paddingTop &&
    css`
      padding-top: ${getTokenValue(props.paddingTop, props.theme)}px;
    `}
    ${(props) =>
    props.overflowY &&
    css`
      overflow-y: ${props.overflowY};
    `}
    ${(props) =>
    props.borderRadius &&
    css`
      border-radius: ${getTokenValue(
          props.borderRadius,
          props.theme.border.radius
        )}${props.borderRadius === 'round' ? '' : 'px'};
    `}
`;

type TextProps = {
  color?: ColorPath;
  size?: 'small' | 'large' | 'medium';
  textAlign?: CSSProperties['textAlign'];
  textTransform?: CSSProperties['textTransform'];
};

export const Text = styled.span<TextProps>`
  ${(props) =>
    props.color &&
    css`
      color: ${getTokenValue(props.color, props.theme.colors)};
    `}

  ${(props) =>
    css`
      font-size: ${getTokenValue('typography.fonts.size.100', props.theme)}px;
    `}
  ${(props) =>
    props.size === 'small' &&
    css`
      font-size: ${getTokenValue('typography.fonts.size.75', props.theme)}px;
    `}
    ${(props) =>
    props.size === 'large' &&
    css`
      font-size: ${getTokenValue('typography.fonts.sizes.100', props.theme)}px;
    `}
    ${(props) =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `}
    ${(props) =>
    props.textTransform &&
    css`
      text-transform: ${props.textTransform};
    `}
`;

type HeadingProps = {
  size?: 'large' | 'small';
  color?: ColorPath;
  textTransform?: CSSProperties['textTransform'];
};

export const Heading = styled.h1<HeadingProps>`
  ${(props) =>
    css`
      font-size: ${getTokenValue('typography.fonts.size.400', props.theme)}px;
    `}
  ${(props) =>
    props.color &&
    css`
      color: ${getTokenValue(props.color, props.theme.colors)};
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      font-size: ${getTokenValue('typography.fonts.size.500', props.theme)}px;
    `}
    ${(props) =>
    props.size === 'small' &&
    css`
      font-size: ${getTokenValue('typography.fonts.size.300', props.theme)}px;
    `}
    ${(props) =>
    props.textTransform &&
    css`
      text-transform: ${props.textTransform};
    `}
`;

export default Box;
