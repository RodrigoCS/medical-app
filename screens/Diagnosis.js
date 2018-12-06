import React from 'react'
import { inject, observer } from 'mobx-react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Header, Input, List, NavBar, Text } from '@components'
import { Colors } from '@strings'
import * as Animatable from 'react-native-animatable'

class Diagnosis extends React.Component {
  addSymptom = () => {
    alert()
  }
  goBack = () => {
    this.props.navigation.go('Symptoms')
  }
  goNext = () => {
    this.props.navigation.go('Treatment')
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
          {
            <Text
              style={{ color: Colors.DARK, fontSize: 32, fontWeight: '900' }}
            >
              {finalDiagnostic && finalDiagnostic.disease}
              <Text
                style={{
                  color: Colors.PRIMARY,
                  fontSize: 32,
                  fontWeight: '900'
                }}
              >
                {' '}
                {finalDiagnostic && finalDiagnostic.points * 100}%
              </Text>
            </Text>
          }
          <Text>{finalDiagnostic && finalDiagnostic.description}</Text>
          <Text
            style={{
              fontSize: 24,
              color: Colors.DARK,
              fontWeight: '900',
              marginTop: 24
            }}
          >
            Causas
          </Text>
          <Text>{finalDiagnostic && finalDiagnostic.causes}</Text>
        </ScrollView>
        <NavBar
          onLeft={this.goBack}
          onNext={this.goNext}
          nextIcon={'medkit'}
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

export default inject('navigation', 'consultation')(observer(Diagnosis))
