const returnMediaQuery = (size: number) => {
  return `@media (max-width: ${size}px)`;
};

export const mediaQuery = {
  small: returnMediaQuery(576),
  medium: returnMediaQuery(768),
  large: returnMediaQuery(992),
  xlarge: returnMediaQuery(1200),
  xxlarge: returnMediaQuery(1400),
};

export const theme = { color: {}, typo: {} };
