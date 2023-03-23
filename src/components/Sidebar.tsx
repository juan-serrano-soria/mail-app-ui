import React from "react";
import { Box, Text } from "@/atoms";
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { SafeAreaView } from "react-native";
import { useAtomValue, useSetAtom } from "jotai";
import activeThemeId from "@/state/theme";

const Sidebar: React.FC<DrawerContentComponentProps> = () => {
  const setTheme = useSetAtom(activeThemeId);
  const theme = useAtomValue(activeThemeId);
	return (
		<Box flex={1} bg="$sidebarBackground">
			<SafeAreaView>
        <Text variant="sidebar" m="lg">Mail UI</Text>
      </SafeAreaView>
        <Text variant="sidebar" m="md" onPress={() => {theme === 'light' ? setTheme("dark") : setTheme("light")}}>
          Change theme!
        </Text>
		</Box>
	)
}

export default Sidebar;
