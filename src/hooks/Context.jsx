/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
const Context = createContext();

export default Context;

export function Provider({ children }) {
  const [navbarTheme, setNavbarTheme] = useState({
    red: false,
    black: true,
    blue: false,
    white: false,
  });

  return <Context.Provider value={{ navbarTheme, setNavbarTheme }}>{children}</Context.Provider>;
}
