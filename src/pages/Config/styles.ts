import styled from 'styled-components';
import { Typography } from '~/components';
import { getThemeByPath } from '~/utils';

const environmentMain = getThemeByPath('colors.environment.main');

const mediumSpacing = getThemeByPath('spacings.medium');

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${environmentMain};
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: ${mediumSpacing}px;
`;

export const MenuSubTitleWrapper = styled.div``;

export const MenuSubTitle = styled(Typography).attrs({
  variant: 'headline6',
})``;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
