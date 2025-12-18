import { useState, type ChangeEvent } from "react";
import { LogoIcon } from "../assets/LogoIcon";

interface AuthSecondStepProps {
  codeValue: string;
  codeChange: (value: string) => void;
  codeButtonClick: (code: string) => void;
  isSecondStepButtonError: boolean;
}

export function AuthSecondStep(props: AuthSecondStepProps) {
  const [codeArrValue, setCodeArrValue] = useState([
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ]);

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
    event: ChangeEvent<HTMLInputElement>,
    index: string
  ) => {
    let code = codeArrValue.join("");
    const modifiedArr = code.split("")
    modifiedArr[Number(index)] = event.target.value
    setCodeArrValue(modifiedArr)
    code = modifiedArr.join("")
    props.codeChange(code);
  };

  const handleSecondStepAuth = () => {
    props.codeButtonClick(props.codeValue);
  };

  const getSecondStepButtonClassName = () => {
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
      <div className="buttonContainer">
        <input
          className={getSecondStepButtonClassName()}
          type="button"
          value={"Continue"}
          onClick={() => handleSecondStepAuth()}
        />
      </div>
    </>
  );
}
