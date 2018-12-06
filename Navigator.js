import React from 'react'
import { inject, observer } from 'mobx-react'
import Home from '@screens/Home'
import Signs from '@screens/Signs'
import Symptoms from '@screens/Symptoms'
import Diagnosis from '@screens/Diagnosis'
import Treatment from '@screens/Treatment'
import Error from '@screens/Error'

class Navigator extends React.Component {
  render() {
    const { navigation } = this.props

    switch (navigation.currentScene) {
      case 'Home':
        return <Home />
        break
      case 'Signs':
        return <Signs />

        break
      case 'Symptoms':
        return <Symptoms />

        break
      case 'Diagnosis':
        return <Diagnosis />

        break
      case 'Treatment':
        return <Treatment />

        break
      case 'Error':
        return <Error />

        break
      default:
        return <Home />
        break
    }
  }
}

export default inject('navigation')(observer(Navigator))
