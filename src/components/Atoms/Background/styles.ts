import styled from 'styled-components';
import { getThemeByPath } from '~/utils';

const environemntDarker = getThemeByPath('colors.environment.darker');

export const Wrapper = styled.div`
  background-color: ${environemntDarker};
`;
