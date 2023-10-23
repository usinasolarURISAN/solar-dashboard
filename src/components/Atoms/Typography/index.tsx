import React, { FC } from 'react';
import {
  Paragraph,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Footer,
  Header,
} from './styles';

type Props = {
  typographyProps?: React.HtmlHTMLAttributes<HTMLParagraphElement>;
  variant?: TypographyVariants;
};

const Typography: FC<Props> = ({
  children,
  typographyProps,
  variant = 'paragraph',
}) => {
  const typographyComponents: TypographyVariantsGenericMapper<JSX.Element> = {
    paragraph: <Paragraph {...typographyProps}>{children}</Paragraph>,
    headline1: <Headline1 {...typographyProps}>{children}</Headline1>,
    headline2: <Headline2 {...typographyProps}>{children}</Headline2>,
    headline3: <Headline3 {...typographyProps}>{children}</Headline3>,
    headline4: <Headline4 {...typographyProps}>{children}</Headline4>,
    headline5: <Headline5 {...typographyProps}>{children}</Headline5>,
    headline6: <Headline6 {...typographyProps}>{children}</Headline6>,
    footer: <Footer {...typographyProps}>{children}</Footer>,
    header: <Header {...typographyProps}>{children}</Header>,
  };

  return typographyComponents[variant];
};

export default Typography;
