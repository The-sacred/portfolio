import './index.css'
import { useState } from 'react'
import LoadingScreeen from './components/LoadingScreen'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
    return (
    <>
      {!isLoaded && < LoadingScreeen onComplete={()=> setIsLoaded(true)}/>}  
    </>
  )
}

export default App
