import React from 'react'
import { inject, observer } from 'mobx-react'
import { Image, StyleSheet, View } from 'react-native'
import { Button, Header, Input, List, NavBar, Text } from '@components'
import { Colors } from '@strings'
import * as Animatable from 'react-native-animatable'

class Error extends React.Component {
  addSymptom = () => {
    alert()
  }
  goBack = () => {
    this.props.navigation.go('Diagnosis')
  }
  goNext = () => {
    this.props.navigation.go('Home')
  }
  render() {
    return (
      <Animatable.View
        useNativeDriver
        animation={'fadeIn'}
        duration={1500}
        delay={100}
        style={styles.container}
      >
        <Header />
        <View style={styles.error}>
          <Image source={require('@assets/error.png')} cache={'force-cache'} />
        </View>
        <Text
          style={{
            color: Colors.DARK,
            paddingVertical: 16,
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          No pudimos encontrar un diagnostico para tus síntomas, por favor acude
          a un medico lo mas pronto posible.
        </Text>
        <NavBar onLeft={this.goBack} onNext={this.goNext} nextIcon={'times'} />
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    flex: 1,
    alignItems: 'center',
    paddingBottom: 110
  },
  error: {}
})

export default inject('navigation')(observer(Error))
