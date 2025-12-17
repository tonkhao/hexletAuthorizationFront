export function AuthFirstStep() {
  return (
    <>
      <div className="companyLogo">
        LOGO
        <p className="signInText">Sign in to your account to continue</p>
      </div>
      <div className="formWrapper"></div>
      <input className="textInput" type="text" />
      <input className="textInput" type="password" />
      <input
        className="buttonInput"
        type="button"
        value="Log in"
        onClick={() => console.log("clock")}
      />
    </>
  );
}
