import { Box, Text } from "@/atoms";
import MailList from "@/components/MailList";
import React from "react";

export default function MainScreen() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <MailList />
    </Box>
  )
}