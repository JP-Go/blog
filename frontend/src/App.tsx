import type { Component } from "solid-js";
import { ThemeProvider } from "solid-styled-components";
import { Route, Routes } from "solid-app-router";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

import { theme } from "./theme";

const App: Component = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
