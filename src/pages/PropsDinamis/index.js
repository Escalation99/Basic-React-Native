import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

const Story = (props) => {
    return (
        <View style={{ alignItems: 'center', marginRight: 20 }}>
            <Image source={{ uri: props.gambar }} style={{ height: 70, width: 70, borderRadius: 35 }} />
            <Text style={{ maxWidth: 50, textAlign: 'center' }}>{props.judul}</Text>
        </View>
    )
}
const PropsDinamis = () => {
    return (
        <View>
            <Text>Materi Props Dinamis</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row' }}>
                    <Story judul="Youtube Channel 1" gambar="https://placeimg.com/70/70/animals" />
                    <Story judul="Youtube Channel 2" gambar="https://placeimg.com/70/70/any" />
                    <Story judul="Youtube Channel 3" gambar="https://placeimg.com/70/70/tech" />
                    <Story judul="Youtube Channel 4" gambar="https://placeimg.com/70/70/animals" />
                    <Story judul="Youtube Channel 5" gambar="https://placeimg.com/70/70/people" />
                    <Story judul="Youtube Channel 5" gambar="https://placeimg.com/70/70/people" />
                    <Story judul="Youtube Channel 5" gambar="https://placeimg.com/70/70/people" />
                    <Story judul="Youtube Channel 5" gambar="https://placeimg.com/70/70/people" />
                </View>
            </ScrollView>


        </View>
    )
}

export default PropsDinamis;

const styles = StyleSheet.create({})
