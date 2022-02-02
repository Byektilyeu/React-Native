// import React from "react";
// import { View, StyleSheet, Alert } from "react-native";

// import MyButton from "./MyButton";
// import MyInput from "./MyInput";

// const LoginCmp = ({ navigation, setPhone, setPassword }) => {
//   const loginHandler = () => {
//     Alert.alert("hi");
//   };

//   return (
//     <View>
//       <MyInput
//         onChangeText={setPhone}
//         keyboardType="number-pad"
//         placeholder="Та утасны дугаараа оруулна уу?"
//       />

//       <MyInput
//         onChangeText={setPassword}
//         // password ni haragdahgui bolgodog
//         secureTextEntry={true}
//         placeholder="Нууц үгээ оруулна уу?"
//       />

//       <MyButton
//         style={{ marginHorizontal: 20 }}
//         title="Нэвтрэх"
//         darah={loginHandler}
//       />
//     </View>
//   );
// };

// const css = StyleSheet.create({
//   inputField: {
//     borderBottomColor: "gray",
//     borderBottomWidth: 1,
//     marginHorizontal: 20,
//     marginVertical: 10,
//     padding: 10,
//   },
//   button: {
//     marginVertical: 5,
//   },
// });

// export default LoginCmp;
