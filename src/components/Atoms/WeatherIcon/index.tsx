import React, { FC } from 'react';
import { WeatherIcons } from '~/assets';
import { WeatherImage } from './styles';

type Props = {
  weatherIconCode: WeatherIcons;
};

const WeatherIcon: FC<Props> = ({ weatherIconCode }) => {
  return (
    <WeatherImage src={WeatherIcons[weatherIconCode]} alt={weatherIconCode} />
  );
};

export default WeatherIcon;
