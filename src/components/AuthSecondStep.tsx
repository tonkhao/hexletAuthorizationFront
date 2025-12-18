import { useState, type ChangeEvent } from "react";
import { LogoIcon } from "../assets/LogoIcon";

interface AuthSecondStepProps {
  codeValue: string;
  digitsChange: (value: string) => void;
  buttonClick: () => void;
  isSecondStepButtonError: boolean;
  isSecondStepButtoVisible: boolean;
  onHandleSecondStepButtoVisible: () => void;
  onhandleSecondStepButtonError: () => void;
}

export function AuthSecondStep(props: AuthSecondStepProps) {
  const [codeArrValue, setCodeArrValue] = useState([0, 0, 0, 0, 0, 0]);

  const getSecondStepButtonText = () => {
    if (!codeArrValue.length) {
      return "Get new";
    }
    return "Continue";
  };

  const codeInputsRender = () => {
    let ren = [];
    for (let index = 0; index < 6; index++) {
      ren.push(
        <input
          id={String(index)}
          className="digInput"
          type="text"
          onChange={(e) => handleCodeArrChange(e, String(index))}
        />
      );
    }
    return ren;
  };

  const handleCodeArrChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: string
  ) => {
    
    setCodeArrValue(event.target.value);
  };

  const handleSecondStepAuth = () => {
    props.buttonClick();
  };

  const getSecondStepButtonClassName = () => {
    if (props.isSecondStepButtonError) {
      return "buttonInput buttonLocked";
    }
    return "buttonInput buttonUnlocked";
  };

  return (
    <>
      <div className="formHeader">
        <div className="logoContainer">
          <LogoIcon />
        </div>
        <div className="descriptionContainer">
          <p className="twoFactorAuthText">Two-factor authentification</p>
          <p className="twoFactorAuthTextDesc">
            Enter the 6-digit code from the Google Authenticator app
          </p>
        </div>
      </div>
      <div className="inputsOutterWrapper">{codeInputsRender()}</div>
      {props.isSecondStepButtoVisible && (
        <div className="buttonContainer">
          <input
            className={getSecondStepButtonClassName()}
            type="button"
            value={getSecondStepButtonText()}
            onClick={() => handleSecondStepAuth()}
          />
        </div>
      )}
    </>
  );
}
