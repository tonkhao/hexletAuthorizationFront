import { type ChangeEvent } from "react";
import { LockedIcon } from "../assets/LockedIcon";
import { LogoIcon } from "../assets/LogoIcon";
import { UserIcon } from "../assets/UserIcon";
import type { IdType } from "../utils/types";

interface AuthFirstStepProps {
  loginValue: IdType;
  loginChange: (value: string) => void;
  passwordValue: IdType;
  passwordChange: (value: string) => void;
  buttonClick: () => void;
  isFirstStepButtonDisabled: boolean;
}

export function AuthFirstStep(props: AuthFirstStepProps) {
  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.loginChange(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.passwordChange(event.target.value);
  };

  const handleFirstStepAuth =  async () => {
    props.buttonClick();
  };

  const getFirstStepButtonClassName = () => {
    if (props.isFirstStepButtonDisabled) {
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
          <p className="signInText">
            Sign in to your account to
            <br />
            continue
          </p>
        </div>
      </div>
      <div className="inputsOutterWrapper">
        <div className="inputContainer">
          <div className="iconContainer">
            <UserIcon />
          </div>
          <input
            className="textInput"
            value={props.loginValue}
            onChange={(e) => handleLoginChange(e)}
            type="text"
          />
        </div>
        <div className="inputContainer">
          <div className="iconContainer">
            <LockedIcon />
          </div>
          <input
            className="textInput"
            value={props.passwordValue}
            onChange={(e) => handlePasswordChange(e)}
            type="password"
          />
        </div>
      </div>
      <div className="buttonContainer">
        <input
          className={getFirstStepButtonClassName()}
          type="button"
          value="Log in"
          onClick={() => handleFirstStepAuth()}
        />
      </div>
    </>
  );
}
