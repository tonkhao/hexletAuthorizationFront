import { LogoIcon } from "../assets/LogoIcon";

interface AuthSecondStepProps {
  digitsValue: string;
  digitsChange: (value: string) => void;
  buttonClick: () => void;
  isSecondStepButtonError: boolean;
  isSecondStepButtoVisible: boolean;
  onHandleSecondStepButtoVisible: () => void;
  onhandleSecondStepButtonError: () => void
}

export function AuthSecondStep(props: AuthSecondStepProps) {
  const getSecondStepButtonText = () => {
    if (true) {
      return "Get new"
    }
    return "Continue"
  }
  let ren = [];
  const digInputsRender = () => {
    for (let index = 0; index < 6; index++) {
      ren.push(<input id={String(index)} className="digInput" type="text" />)
    }
    return ren;
  };

  const handleSecondStepAuth = () => {
    console.log("CHECK 2 STEP");
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
          <p className="twoFactorAuthTextDesc">Enter the 6-digit code from the Google Authenticator app</p>
        </div>
      </div>
      <div className="inputsOutterWrapper">
       {digInputsRender()}
      </div>
      {props.isSecondStepButtoVisible && <div className="buttonContainer">
        <input
          className={getSecondStepButtonClassName()}
          type="button"
          value={getSecondStepButtonText()}
          onClick={() => handleSecondStepAuth()}
        />
      </div>}
    </>
  );
}
