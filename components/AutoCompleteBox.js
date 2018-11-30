import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { _Text } from './Text'
import { Colors } from '@strings'
import { LinearGradient } from 'expo'
import { FontAwesome } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'
import { observer, inject } from 'mobx-react'

class AutoCompleteBox extends React.Component {
  onPressItem = item => {
    console.log('onPressItem', item)
    this.props.autocomplete.setCurrentText(item.name)
  }
  renderItem = ({ item }) => {
    console.log('renderItem', { item })
    return (
      <TouchableOpacity
        onPress={() => {
          this.onPressItem(item)
        }}
        style={{
          paddingVertical: 16,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: Colors.LIGHTER
        }}
      >
        <_Text>{item.name}</_Text>
      </TouchableOpacity>
    )
  }

  keyExtractor = (item, index) => `key${index}`

  render() {
    const { items, autocomplete } = this.props
    return (
      <Animatable.View
        useNativeDriver
        animation={'slideInDown'}
        style={{
          backgroundColor: Colors.WHITE,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 0
          },
          shadowRadius: 10,
          shadowOpacity: 0.12,
          padding: 16,
          height: '100%'
        }}
      >
        <_Text>{autocomplete.currentText}</_Text>

        <FlatList
          renderItem={this.renderItem}
          data={autocomplete.suggestions}
          keyExtractor={this.keyExtractor}
          keyboardShouldPersistTaps={'always'}
        />
      </Animatable.View>
    )
  }
}

AutoCompleteBox = inject('autocomplete')(observer(AutoCompleteBox))

export { AutoCompleteBox }
