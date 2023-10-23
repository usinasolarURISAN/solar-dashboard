import React from 'react';
import { DeviceImages } from '~/assets';
import { Image } from '~/components/Atoms';
import { DEVICE_NAMES } from '~/utils';
import {
  CardWrapper,
  DataWrapper,
  ImageWrapper,
  InnerImageWrapper,
  ItemDataWrapper,
  Label,
  LabelWrapper,
  Value,
} from './styles';

type Props = {
  isActive?: boolean;
  data: DeviceCardData;
  onCardClick?: (data: DeviceCardData) => void;
};

const DeviceCard: React.FC<Props> = ({
  data,
  isActive,
  onCardClick = () => ({}),
}) => {
  const { device, metadata } = data;

  const handleCardClick = () => onCardClick(data);

  return (
    <CardWrapper isActive={isActive} onClick={handleCardClick}>
      <ImageWrapper>
        <InnerImageWrapper>
          <Image src={DeviceImages[device]} alt={DEVICE_NAMES[device]} />
        </InnerImageWrapper>
      </ImageWrapper>
      <DataWrapper>
        {metadata.map(({ label, value }) => (
          <ItemDataWrapper key={label + value}>
            <LabelWrapper>
              <Label>{label}:</Label>
            </LabelWrapper>
            <Value>{value}</Value>
          </ItemDataWrapper>
        ))}
      </DataWrapper>
    </CardWrapper>
  );
};

export default DeviceCard;
