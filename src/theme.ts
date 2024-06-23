const spacing = {
  0: 0,
  1: 2,
  2: 4,
  3: 8,
  4: 12,
  5: 16,
  6: 20,
  7: 24,
  8: 32,
  9: 40,
  10: 48,
  11: 56,
};

export const theme = {
  border: {
    radius: {
      none: 0,
      xsmall: 1,
      small: 2,
      medium: 4,
      large: 8,
      xlarge: 12,
      '2xlarge': 16,
      max: 9999,
      round: '50%',
    },

    width: {
      none: 0,
      thinner: 0.5,
      thin: 1,
      thick: 1.5,
      thicker: 2,
    },
  },
  colors: {
    surface: {
      background: {
        gray: {
          subtle: 'hsla(214, 44%, 7%, 1)',
          intense: 'hsla(217, 27%, 15%, 1)',
          moderate: 'hsla(216, 30%, 13%, 1)',
        },
      },
      border: {
        gray: {
          normal: 'hsla(216, 24%, 31%, 1)',
          subtle: 'hsla(217, 27%, 21%, 1)',
        },
        primary: {
          normal: 'hsla(227, 100%, 59%, 1)',
        },
      },
      text: {
        gray: {
          normal: 'hsla(240, 20%, 99%, 1)',
          subtle: 'hsla(220, 22%, 92%, 1)',
          muted: 'hsla(216, 18%, 62%, 1)',
        },
        primary: {
          normal: 'hsla(220, 100%, 73%, 1)',
        },
      },
    },
    feedback: {
      text: {
        neutral: {
          intense: 'hsla(220, 22%, 92%, 1)',
        },
        negative: {
          intense: 'hhsla(4, 93%, 68%, 1)',
        },
        information: {
          intense: 'hsla(200, 90%, 65%, 1)',
        },
        positive: {
          intense: 'hsla(150, 59%, 55%, 1)',
        },
      },
      background: {
        negative: {
          subtle: 'hsla(4, 74%, 49%, 0.18)',
          intense: 'hsla(4, 77%, 40%, 1)',
        },
        information: {
          subtle: 'hsla(200, 84%, 44%, 0.18)',
          intense: 'hsla(200, 84%, 37%, 1)',
        },
        positive: {
          subtle: 'hsla(150, 100%, 32%, 0.18)',
          intense: 'hsla(150, 100%, 27%, 1)',
        },
      },
    },
    popup: {
      background: {
        intense: 'hsla(217, 27%, 15%, 1)',
      },
    },
  },
  spacing,
  typography: {
    fonts: {
      family: {
        text: '"Inter", "Inter Fallback Arial", Arial',
        heading: '"TASA Orbiter", "TASA Orbiter Fallback Arial", Arial',
        code: '"Menlo", San Francisco Mono, Courier New, Roboto Mono, monospace',
      },
      size: {
        25: 10,
        50: 11,
        75: 12,
        100: 14,
        200: 16,
        300: 18,
        400: 20,
        500: 24,
        600: 32,
        700: 40,
        800: 48,
        900: 56,
        1000: 64,
        1100: 72,
      },
    },
  },
};

export function getTokenValue(path: string, tokens: any) {
  return path.split('.').reduce((prev, curr) => prev && prev[curr], tokens);
}
