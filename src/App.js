import { GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import { Helmet } from "react-helmet";
import NavBar from "./components/NavBar";

import Routes from "./components/Routes";

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
      <Routes />
    </ThemeProvider>
  );
}

export default App;
