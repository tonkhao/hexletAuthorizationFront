import { useState } from "react";
import "./App.css";
import { AuthFirstStep } from "./components/AuthFirstStep";
import { AuthSecondStep } from "./components/AuthSecondStep";

function App() {
  const isFirstStepPass = false;

  const [loginValue, setLoginValue] = useState("");

  const [passwordValue, setPasswordValue] = useState("");

  const onHandleLoginChange = (value: string) => {
    setLoginValue(value);
  };

  const onHandlePasswordChange = (value: string) => {
    setPasswordValue(value);
  };

    const onHandleFirstStepAuth = () => {
    // event.preventDefault();
    console.log(loginValue);
    console.log(passwordValue)
  };

  return (
    <>
      <div className="authFormContainer">
        {!isFirstStepPass ? (
          <AuthFirstStep
            loginValue={loginValue}
            loginChange={onHandleLoginChange}
            passwordValue={passwordValue}
            passwordChange={onHandlePasswordChange}
            buttonClick={onHandleFirstStepAuth}
          />
        ) : (
          <AuthSecondStep />
        )}
      </div>
    </>
  );
}

export default App;
