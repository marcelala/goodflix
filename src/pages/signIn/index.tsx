// dependencies
import { FormEvent, useState } from "react";
import { useHistory, Link } from "react-router-dom";

// project files
import FormFields from "../../components/FormFields";
import { login } from "../../firebaseServices/authentication";
import { useAuthentication } from "../../state/AuthenticationContext";
import { useUserData } from "../../state/UserDataContext";
import { getDocument } from "../../firebaseServices/firestore";
import background from "../../assets/images/authBanner.jpg";
import InputCheckbox from "../../components/inputCheckbox/InputCheckbox";

const checkboxOptions = { key: "remember", label: "Remember me" };

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
  const [rememberMe, setRememberMe] = useState(false);

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
      <div className="background-wrapper">
        <img src={background} alt={"thumbnail of various movies"} />
      </div>
      <section id="auth">
        <form className="form-wrapper" onSubmit={handleLogin}>
          <h1 className="form-title">Log in</h1>
          <FormFields fields={loginFields} state={[form, setForm]} />
          <div className="form-help">
            <InputCheckbox
              onChange={setRememberMe}
              options={checkboxOptions}
              state={rememberMe}
            />
            <Link to={"/recovery"} className="sign-form-link">
              <small>Need help?</small>
            </Link>
          </div>
          <p>{errorMessage}</p>
          <button type="submit" className="btn-form">
            Sign in
          </button>
          <small>
            New to Netflix?{" "}
            <Link to="/register" className="form-link">
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
