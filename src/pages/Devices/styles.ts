import styled from 'styled-components';
import { Typography } from '~/components';
import { getThemeByPath } from '~/utils';

const mediumSpacing = getThemeByPath('spacings.medium');
const smallerSpacing = getThemeByPath('spacings.smaller');

export const ContentWrapper = styled.div`
  padding: ${mediumSpacing}px;
`;

export const DevicesWrapper = styled.div`
  display: flex;
  overflow-x: auto;
`;

export const DeviceCardWrapper = styled.div`
  margin: ${smallerSpacing}px;
`;

export const SubTitle = styled(Typography).attrs({
  variant: 'headline6',
})``;
