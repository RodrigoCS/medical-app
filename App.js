import React from 'react'
import { Provider } from 'mobx-react'
import stores from './stores'
import Navigator from './Navigator'

class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Navigator />
      </Provider>
    )
  }
}

export default App
