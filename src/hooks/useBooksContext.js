import { useContext } from "react";
import { BookContext } from "../context/Books";

export const useBooksContext = () => {
  return useContext(BookContext);
};
