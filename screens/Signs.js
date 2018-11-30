import React from 'react'
import { inject, observer } from 'mobx-react'
import { StyleSheet, View } from 'react-native'
import { Button, Header, Input, List, NavBar, Text } from '@components'
import { Colors } from '@strings'
import * as Animatable from 'react-native-animatable'

class Signs extends React.Component {
  addSign = () => {
    alert()
  }
  goBack = () => {
    this.props.navigation.go('Home')
  }
  goNext = () => {
    this.props.navigation.go('Symptoms')
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
        <Input placeholder={'Agrega un signo'} onSubmit={this.addSign} />
        <Text
          style={{ fontSize: 10, color: Colors.LIGHT, paddingVertical: 16 }}
        >
          Deja presionado para eliminar de la lista{' '}
        </Text>
        <View
          style={{
            flex: 1,
            width: '100%'
          }}
        >
          <List
            items={[
              { name: 'jeje' },
              { name: 'xjdhgsd' },
              { name: 'xjdhgsd' },
              { name: 'xjdhgsd' },
              { name: 'xjdhgsd' },
              { name: 'xjdhgsd' },
              { name: 'xjdhgsd' }
            ]}
          />
        </View>

        <NavBar onLeft={this.goBack} onNext={this.goNext} />
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

export default inject('navigation')(observer(Signs))
