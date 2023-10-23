import styled from 'styled-components';
import { Typography } from '~/components/Atoms';
import { getThemeByPath } from '~/utils';

const mediumSpacing = getThemeByPath('spacings.medium');

const defaultDeviceImageSize = 140;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${mediumSpacing}px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Title = styled(Typography).attrs({
  variant: 'headline4',
})``;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${defaultDeviceImageSize}px;
  height: ${defaultDeviceImageSize}px;
`;
