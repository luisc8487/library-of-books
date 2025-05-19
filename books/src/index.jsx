import "./index.css";
import React from "react";
import ReacDOM from "react-dom/client";
import App from "./App";
import BooksContext from "./context/books";

const el = document.getElementById("root");
const root = ReacDOM.createRoot(el);

root.render(
  <BooksContext.Provider value={5}>
    <App />
  </BooksContext.Provider>
);
