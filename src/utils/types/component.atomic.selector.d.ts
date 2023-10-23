type SelectorProps = {
  /**
   * Options to be rendered. Be aware to pass at least two options.
   */
  options?: string[];
  onSelectOption?: (option: string) => void;
};
