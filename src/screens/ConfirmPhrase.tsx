import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native'
import BodyText from '../components/BodyText';
import CustomImage from '../components/CustomImage';
import TitleText from '../components/TitleText';
import Constants from '../utilities/Constants';

const ConfirmPhrase = props => {
    return <SafeAreaView>
        <View style={styles.headerContainer}>
            <TitleText value={Constants.CREATEWALLET} textStyle={styles.titleText} />
            <TitleText value={Constants.CONFIRMPHRASE} textStyle={styles.headerText} />
        </View>
        <BodyText value={Constants.WALLETNAME}/>
        <View style={styles.walletNameContainer}>
            <Text>{Constants.WALLETNAME}</Text>
        </View>
        <BodyText value={Constants.CONFRIMPHRASESELECTSTATEMENT} />
        <View style={styles.selectWalletContainer}>
            <Text>{Constants.WALLETNAME}</Text>
        </View>
        
    </SafeAreaView>
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: '50%'
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    walletNameContainer: {
    padding: 25,
    borderRadius: 50,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    },
    selectWalletContainer: {
        padding: 25,
        borderRadius: 30,
        height: 200,
        width: '100%',
        borderColor: '#C4C4C4',
        borderWidth: 1,
        borderStyle: 'dashed',
    }
})

export default ConfirmPhrase;