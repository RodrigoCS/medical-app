import { action, computed, decorate, observable, toJS } from 'mobx'
import { API_URL } from '@strings/'

class Consultation {
  signs = []
  symptoms = []

  addSign = async sign => {
    console.log('addSign', sign)
    let filter = {
      where: {
        name: sign
      }
    }
    const { _bodyInit: body } = await fetch(
      `${API_URL}/signs?filter=${JSON.stringify(filter)}`
    )
    let found = JSON.parse(body)
    console.log({ found })
    if (!!found[0]) {
      this.signs = [...this.signs, { ...found[0] }]
      console.log('addSign', toJS(this.signs))
    }
    return !!found[0]
  }

  removeSign(sign) {
    this.signs = [...this.signs.filter(s => s.id != sign.id)]
  }

  addSymptom = async symptom => {
    console.log('addSymptom', symptom)
    let filter = {
      where: {
        name: symptom
      }
    }
    const { _bodyInit: body } = await fetch(
      `${API_URL}/symptoms?filter=${JSON.stringify(filter)}`
    )
    let found = JSON.parse(body)
    console.log({ found })
    if (!!found[0]) {
      this.symptoms = [...this.symptoms, { ...found[0] }]
      console.log('addSymptomn', toJS(this.symptoms))
    }
    return !!found[0]
  }

  removeSymptom(symptom) {
    this.symptoms = [...this.symptoms.filter(s => s.id != symptom.id)]
  }

  get signList() {
    return toJS(this.signs)
  }
  get symptomList() {
    return toJS(this.symptoms)
  }

  clear = () => {
    this.signs = []
    this.symptoms = []
  }
}

export default decorate(Consultation, {
  signs: observable,
  symptoms: observable,
  signList: computed,
  clear: action
})
