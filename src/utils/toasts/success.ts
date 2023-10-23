import React from 'react';
import { toast } from 'react-toastify';
import { colors, spacings } from '..';

const { small } = spacings;

export const success = (content: string | JSX.Element | React.FC): void => {
  toast(content, {
    type: 'success',
    style: {
      backgroundColor: colors.light?.success,
      color: colors.light?.accent?.main,
      margin: small,
    },
    bodyStyle: { backgroundColor: colors.light?.success },
  });
};
export default success;
