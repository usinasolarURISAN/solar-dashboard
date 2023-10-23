import { createGlobalStyle } from 'styled-components';
import { getThemeByPath } from '.';

const textMain = getThemeByPath('colors.text.main');
const breakpointTablet = getThemeByPath('breakpoints.tablet');

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0.8rem;
    font-family: sans-serif;

    @media (max-width: ${breakpointTablet}px) {
      font-size: 0.65rem;
    }
  }

  body {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  button,
  input,
  select {
    border: none;
    outline: none;
  }

  button:hover {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: ${textMain};
  }
`;
