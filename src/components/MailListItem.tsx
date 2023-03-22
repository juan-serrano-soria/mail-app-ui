import { Box, Text } from "@/atoms";
import { Mail } from "@/models";
import React from "react";

export interface MailListItemProps extends Mail {}

const MailListItem: React.FC<MailListItemProps> = props => {
  return (
    <Box>
      <Text>{props.title}</Text>
      <Text>{props.body}</Text>
    </Box>
  )
}

export default MailListItem;
