import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CustomImage = props => {
    return <View style={styles.customImageContainer}><Image source={props.path}></Image ></View>
}

const styles = StyleSheet.create({
    customImageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CustomImage;