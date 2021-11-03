import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native';
import BodyText from '../components/BodyText';
import CustomButton from '../components/CustomButton';
import CustomImage from '../components/CustomImage';
import Logo from '../components/Logo';
import TitleText from '../components/TitleText';
import Constants from '../utilities/Constants'

const TermsAndPrivacy = props => {
    return <SafeAreaView style={styles.mainContainer}>
        <View style={styles.imageContainer}>
            <Logo />
            <CustomImage path={require('../assets/images/mobile.png')} />
            <TitleText value={Constants.TERMSANDCONDITIONS} />
            <BodyText value={Constants.TERMSANDPRIVACYSTATEMENT} />
            <View style={styles.buttonContainer}>
                <CustomButton title={Constants.DONTAGREE} style={styles.secondaryButton} />
                <CustomButton title={Constants.AGREE} style={styles.primaryButton} />
            </View>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    primaryButton: {
        color: '#FFFFFF',
        backgroundColor: '#00A585'
    },
    secondaryButton: {
        color: '#898484',
        backgroundColor: '#CFD8D6'
    }
})

export default TermsAndPrivacy