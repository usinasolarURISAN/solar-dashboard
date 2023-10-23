import styled from 'styled-components';
import { Typography } from '~/components';
import { getThemeByPath } from '~/utils';

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
  padding: 0 ${giantSpace}px;
`;

export const Message404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${laptopBreakpoint}px) {
    padding-bottom: ${insaneSpace}px;
  }
`;

export const Text = styled(Typography).attrs({
  variant: 'headline4',
})`
  text-align: center;
  color: ${textMain};

  @media (max-width: ${tabletBreakpoint}px) {
    font-size: 1.4rem;
  }
`;
