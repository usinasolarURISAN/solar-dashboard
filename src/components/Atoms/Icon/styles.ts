import styled from 'styled-components';
import { getThemeByPath } from '~/utils';

const textMain = getThemeByPath('colors.text.main');

export const IconWrapper = styled.div`
  display: flex;
  color: ${props => (props.color ? props.color : textMain(props))};
`;
