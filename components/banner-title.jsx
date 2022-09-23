import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './text/text'
import { colors } from '../theme'


export default function BannerTitle() {
    return (
        <View style={style.container}>
            <Image source={require('../assets/images/audiophile.png')} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: colors.black,
        justifyContent: "center",
        alignItems: "center",
    }
})