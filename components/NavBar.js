import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { _Text } from './Text'
import { Button } from './Button'
import { Colors } from '@strings'
import { LinearGradient } from 'expo'
import { FontAwesome } from '@expo/vector-icons'

class NavBar extends React.Component {
  render() {
    const { onLeft, onRight, onNext, nextIcon, canContinue } = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity
          disabled={!onLeft}
          onPress={onLeft}
          style={styles.left}
        >
          <FontAwesome
            color={!!onLeft ? Colors.PRIMARY : Colors.TRANSPARENT}
            size={30}
            name={'angle-left'}
          />
        </TouchableOpacity>
        <View style={styles.center}>
          <View style={styles.absoluteButton}>
            <Button
              disabled={!canContinue}
              onPress={onNext}
              iconSize={64}
              iconStyle={{ top: 32 }}
              icon={nextIcon || 'angle-right'}
              style={styles.button}
            >
              Center
            </Button>
          </View>
        </View>
        <TouchableOpacity disabled={!onRight} style={styles.right}>
          <FontAwesome
            color={!!onRight ? Colors.PRIMARY : Colors.TRANSPARENT}
            size={30}
            name={'angle-right'}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    height: 120,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  left: {
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  center: {},
  right: {
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    flex: 1
  },
  absoluteButton: {
    // position: 'absolute',
    bottom: -40,
    justifyContent: 'center'
  },
  button: {
    width: 200,
    height: 200
  }
})

export { NavBar }
