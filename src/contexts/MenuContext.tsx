import React, { createContext, useState } from 'react';

type MenuContextData = {
  isShowing: boolean;
  onChangeShowing: () => void;
};

export const MenuContext = createContext<MenuContextData>(
  {} as MenuContextData,
);

export const MenuProvider: React.FC = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);

  const onChangeShowing = () => {
    setIsShowing(!isShowing);
  };

  return (
    <MenuContext.Provider value={{ isShowing, onChangeShowing }}>
      {children}
    </MenuContext.Provider>
  );
};
