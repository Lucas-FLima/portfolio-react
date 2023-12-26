'use client';
import React, { createContext, useState, ReactNode } from "react";

interface NavMobileContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface NavMobileProviderProps {
  children: ReactNode;
}

export const NavMobileContext = createContext<NavMobileContextProps>({
  open: false,
  setOpen: () => {},
});

export const NavMobileProvider = ({ children }: NavMobileProviderProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <NavMobileContext.Provider value={{ open, setOpen }}>
      {children}
    </NavMobileContext.Provider>
  );
};
