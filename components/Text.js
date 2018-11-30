import React from 'react'
import { StyleSheet, Text } from 'react-native'

const _Text = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 40
  }
})

export { _Text }
