import { Theme } from "@themes";
import { createBox } from "@shopify/restyle";
import { FlatList, FlatListProps } from "react-native";
import { Mail } from "@/models";
import React, { useCallback } from "react";
import MailListItem from "./MailListItem";

const MailFlatList = createBox<Theme, FlatListProps<Mail>>(FlatList)

interface MailListProps {
}

// test data, delete or extract later
const DATA: Array<Mail> = [
  {
    id: "0",
    title: "Test mail title 0",
    body: "Test mail body 0"
  },
  {
    id: "1",
    title: "Test mail title 1",
    body: "Test mail body 1"
  },
  {
    id: "2",
    title: "Test mail title 2",
    body: "Test mail body 2"
  },
  {
    id: "3",
    title: "Test mail title 3",
    body: "Test mail body 3"
  },

]

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
