import React from 'react';
import { toast } from 'react-toastify';
import { colors, spacings } from '..';

const { small } = spacings;

export const info = (content: string | JSX.Element | React.FC): void => {
  toast(content, {
    type: 'info',
    style: {
      backgroundColor: colors.light?.info,
      color: colors.light?.text?.lighter,
      margin: small,
    },
    bodyStyle: { backgroundColor: colors.light?.info },
  });
};
export default info;
