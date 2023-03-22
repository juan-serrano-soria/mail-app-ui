import { Theme } from "@themes";
import { createBox } from "@shopify/restyle";
import { FlatList, FlatListProps } from "react-native";
import { Mail } from "@/models";
import React, { useCallback } from "react";
import MailListItem from "./MailListItem";
import DATA from "@/fixtures/mails";

const MailFlatList = createBox<Theme, FlatListProps<Mail>>(FlatList)

interface MailListProps {
}

const MailList: React.FC<MailListProps> = () => {
  const renderItem = useCallback(({item}) => {
    return <MailListItem {...item} />
  }, []);

  return (
    <MailFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width="100%"
    />
  )
}

export default MailList;
