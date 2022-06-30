import type { Component } from "solid-js";
import { ThemeProvider } from "solid-styled-components";
import { theme } from "./theme";

import Home from "./pages/Home/Home";

const App: Component = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
