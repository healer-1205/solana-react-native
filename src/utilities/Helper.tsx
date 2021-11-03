import {
    PixelRatio,
    Dimensions,
    Platform, PlatformIOSStatic
} from 'react-native'

export const { width, height } = Dimensions.get('window')



export function normalize(size: number) {
    const newSize = size * width / (isIPadDevice() ? 460 : 320)
    return getRoundPixelValue(newSize)
}


const getRoundPixelValue = (size: number) => {
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(size))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(size)) - 2
    }
}

export const isIPadDevice = (): boolean => {
    if (Platform.OS === 'ios') {
        const platformIOS = Platform as PlatformIOSStatic
        return platformIOS.isPad
    }
    return false
}

