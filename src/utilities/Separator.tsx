import React from 'react'
import {
    View,
    StyleSheet,
    FlexStyle
} from 'react-native'
import { normalize } from './Helper'



const Separator = () =>
    <View style={[styles.separator]} />

const styles = StyleSheet.create({
    separator: {
        height: normalize(50),
        width: '100%'
    }
})


export default Separator