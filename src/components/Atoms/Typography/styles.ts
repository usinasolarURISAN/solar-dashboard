import styled from 'styled-components';
import { getThemeByPath } from '~/utils';

const paragraphFontSize = getThemeByPath('typography.paragraph.fontSize');
const paragraphFontWeight = getThemeByPath('typography.paragraph.fontWeight');

const headline1FontSize = getThemeByPath('typography.headline1.fontSize');
const headline1FontWeight = getThemeByPath('typography.headline1.fontWeight');

const headline2FontSize = getThemeByPath('typography.headline2.fontSize');
const headline2FontWeight = getThemeByPath('typography.headline2.fontWeight');

const headline3FontSize = getThemeByPath('typography.headline3.fontSize');
const headline3FontWeight = getThemeByPath('typography.headline3.fontWeight');

const headline4FontSize = getThemeByPath('typography.headline4.fontSize');
const headline4FontWeight = getThemeByPath('typography.headline4.fontWeight');

const headline5FontSize = getThemeByPath('typography.headline5.fontSize');
const headline5FontWeight = getThemeByPath('typography.headline5.fontWeight');

const headline6FontSize = getThemeByPath('typography.headline6.fontSize');
const headline6FontWeight = getThemeByPath('typography.headline6.fontWeight');

const headerFontSize = getThemeByPath('typography.header.fontSize');
const headerFontWeight = getThemeByPath('typography.header.fontWeight');

const footerFontSize = getThemeByPath('typography.footer.fontSize');
const footerFontWeight = getThemeByPath('typography.footer.fontWeight');

export const Paragraph = styled.p`
  font-size: ${paragraphFontSize}rem;
  font-weight: ${paragraphFontWeight};
`;

export const Headline1 = styled.h1`
  font-size: ${headline1FontSize}rem;
  font-weight: ${headline1FontWeight};
`;

export const Headline2 = styled.h2`
  font-size: ${headline2FontSize}rem;
  font-weight: ${headline2FontWeight};
`;

export const Headline3 = styled.h3`
  font-size: ${headline3FontSize}rem;
  font-weight: ${headline3FontWeight};
`;

export const Headline4 = styled.h4`
  font-size: ${headline4FontSize}rem;
  font-weight: ${headline4FontWeight};
`;

export const Headline5 = styled.h5`
  font-size: ${headline5FontSize}rem;
  font-weight: ${headline5FontWeight};
`;

export const Headline6 = styled.h6`
  font-size: ${headline6FontSize}rem;
  font-weight: ${headline6FontWeight};
`;

export const Header = styled.p`
  font-size: ${headerFontSize}rem;
  font-weight: ${headerFontWeight};
`;

export const Footer = styled.p`
  font-size: ${footerFontSize}rem;
  font-weight: ${footerFontWeight};
`;
