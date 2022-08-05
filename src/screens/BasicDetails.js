import { Button, FormControl, Icon, Input } from "native-base";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Title from "../components/Title";
import SelectCountry from "../components/SelectCountry";
import i18n from "../utils/i18n";

const BasicDetailsScreen = ({ navigation }) => {
  const [name, setName] = useState("");
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

  const next = () => {
    navigation.navigate("CreatePassword");
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
          <Title title={i18n.t("BASIC_DETAILS.TITLE")} />
          <FormControl mt={3} mb={3}>
            <FormControl.Label>
              {i18n.t("BASIC_DETAILS.DISPLAY_NAME")}
            </FormControl.Label>
            <Input
              placeholder={i18n.t("BASIC_DETAILS.NAME_PLACEHOLDER")}
              value={name}
              size="lg"
              onChangeText={setName}
            />
          </FormControl>

          <FormControl mt={3} mb={3}>
            <FormControl.Label>
              {i18n.t("BASIC_DETAILS.SELECT_COUNTRY")}
            </FormControl.Label>
            <SelectCountry />
          </FormControl>

          <View style={styles.buttonView}>
            <Button backgroundColor="gray.500" width="1/2" onPress={next}>
              {i18n.t("BASIC_DETAILS.NEXT_BUTTON")}
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
});

export default BasicDetailsScreen;
