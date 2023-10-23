import styled from 'styled-components';
import { Typography } from '~/components';
import { getThemeByPath } from '~/utils';

const mediumSpacing = getThemeByPath('spacings.medium');
const breakpointTablet = getThemeByPath('breakpoints.tablet');

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${mediumSpacing}px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: ${mediumSpacing}px;

  @media (max-width: ${breakpointTablet}px) {
    flex-direction: column;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${mediumSpacing}px;

  @media (max-width: ${breakpointTablet}px) {
    margin: ${mediumSpacing}px 0;
  }
`;

export const Title = styled(Typography).attrs({
  variant: 'headline6',
})``;

export const SubTitle = styled(Typography).attrs({
  variant: 'headline1',
})``;

export const HeaderContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const PaperInternalWrapper = styled.div`
  display: flex;
`;
