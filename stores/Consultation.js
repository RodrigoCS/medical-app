import { action, computed, decorate, observable, toJS } from 'mobx'
import { API_URL } from '@strings/'

class Consultation {
  signs = []
  symptoms = []
  finalDiagnostic = null

  getDiagnosis = async () => {
    let signs = toJS(this.signs).map(s => s.id)
    let symptoms = toJS(this.symptoms).map(s => s.id)
    let url = `${API_URL}/diagnostics/expert/diagnostic`
    let { _bodyInit: results } = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        signs,
        symptoms
      })
    })
    results = JSON.parse(results)
    console.log('getDiagnosiess', { url, results })
    this.finalDiagnostic = results[0]
    return results
  }

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
    this.finalDiagnostic = null
  }
}

export default decorate(Consultation, {
  signs: observable,
  symptoms: observable,
  signList: computed,
  clear: action,
  getDiagnosis: action,
  finalDiagnostic: observable
})
