import {Box, Icon, Input, Select, Image, Button} from 'native-base';
import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import WebView from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StepIndicator from 'react-native-step-indicator';
import common from '../utils/common-styles';
import i18n from '../utils/i18n';

const logoImage = require('../assets/images/starbucks-logo.png');

const ScanScreen = ({navigation}) => {
  // const [currentPosition, setCurrentPosition] = useState(0);
  let [outlet, setOutlet] = useState('');
  let [price, setPrice] = useState('');
  let [pincode, setPinCode] = useState('');
  let [isWebView, setWebView] = useState(true);
  const labels = ['Cart', 'Delivery Address', 'Order Summary'];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013',
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
    navigation.setOptions({
      headerShown: true,
      headerBackVisible: false,
      headerTitleAlign: 'center',
      headerLeft,
      headerTitle: '',
      headerRight: () => null,
    });
  }, [navigation]);

  // const onPageChange = position => {
  //   setCurrentPosition(position);
  // };

  const renderInputRight = ({position}) => {
    if (position === 0) {
      return (
        <View
          style={{
            height: 50,
            width: 50,
            marginHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            as={<Ionicons name="scan-circle-outline" />}
            size={8}
            color="gray.500"
          />
        </View>
      );
    }

    if (position === 1) {
      let stampCount = 1;
      const intPrice = _.toInteger(price);
      if (!_.isNaN(intPrice)) {
        stampCount = Math.floor(intPrice / 50);
      }
      return (
        <View
          style={{
            paddingHorizontal: 15,
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16, marginRight: 10}}>SGD</Text>
          <Icon
            as={<Ionicons name="md-arrow-forward" />}
            size={6}
            color="gray.500"
            style={{marginHorizontal: 2}}
          />
          <View
            style={{
              width: 35,
              marginHorizontal: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 18}}>{stampCount}</Text>
          </View>

          <Icon
            as={<Ionicons name="md-person" />}
            size={6}
            color="gray.500"
            style={{marginHorizontal: 2}}
          />
        </View>
      );
    }

    if (position === 2) {
      return (
        <View
          style={{
            height: 50,
            width: 50,
            marginHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            as={<Ionicons name="md-help-circle-outline" />}
            size={8}
            color="gray.500"
          />
        </View>
      );
    }
    return null;
  };

  const {height, width} = useWindowDimensions();

  let currentPosition = 0;
  if (outlet !== '') {
    currentPosition = 1;
    if (price !== '') {
      currentPosition = 2;
    }
  }

  const selRightIcon = (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
      }}>
      <Icon as={<Ionicons name="md-location" />} size={5} color="gray.500" />
      <Text>10 min</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <View style={[styles.card, common.shadow]}>
          <View style={styles.cardRow}>
            <View style={styles.cardLeft}>
              <Image source={logoImage} style={styles.brandLogo} />
            </View>

            <View style={styles.cardRight}>
              <Text style={styles.brandTitle}>STARBUCKS</Text>
            </View>
          </View>
          <View style={styles.cardRow}>
            <View style={styles.cardCaption}>
              <Text style={styles.cardCaptionText}>STARBUCKS point card</Text>
            </View>
          </View>
        </View>

        <View style={[styles.card, common.shadow]}>
          <View style={styles.cardRow}>
            {/* style={styles.cardRow} */}
            <View style={{minHeight: 200}}>
              <StepIndicator
                customStyles={{...customStyles}}
                currentPosition={currentPosition}
                labels={labels}
                stepCount={3}
                direction="vertical"
                renderLabel={({
                  currentPosition: cP,
                  label,
                  position,
                  stepStatus,
                }) => {
                  return (
                    <View style={[styles.inputRow, {width: width - 70}]}>
                      <View style={styles.inputView}>
                        {position === 0 && (
                          <Box ml={2}>
                            <Select
                              borderRadius={'full'}
                              borderColor={'#000'}
                              borderWidth={1}
                              // height={'container'}
                              selectedValue={outlet}
                              accessibilityLabel={i18n.t('SCAN.SELECT_OUTLET')}
                              placeholder={i18n.t('SCAN.SELECT_OUTLET')}
                              _selectedItem={{
                                // startIcon: (
                                //   <CheckIcon
                                //     size="5"
                                //     style={{color: '#fe7013'}}
                                //   />
                                // ),
                                _text: {
                                  style: {color: '#fe7013'},
                                },
                              }}
                              style={{height: 30}}
                              onValueChange={itemValue => setOutlet(itemValue)}>
                              <Select.Item
                                label="One Fullerton"
                                value="v1"
                                _stack={{
                                  style: {
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                  },
                                }}
                                endIcon={selRightIcon}
                              />
                              <Select.Item
                                label="6 Battery Road"
                                value="v2"
                                endIcon={selRightIcon}
                                _stack={{
                                  style: {
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                  },
                                }}
                              />
                              <Select.Item
                                label="Singapore Land Tower"
                                value="v3"
                                endIcon={selRightIcon}
                                _stack={{
                                  style: {
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                  },
                                }}
                              />
                              <Select.Item
                                label="Singapore Land Tower"
                                value="v4"
                                _stack={{
                                  style: {
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                  },
                                }}
                                endIcon={selRightIcon}
                              />
                              <Select.Item
                                label="Singapore Land Tower"
                                value="v5"
                                endIcon={selRightIcon}
                                _stack={{
                                  style: {
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                  },
                                }}
                              />
                            </Select>
                          </Box>
                        )}
                        {position === 1 && (
                          <Box ml={2} style={{flexDirection: 'column'}}>
                            <Input
                              variant={'rounded'}
                              isFullWidth
                              style={[styles.input]}
                              keyboardType="number-pad"
                              value={price}
                              maxLength={4}
                              placeholder={i18n.t('SCAN.ENTER_AMOUNT')}
                              onChangeText={setPrice}
                            />
                          </Box>
                        )}
                        {position === 2 && (
                          <View style={{marginLeft: 15}}>
                            <Text>{i18n.t('SCAN.SHOW_TO_STAFF')}</Text>
                          </View>
                        )}
                      </View>
                      <View style={styles.inputRight}>
                        {renderInputRight({position})}
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </View>

      {isWebView ? (
        <View style={styles.webContainer}>
          <WebView
            source={{
              uri: 'https://cvi-test-html.tiiny.site/',
            }}
            style={styles.webview}
          />
        </View>
      ) : (
        <View style={styles.webContainer}>
          <View style={[styles.card, common.shadow, {padding: 20}]}>
            <View
              style={[
                styles.cardRow,
                {
                  width: '100%',
                  marginBottom: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Text style={{textAlign: 'center'}}>
                {i18n.t('SCAN.ENTER_PIN_TEXT')}
              </Text>
            </View>

            <View style={[styles.cardRow, {width: '100%', marginBottom: 20}]}>
              <Box style={{flexDirection: 'column', width: '100%'}}>
                <Input
                  variant={'rounded'}
                  isFullWidth
                  style={[styles.input]}
                  // keyboardType="number-pad"
                  value={pincode}
                  placeholder={i18n.t('SCAN.ENTER_PIN_PLACEHOLDER')}
                  onChangeText={setPinCode}
                />
              </Box>
            </View>

            <View
              style={[
                styles.buttonView,
                {
                  width: '100%',
                  marginBottom: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Button backgroundColor="gray.500" width="1/2">
                {i18n.t('SCAN.ENTER_PIN')}
              </Button>
            </View>
          </View>
        </View>
      )}

      <TouchableOpacity
        onPress={() => setWebView(!isWebView)}
        style={{
          // ...StyleSheet.absoluteFillObject,
          position: 'absolute',
          bottom: 25,
          left: 20,
          height: 50,
          width: 50,
          borderRadius: 25,
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: '#ccc8',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isWebView ? '#fff' : '#ccc',
          zIndex: 123,
        }}>
        <Text style={{fontSize: 10, textAlign: 'center'}}>
          {isWebView ? 'Pin\nMode' : 'Stamp\nMode'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    position: 'relative',
  },
  webContainer: {
    flex: 2,
    // backgroundColor: '#f004',
    borderColor: '#000',
    borderWidth: 2,
  },
  webview: {
    width: '100%',
  },
  card: {
    borderRadius: 5,
    backgroundColor: '#FFF',
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  cardCaption: {
    marginTop: 10,
    marginHorizontal: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardCaptionText: {
    fontSize: 10,
    color: '#CCC',
  },
  cardLeft: {
    height: 40,
    width: 50,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardRight: {
    flex: 1,
    paddingHorizontal: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  brandLogo: {
    height: 40,
    width: 40,
    backgroundColor: '#CCC',
    borderRadius: 20,
  },
  inputRow: {
    // width: 350,
    height: 60,
    // maxHeight: 60,
    // flex: 1,
    // alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#f004',
  },
  inputView: {
    flex: 1,
    // maxHeight: 60,
    // minWidth: 200,
    // backgroundColor: '#f004'
  },
  input: {
    // width: '100%',
    // minWidth: 200,
    borderRadius: 20,
    height: 30,
    borderColor: '#000',
    borderWidth: 1,
    // backgroundColor: '#f004'
  },
});

export default ScanScreen;
