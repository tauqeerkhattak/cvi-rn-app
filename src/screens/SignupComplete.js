import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CommonActions } from "@react-navigation/native";
import { Button } from "native-base";
import Title from "../components/Title";
import i18n from "../utils/i18n";

const SignupCompleteScreen = ({ navigation }) => {
  const onContinue = () => {};
  const onSkip = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "HomeTabs" }],
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleView}>
        <Title title={i18n.t("SIGNUP_COMPLETE.TITLE")} />
      </View>
      <View style={styles.middleView}>
        <View style={styles.successImage}></View>
        <Text style={styles.mv10}>
          {i18n.t("SIGNUP_COMPLETE.SUCCESS_MESSAGE")}
        </Text>
      </View>
      <View style={styles.flexCenter}>
        <Button colorScheme={"trueGray"} width={"1/2"} onPress={onContinue}>
          {i18n.t("SIGNUP_COMPLETE.CONTINUE_BUTTON")}
        </Button>
        <Text style={styles.mv30}>{i18n.t("SIGNUP_COMPLETE.OR_SKIP_TEXT")}</Text>
        <Button colorScheme={"trueGray"} width={"1/2"} onPress={onSkip}>
          {i18n.t("SIGNUP_COMPLETE.SKIP_BUTTON")}
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  titleView: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  middleView: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  successImage: {
    width: "80%",
    height: "80%",
    backgroundColor: "#ccc",
    borderRadius: 10,
  },
  mv10: {
    marginVertical: 10,
  },
  flexCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mv30: {
    marginVertical: 30,
  },
});

export default SignupCompleteScreen;
