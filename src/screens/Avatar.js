import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Avatar = () => {
    return (
        <View style={styles.container}>
            <Text>Avatar</Text>
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

export default Avatar;
