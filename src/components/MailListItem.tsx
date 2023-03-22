import { Box, Text } from "@/atoms";
import { Mail } from "@/models";
import React from "react";

export interface MailListItemProps extends Mail {}

const MailListItem: React.FC<MailListItemProps> = props => {
  return (
    <Box bg="$background">
      <Box  bg="$background" px="lg" py="sm">
        <Text>{props.title}</Text>
        <Text>{props.body}</Text>
      </Box>
    </Box>
  )
}

export default MailListItem;
