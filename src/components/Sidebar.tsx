import React from "react";
import { View } from "react-native";
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const Sidebar: React.FC<DrawerContentComponentProps> = () => {
	return (
		<View style={{
			backgroundColor: '#212021',
			flex: 1,
		}}>
		</View>
	)
}

export default Sidebar;
