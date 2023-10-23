declare type GetHighestValueProps = {
  data: any[];
  dataKey?: string;
};

declare type MapDataToXAxisValueProps = {
  data: any[] | undefined;
  outputType?: 'date' | 'hours';
};

declare type XAxisValueOutputGeneratorProps = {
  timestamp: string | number;
  outputType?: 'date' | 'hours';
};

declare type OneType = {
  x: string;
  t: string;
  s: string;
};

declare type DoubleType = OneType & { xz: string };

declare type DetermineDomainLimitProps = GetHighestValueProps;
