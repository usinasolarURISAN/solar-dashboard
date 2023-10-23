declare type TypographyVariants =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'headline5'
  | 'headline6'
  | 'paragraph'
  | 'header'
  | 'footer';

declare type TypographyAttributes = {
  /**
   * Use this number in `rem`
   */
  fontSize: number;
  fontWeight: number;
};

declare type TypographyVariantsGenericMapper<ReturnType = string> = {
  [variant in TypographyVariants]: ReturnType;
};
