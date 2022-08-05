import { Button, FormControl, Icon, Input } from "native-base";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Title from "../components/Title";
import PasswordInput from "../components/PasswordInput";
import i18n from "../utils/i18n";

const CreatePasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [rpassword, setRPassword] = useState("");
  useEffect(() => {
    const headerLeft = () => (
      <Icon
        as={<Ionicons name="arrow-back" />}
        size={"lg"}
        color="black"
        onPress={navigation.goBack}
      />
    );
    navigation.setOptions({
      headerShown: true,
      headerBackVisible: false,
      headerTitleAlign: "center",
      headerLeft,
      headerTitle: "",
      headerRight: () => null,
    });
  }, [navigation]);

  const complete = () => {
    navigation.navigate("SignupComplete");
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        extraHeight={350}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.loginForm}>
          <Title title={i18n.t("CREATE_PASSWORD.TITLE")} />
          <FormControl mt={3} mb={3}>
            <PasswordInput
              placeholder={i18n.t("CREATE_PASSWORD.ENTER_PASSWORD")}
              value={password}
              onChangeText={setPassword}
            />
          </FormControl>

          <View>
            <View style={styles.pointView}>
              <Icon
                as={<Ionicons name="checkmark-circle" size={10} color="#ccc" />}
              />
              <Text style={styles.pointText}>
                {i18n.t("CREATE_PASSWORD.PASS_1")}
              </Text>
            </View>
            <View style={styles.pointView}>
              <Icon
                as={<Ionicons name="checkmark-circle" size={10} color="#ccc" />}
              />
              <Text style={styles.pointText}>
                {i18n.t("CREATE_PASSWORD.PASS_2")}
              </Text>
            </View>
            <View style={styles.pointView}>
              <Icon
                as={<Ionicons name="checkmark-circle" size={10} color="#ccc" />}
              />
              <Text style={styles.pointText}>
                {i18n.t("CREATE_PASSWORD.PASS_3")}
              </Text>
            </View>
          </View>

          <FormControl mt={10} mb={3}>
            <PasswordInput
              placeholder={i18n.t("CREATE_PASSWORD.REPEAT_PASSWORD")}
              value={rpassword}
              onChangeText={setRPassword}
            />
          </FormControl>

          <View style={styles.buttonView}>
            <Button backgroundColor="gray.500" width="1/2" onPress={complete}>
              {i18n.t("CREATE_PASSWORD.NEXT_BUTTON")}
            </Button>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  loginForm: {
    width: "90%",
    padding: 20,
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "center",
  },
  formRow: {
    marginVertical: 10,
  },
  captionView: {
    marginBottom: 10,
  },
  buttonView: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  pointView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  pointText: {
    marginLeft: 5,
    fontSize: 10,
    marginVertical: 5,
  },
});

export default CreatePasswordScreen;
