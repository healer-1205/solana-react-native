import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from '../utilities/Constants';
import { useNavigation } from '@react-navigation/native';
import ConfirmPhrase from '../screens/ConfirmPhrase';


const CustomButton = props => {
    const navigation = useNavigation()
    const handleButtonPress = () => {
        if (props && props.title) {
            if (props.title === Constants.AGREE) {
                navigation.navigate('TabNavigation')
            } else if (props.title === Constants.DONTAGREE) {
                alert('Please Agree Statements')
            }else if( props.title === Constants.CREATE){
                navigation.navigate('CreateWallet')
            }else if( props.title === Constants.CONTINUE){
                if(props.phrases)
                navigation.navigate('ConfirmPhrase')
            }
        }
    }
    return <TouchableOpacity onPress={() => { handleButtonPress() }} >
        <View style={{ ...styles.buttonContainer, ...props.style }}>
            <Text style={{ ...styles.buttonStyle, ...props.textStyle }}>{props.title}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        width: 127,
        borderRadius: 30
    },
    buttonStyle: {
        textAlign: 'center',
        lineHeight: 40
    }
})

export default CustomButton