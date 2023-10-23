import React, { FC } from 'react';
import { InnerImage } from './styles';

type Props = {
  src: string;
  alt?: string;
};

const Image: FC<Props> = ({ src, alt = 'Imagem' }) => {
  return <InnerImage src={src} alt={alt} />;
};

export default Image;
