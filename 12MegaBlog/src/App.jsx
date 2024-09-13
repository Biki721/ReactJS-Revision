
import './App.css'

function App() {
  // if we use npx create REACT, then we will use the below line
  // console.log(process.env.REACT_APP_APPWRITE_URL);

  // else if we use vite to create react app then we will use
  console.log(import.meta.env.VITE_APPWRITE_URL);


  return (
    <>
      <h1>A blog app with appwrite</h1>
    </>
  )
}

export default App
