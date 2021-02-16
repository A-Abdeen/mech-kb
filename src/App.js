import { GlobalStyle, ThemeButton } from "./styles";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";

import { Helmet } from "react-helmet";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import ShopList from "./components/ShopList";
import ShopDetail from "./components/ShopDetail";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const products = useSelector((state) => state.magic.products);

  const toggleTheme = () => {
    if (currentTheme === "dark") setCurrentTheme("light");
    else setCurrentTheme("dark");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar />
      <Helmet>
        <title>Vader's Shop</title>
      </Helmet>
      <ThemeButton onClick={toggleTheme}>
        {currentTheme.toUpperCase()} Theme
      </ThemeButton>
      <Switch>
        <Route
          path={["/shops/:shopId/products/new", "/products/:productSlug/edit"]}
        >
          <ProductForm />
        </Route>
        <Route path="/products/:productSlug">
          <ProductDetail />
        </Route>
        <Route path="/products">
          <ProductList products={products} />
        </Route>
        <Route path="/shops/:shopSlug">
          <ShopDetail />
        </Route>
        <Route path="/shops">
          <ShopList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
