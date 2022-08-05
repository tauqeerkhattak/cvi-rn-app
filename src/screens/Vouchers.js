import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Vouchers = () => {
    return (
        <View style={styles.container}>
            <Text>Vouchers</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
});

export default Vouchers;
