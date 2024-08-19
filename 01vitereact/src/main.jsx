import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import ReactDOM from 'react-dom/client'

function MyApp() {
  return (
    <div>
      <h1>My React App</h1>
      <p>This is my first React app using Vite.</p>
    </div>
  )
}

// const reactElement = {
//   type :'a',
//   props : {
//       href : 'https://google.com',
//       target : '_blank'
//   },
//   children : 'Click me to visit google'

// }
const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)
const anotherUser = "Chai aur react"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  
  // anotherElement
  // reactElement
  <App />
)
