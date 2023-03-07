export const theme = {
  colors: {
    white: {
      main: 'rgba(255, 255, 255)',
      transparent: 'rgba(255, 255, 255, 0.25)',
    },
    blue: {
      200: 'rgb(191, 219, 254)',
      300: 'rgb(147, 197, 253)',
      400: 'rgb(96, 165, 250)',
      500: 'rgb(59, 130, 246)',
    },
  },
  font: {
    size: {
      sm: '12.1px',
      bs: '16px',
      md: '20px',
      lg: '25px',
      xl: '31.3px',
      xxl: '39.1px',
      "4xl": '48.8px',
    },
    weight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
};

export type Theme = typeof theme;
