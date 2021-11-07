// dependencies
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  deleteUser,
  User,
} from "firebase/auth";
//project files
import { authInstance } from "./firebase";

type iProps = {
  email: string;
  password: string;
};

export async function register({ email, password }: iProps) {
  const account = { isCreated: false, payload: "" };
  try {
    const authCredential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.isCreated = true;
    account.payload = authCredential.user.uid;
  } catch (error: any) {
    console.error("authentication.js error", error);
    account.payload = error.code;
  }
  return account;
}

export async function login({ email, password }: iProps) {
  const account = {
    isAuthenticated: false,
    payload: "",
    setIsAuthenticated: false,
  };
  try {
    const authCredential = await signInWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.payload = authCredential.user.uid;
    account.isAuthenticated = true;
  } catch (error: any) {
    console.error("authentication.js error", error);
    alert("Login failed");
    account.payload = error.code;
  }
  return account;
}

export async function logOut() {
  const account = { isSignedOut: false, payload: "" };

  try {
    await signOut(authInstance);
    account.isSignedOut = true;
    account.payload = "Signed out successfully";
  } catch (error: any) {
    console.error("authentication.js error", error);
    account.payload = error.code;
  }

  return account;
}

export async function sendRecoveryMail(email: string) {
  const account = { isReset: false, payload: "" };

  try {
    await sendPasswordResetEmail(authInstance, email);
    account.payload = "Password reset email sent! Check your inbox";
    account.isReset = true;
  } catch (error: any) {
    account.payload = error.code;
  }
  return account;
}

export async function updateCredentials(newPassword: string) {
  const user = authInstance.currentUser;
  // @ts-ignore
  updatePassword(user, newPassword)
    .then(() => {})
    .catch((error: any) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export async function deleteAccount(user: User) {
  deleteUser(user)
    .then(() => {
      console.log("Successfully deleted user");
    })
    .catch((error) => {
      console.log("Error deleting user:", error);
    });
}
