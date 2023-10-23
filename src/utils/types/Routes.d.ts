declare type RoutesFirstLevel = '/' | '/devices' | '/config' | '/about';

declare type Routes = `${RoutesFirstLevel}`;

declare type RoutesGenericMapper<T = string> = {
  [route in Routes]: T;
};
