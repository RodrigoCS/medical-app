import React from 'react'
import { Image, Text, View } from 'react-native'

const Header = () => {
  return (
    <View
      style={{
        marginBottom: 40
      }}
    >
      <Image source={require('@assets/header.png')} cache={'force-cache'} />
    </View>
  )
}

export { Header }
