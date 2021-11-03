import React, { useState, useEffect } from 'react';
import "react-native-get-random-values"
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Image, FlatList, Button } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Option from '../components/Option';
import Constants from '../utilities/Constants';
import CustomImage from '../components/CustomImage';
import CustomButton from '../components/CustomButton';
import "@ethersproject/shims"
import { ethers, utils } from "ethers";
import { randomBytes } from 'react-native-randombytes'
import { Buffer } from "buffer";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Clipboard from '@react-native-clipboard/clipboard';
import nacl from "tweetnacl";
import * as ed25519 from "ed25519-hd-key";
import * as solanaWeb3 from '@solana/web3.js';



const CreateWallet = (props) => {
    const [phraseSetOne, SetPhraseSetOne] = useState([])
    const [phraseSetTwo, SetPhraseSetTwo] = useState([])
    const [rememberMe, SetRememberMe] = useState(false)
    const handleRememberMeClick = () => {
        SetRememberMe(!rememberMe)
    }
    var phrases;
    var copyString;

    useEffect(() => {
        generate()
    }, [])


    const generateMnemonic = async () => {
        const rand = randomBytes(16)
        randomBytes(4, (err, bytes) => {
            console.log(bytes.toString('hex'))
        })
        const mnemonic = ethers.utils.entropyToMnemonic(rand);
        return mnemonic;
    };

    const mnemonicToSeed = async (mnemonic: string) => {
        const bip39 = await import("bip39");
        const seed = await bip39.mnemonicToSeed(mnemonic);
        var walletIndex = 0;
        const path44Change = `m/44'/501'/${walletIndex}'/0'`;
        const derivationPath = 'bip44Change'
        
        try {
            accountFromSeed(
                Buffer.from(seed).toString("hex"),
                walletIndex,
                derivationPath,
                0
              )
        } catch (e) { console.error("Error: ", e); }
        return;
    };

    async function generate() {
        const mnemonic = await generateMnemonic();
        var phraseOne = [], phraseTwo = []
        phrases = mnemonic.split(" ");
        phrases?.length > 0 && phrases.map((item, index) => {
            if (index < 6)
                phraseOne.push(item);
            else
                phraseTwo.push(item);
        })
        SetPhraseSetOne(phraseOne);
        SetPhraseSetTwo(phraseTwo);
        const seed = await mnemonicToSeed(mnemonic);
    }

    const accountFromSeed = (
        seed: string,
        walletIndex: number,
        derivationPath: string,
        accountIndex: 0
      ) => {
        const derivedSeed = deriveSeed(
          seed,
          walletIndex,
          derivationPath,
          accountIndex
        );
       const keyPair = nacl.sign.keyPair.fromSeed(derivedSeed);
        const acc = new solanaWeb3.Keypair(keyPair);
        return;
      };

      const deriveSeed = (
        seed: string,
        walletIndex: number,
        derivationPath: string,
        accountIndex: number
      ): Buffer | undefined => {
        const path44Change = `m/44'/501'/${walletIndex}'/0'`;
        const ret = ed25519.derivePath(path44Change, seed);
        return ret.key;   
      };

    const copyToClipboard = () => {
        Clipboard.setString(copyString)
    }

    return <SafeAreaView style={styles.mainContainer}>
        <View style={styles.headerContainer}>
            <TitleText value={Constants.CREATEWALLET} textStyle={styles.titleText} />
            <TitleText value={Constants.RECOVERYPHRASE} textStyle={styles.headerText} />
            <BodyText value={Constants.CREATEWALLETSTATEMENT} textStyle={styles.bodyText} />
            <ImageBackground style={styles.coverImage}>
                <View style={styles.textView}>
                    <CustomImage path={require('../assets/images/Warning.png')} ></CustomImage>
                    <Text style={styles.imageText}>Never share recovery phrase with anyone, store it securely!</Text>
                </View>
            </ImageBackground>
        </View>
        <View style={styles.flatListContainer}>
            <View >
                {phraseSetOne?.length > 0 &&
                    phraseSetOne?.map((item, index) => {
                        return <Text style={[styles.item]} key={index.toString()}>{index + 1}{item} </Text>
                    })}
            </View>
            <View >
                {phraseSetTwo?.length > 0 &&
                    phraseSetTwo?.map((item, index) => {
                        return <Text style={[styles.item]} key={index.toString()}>{index + 7}{item} </Text>
                    })}
            </View>
        </View>
        <TouchableOpacity style={styles.copyContainer} onPress={() => copyToClipboard()}>
            <CustomImage path={require('../assets/images/Copy.png')} />
            <TitleText value={Constants.COPY} textStyle={styles.copyText} />
        </TouchableOpacity>
        <View style={{ marginTop: '15%' }} >
            <Option
                style={[styles.copyContainer, { paddingHorizontal: '10%' }]}
                titleFontSize='regular'
                color='red'
                value={Constants.CHECKBOXSTATEMENT}
                isSelected={rememberMe}
                onPress={handleRememberMeClick} />
            <CustomButton title={Constants.CONTINUE} style={styles.continueButton} textStyle={styles.continueText} props={phrases}></CustomButton>
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
    titleText: {
        fontSize: 24,
        color: '#595959',
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    headerText: {
        fontSize: 28,
        color: '#595959',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        paddingTop: '10%'
    },
    bodyText: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Roboto',
        color: '#7D7D7D',
        lineHeight: 18
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '2%'
    },
    coverImage: {
        padding: '3%',
        borderRadius: 50,
        backgroundColor: '#F6E4CC',
        flexDirection: 'row'
    },
    imageText: {
        paddingHorizontal: '2%',
        fontSize: 12,
        color: '#7D7D7D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatListContainer: {
        flexDirection: 'row',
        paddingHorizontal: '15%',
        paddingVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    item: {
        padding: 15,
        color: '#595959',
        flexDirection: 'row'
    },
    title: {
        color: '#595959',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        paddingHorizontal: '3%'
    },
    copyContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    copyText: {
        fontFamily: 'Roboto',
        color: '#00A585',
        fontWeight: 'bold',
        fontSize: 20,
        paddingVertical: 10
    },
    checkboxText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkboxContainer: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    continueButton: {
        backgroundColor: '#C1CDDB',
        justifyContent: 'space-around',
        height: '40%',
        width: '100%'
    },
    continueText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
})


export default CreateWallet;