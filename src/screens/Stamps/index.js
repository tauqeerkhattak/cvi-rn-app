import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StampsTab from './Stamps';
import VouchersTab from './Vouchers';

const Tab = createMaterialTopTabNavigator();

const Stamps = ({navigation}) => {
  const goDetails = item => {
    navigation.navigate('StoreDetails', {item: {...item}});
  };
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        key={'navigation_stamps'}
        screenOptions={{
          tabBarInactiveTintColor: '#ccc',
          tabBarActiveTintColor: '#000',
          tabBarIndicatorStyle: styles.tabIndicator,
          tabBarLabelStyle: styles.tabLabel,
        }}>
        <Tab.Screen
          name="StampsTab"
          // component={StampsTab}
          children={props => <StampsTab goDetails={goDetails} {...props} />}
          options={{
            tabBarLabel: 'Stamps',
          }}
        />
        <Tab.Screen
          name="VouchersTab"
          // component={VouchersTab}
          children={props => <VouchersTab goDetails={goDetails} {...props} />}
          options={{
            tabBarLabel: 'Vouchers',
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  tabLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  tabIndicator: {
    backgroundColor: '#fe7013',
  },
});

export default Stamps;
