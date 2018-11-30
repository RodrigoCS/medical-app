import React from 'react'
import { inject, observer } from 'mobx-react'
import { StyleSheet, View } from 'react-native'
import { Button, Header, Text } from '@components'
import { Colors } from '@strings'
import * as Animatable from 'react-native-animatable'

class Home extends React.Component {
  start = () => {
    console.log('start')
    this.props.navigation.go('Signs')
  }
  render() {
    return (
      <Animatable.View
        animation={'fadeIn'}
        duration={2000}
        style={styles.container}
      >
        <Header />
        <Text
          style={{ textAlign: 'center', color: Colors.DARK, marginBottom: 32 }}
        >
          Ingresa tus signos y síntomas presiona el botón y genera un
          diagnostico, recuerda visitar a un medico profesional.
        </Text>
        <Button onPress={this.start}>Empezar</Button>
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default inject('navigation')(observer(Home))
