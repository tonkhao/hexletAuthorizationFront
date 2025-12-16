export function AuthFirstStep() {
  const digInputsRender = () => {
    for (let index = 0; index < 6; index++) {
      return <input className="textInput" type="text" />
    }
  }
  
  return (
    <>
      <div className="companyLogo">
        LOGO
        <p className="signInText">Sign in to your account to continue</p>
      </div>
      <div className="formWrapper">
        { digInputsRender }
      </div>
      <input className="buttonInput" type="button" value="Log in" onClick={() => console.log("clock")} />
    </>
  );
}
