import {Button, Icon, ScrollView, theme, useDisclose} from 'native-base';
import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeSlider from '../components/HomeSlider';
import ShareModal from '../components/ShareModal';

const StoreDetails = ({navigation}) => {
  //   const {onOpen} = useDisclose();
  const shareModal = useRef(null);
  const askShare = () => {
    if (shareModal?.current) {
      shareModal?.current?.show();
    }
  };
  useEffect(() => {
    const headerLeft = () => (
      <Icon
        as={<Ionicons name="arrow-back" />}
        size={'lg'}
        color="black"
        onPress={navigation.goBack}
      />
    );
    const headerRight = () => (
      <Icon
        as={<Ionicons name="ios-arrow-redo" />}
        size={'lg'}
        color="black"
        onPress={askShare}
      />
    );
    navigation.setOptions({
      headerShown: true,
      headerBackVisible: false,
      headerTitleAlign: 'center',
      headerLeft,
      headerTitle: 'Stamps',
      headerRight: headerRight,
    });
  }, [navigation, askShare]);

  const gotoScanPage = () => {
    navigation.navigate('Scan');
  };
  return (
    <View style={styles.container}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Text style={{fontSize: 10}}>STARBUCKS coffee voucher</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Icon
              as={<Ionicons name="person" />}
              color="#666"
              size={3}
              mr={1}
            />
            <Text style={{fontSize: 10}}>2</Text>
          </View>
        </View>
        <View style={{marginVertical: 5}}>
          <HomeSlider />
        </View>
        <View style={{marginVertical: 5}}>
          <Text style={{fontSize: 10}}>
            after completing third step there will be a mysterious gift!
          </Text>
        </View>
        <View style={{marginVertical: 5}}>
          <View style={styles.iconRow}>
            <Icon
              as={<Ionicons name="calendar" />}
              color="#666"
              size={6}
              mr={2}
            />
            <Text style={styles.travelTimeText}>
              {'1 Jan 2023 - 1 Apr 2023'}
            </Text>
          </View>

          <View style={styles.iconRow}>
            <Icon
              as={<Ionicons name="location" />}
              color="#666"
              size={6}
              mr={2}
            />
            <Text style={styles.travelTimeText}>{'10 m'}</Text>
          </View>

          <View style={styles.iconRow}>
            <Icon
              as={<Ionicons name="ios-checkmark-circle" />}
              color="#060"
              size={6}
              mr={2}
            />
            <Text style={styles.travelTimeText}>{'stamp 1'}</Text>
          </View>

          <View style={styles.iconRow}>
            <Icon
              as={<Ionicons name="ios-checkmark-circle" />}
              color="#060"
              size={6}
              mr={2}
            />
            <Text style={styles.travelTimeText}>{'stamp 2'}</Text>
          </View>

          <View style={styles.iconRow}>
            <Icon
              as={<Ionicons name="ios-checkmark-circle" />}
              color="#ccc8"
              size={6}
              mr={2}
            />
            <Text style={styles.travelTimeText}>{'A mysterious gift!'}</Text>
          </View>
        </View>

        <View style={{marginVertical: 5}}>
          <Text style={{fontSize: 10}}>Please note:</Text>
          <Text style={{fontSize: 10}}>
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          </Text>
          <View style={{width: '50%'}}>
            <Button
              variant={'ghost'}
              style={{marginVertical: 5}}
              rightIcon={
                <Icon
                  as={
                    <Ionicons
                      name="md-arrow-forward"
                      color={theme.colors.blue}
                    />
                  }
                  color="primary.600"
                  size={4}
                  mt={'0.5'}
                  // mr={2}
                />
              }>
              View the nearest store
            </Button>
          </View>
        </View>

        <View style={{marginVertical: 5}}>
          <View
            style={{
              backgroundColor: '#ccc',
              marginHorizontal: 10,
              borderRadius: 10,
              alignItems: 'center',
              minHeight: 200,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 12}}>Mapview Here</Text>
          </View>
        </View>

        <View style={{marginTop: 10, marginHorizontal: 10, marginBottom: 50}}>
          <Button
            style={{
              borderRadius: 15,
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: '#000',
              padding: 0,
              margin: 0,
            }}
            variant={'outline'}
            rounded
            onPress={gotoScanPage}
            _text={{
              lineHeight: 14,
              fontSize: 14,
            }}>
            Use
          </Button>
        </View>
      </ScrollView>
      <ShareModal ref={shareModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
    fontSize: 16,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  helpIconView: {position: 'absolute', bottom: 5, right: 5},
});

export default StoreDetails;
