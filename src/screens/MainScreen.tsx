import { Box, Text } from "@/atoms";
import HeaderBar from "@/components/HeaderBar";
import FeatherIcon from "@/components/FeatherIcon";
import MailList from "@/components/MailList";
import React from "react";

export default function MainScreen() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <MailList />
      <HeaderBar>
        <FeatherIcon name="menu" size={22}/>
        <FeatherIcon name="more-vertical" size={22}/>
      </HeaderBar>
    </Box>
  )
}