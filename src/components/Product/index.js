import React, { useState, Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import imagetest from '../../assets/image/imagetest.png'

const Product = (props) => {
    return (
        <View>
            <View style={styles.wrapper}>
                <Image source={imagetest} style={styles.imageProduct} />
                <Text style={styles.ProductName}>New Macbook Pro 2020</Text>
                <Text style={styles.productPrice}>Rp.25.000.000</Text>
                <Text style={styles.productLocation}>Jakarta Barat</Text>
                <TouchableOpacity onPress={props.onButtonPress}>
                    <View style={styles.buttonWrapper}>
                        <Text style={styles.buttonText}>BUY</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Product;

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#10ac84',
        marginLeft: 20,
        marginTop: 40,
    },
    wrapper: {
        padding: 12,
        backgroundColor: '#f2f2f2',
        width: 212,
        borderRadius: 8
    },
    imageProduct: {
        width: 188,
        height: 107,
        borderRadius: 8
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10
    },
    productPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'orange'
    },
    productLocation: {
        fontSize: 14,
        marginTop: 16
    },
    buttonWrapper: {
        backgroundColor: '#FA3F70',
        paddingVertical: 6, borderRadius: 25,
        marginTop: 20
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center'
    }
})
