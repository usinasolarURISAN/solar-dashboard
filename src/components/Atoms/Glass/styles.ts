import styled from 'styled-components';
import { getThemeByPath } from '~/utils';

const defaultGlassBlur = 3;
const shadowS2 = getThemeByPath('shadows.s2');
const environmentDarker = getThemeByPath('colors.environment.darker');

export const Wrapper = styled.div`
  background: ${environmentDarker}AA;
  box-shadow: ${shadowS2};
  backdrop-filter: blur(${defaultGlassBlur}px);
  -webkit-backdrop-filter: blur(${defaultGlassBlur}px);
`;
