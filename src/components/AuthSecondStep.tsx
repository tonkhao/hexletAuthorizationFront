export function AuthSecondStep() {
  const digInputsRender = () => {
    for (let index = 0; index < 6; index++) {
      return <input className="textInput" type="text" />;
    }
  };

  return (
    <>
      <div className="companyLogo">
        LOGO
        <p className="TwoFactorAuthText">Two-factor authentification</p>
        <p className="TwoFactorAuthTextDesc">
          Enter the 6-digits code from the Google Authenticator app
        </p>
      </div>
      <div className="formWrapper">{digInputsRender()}</div>
      <input
        className="buttonInput"
        type="button"
        value="Log in"
        onClick={() => console.log("clock")}
      />
    </>
  );
}
