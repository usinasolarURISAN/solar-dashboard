import React from 'react';
import { toast } from 'react-toastify';
import { colors, spacings } from '..';

const { small } = spacings;

export const warning = (content: string | JSX.Element | React.FC): void => {
  toast(content, {
    type: 'warning',
    style: {
      backgroundColor: colors.light?.warning,
      color: colors.light?.text?.darker,
      margin: small,
    },
    bodyStyle: { backgroundColor: colors.light?.warning },
  });
};
export default warning;
