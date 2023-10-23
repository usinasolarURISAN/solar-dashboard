import React from 'react';
import { toast } from 'react-toastify';
import { colors, spacings } from '..';

const { small } = spacings;

export const error = (content: string | JSX.Element | React.FC): void => {
  toast(content, {
    type: 'success',
    style: {
      backgroundColor: colors.light?.error,
      color: colors.light?.text?.lighter,
      margin: small,
    },
    progressStyle: {
      backgroundColor: colors.light?.environment?.lighter,
    },
    bodyStyle: { backgroundColor: colors.light?.error },
  });
};
export default error;
