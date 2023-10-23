import styled from 'styled-components';
import { getThemeByPath } from '~/utils';

const environmentMain = getThemeByPath('colors.environment.main');
const primaryMain = getThemeByPath('colors.primary.main');
const textMain = getThemeByPath('colors.text.main');

const giantSpace = getThemeByPath('spacings.giant');
const insaneSpace = getThemeByPath('spacings.insane');

const laptopBreakpoint = getThemeByPath('breakpoints.laptop');
const tabletBreakpoint = getThemeByPath('breakpoints.tablet');

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${environmentMain};
  padding: 0 ${giantSpace}px;
`;

export const Message404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${primaryMain};

  @media (max-width: ${laptopBreakpoint}px) {
    padding-bottom: ${insaneSpace}px;
  }
`;

export const GifWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${giantSpace}px 0;
`;

export const Text = styled.h1`
  text-align: center;
  color: ${textMain};

  @media (max-width: ${tabletBreakpoint}px) {
    font-size: 1.4rem;
  }
`;
