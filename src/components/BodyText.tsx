import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BodyText = props => {
    return <View style={{ ...styles.bodyTextContainer, ...props.style }}>
        <Text style={{ ...styles.bodyText, ...props.textStyle }}> {props.value} </Text>
    </View>
}

const styles = StyleSheet.create({
    bodyTextContainer: {
        padding: 15,
        width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    bodyText: {
        textAlign: 'justify',
        fontFamily: 'Roboto',
        fontSize: 14
    }
})

export default BodyText