import React, { FC } from 'react';
import { DeviceImages } from '~/assets';
import { Image, Paper } from '~/components/Atoms';
import { DEVICE_NAMES } from '~/utils';
import { ImageWrapper, TextWrapper, Title, Wrapper } from './styles';

type Props = {
  device?: Devices;
};

const ActiveDevicePaper: FC<Props> = ({ device = 'epever' }) => {
  return (
    <Paper>
      <Wrapper>
        <TextWrapper>
          <Title>{DEVICE_NAMES[device]}</Title>
        </TextWrapper>
        <ImageWrapper>
          <Image src={DeviceImages[device]} alt={DEVICE_NAMES[device]} />
        </ImageWrapper>
      </Wrapper>
    </Paper>
  );
};

export default ActiveDevicePaper;
