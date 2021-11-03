import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = props => {
    return <View style={styles.logoContainer}>
        <Image source={require('../assets/images/logo.png')}></Image>
    </View>
}

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Logo