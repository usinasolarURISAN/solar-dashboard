import styled from 'styled-components';
import { getThemeByPath } from '~/utils';
import Typography from '../Typography';

type ItemWrapperProps = {
  isActive?: boolean;
};

const defaultMinWidth = 32;

const textNeutral1 = getThemeByPath('colors.text.neutral1');
const environmentNeutral1 = getThemeByPath('colors.environment.neutral1');
const environmentMain = getThemeByPath('colors.environment.main');

const smallRadius = getThemeByPath('radius.small');
const smallerRadius = getThemeByPath('radius.smaller');
const meaninglessSpacing = getThemeByPath('spacings.meaningless');

export const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: ${smallRadius}px;
  background-color: ${environmentNeutral1};
`;

export const FirstItemWrapper = styled.button<ItemWrapperProps>`
  min-width: ${defaultMinWidth}px;
  border-radius: ${smallerRadius}px;
  padding: ${meaninglessSpacing}px;
  margin: ${meaninglessSpacing}px 0 ${meaninglessSpacing}px
    ${meaninglessSpacing}px;
  background-color: ${({ isActive }) =>
    isActive ? environmentMain : environmentNeutral1};
  transition: 0.2s;
  &:hover {
    background-color: ${environmentMain};
  }
`;

export const DefaultItemWrapper = styled.button<ItemWrapperProps>`
  min-width: ${defaultMinWidth}px;
  margin: ${meaninglessSpacing}px 0 ${meaninglessSpacing}px
    ${meaninglessSpacing}px;
  padding: ${meaninglessSpacing}px;
  border-radius: ${smallerRadius}px;
  background-color: ${({ isActive }) =>
    isActive ? environmentMain : environmentNeutral1};
  transition: 0.2s;
  &:hover {
    background-color: ${environmentMain};
  }
`;

export const LastItemWrapper = styled.button<ItemWrapperProps>`
  min-width: ${defaultMinWidth}px;
  border-radius: ${smallerRadius}px;
  padding: ${meaninglessSpacing}px;
  margin: ${meaninglessSpacing}px ${meaninglessSpacing}px
    ${meaninglessSpacing}px ${meaninglessSpacing}px;
  background-color: ${({ isActive }) =>
    isActive ? environmentMain : environmentNeutral1};
  transition: 0.2s;
  &:hover {
    background-color: ${environmentMain};
  }
`;

export const ItemText = styled(Typography).attrs(props => ({
  variant: 'footer',
  typographyProps: {
    style: {
      fontWeight: 700,
      color: textNeutral1(props),
    },
  },
}))``;
