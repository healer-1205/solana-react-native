import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import BodyText from '../components/BodyText';
import CustomButton from '../components/CustomButton';
import CustomImage from '../components/CustomImage';
import Logo from '../components/Logo';
import TitleText from '../components/TitleText';
import Constants from '../utilities/Constants';
import Separator from '../utilities/Separator';

const HomeTab = props => {
    return <SafeAreaView style={styles.mainContainer}>
        <Logo />
        <Separator />
        <CustomImage path={require('../assets/images/wallet.png')} />
        <TitleText value={Constants.NOWALLET} style={styles.titleText} />
        <BodyText value={Constants.NOWALLETSTATEMENT} style={styles.bodyText} />
        <View style={styles.buttonContainer}>
            <CustomButton title={Constants.CREATE} style={styles.secondaryButton} />
            <CustomButton title={Constants.IMPORT} style={styles.primaryButton} />
        </View>
        <Text style={styles.messageText}>{Constants.RESTORESTATEMENT} </Text>

    </SafeAreaView>
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        alignItem: 'center'
    },
    titleText: {
        alignItems: 'center',
        marginVertical: 20
    },
    bodyText: {
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 55,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    primaryButton: {
        color: '#FFFFFF',
        backgroundColor: '#00A585'
    },
    secondaryButton: {
        color: '#898484',
        backgroundColor: '#FAA41C'
    },
    messageText: {
        color: '#00A585',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        fontWeight: '600',
        fontFamily: 'Roboto'

    }
})

export default HomeTab