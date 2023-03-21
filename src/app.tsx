import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation";
import { ThemeProvider } from "@shopify/restyle";
import light from "@/themes/light";

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <Navigation />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App;
