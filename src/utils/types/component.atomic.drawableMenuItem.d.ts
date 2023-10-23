declare type DrawableMenuItem = {
  icon: IconNames;
  text: string;
  onCLick?: () => void;
  active?: boolean;
};
