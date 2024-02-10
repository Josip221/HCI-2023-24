"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ItemCardProps {
  title: string;
  price: number;
  weight: number;
  description: string;
  image: {
    title: string;
    description: string;
    contentType: string;
    url: string;
  };
}
interface contextProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  cart: ItemCardProps[];
  setCart: React.Dispatch<React.SetStateAction<ItemCardProps[]>>;
  addToCart: (item: ItemCardProps) => void;
  removeItemFromCart: (item: ItemCardProps) => void;
}

const MyContext = createContext<contextProps | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider = ({ children }: MyProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState<ItemCardProps[]>([]);

  const addToCart = (item: ItemCardProps) => {
    setCart([...cart, item]);
  };

  const removeItemFromCart = (item: ItemCardProps) => {
    const newCart = cart.filter((cartItem) => cartItem.title !== item.title);
    setCart(newCart);
  };

  return (
    <MyContext.Provider
      value={{
        isLoading,
        setIsLoading,
        cart,
        setCart,
        addToCart,
        removeItemFromCart,
      }}
    >
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
