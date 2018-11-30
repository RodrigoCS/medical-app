import React from 'react'
import { inject, observer } from 'mobx-react'
import { StyleSheet, View } from 'react-native'
import { Button, Header, Input, List, NavBar, Text } from '@components'
import { Colors } from '@strings'
import * as Animatable from 'react-native-animatable'

class Symptoms extends React.Component {
  addSymptom = () => {
    alert()
  }
  goBack = () => {
    this.props.navigation.go('Signs')
  }
  goNext = () => {
    this.props.navigation.go('Diagnosis')
  }
  render() {
    return (
      <Animatable.View
        animation={'fadeIn'}
        duration={2000}
        style={styles.container}
      >
        <Header />
        <Text style={{ fontSize: 10, color: Colors.LIGHT, marginBottom: 8 }}>
          Busca los signos que presentas
        </Text>
        <Input placeholder={'Agrega un sintoma'} onSubmit={this.addSymptom} />
        <Text
          style={{ fontSize: 10, color: Colors.LIGHT, paddingVertical: 16 }}
        >
          Deja presionado para eliminar de la lista{' '}
        </Text>
        <View style={{ flex: 1, width: '100%' }}>
          <List
            items={[
              { name: 'sintoma 1' },
              { name: 'sintoma 2' },
              { name: 'sintoma 3' },
              { name: 'sintoma 4' },
              { name: 'sintoma 5' },
              { name: 'sintoma 6' },
              { name: 'sintoma 7' }
            ]}
          />
        </View>

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

export default inject('navigation')(observer(Symptoms))
