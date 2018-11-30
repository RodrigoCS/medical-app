import React from 'react'
import { inject, observer } from 'mobx-react'
import { StyleSheet, View } from 'react-native'
import { Button, Header, Input, List, NavBar, Text } from '@components'
import { Colors } from '@strings'
import * as Animatable from 'react-native-animatable'
import { AutoCompleteBox } from '@components'

class Signs extends React.Component {
  state = {
    inputText: '',
    isInputFocused: false
  }
  addSign = async () => {
    let added = await this.props.consultation.addSign(
      this.props.autocomplete.currentText
    )
    if (added) {
      this.props.autocomplete.clearCurrentText()
      this.input.blur()
    }
  }
  removeSign = sign => {
    console.log('removeSign', sign)
    this.props.consultation.removeSign(sign)
  }
  goBack = () => {
    this.props.navigation.go('Home')
  }
  goNext = () => {
    this.props.navigation.go('Symptoms')
    this.props.autocomplete.clearSuggestions()
  }
  onChangeInput = ({ nativeEvent: { text } }) => {
    this.props.autocomplete.onChangeText(text, 'signs')
    // this.setState(() => ({
    //   inputText: text
    // }))
  }
  onInputFocus = () => {
    this.setState(() => ({
      isInputFocused: true
    }))
  }
  onInputBlur = () => {
    this.setState(() => ({
      isInputFocused: false
    }))
  }
  renderAutoCompleteBox = () => {
    if (!this.state.isInputFocused) return null
    return (
      <View
        style={{
          position: 'absolute',
          top: 64,
          width: '100%',
          maxHeight: 250
        }}
      >
        <AutoCompleteBox />
      </View>
    )
  }
  render() {
    const { consultation, autocomplete } = this.props
    const { inputText } = this.state
    return (
      <Animatable.View
        useNativeDriver
        animation={'fadeIn'}
        duration={1500}
        delay={100}
        style={styles.container}
      >
        <Header />
        <Text style={{ fontSize: 10, color: Colors.LIGHT, marginBottom: 8 }}>
          Busca los signos que presentas
        </Text>
        <Input
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          inputRef={r => (this.input = r)}
          value={autocomplete.currentText}
          onChange={this.onChangeInput}
          placeholder={'Agrega un signo'}
          onSubmit={this.addSign}
        />
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
          <List onRemoveItem={this.removeSign} items={consultation.signList} />
        </View>
        {this.renderAutoCompleteBox()}
        <NavBar
          onLeft={this.goBack}
          onNext={this.goNext}
          canContinue={consultation.signList.length > 0}
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

export default inject('navigation', 'consultation', 'autocomplete')(
  observer(Signs)
)
