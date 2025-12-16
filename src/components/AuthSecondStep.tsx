export function AuthSecondStep() {
  return (
    <>
      <div className="companyLogo">
        LOGO
        <p className="TwoFactorAuthText">Sign in to your account to continue</p>
         <p className="TwoFactorAuthTextDesc">Sign in to your account to continue</p>
      </div>
      <div className="formWrapper">
        
      </div>
      <input
        className="buttonInput"
        type="button"
        value="Log in"
        onClick={() => console.log("clock")}
      />
    </>
  );
}
