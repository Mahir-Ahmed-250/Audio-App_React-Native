import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './text/text'
import { colors, spacing } from '../theme'

export default function categoryTitle({ title }) {
  return (
    <View style={styles.container}>
      <Text uppercase white preset="h4">{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing[3],
    borderTopWidth: 0.5,
    borderTopColor: "#979797"
  }
})