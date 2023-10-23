import styled from 'styled-components';
import { getThemeByPath } from '~/utils';

const environmentMain = getThemeByPath('colors.environment.main');
const radiusShort = getThemeByPath('radius.short');
const shadowS1 = getThemeByPath('shadows.s1');
const zIndexLayer1 = getThemeByPath('zIndex.layer1');

export const Wrapper = styled.div`
  box-shadow: ${shadowS1};
  border-radius: ${radiusShort}px;
`;

export const ChildrenWrapper = styled.div`
  position: relative;
  border-radius: ${radiusShort}px;
  background-color: ${environmentMain};
  z-index: ${zIndexLayer1};
`;
