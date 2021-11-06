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
        <h1>Log in</h1>
        <form className="form form-login" onSubmit={handleLogin}>
          <FormFields fields={loginFields} state={[form, setForm]} />
          <div className="auth-links">
            <Link to={"/recovery"}>
              <small>Forgot your password?</small>
            </Link>
            <small>
              Not a member yet? <Link to="/register">Sign up here</Link>
            </small>
            <p>{errorMessage}</p>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </section>
    </>
  );
}
