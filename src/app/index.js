import React from "react";
import { ThemeProvider } from "styled-components";
import { Routes } from "../views";

import { theme } from "../style/theme";
import GlobalStyle from "../style/Global";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Routes />
    </ThemeProvider>
  );
};
