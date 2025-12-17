import { LockedIcon } from "../assets/LockedIcon";
import { LogoIcon } from "../assets/LogoIcon";
import { UserIcon } from "../assets/UserIcon";

export function AuthFirstStep() {
  const checkFirstStepAuth = () => {
    console.log("CHECK 1 STEP");
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
          <input className="textInput" type="text" />
        </div>
        <div className="inputContainer">
          <div className="iconContainer">
            <LockedIcon />
          </div>
          <input className="textInput" type="password" />
        </div>
      </div>

      <input
        className="buttonInput"
        type="button"
        value="Log in"
        onClick={() => checkFirstStepAuth()}
      />
    </>
  );
}
