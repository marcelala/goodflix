// dependencies
import { FormEvent, useState } from "react";
import { useHistory, Link } from "react-router-dom";

// project files
import FormFields from "../../components/FormFields";
import { login } from "../../firebaseServices/authentication";
import { useAuthentication } from "../../state/AuthenticationContext";
import { useUserData } from "../../state/UserDataContext";
import { getDocument } from "../../firebaseServices/firestore";

export default function SignIn() {
  // Global state
  const history = useHistory();
  const { setUserData } = useUserData();
  const { setIsAuthenticated, isAuthenticated } = useAuthentication();
  // Local state
  const loginFields = require("./fields-login.json");
  const [form, setForm] = useState({ email: "", password: "" });
  const { email, password } = form;
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    const account = await login({ email, password });
    account.setIsAuthenticated
      ? await onSuccess(account.payload)
      : onFailure(account.payload);
  }

  async function onSuccess(uid: string) {
    const document = await getDocument("userData", uid);
    setUserData(document);
    setIsAuthenticated(true);
    history.push("/home");
  }

  function onFailure(message: string) {
    setErrorMessage(message);
  }

  return (
    <>
      {" "}
      <section id="auth">
        <form className="sign-form-wrapper" onSubmit={handleLogin}>
          <h1 className="sign-form-title">Log in</h1>
          <FormFields fields={loginFields} state={[form, setForm]} />
          <Link to={"/recovery"} className="sign-form-link">
            <small>Need help?</small>
          </Link>

          <p>{errorMessage}</p>
          <button type="submit" className="sign-form-Button">
            Login
          </button>
          <small>
            New to Netflix?{" "}
            <Link to="/register" className="sign-form-link">
              Sign up now
            </Link>
          </small>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </small>
        </form>
      </section>
    </>
  );
}
