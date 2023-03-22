import { Box, Text } from "@/atoms";
import { Mail } from "@/models";
import React from "react";

export interface MailListItemProps extends Mail {}

const MailListItem: React.FC<MailListItemProps> = props => {
  return (
    <Box bg="$background">
      <Box  bg="$background" px="lg" py="sm">
        <Text ellipsizeMode="tail" numberOfLines={1} fontWeight="bold" mb="xs">
          {props.title}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={2} fontSize={14} opacity={0.75}>
          {props.body}
        </Text>
      </Box>
    </Box>
  )
}

export default MailListItem;
