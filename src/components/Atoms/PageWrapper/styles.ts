import styled from 'styled-components';
import { getThemeByPath } from '~/utils';

const environmentDarker = getThemeByPath('colors.environment.darker');

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${environmentDarker};
  overflow-y: auto;
`;
