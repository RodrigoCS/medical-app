import React from 'react'
import { FlatList, View } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { _Text } from './Text'
import { Colors } from '@strings'
import { LinearGradient } from 'expo'
import { FontAwesome } from '@expo/vector-icons'

class List extends React.Component {
  removeItem = item => {}
  renderItem = ({ item }) => {
    return (
      <Ripple
        onLongPress={() => {
          this.removeItem(item)
        }}
        style={{ paddingVertical: 8 }}
      >
        <_Text
          style={{
            fontSize: 24,
            fontWeight: '600',
            color: Colors.DARK,
            textAlign: 'center'
          }}
        >
          {item.name}
        </_Text>
      </Ripple>
    )
  }

  keyExtractor = (item, index) => `key${index}`

  render() {
    const { items } = this.props
    return (
      <FlatList
        renderItem={this.renderItem}
        data={items}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}

export { List }
