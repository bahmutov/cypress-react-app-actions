import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Example } from './Example'
import FunCounter from './FunCounter'
import ProviderExample from './ProviderExample'

ReactDOM.render(
  <React.StrictMode>
    <h1>React class component</h1>
    <Example initialCount={0} />
    <h2>Function component</h2>
    <FunCounter initialCount={7} something="else" />

    <ProviderExample />
  </React.StrictMode>,
  document.getElementById('root'),
)
