import { decorate, observable, action } from 'mobx'

class Autocomplete {
  currentText = ''

  onChangeText = text => {
    this.currentText = text
  }

  clearCurrentText = () => {
    this.currentText = ''
  }
}

export default decorate(Autocomplete, {
  currentText: observable,
  onChangeText: action,
  clearCurrentText: action
})
