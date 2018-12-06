import React from 'react'
import { inject, observer } from 'mobx-react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Header, Input, List, NavBar, Text } from '@components'
import { Colors } from '@strings'
import * as Animatable from 'react-native-animatable'

class Treatment extends React.Component {
  addSymptom = () => {
    alert()
  }
  goBack = () => {
    this.props.navigation.go('Diagnosis')
  }
  goNext = () => {
    this.props.navigation.go('Home')
    this.props.consultation.clear()
  }
  render() {
    const {
      consultation: { finalDiagnostic }
    } = this.props
    return (
      <Animatable.View
        useNativeDriver
        animation={'fadeIn'}
        duration={1500}
        delay={100}
        style={styles.container}
      >
        <ScrollView
          style={{ marginBottom: 120 }}
          contentContainerStyle={{ alignItems: 'center' }}
        >
          <Header />
          <Text
            style={{
              fontSize: 24,
              color: Colors.DARK,
              fontWeight: '900',
              marginTop: 24
            }}
          >
            Tratamiento
          </Text>
          <Text>{finalDiagnostic && finalDiagnostic.treatment}</Text>
          <Text
            style={{
              fontSize: 24,
              color: Colors.DARK,
              fontWeight: '900',
              marginTop: 24
            }}
          >
            Pruebas y exámenes
          </Text>
          <Text>{finalDiagnostic && finalDiagnostic.studies}</Text>
        </ScrollView>
        <NavBar
          onLeft={this.goBack}
          onNext={this.goNext}
          nextIcon={'sign-out'}
          canContinue
        />
      </Animatable.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    flex: 1,
    alignItems: 'center'
  }
})

export default inject('navigation', 'consultation')(observer(Treatment))
