import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { StylesProductContainer } from "./StylesProductContainer";

const Product = ({ item, onModal, onModal2 }) => {
  return (
    <View style={StylesProductContainer.cardProduct}>
      <Text style={StylesProductContainer.cardTitle}>{item.title}</Text>
      <Text>{item.price} $</Text>
      <Button title="DELETE" onPress={() => onModal(item)} />
      <Button variant="danger" title="UPDATE" onPress={() => onModal2(item)}></Button>
    </View>
  );
};

export default Product;
