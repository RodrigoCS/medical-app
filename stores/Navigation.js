import { decorate, observable, action } from 'mobx'

class Navigation {
  currentScene = 'Signs'

  go = scene => {
    console.log(`Navigation.go(${scene})`)
    this.currentScene = scene
  }
}

export default decorate(Navigation, {
  currentScene: observable,
  go: action
})
