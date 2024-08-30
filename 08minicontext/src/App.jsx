
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  

  return (
    <UserContextProvider>
      <h1>React With Chai</h1>
      <p>This is a test page for React with Chai</p>
      <Login />
      <Profile/>

    </UserContextProvider>
  )
}

export default App
