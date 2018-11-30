import React from 'react'
import { View } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { _Text } from './Text'
import { Colors } from '@strings'
import { LinearGradient } from 'expo'
import { FontAwesome } from '@expo/vector-icons'

class Button extends React.Component {
  renderIcon = () => {
    const { iconSize, iconStyle } = this.props
    return (
      <View style={[{ position: 'absolute' }, iconStyle]}>
        <FontAwesome
          name={this.props.icon}
          color={Colors.WHITE}
          size={iconSize || 30}
        />
      </View>
    )
  }

  renderText = () => {
    const { children } = this.props

    return (
      <_Text style={{ color: Colors.WHITE, fontSize: 24, fontWeight: '900' }}>
        {children}
      </_Text>
    )
  }

  render() {
    const { icon, onPress, style, disabled } = this.props
    return (
      <Ripple
        disabled={disabled}
        rippleContainerBorderRadius={100}
        onPress={onPress}
      >
        <LinearGradient
          colors={[Colors.PRIMARY, Colors.PRIMARY_LIGHT, Colors.SECONDARY]}
          style={[
            {
              paddingHorizontal: 32,
              paddingVertical: 16,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              opacity: disabled ? 0.2 : 1
            },
            style
          ]}
        >
          {!!icon ? this.renderIcon() : this.renderText()}
        </LinearGradient>
      </Ripple>
    )
  }
}

export { Button }
