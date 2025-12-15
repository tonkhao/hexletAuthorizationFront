export function AuthFirstStep() {
  return (
    <>
      <div className="companyLogo">LOGO</div>
      <div className="signInText">
        <p>Sign in to your account to continue</p>
      </div>
      <div className="inputsWrapper">
        <input className="textInput" type="text" />
        <input className="textInput" type="text" />
      </div>
      <button onClick={() => console.log("clock")}>Log in</button>
    </>
  );
}
