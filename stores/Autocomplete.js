import { decorate, observable, action } from 'mobx'
import { API_URL } from '@strings/'

class Autocomplete {
  currentText = ''
  suggestions = []

  onChangeText = async (text, search) => {
    this.currentText = text
    let filter = {
      where: {
        name: { like: text }
      },
      limit: 10
    }
    const { _bodyInit: body } = await fetch(
      `${API_URL}/${search}?filter=${JSON.stringify(filter)}`
    )
    console.log('results', body)
    this.suggestions = JSON.parse(body)
  }

  setCurrentText = text => {
    this.currentText = text
  }

  clearCurrentText = () => {
    this.currentText = ''
  }
  clearSuggestions = () => {
    this.suggestions = []
  }
}

export default decorate(Autocomplete, {
  currentText: observable,
  onChangeText: action,
  clearCurrentText: action,
  suggestions: observable,
  setCurrentText: action,
  clearSuggestions: action
})
