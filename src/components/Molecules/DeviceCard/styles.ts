import styled from 'styled-components';
import { Typography } from '~/components/Atoms';
import { getThemeByPath } from '~/utils';

type CardWrapperProps = {
  isActive?: boolean;
};

const meaninglessSpacing = getThemeByPath('spacings.meaningless');
const smallerRadius = getThemeByPath('radius.smaller');
const radiusShort = getThemeByPath('radius.short');

const textNeutral1 = getThemeByPath('colors.text.neutral1');
const environmentNeutral1 = getThemeByPath('colors.environment.neutral1');
const environmentMain = getThemeByPath('colors.environment.main');
const success = getThemeByPath('colors.success');

const defaultDeviceCardSize = 220;
const defaultImageWrapperHeight = defaultDeviceCardSize * 0.7;

const handleCardWrapperBorderColor = ({ isActive }: CardWrapperProps) =>
  isActive ? success : textNeutral1;

export const CardWrapper = styled.div<CardWrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${defaultDeviceCardSize}px;
  border-radius: ${radiusShort}px;
  border-width: 2px;
  border-style: solid;
  border-color: ${handleCardWrapperBorderColor};
  background-color: ${environmentMain};

  transition: 0.3s;

  &:hover {
    animation-name: borderPulse;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    cursor: pointer;
  }

  @keyframes borderPulse {
    0% {
      border-color: ${textNeutral1};
    }

    50% {
      border-color: transparent;
    }

    100% {
      border-color: ${textNeutral1};
    }
  }
`;

export const ExternalImageWrapper = styled.div``;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${meaninglessSpacing}px;
`;

export const InnerImageWrapper = styled.div`
  display: flex;
  height: ${defaultImageWrapperHeight}px;
`;

export const DataWrapper = styled.div`
  flex-direction: column;
`;

export const ItemDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${environmentNeutral1};
  margin: ${meaninglessSpacing}px;
  border-radius: ${smallerRadius}px;
  padding: ${meaninglessSpacing}px;

  text-overflow: ellipsis;
  overflow: hidden;
`;

export const LabelWrapper = styled.div`
  margin-right: ${meaninglessSpacing}px;
`;

export const Label = styled(Typography).attrs(props => ({
  variant: 'footer',
  typographyProps: {
    style: {
      fontWeight: 700,
      color: textNeutral1(props),
    },
  },
}))``;

export const Value = styled(Typography).attrs(props => ({
  variant: 'footer',
  typographyProps: {
    style: {
      color: textNeutral1(props),
    },
  },
}))``;
