import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    line-height: 1.3;
    margin-bottom: ${props => props.theme.spacing.md};
    font-weight: 600;
  }

  h1 {
    font-size: ${props => props.theme.fontSizes.xxlarge};
    margin-bottom: ${props => props.theme.spacing.lg};
  }

  h2 {
    font-size: ${props => props.theme.fontSizes.xlarge};
  }

  h3 {
    font-size: ${props => props.theme.fontSizes.large};
  }

  p {
    margin-bottom: ${props => props.theme.spacing.md};
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color ${props => props.theme.transitions.fast};

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button, input, textarea, select {
    font-family: inherit;
  }

  section {
    padding: ${props => props.theme.spacing.xxl} 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${props => props.theme.spacing.lg};

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      padding: 0 ${props => props.theme.spacing.md};
    }
  }
`;

export default GlobalStyle; 