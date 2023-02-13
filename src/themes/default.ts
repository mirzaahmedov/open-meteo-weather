export const theme = {
  colors: {
    white: {
      main: "rgba(255, 255, 255)",
      transparent: "rgba(255, 255, 255, 0.25)",
    },
    blue: {
      200: "rgb(191, 219, 254)",
      300: "rgb(147, 197, 253)",
      400: "rgb(96, 165, 250)",
      500: "rgb(59, 130, 246)",
    },
  },
	font: {
		size: {
			sm: '0.75rem',
			bs: '0.875rem',
			md: '1rem',
			lg: '1.5rem',
			xl: '2rem',
			xxl: '4rem'
		},
		weight: {
			normal: 400,
			medium: 500,
			bold: 700
		}
	}
};

export type Theme = typeof theme
