import './App.css'
import { AuthFirstStep } from './components/AuthFirstStep'
import { AuthSecondStep } from './components/AuthSecondStep'

function App() {
  const isFirstStepPass = false;

  return (
    <>
      <div className="authFormContainer">
        {!isFirstStepPass ? <AuthFirstStep /> : <AuthSecondStep />}
      </div>
    </>
  );
}

export default App
