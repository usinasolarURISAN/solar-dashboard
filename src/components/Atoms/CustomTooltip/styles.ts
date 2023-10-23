import styled from 'styled-components';
import Glass from '../Glass';
import { getThemeByPath } from '~/utils';
import Typography from '../Typography';

const defaultWrapperWidth = 180;
const defaultWrapperWidthMobile =
  defaultWrapperWidth - 0.2 * defaultWrapperWidth;

const defaultWeatherIconSize = 64;
const defaultWeatherIconSizeMobile = defaultWeatherIconSize / 2;

const textDisabled = getThemeByPath('colors.text.disabled');
const radiusSmaller = getThemeByPath('radius.smaller');
const breakpointTablet = getThemeByPath('breakpoints.tablet');

const spacingSmall = getThemeByPath('spacings.small');
const spacingMeaningless = getThemeByPath('spacings.meaningless');

export const Wrapper = styled.div`
  min-width: ${defaultWrapperWidth}px;
  border-radius: ${radiusSmaller}px;

  @media (max-width: ${breakpointTablet}px) {
    min-width: ${defaultWrapperWidthMobile}px;
  }
`;

export const GlassWrapper = styled(Glass).attrs(props => ({
  glassProps: {
    style: {
      borderRadius: radiusSmaller(props),
    },
  },
}))``;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const SafeAreaWrapper = styled.div`
  margin: ${spacingSmall}px;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const TimeInfo = styled(Typography).attrs(props => ({
  variant: 'footer',
  typographyProps: {
    style: {
      color: textDisabled(props),
    },
  },
}))``;

export const Content = styled.div`
  margin-top: ${spacingMeaningless}px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ItemRow = styled.div`
  display: flex;
  flex: 1;
`;

export const LabelWrapper = styled.div`
  margin-right: ${spacingMeaningless}px;
`;

export const Label = styled(Typography).attrs({
  typographyProps: {
    style: {
      fontWeight: 700,
    },
  },
})``;

export const ValueWrapper = styled.div``;

export const Value = styled(Typography)``;

export const WeatherWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  max-height: ${defaultWeatherIconSize}px;

  @media (max-width: ${breakpointTablet}px) {
    max-height: ${defaultWeatherIconSizeMobile}px;
  }
`;
