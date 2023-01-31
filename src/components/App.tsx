import React from "react";
import { ReadingList } from "./organisms/ReadingList";
import { Provider } from "../context/Books";

export const App = () => {
  return (
    <Provider>
      <ReadingList />
    </Provider>
  );
};
