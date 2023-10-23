import styled from 'styled-components';
import { DEFAULT_HEADER_HEIGHT, getThemeByPath } from '~/utils';
import Icon from '../Icon';
import Typography from '../Typography';

const smallSpacing = getThemeByPath('spacings.small');
const mediumSpacing = getThemeByPath('spacings.medium');
const textNeutral1 = getThemeByPath('colors.text.neutral1');
const environmentNeutral1 = getThemeByPath('colors.environment.neutral1');
const breakpointTablet = getThemeByPath('breakpoints.tablet');

export const Wrapper = styled.div`
  display: flex;
  min-height: ${props => DEFAULT_HEADER_HEIGHT + Number(smallSpacing(props))}px;
  border-bottom: 2px solid ${environmentNeutral1};

  @media (max-width: ${breakpointTablet}px) {
    min-height: initial;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${mediumSpacing}px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const HeaderTitle = styled(Typography).attrs(props => ({
  variant: 'header',
  typographyProps: {
    style: {
      color: textNeutral1(props),
    },
  },
}))``;

export const IconWrapper = styled.div`
  display: none;

  @media (max-width: ${breakpointTablet}px) {
    display: flex;
  }
`;

export const CustomIcon = styled(Icon).attrs({
  icon: 'threeBarsMenu',
  iconProps: {
    size: 28,
  },
})``;
