import React from 'react'
import { inject, observer } from 'mobx-react'
import { StyleSheet, View } from 'react-native'
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
        animation={'fadeIn'}
        duration={2000}
        style={styles.container}
      >
        <Header />

        <Text style={{ color: Colors.DARK, paddingVertical: 16 }}>Error</Text>

        <NavBar
          onLeft={this.goBack}
          onNext={this.goNext}
          nextIcon={'ambulance'}
        />
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
  }
})

export default inject('navigation')(observer(Error))
