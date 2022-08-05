import {Actionsheet, Box, Input, useDisclose, Icon} from 'native-base';
import React, {useImperativeHandle} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ShareModal = React.forwardRef((props, ref) => {
  const {isOpen, onOpen, onClose} = useDisclose(false);

  useImperativeHandle(ref, () => ({
    show: () => {
      onOpen();
    },
  }));
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
      <Actionsheet.Content borderTopRadius="0">
        <Box
          w="100%"
          px={4}
          py={4}
          justifyContent="center"
          alignItems={'center'}>
          <Text
            color="gray.500"
            style={{marginVertical: 10, fontSize: 20}}
            _dark={{
              color: 'gray.300',
            }}>
            Share With Friends
          </Text>

          <View style={{width: '90%', marginVertical: 10}}>
            <Input
              variant={'rounded'}
              borderColor="#CCC"
              height={50}
              borderRadius={25}
              borderWidth={1}
              paddingLeft={25}
              backgroundColor="#eee"
              isDisabled
              value={'https://www.e5QSp17Uj1mdMbQA'}
              rightElement={
                <TouchableOpacity>
                  <Icon
                    as={<Ionicons name="copy-outline" />}
                    color="#666"
                    size={6}
                    mr={5}
                  />
                </TouchableOpacity>
              }
            />
          </View>

          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity style={styles.socialButton}>
              <Icon
                as={<Ionicons name="mail-outline" />}
                color="#666"
                size={6}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Icon
                as={<Ionicons name="logo-facebook" />}
                color="#666"
                size={6}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Icon
                as={<Ionicons name="logo-instagram" />}
                color="#666"
                size={6}
              />
            </TouchableOpacity>
          </View>
        </Box>
      </Actionsheet.Content>
    </Actionsheet>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  socialButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    // backgroundColor: '#f004',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});

//make this component available to the app
export default ShareModal;
