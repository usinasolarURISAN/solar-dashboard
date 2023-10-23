declare type ComponentAtomicChartProps = {
  cartesianGridStrokeColor?: string;
  lineColor?: string;
  strokeColor?: string;
  /**
   * As far as I know it defines the style of the label, which is the label
   * inside the box in Tooltip component.
   */
  labelStyle?: React.CSSProperties;
  /**
   * As far as I know it defines the style of the whole content Wrapper on
   * Tooltip component.
   */
  contentStyle?: React.CSSProperties;
  mainLineDataKey?: string;
  data?: unknown[];
  lineProps?: Line;
  unit?: string;
  axisFontSize?: string;
};
