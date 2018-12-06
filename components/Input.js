import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { _Text } from './Text'
import { Colors } from '@strings'
import { Button } from './Button'

class Input extends React.Component {
  static defaultProps = {
    placeholder: 'Placeholder'
  }
  render() {
    const {
      children,
      onSubmit,
      style,
      placeholder,
      onChange,
      value,
      inputRef,
      onBlur,
      onFocus
    } = this.props
    return (
      <View style={styles.container}>
        <View
          style={{
            width: '100%'
          }}
        >
          <TextInput
            ref={r => inputRef(r)}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            style={styles.textInput}
            placeholder={placeholder}
            onSubmitEditing={onSubmit}
          />
          <View style={styles.absoluteContainer}>
            <Button icon={'plus'} onPress={onSubmit} style={styles.button} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    alignItems: 'center',
    width: '100%'
  },
  absoluteContainer: {
    position: 'absolute',
    right: 0,
    top: -8
  },
  textInput: {
    color: Colors.DARK,
    borderRadius: 100,
    backgroundColor: Colors.WHITE,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 10,
    shadowOpacity: 0.12,
    paddingHorizontal: 32,
    paddingVertical: 16,
    // position: 'absolute',
    left: 0,
    right: 0,
    zIndex: -1
  },
  button: {
    width: 64,
    height: 64
  }
})

export { Input }
