import React from 'react'
import { FlatList, View } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { _Text } from './Text'
import { Colors } from '@strings'
import { LinearGradient } from 'expo'
import { FontAwesome } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'
import { observer, inject } from 'mobx-react'

class AutoCompleteBox extends React.Component {
  renderItem = ({ item }) => {
    return (
      <View>
        <_Text>xd</_Text>
      </View>
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
          data={items}
          keyExtractor={this.keyExtractor}
        />
      </Animatable.View>
    )
  }
}

AutoCompleteBox = inject('autocomplete')(observer(AutoCompleteBox))

export { AutoCompleteBox }
