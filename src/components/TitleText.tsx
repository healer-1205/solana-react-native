import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TitleText = props => {
    return <View style={{ ...styles.titleContainer, ...props.style }}>
        <Text style={{ ...styles.titleText, ...props.textStyle }}> {props.value}</Text>
    </View>
}

const styles = StyleSheet.create({
    titleContainer: {
    },
    titleText: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: '#000000',
        fontWeight: '600',
    }
})

export default TitleText