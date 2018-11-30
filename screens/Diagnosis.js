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
    return (
      <Animatable.View
        animation={'fadeIn'}
        duration={2000}
        style={styles.container}
      >
        <ScrollView style={{ marginBottom: 120 }}>
          <Header />
          <Text style={{ color: Colors.DARK, fontSize: 32, fontWeight: '900' }}>
            Diagnosis
            <Text
              style={{ color: Colors.PRIMARY, fontSize: 32, fontWeight: '900' }}
            >
              78%
            </Text>
          </Text>
          <Text>
            Es un tipo de dolor de cabeza que puede ocurrir con síntomas como
            náuseas, vómitos o sensibilidad a la luz y al sonido. En muchas
            personas, se siente un dolor pulsátil únicamente en un lado de la
            cabeza.
          </Text>
          <Text style={{ fontSize: 24, color: Colors.DARK, fontWeight: '900' }}>
            Causas
          </Text>
          <Text>
            Una migraña es causada por actividad cerebral anormal, lo cual se
            puede desencadenar por muchos factores. Sin embargo, la cadena
            exacta de hechos sigue sin aclararse. La mayoría de los expertos
            médicos cree que el ataque comienza en el cerebro e involucra vías
            nerviosas y químicos. Los cambios afectan el flujo sanguíneo en el
            cerebro y tejidos circundantes. Las migrañas tienden a aparecer
            primero entre los 10 y los 45 años. Algunas veces, comienzan antes o
            más tarde en la vida. Las migrañas pueden ser hereditarias y se
            presentan con más frecuencia en las mujeres que en los hombres.
            Algunas mujeres, pero no todas, sufren menos migrañas cuando están
            embarazadas
          </Text>
        </ScrollView>
        <NavBar onLeft={this.goBack} onNext={this.goNext} nextIcon={'medkit'} />
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

export default inject('navigation')(observer(Diagnosis))
