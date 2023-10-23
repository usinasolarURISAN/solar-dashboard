/* eslint-disable react/destructuring-assignment */
import React, { FC } from 'react';
import {
  MdOutlineInsertChartOutlined,
  MdDevices,
  MdSettings,
  MdOutlineInfo,
  MdWbSunny,
  MdNightlight,
  MdMenu,
  MdArrowDropUp,
} from 'react-icons/md';
import { IconBaseProps, IconType } from 'react-icons';
import { IconWrapper } from './styles';

type Props = {
  icon?: IconNames;
  iconProps?: IconBaseProps;
  onClick?: () => void;
};

const IconMapper: IconNamesGenericMapper<IconType> = {
  dashboard: MdOutlineInsertChartOutlined,
  devices: MdDevices,
  gear: MdSettings,
  info: MdOutlineInfo,
  sun: MdWbSunny,
  moon: MdNightlight,
  threeBarsMenu: MdMenu,
  arrowUp: MdArrowDropUp,
};

const Icon: FC<Props> = props => {
  const { icon, iconProps, onClick } = props;

  return (
    <IconWrapper {...props}>
      {IconMapper[icon || 'gear']
        ? IconMapper[icon || 'gear']({ ...iconProps, onClick } || {})
        : null}
    </IconWrapper>
  );
};

export default Icon;
