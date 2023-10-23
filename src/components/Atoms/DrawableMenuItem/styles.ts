import styled from 'styled-components';
import { getThemeByPath } from '~/utils';
import Icon from '../Icon';
import Typography from '../Typography';

type GenericProps = {
  active?: boolean;
};

const defaultIconSize = 28;

const spacingMedium = getThemeByPath('spacings.medium');
const spacingSmall = getThemeByPath('spacings.small');
const environmentNeutral1 = getThemeByPath('colors.environment.neutral1');
const environemntMain = getThemeByPath('colors.environment.main');
const smallRadius = getThemeByPath('radius.small');

export const ItemMenu = styled.button<GenericProps>`
  display: flex;
  align-items: center;
  padding: ${spacingMedium}px;
  margin: ${spacingSmall}px;
  border-radius: ${smallRadius}px;
  background-color: ${props =>
    props.active ? environmentNeutral1(props) : environemntMain(props)};

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: ${environmentNeutral1};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  margin-right: ${spacingSmall}px;
`;

export const IconMenu = styled(Icon).attrs({
  iconProps: {
    size: defaultIconSize,
  },
})``;

export const TextWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const MenuText = styled(Typography)``;
