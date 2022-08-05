import {Button, FlatList, Icon, Input, SearchIcon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  tabLabel: {
    fontSize: 16,
    // fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  tabIndicator: {
    backgroundColor: '#fe7013',
  },
  cardPriceRow: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  priceText: {
    fontSize: 12,
  },
  totalPrice: {
    fontSize: 8,
    opacity: 0.5,
    textDecorationLine: 'line-through',
    marginTop: 3,
    marginLeft: 3,
  },
  travelTimeText: {
    fontSize: 10,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  helpIconView: {position: 'absolute', bottom: 5, right: 5},
});

const Tab = createMaterialTopTabNavigator();

const Available = ({goDetails,data}) => {

  return (
    <View style={styles.container}>
      <FlatList
        style={{flex: 1, backgroundColor: '#e5e5e5'}}
        data={data}
        numColumns={2}
        contentContainerStyle={{
          flexGrow: 1,
          padding: 10,
        }}
        keyExtractor={(item, index) => `available_key_${index}`}
        renderItem={({item}) => {
          return (
            <Card item={item}/>
          );
        }}
      />
    </View>
  );
};

const Card = ({item}) => {
  const [image,setImage] = useState(item.photoUrl);
  return <View style={{flex: 1, padding: 5}}>
    <View
      style={{
        backgroundColor: '#FFF',
        borderRadius: 10,
        //   minHeight: 300,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#e5e5e5',
        padding: 5,
      }}>
      <View style={{marginVertical: 5}}>
        <Image source={{uri: image}}
               style={{ height: 150}}
               resizeMode={'cover'}
               onError= {(e) => {
                 console.error('No image found');
                 setImage('https://demofree.sirv.com/nope-not-here.jpg');
               }}/>
        {/*<View*/}
        {/*  style={{*/}
        {/*    borderRadius: 10,*/}
        {/*    backgroundColor: '#ccc',*/}
        {/*    minHeight: 200,*/}
        {/*  }}>*/}

        {/*</View>*/}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{
          fontSize: 15,
          color: '#000',
          fontWeight: 'bold',}}>
          {item.storeName}
        </Text>
      </View>

      <View style={styles.iconRow}>
        <Icon
          as={<Ionicons name="calendar" />}
          color="#fe7013"
          size={3}
          mr={1}
        />
        <Text style={styles.travelTimeText}>
          {'1 Jan 2023 - 1 Apr 2023'}
        </Text>
      </View>

      <View style={styles.iconRow}>
        <Icon
          as={<Ionicons name="location" />}
          color="#fe7013"
          size={3}
          mr={1}
        />
        <Text style={styles.travelTimeText}>{item.distance} m</Text>
      </View>

      <View style={{marginTop: 10}}>
        <Button
          // borderColor="#000"
          // height={30}
          // borderRadius={15}
          // borderWidth={1}
          style={{
            borderRadius: 15,
            borderWidth: StyleSheet.hairlineWidth,
            backgroundColor: '#fe7013',
            padding: 0,
            margin: 0,
          }}
          variant={'outline'}
          rounded
          onPress={() => goDetails(item)}
          _text={{
            lineHeight: 14,
            fontSize: 14,
            color: "#ffffff"
          }}>
          Use
        </Button>
      </View>
      <View>
        <View style={styles.cardPriceRow}>
          <Text style={styles.priceText}>{'$2.5'}</Text>
          <Text style={styles.totalPrice}>{'$4.75'}</Text>
        </View>

        {/*<View style={styles.iconRow}>*/}
        {/*  <Icon*/}
        {/*    as={<Ionicons name="calendar" />}*/}
        {/*    color="#666"*/}
        {/*    size={3}*/}
        {/*    mr={1}*/}
        {/*  />*/}
        {/*  <Text style={styles.travelTimeText}>*/}
        {/*    {'1 Jan 2023 - 1 Apr 2023'}*/}
        {/*  </Text>*/}
        {/*</View>*/}

        {/*<View style={styles.iconRow}>*/}
        {/*  <Icon*/}
        {/*    as={<Ionicons name="location" />}*/}
        {/*    color="#666"*/}
        {/*    size={3}*/}
        {/*    mr={1}*/}
        {/*  />*/}
        {/*  <Text style={styles.travelTimeText}>{'10 m'}</Text>*/}
        {/*</View>*/}
      </View>

      <View style={styles.helpIconView}>
        <Icon
          as={<Ionicons name="md-help-circle-outline" />}
          size={5}
          color="gray.500"
        />
      </View>
    </View>
  </View>;
}

const Expired = () => {
  return (
    <View style={styles.container}>
      <Text>Expired</Text>
    </View>
  );
};

const Stamps = ({goDetails}) => {
  const [searchText, setSearchText] = useState('');

  const [data,setData] = useState([]);

  const getData = async  () => {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "longitude": 190.999,
      "latitude": 13.0909,
      "pageNo": 1,
      "pageSize": 10
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    const response = await fetch("http://13.251.34.67:8099/main-service/store/get-store", requestOptions);
    const data = await response.json();
    setData(data.data.list);
  }

  useEffect( () => {
    console.log('HELLO1');
    getData();
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          paddingVertical: 5,
          paddingHorizontal: 15,
        }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Input
            variant={'rounded'}
            borderColor="#000"
            height={30}
            borderRadius={15}
            borderWidth={1}
            value={searchText}
            onChangeText={setSearchText}
            InputRightElement={
              <Icon
                as={
                  <Ionicons
                    name="ios-search"
                    size={15}
                    color={'#000'}
                    style={{marginHorizontal: 15}}
                  />
                }
              />
            }
          />
        </View>
        <TouchableOpacity
          style={{width: 50, alignItems: 'center', justifyContent: 'center'}}>
          <Ionicons
            name="ios-filter"
            size={20}
            color={'#000'}
            // style={{marginHorizontal: 15}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: 50, alignItems: 'center', justifyContent: 'center'}}>
          <Ionicons
            name="ios-star-outline"
            size={20}
            color={'#000'}
            // style={{marginHorizontal: 15}}
          />
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        <Tab.Navigator
          key={'navigation_stamps_sub_nav'}
          screenOptions={{
            tabBarInactiveTintColor: '#ccc',
            tabBarActiveTintColor: '#000',
            tabBarIndicatorStyle: styles.tabIndicator,
            tabBarLabelStyle: styles.tabLabel,
          }}>
          <Tab.Screen
            name="Available"
            // component={Available}
            children={props => <Available goDetails={goDetails} data={data} {...props} />}
            options={{
              tabBarLabel: 'Available',
            }}
          />
            <Tab.Screen
              name="Expired"
              // component={Expired}
              children={props => <Expired goDetails={goDetails} {...props} />}
              options={{
                tabBarLabel: 'Expired',
              }}
            />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default Stamps;
