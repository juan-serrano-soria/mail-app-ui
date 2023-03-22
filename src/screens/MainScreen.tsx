import { Box, Text } from "@/atoms";
import MailListItem from "@/components/MailListItem";
import React from "react";

export default function MainScreen() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text>Hello World!</Text>
      <MailListItem id="1" title="TestTitle" body="This is a test mail item" />
    </Box>
  )
}