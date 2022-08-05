import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFollows = () => {
    return (
        <View style={styles.container}>
            <Text>MyFollows</Text>
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

export default MyFollows;
