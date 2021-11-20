// dependencies
import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import FormFields from "../../components/FormFields";
import { sendRecoveryMail } from "../../firebaseServices/authentication";
import background from "../../assets/images/authBanner.jpg";

export default function PasswordRecovery() {
  const history = useHistory();
  const recoveryFields = require("./fields-password-recovery.json");
  const [form, setForm] = useState({ email: "", phone: "" });
  const { email, phone } = form;
  const [errorMessage, setErrorMessage] = useState("");

  async function handleRecoveryRequest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    try {
      const account = await sendRecoveryMail(email);
      account.isReset
        ? alert("Password recovery email sent!")
        : alert("Oops, something went wrong");
      history.push("/");
    } catch (e) {
      setErrorMessage(errorMessage);
    }
  }

  return (
    <>
      <div className="background-wrapper">
        <img src={background} alt={"thumbnail of various movies"} />
      </div>
      <section id={"auth"}>
        <form className="form-wrapper" onSubmit={handleRecoveryRequest}>
          <h1 className="form-title">Password Recovery</h1>
          <FormFields fields={recoveryFields} state={[form, setForm]} />
          <p>{errorMessage}</p>
          <button className="btn-form" type="submit">
            Reset password
          </button>
        </form>
      </section>
    </>
  );
}
