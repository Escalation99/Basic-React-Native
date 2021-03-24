import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import imagetest from '../../assets/image/imagetest.png';

const StylingComponent = () => {
    return (
        <View>
            <Text style={styles.text}>Styling Component</Text>
            <View style={{
                width: 100,
                height: 100,
                backgroundColor: '#0abde3',
                borderWidth: 2,
                borderColor: '#5f27cd',
                marginTop: 20,
                marginLeft: 20,
            }}
            />
            <View style={{ padding: 12, backgroundColor: '#f2f2f2', width: 212, borderRadius: 8 }}>
                <Image source={imagetest} style={{ width: 188, height: 107, borderRadius: 8 }} />
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>New Macbook Pro 2020</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10, color: 'orange' }}>Rp.25.000.000</Text>
                <Text style={{ fontSize: 14, marginTop: 16 }}>Jakarta Barat</Text>
                <View style={{ backgroundColor: '#FA3F70', paddingVertical: 6, borderRadius: 25, marginTop: 20 }}>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center' }}>BUY</Text>
                </View>

            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#10ac84',
        marginLeft: 20,
        marginTop: 40,
    },
});

export default StylingComponent;