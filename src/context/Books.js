import { createContext, useState } from "react";

export const BookContext = createContext();

export const Provider = ({ children }) => {
  const [count, setCount] = useState(0);

  const valueToShare = {
    count: count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
};
