import { CommonActions } from "@react-navigation/native";
import { Button } from "native-base";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Account = ({ navigation }) => {
  const logout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Welcome" }],
      })
    );
  };
  return (
    <View style={styles.container}>
      <Text style={{ marginVertical: 20 }}>Account</Text>
      <Button onPress={logout}>Logout</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});

export default Account;
