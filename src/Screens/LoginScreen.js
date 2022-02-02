import { Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    Alert.alert("Түр хүлээнэ үүү");
  };

  return (
    <View>
      <Image
        style={{ width: "100%", height: "50%" }}
        source={require("../../assets/img/shop.jpg")}
      />
      <Text style={{ textAlign: "center", fontSize: 20 }}>
        {phone} - {password}
      </Text>

      <MyInput
        keyboardType="number-pad"
        placeholder="та утасны дугаараа оруулна уу"
        onChangeText={setPhone}
      />

      <MyInput
        secureTextEntry={true}
        placeholder="та нууц үгээ оруулна уу"
        onChangeText={setPassword}
      />

      <MyButton title="Нэвтрэх" onPress={loginHandler} />

      <MyButton title="Буцах" onPress={() => navigation.pop()} />
    </View>
  );
};

export default LoginScreen;
