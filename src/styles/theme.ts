import { DefaultTheme } from 'styled-components';

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  dark: string;
  light: string;
  lightGray: string;
  text: string;
  textLight: string;
}

interface ThemeFonts {
  main: string;
  heading: string;
  mono: string;
}

interface ThemeFontSizes {
  small: string;
  regular: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
}

interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

interface ThemeBreakpoints {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
}

interface ThemeTransitions {
  fast: string;
  normal: string;
  slow: string;
}

interface ThemeBorderRadius {
  small: string;
  regular: string;
  large: string;
  round: string;
}

interface ThemeShadows {
  small: string;
  medium: string;
  large: string;
}

export interface Theme {
  colors: ThemeColors;
  fonts: ThemeFonts;
  fontSizes: ThemeFontSizes;
  spacing: ThemeSpacing;
  breakpoints: ThemeBreakpoints;
  transitions: ThemeTransitions;
  borderRadius: ThemeBorderRadius;
  shadows: ThemeShadows;
}

const theme = {
  colors: {
    primary: '#3366FF',
    secondary: '#6C63FF',
    accent: '#F3F3F3',
    dark: '#333333',
    light: '#FFFFFF',
    lightGray: '#E1E1E1',
    text: '#333333',
    textLight: '#777777',
  },
  fonts: {
    main: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  fontSizes: {
    small: '0.875rem',
    regular: '1rem',
    medium: '1.25rem',
    large: '1.5rem',
    xlarge: '2rem',
    xxlarge: '2.5rem',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    laptop: '992px',
    desktop: '1200px',
  },
  transitions: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
  borderRadius: {
    small: '4px',
    regular: '8px',
    large: '12px',
    round: '50%',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.05)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.15)',
  },
} as const;

export default theme as DefaultTheme; 