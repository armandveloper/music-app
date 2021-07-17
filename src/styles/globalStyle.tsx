import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background-primary: #121216;
    --background-intermediate: #191922;
    --background-secondary: #23232d;
    --background-contrast: #42424c;
    --background-elevation: #52525d;
    --color-accent: #ef5466;
    --text-primary: #fff;
    --primary-color: #ef5466;
    --primary-hover-color: #cb4757;
    --divider-primary: #32323d;
    --divider-secondary: #52525d;
    --sidebar-background-color: var(--background-intermediate);
    /* Layout */
    --sidebar-width: 22rem;
    --player-height: 8rem;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    background-color: var(--background-primary);
    color: var(--text-primary);
    font-family: system--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    margin: 0;
  }
`;

export default GlobalStyle;
