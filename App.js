import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IconButton, NativeBaseProvider} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import codePush from 'react-native-code-push';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from './src/screens/Splash';
import WelcomeScreen from './src/screens/Welcome';
import LoginScreen from './src/screens/Login';
import SignupScreen from './src/screens/Signup';
import BasicDetailsScreen from './src/screens/BasicDetails';
import CreatePasswordScreen from './src/screens/CreatePassword';
import SignupCompleteScreen from './src/screens/SignupComplete';
import HomeScreen from './src/screens/Home';
import Vouchers from './src/screens/Vouchers';
import ScanScreen from './src/screens/Scan';

import {toggleLocale} from './src/utils/i18n';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyFollows from './src/screens/MyFollows';
import Avatar from './src/screens/Avatar';
import Account from './src/screens/Account';
import messaging from '@react-native-firebase/messaging';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Stamps from './src/screens/Stamps';
import StoreDetails from './src/screens/StoreDetails';
// import analytics from '@react-native-firebase/analytics';

Ionicons.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const codePushOptions = {
  checkFrequency: __DEV__
    ? codePush.CheckFrequency.ON_APP_RESUME
    : codePush.CheckFrequency.ON_APP_RESUME,
  // other options
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  absoluteButton: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    zIndex: 1122,
  },
});

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    const token = await messaging().getToken();
    console.log('token: ', token);
  }
}

async function doLogEventSample() {}

function App() {
  React.useEffect(() => {
    requestUserPermission();
  }, [])
  
  const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarIcon: () => null,
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Vouchers"
          component={Vouchers}
          options={{tabBarLabel: 'Stamps & Vouchers'}}
        />
        <Tab.Screen name="MyFollows" component={MyFollows} />
        <Tab.Screen name="Avatar" component={Avatar} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    );
  };
  return (
    <GestureHandlerRootView style={styles.flex}>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Splash"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen
                name="BasicDetails"
                component={BasicDetailsScreen}
              />
              <Stack.Screen
                name="CreatePassword"
                component={CreatePasswordScreen}
              />
              <Stack.Screen
                name="SignupComplete"
                component={SignupCompleteScreen}
              />
              <Stack.Screen name="HomeTabs" component={HomeTabs} />
              <Stack.Screen name="Scan" component={ScanScreen} />
              <Stack.Screen name="Stamps" component={Stamps} />
              <Stack.Screen name="StoreDetails" component={StoreDetails} />
            </Stack.Navigator>
          </NavigationContainer>
          <IconButton
            style={styles.absoluteButton}
            icon={<Ionicons name="language-outline" />}
            variant={'subtle'}
            onPress={toggleLocale}>
            Toggle
          </IconButton>
          {/* <IconButton
          style={styles.absoluteButton}
          icon={<Ionicons name="paper-plane-outline" />}
          variant={"subtle"}
          onPress={doLogEventSample}
        >
          Toggle
        </IconButton> */}
        </SafeAreaProvider>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}

// export default codePush(codePushOptions)(App);
export default App;
