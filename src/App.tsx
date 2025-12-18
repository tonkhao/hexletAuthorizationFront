import { useState } from "react";
import "./App.css";
import { AuthFirstStep } from "./components/AuthFirstStep";
import { AuthSecondStep } from "./components/AuthSecondStep";
import { loginApi, verifyCodeApi } from "./db/mockLoginServ";

function App() {
  const [isFirstStepPass, setFirstStepPass] = useState(false);

  const [loginValue, setLoginValue] = useState("");

  const [passwordValue, setPasswordValue] = useState("");

  const [isFirstStepButtonDisabled, setFirstStepButtonDisabled] =
    useState(true);

  const [codeValue, setCodeValue] = useState("");

    const [isSecondStepButtonError, setSecondStepButtonError] =
    useState(true);

    const [isSecondStepButtoVisible, setSecondStepButtoVisible] = useState(false);

  const onHandleLoginChange = (value: string) => {
    setLoginValue(value);
    checkFirstStepButtonDisabled();
  };

  const onHandlePasswordChange = (value: string) => {
    setPasswordValue(value);
    checkFirstStepButtonDisabled();
  };

  const checkFirstStepButtonDisabled = () => {
    if (loginValue && passwordValue) {
      setFirstStepButtonDisabled(false);
    } else {
      setFirstStepButtonDisabled(true);
    }
  };

  const onHandleCodeChange = (value: string) => {
    setCodeValue(value);
    checkSecondStepButtonDisabled();
  };

  const checkSecondStepButtonDisabled = () => {
    if (loginValue && passwordValue) {
      setFirstStepButtonDisabled(false);
    } else {
      setFirstStepButtonDisabled(true);
    }
  };

  const onHandleFirstStepAuth = async () => {
    try {
      const result = await loginApi({
        email: loginValue,
        password: passwordValue,
      });
      if (result.success) {
        setFirstStepPass(true);
      } else {
        setFirstStepPass(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleSecondStepAuth = async () => {
    try {
      const result = await verifyCodeApi({code: code})
      if (result.success) {
        console.log("LOGIN SUCCESS")
      } else {
        console.log("LOGIN ERROR")
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleSecondStepButtoVisible = async () => {
    try {
      if (true) {
        setSecondStepButtoVisible(true)
      } else {
        setSecondStepButtoVisible(false)
      }
    } catch (error) {
      console.log(error);
    }

    const onhandleSecondStepButtonError = async () => {
    try {
      if (true) {
        setSecondStepButtonError(true)
      } else {
        setSecondStepButtonError(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="authFormContainer">
        {!true ? (
          <AuthFirstStep
            loginValue={loginValue}
            loginChange={onHandleLoginChange}
            passwordValue={passwordValue}
            passwordChange={onHandlePasswordChange}
            buttonClick={onHandleFirstStepAuth}
            isFirstStepButtonDisabled={isFirstStepButtonDisabled}
          />
        ) : (
          <AuthSecondStep
            codeValue={codeValue}
            digitsChange={onHandleCodeChange}
            buttonClick={onHandleSecondStepAuth}
            isSecondStepButtonError={isSecondStepButtonError}
            isSecondStepButtoVisible={isSecondStepButtoVisible}
            onHandleSecondStepButtoVisible={onHandleSecondStepButtoVisible}
            onhandleSecondStepButtonError={onhandleSecondStepButtonError}
          />
        )}
      </div>
    </>
  );
}

export default App;