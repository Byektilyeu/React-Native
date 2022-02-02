import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MyTextArea = (props) => {
  return (
    <TextInput
      multiLine={true}
      numberOfLines={5}
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="number-pad"
      {...props}
      style={css.inputField}
    />
  );
};

export default MyTextArea;

const css = StyleSheet.create({
  inputField: {
    borderColor: "gray",
    borderRadius: 5,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
});
