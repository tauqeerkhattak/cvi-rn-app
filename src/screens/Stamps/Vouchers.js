import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

const Vouchers = () => {
  return (
    <View style={styles.container}>
      <Text>Vouchers</Text>
    </View>
  );
};

export default Vouchers;
