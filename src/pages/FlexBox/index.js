import React, { Component, useEffect, useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

// class FlexBox extends Component {
//     constructor(props) {
//         super(props);
//         console.log("==>constructor");
//         this.state = {
//             subscriber: 200,
//         }
//     }
//     componentDidMount() {
//         console.log("==>component did mount");
//         this.setState({
//             subscriber: 400,
//         })
//     }
//     componentDidUpdate() {
//         console.log("==>component did update")
//     }
//     componentWillUnmount() {
//         console.log("==>component will unmount")
//     }
//     render() {
//         console.log("==>render")
//         return (
//             <View>
//                 <View style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     backgroundColor: '#c8d6e5',
//                     justifyContent: 'space-between',
//                 }}>
//                     <View style={{ backgroundColor: '#ee5253', width: 50, height: 50 }}></View>
//                     <View style={{ backgroundColor: '#feca57', width: 50, height: 50 }}></View>
//                     <View style={{ backgroundColor: '#1dd1a1', width: 50, height: 50 }}></View>
//                     <View style={{ backgroundColor: '#5f27cd', width: 50, height: 50 }}></View>
//                 </View>
//                 <View style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-around',
//                 }}>
//                     <Text>Menu1</Text>
//                     <Text>Menu2</Text>
//                     <Text>Menu3</Text>
//                     <Text>Menu4</Text>
//                     <Text>Menu5</Text>
//                 </View>

//                 <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//                     <Image source={{ uri: 'https://placeimg.com/100/100/people' }} style={{ width: 100, height: 100, borderRadius: 50, marginRight: 14 }} />
//                     <View>
//                         <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Ray Tommy</Text>
//                         <Text>{this.state.subscriber} Subscribers</Text>
//                     </View>
//                 </View>

//             </View>

//         );
//     };
// };

const FlexBox = () => {
    const [subscriber, setSubscriber] = useState(200);
    useEffect(() => {
        console.log("did mount");
        setTimeout(() => {
            setSubscriber(600);
        }, 2000);
        return () => {
            console.log("did update");
        };
    }, [subscriber]);

    // useEffect(() => {
    //     console.log("did update")
    //     setTimeout(() => {
    //         setSubscriber(400);
    //     }, 6000);
    // }, [subscriber]);

    return (
        <View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#c8d6e5',
                justifyContent: 'space-between',
            }}>
                <View style={{ backgroundColor: '#ee5253', width: 50, height: 50 }}></View>
                <View style={{ backgroundColor: '#feca57', width: 50, height: 50 }}></View>
                <View style={{ backgroundColor: '#1dd1a1', width: 50, height: 50 }}></View>
                <View style={{ backgroundColor: '#5f27cd', width: 50, height: 50 }}></View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}>
                <Text>Menu1</Text>
                <Text>Menu2</Text>
                <Text>Menu3</Text>
                <Text>Menu4</Text>
                <Text>Menu5</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <Image source={{ uri: 'https://placeimg.com/100/100/people' }} style={{ width: 100, height: 100, borderRadius: 50, marginRight: 14 }} />
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Ray Tommy</Text>
                    <Text>{subscriber} Subscribers</Text>
                </View>
            </View>

        </View>
    );
}

export default FlexBox;