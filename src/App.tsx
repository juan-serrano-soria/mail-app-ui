import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation";
import { ThemeProvider } from "@shopify/restyle";
import { useAtom } from "jotai";
import { activeThemeAtom } from "./state/theme";
import StatusBar from "./components/StatusBar";

const App = () => {
  const [activeTheme] = useAtom(activeThemeAtom);

  return (
    <NavigationContainer>
      <ThemeProvider theme={activeTheme}>
        <StatusBar />
        <Navigation />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App;
