import { useContext } from "react";
import { BookContext, BookContextProps } from "../context/Books";

export const useBooksContext = (): BookContextProps => {
  const context = useContext(BookContext);
  if (context === null) {
    throw new Error("BookContext must be used within a Provider");
  }
  return context;
};
