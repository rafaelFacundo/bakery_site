import React from "react";

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

import Home from "./screens/Home";
import ProductsScreen from "./screens/ProductsScreen";
import BuyProductScreen from "./screens/BuyProductScreen";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        {/* <Home /> */}
        {/*  <ProductsScreen /> */}
        <BuyProductScreen />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
