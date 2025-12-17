import { LogoIcon } from "../assets/LogoIcon";

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
          <p className="signInText">Sign in to your account to<br />continue</p>
        </div>
      </div>
      <div className="formWrapper"></div>
      <input className="textInput" type="text" />
      <input className="textInput" type="password" />
      <input
        className="buttonInput"
        type="button"
        value="Log in"
        onClick={() => checkFirstStepAuth()}
      />
    </>
  );
}
