import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import store from './store'
// import { OptionProvider } from '@contexts/OptionContext/OptionProvider'
// import { TableProvider } from '@contexts/TableContext/TableProvider'
// import { InformationProvider } from '@contexts/InformationContext/InformationProvider'

import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
