import React, { useState, Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native'
import notifIcon from '../../assets/icon/notifIcon.png';

const Cart = (props) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.notifWrapper}>
                <Image source={notifIcon} style={styles.notifIcon} />
                <Text style={styles.notif}>{props.quantity}</Text>
            </View>
            <Text style={styles.text}>Cart Anda</Text>
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        alignItems: 'center',
    },
    notifIcon: {
        width: 50,
        height: 50,
    },
    notifWrapper: {
        borderWidth: 1,
        borderColor: '#4398d1',
        width: 90,
        height: 90,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    text: {
        fontSize: 12,
        color: '#777777',
        fontWeight: '700',
        marginTop: 8,
    },
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: 'red',
        padding: 4,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0,
    }
})
