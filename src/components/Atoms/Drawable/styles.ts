import styled from 'styled-components';
import { DEFAULT_HEADER_HEIGHT, getThemeByPath } from '~/utils';
import Icon from '../Icon';
import Image from '../Image';

const environemntMain = getThemeByPath('colors.environment.main');
const spacingMedium = getThemeByPath('spacings.medium');
const spacingSmall = getThemeByPath('spacings.small');
const textNeutral1 = getThemeByPath('colors.text.neutral1');
const environmentNeutral1 = getThemeByPath('colors.environment.neutral1');
const smallRadius = getThemeByPath('radius.small');
const breakpointTablet = getThemeByPath('breakpoints.tablet');
const zIndexLayer2 = getThemeByPath('zIndex.layer2');

const defaultWrapperWidth = 280;
const defaultArrowUpIconSize = 32;

type WrapperProps = {
  isShowing?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  min-width: ${defaultWrapperWidth}px;
  background-color: ${environemntMain};
  border-right: 2px solid ${environmentNeutral1};
  padding: ${spacingSmall}px;

  @media (max-width: ${breakpointTablet}px) {
    position: absolute;
    display: ${({ isShowing }) => (isShowing ? 'flex' : 'none')};
    width: 100%;
    height: 100%;
    z-index: ${zIndexLayer2};
  }
`;

export const ItemMenu = styled.div`
  display: flex;
  align-items: center;
  padding: ${spacingMedium}px;
  margin: ${spacingSmall}px;
  border-radius: ${smallRadius}px;

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: ${environmentNeutral1};
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: ${DEFAULT_HEADER_HEIGHT}px;
  border-bottom: 2px solid ${environmentNeutral1};
  padding-bottom: ${spacingSmall}px;
`;

export const Logo = styled(Image)``;

export const MenuOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const HideMenuWrapper = styled.div`
  display: none;
  justify-content: center;
  background-color: ${environmentNeutral1};
  border-radius: ${smallRadius}px;

  @media (max-width: ${breakpointTablet}px) {
    display: flex;
  }
`;

export const HideMenu = styled(Icon).attrs({
  icon: 'arrowUp',
  iconProps: {
    size: defaultArrowUpIconSize,
  },
})`
  color: ${textNeutral1};
`;
