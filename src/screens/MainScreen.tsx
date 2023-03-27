import { Box, Text, TouchableOpacity } from "@/atoms";
import HeaderBar from "@/components/HeaderBar";
import FeatherIcon from "@/components/FeatherIcon";
import MailList from "@/components/MailList";
import React from "react";

export default function MainScreen() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <MailList />
      <HeaderBar>
        <TouchableOpacity m="xs" p="xs" rippleBorderless>
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