import React from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import { normalize } from '../utilities/Helper'
import BodyText from './BodyText'
import CustomImage from './CustomImage'
import CheckBoxSelected from '../assets/images/checkbox-selected.svg'
import CheckBoxUnSelected from '../assets/images/checkbox-deselected.svg'

const Option = (props) => {
    return (
        <View style={[...props.style, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
            <TouchableOpacity activeOpacity={1} onPress={props.onPress} >
                <CheckBox isSelected={props.isSelected} />
            </TouchableOpacity>
            <BodyText value={props.value} textStyle={styles.optionText} numberOfLines={3} />
        </View>
    )
}

const CheckBox = ({ isSelected }: { isSelected: boolean }) => {
    return <View >
        {isSelected ? <CheckBoxUnSelected /> : <CheckBoxSelected />}
    </View>
}


const styles = StyleSheet.create({
    optionContainer: {
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    labelContainer: {
        width: '100%',
    },
    optionText: {
        textAlign: 'justify',
        alignItems: 'center'
    },
    checkBox: {
    },
})

export default Option;