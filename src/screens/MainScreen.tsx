import { Box, Text, TouchableOpacity } from "@/atoms";
import HeaderBar from "@/components/HeaderBar";
import FeatherIcon from "@/components/FeatherIcon";
import MailList from "@/components/MailList";
import React, { useCallback } from "react";
import { CompositeScreenProps } from "@react-navigation/native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { HomeDrawerParamList, RootStackParamList } from "@/Navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type MainScreenProps = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>

export default function MainScreen({navigation}: MainScreenProps) {
  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer()
  }, [navigation]);
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <MailList />
      <HeaderBar>
        <TouchableOpacity m="xs" p="xs" rippleBorderless onPress={handleSidebarToggle}>
          <FeatherIcon name="menu" size={22}/>
        </TouchableOpacity>
        <Box flex={1} alignItems="center">
          <Text>All mail</Text>
        </Box>
        <TouchableOpacity m="xs" p="xs" rippleBorderless>
          <FeatherIcon name="user" size={22}/>
        </TouchableOpacity>
      </HeaderBar>
    </Box>
  )
}