declare type IconNames =
  | 'dashboard'
  | 'devices'
  | 'gear'
  | 'info'
  | 'sun'
  | 'moon'
  | 'threeBarsMenu'
  | 'arrowUp';

declare type IconNamesGenericMapper<T = string> = {
  [iconName in IconNames]: T;
};
