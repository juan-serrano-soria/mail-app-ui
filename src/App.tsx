import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation";
import { ThemeProvider } from "@shopify/restyle";
import { useAtom } from "jotai";
import { activeThemeAtom } from "./state/theme";

const App = () => {
  const [activeTheme] = useAtom(activeThemeAtom);

  return (
    <NavigationContainer>
      <ThemeProvider theme={activeTheme}>
        <Navigation />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App;
