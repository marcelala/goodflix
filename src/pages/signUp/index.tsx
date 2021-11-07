// dependencies
import { FormEvent, useState } from "react";
import { useHistory, Link } from "react-router-dom";

//project files
import FormFields from "../../components/FormFields";
import { register } from "../../firebaseServices/authentication";
import { createDocumentWithId } from "../../firebaseServices/firestore";
import { useUserData } from "../../state/UserDataContext";
import { useAuthentication } from "../../state/AuthenticationContext";
import { newUser } from "../../types/newUser";
import background from "assets/images/authBanner.jpg";
export default function SignUp() {
  // global state
  const { setUserData } = useUserData();
  const { setIsAuthenticated } = useAuthentication();
  const history = useHistory();
  const signUpFields = require("./fields-sign-up.json");

  // Local state
  const [form, setForm] = useState(newUser);
  const [errorMessage, setErrorMessage] = useState("");

  // Methods
  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const { email, password } = form;
    setErrorMessage("");
    const account = await register({ email, password });
    account.isCreated
      ? await onSuccess(account.payload)
      : onFailure(account.payload);
  }

  async function onSuccess(uid: string) {
    const { fullName, email, phone, city, imageURL } = form;
    const newParticipant = {
      fullName: fullName,
      city: city,
      email: email,
      phone: phone,
      imageURL: imageURL,
      userRole: "participant",
      isActive: true,
    };
    await createDocumentWithId("userData", uid, newParticipant);
    setUserData(newParticipant);
    setIsAuthenticated(true);
    history.push("/browse");
  }

  function onFailure(message: any) {
    setErrorMessage(message);
    history.push("/register");
  }

  return (
    <>
      <section id={"auth"}>
        <div className="background-wrapper">
          <img src={background} alt={"thumbnail of various movies"} />
        </div>
        <form className="form-wrapper" onSubmit={onSubmit}>
          <h1 className="form-title">Join Netflix</h1>
          <FormFields fields={signUpFields} state={[form, setForm]} />
          <div className="auth-links">
            <small>
              Already a member?{" "}
              <Link to="/" className="form-link">
                Log in here
              </Link>
            </small>
            <p>{errorMessage}</p>
          </div>
          <button className="btn-form">Create account</button>
        </form>
      </section>
    </>
  );
}
