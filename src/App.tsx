import './App.css'
import { AuthFirstStep } from './components/AuthFirstStep'
import { AuthSecondStep } from './components/AuthSecondStep'

function App() {

  return (
    <>
      <div className="authFormContainer">
        <AuthFirstStep />
        <AuthSecondStep />
      </div>
    </>
  )
}

export default App
