"use client";
// context.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define types for your context
interface contextProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  cart: string[];
  setCart: React.Dispatch<React.SetStateAction<string[]>>;
}

const MyContext = createContext<contextProps | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider = ({ children }: MyProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState<string[]>([]);

  return (
    <MyContext.Provider value={{ isLoading, setIsLoading, cart, setCart }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = (): contextProps => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export { MyProvider as ContextProvider, useMyContext as useContext };
