import Navigation from './Navigation'
import Consultation from './Consultation'
import Autocomplete from './Autocomplete'

const stores = {
  navigation: new Navigation(),
  consultation: new Consultation(),
  autocomplete: new Autocomplete()
}

export default stores
