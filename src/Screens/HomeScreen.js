import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import MyButton from "../components/MyButton";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ textAlign: "center", marginVertical: 20 }}>
        Нүүр хуудас
      </Text>
      <MyButton
        onPress={() => navigation.navigate("Login")}
        title="Логин дэлгэц"
      />

      <MyButton
        onPress={() => navigation.navigate("Flexbox")}
        title="Flexbox"
      />
    </View>
  );
};

export default HomeScreen;

const css = StyleSheet.create({});
