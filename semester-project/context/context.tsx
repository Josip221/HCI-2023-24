"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ItemCardProps {
  amount: number;
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
  emptyCart: () => void;
  notifyLogin: boolean;
  setNotifyLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyContext = createContext<contextProps | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider = ({ children }: MyProviderProps) => {
  const [notifyLogin, setNotifyLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState<ItemCardProps[]>([]);

  const emptyCart = () => {
    setCart([]);
  };

  const addToCart = (item: ItemCardProps) => {
    const existingItem = cart.find((cartItem) => cartItem.title === item.title);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.title === item.title) {
          return { ...cartItem, amount: cartItem.amount + item.amount };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, item]);
    }
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
        emptyCart,
        notifyLogin,
        setNotifyLogin,
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
