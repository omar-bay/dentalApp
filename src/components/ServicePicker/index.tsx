import React, { useRef, useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import ModalSelector from "react-native-modal-selector";
import Service_List from '../../data/ServiceList'

export const ServicePicker = ({ textInputValue, setTextInputValue, setIdInputValue }: any) => {
  const ref = useRef<ModalSelector>();

  let data = [];
  Service_List.forEach((service) => {
      let temp = {
          key: service.id,
          id: service.id,
          label: service.name
      }
      data.push(temp)
  })

  return (
    <View style={{ flex: 1, justifyContent: "space-around", padding: 0 }}>
      <ModalSelector
        data={data}
        initValue="Select something yummy!"
        onChange={(option) => {
          setTextInputValue(option.label);
          setIdInputValue(option.id)
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            height: 40,
          }}
          editable={false}
          placeholder="Select Service"
          placeholderTextColor={"black"}
          value={textInputValue}
        />
      </ModalSelector>
    </View>
  );
};

const ListItem = ({ data }: any) => {
  return (
    <View key={data.number} style={{ flexDirection: "row" }}>
      <Image
        style={{ width: 26, height: 26, borderRadius: 13 }}
        resizeMode="cover"
        source={{ uri: data.flag }}
      />
      <Text> {data.number}</Text>
      <Text> {data.name}</Text>
    </View>
  );
};

export default ServicePicker;