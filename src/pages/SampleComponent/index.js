import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';

const SampleComponent = () => {
    return (
        <View>
            <View style={{ width: 80, height: 80, backgroundColor: '#0abde3' }} />
            <Text>Teks1</Text>
            <Text>Teks2</Text>
            <Text>Teks3</Text>
            <TestComponent />
            <FotoSaya />
            <TextInput style={{ borderWidth: 1 }} />
            <BoxGreen />
            <Profile />
        </View>
    );
};

const TestComponent = () => {
    return <Text>Text Home</Text>

};

const FotoSaya = () => {
    return (
        <Image
            source={{ uri: 'https://placeimg.com/100/100/tech' }}
            style={{ width: 100, height: 100 }}
        />
    );
};

class BoxGreen extends Component {
    render() {
        return <Text>Class Component</Text>;
    }
}

class Profile extends Component {
    render() {
        return (
            <View>
                <Image
                    source={{ uri: 'https://placeimg.com/100/100/animal' }}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
                <Text style={{ color: 'blue', fontSize: 24 }}>Ini Hewan Apa ya?</Text>
            </View>
        );
    }
}

export default SampleComponent;