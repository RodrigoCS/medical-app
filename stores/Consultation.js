import { action, computed, decorate, observable, toJS } from 'mobx'

class Consultation {
  signs = []
  symptoms = []

  addSign(sign) {
    this.signs = [...this.signs, { id: this.signs.length, name: sign }]
    console.log('addSign', toJS(this.signs))
  }

  removeSign(sign) {
    this.signs = [...this.signs.filter(s => s.id != sign.id)]
  }

  addSymptom(symptom) {
    this.symptoms = [
      ...this.symptoms,
      { id: this.symptoms.length, name: symptom }
    ]
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
