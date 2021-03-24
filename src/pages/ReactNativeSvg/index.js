import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import CardPayroll from '../../assets/image/cardPayroll.svg';

const ReactNativeSvg = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Menggunakan SVG dalam React</Text>
            <CardPayroll width={315} height={205} />
        </View>
    );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
    container: { padding: 20 },
    textTitle: { textAlign: 'center' },
})