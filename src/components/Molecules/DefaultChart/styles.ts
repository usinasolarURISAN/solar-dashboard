import styled from 'styled-components';
import { Paper, Typography } from '~/components/Atoms';
import { getThemeByPath } from '~/utils';

const shortSpacing = getThemeByPath('spacings.short');
const smallSpacing = getThemeByPath('spacings.small');
const mediumSpacing = getThemeByPath('spacings.medium');

const breakpointTablet = getThemeByPath('breakpoints.tablet');

export const Wrapper = styled(Paper)``;

export const ExternalWrapper = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  padding: ${mediumSpacing}px;

  @media (max-width: ${breakpointTablet}px) {
    flex-direction: column;
  }
`;

export const ChartTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpointTablet}px) {
    margin-top: ${smallSpacing}px;
    align-items: center;
  }
`;

export const ChartTitle = styled(Typography).attrs({
  variant: 'headline5',
})``;

export const SubHeader = styled.div`
  display: flex;
`;

export const LatestValue = styled(Typography).attrs({
  variant: 'headline1',
})``;

export const ChartWrapper = styled.div`
  padding-bottom: ${shortSpacing}px;
`;
