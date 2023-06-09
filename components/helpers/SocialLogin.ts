// import { addDoc, collection, getFirestore } from 'firebase/firestore';
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  User,
  sendEmailVerification,
  FacebookAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  deleteUser,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { MyFetchInterface } from "../../interfaces/models";
import { CookiesHandler } from "../../src/utils/CookiesHandler";
import { EcommerceApi } from "../../src/API/EcommerceApi";
import { controller } from "../../src/state/StateController";
import Router from "next/router";

export class SocialLogin {
  static initFirebase() {
    const configs = {
      apiKey: process.env["NEXT_PUBLIC_API_KEY"],
      authDomain: process.env["NEXT_PUBLIC_AUTH_DOMAIN"],
      projectId: process.env["NEXT_PUBLIC_PROJECT_ID"],
      storageBucket: process.env["NEXT_PUBLIC_STORAGE_BUCKET"],
      messagingSenderId: process.env["NEXT_PUBLIC_MESSAGING_SENDER_ID"],
      appId: process.env["NEXT_PUBLIC_APP_ID"],
      // apiKey: "AIzaSyBkOKjseKpoM0DuYR6mdm1HEPtGIShuR8Q",
      // authDomain: "ecommerce-3dcd5.firebaseapp.com",
      // projectId: "ecommerce-3dcd5",
      // storageBucket: "ecommerce-3dcd5.appspot.com",
      // messagingSenderId: "105572754219",
      // appId: "1:105572754219:web:11852ba2f50a6f9232db6e"
    };
    initializeApp(configs);
    // const db = getFirestore(initializeApp(configs));
    // return db
  }

  static async sendEmail() {
    const auth = getAuth();
    if (!auth.currentUser) {
      return;
    }
    sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        // ...
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  static async signUpWithEmailPassword(
    displayName: any,
    email: any,
    password: any
  ): Promise<MyFetchInterface> {
    return new Promise((resolve) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((authUser) => {
          if (!auth.currentUser) {
            return;
          }
          updateProfile(auth.currentUser, {
            displayName: displayName,
          })
            .then(() => {})
            .catch((error) => {});
          resolve({
            res: authUser,
            err: null,
          });
        })

        .catch((error) => {
          console.log("repoo", error);
          if (
            error.message === "Firebase: Error (auth/email-already-in-use)."
          ) {
            resolve({
              res: null,
              err: "Email already exists",
            });
          } else if (
            error.message === "Firebase: Error (auth/invalid-email)."
          ) {
            resolve({
              res: null,
              err: "Invalid Email",
            });
          } else if (
            error.message === "Firebase: Error (auth/network-request-failed)."
          ) {
            resolve({
              res: null,
              err: "Internet not available",
            });
          } else {
            resolve({
              res: null,
              err: error.message,
            });
          }
        });
    });
  }

  static async loginWithEmailPassword(
    email: any,
    password: any
  ): Promise<MyFetchInterface> {
    return new Promise((resolve) => {
      const auth = getAuth();
      console.log(auth);
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log("loginWithEmailPassword", result);
          resolve({
            res: result,
            err: null,
          });
        })
        .catch((error) => {
          console.log("repoo", error);
          if (error.message === "Firebase: Error (auth/user-not-found).") {
            resolve({
              res: null,
              err: "Not Registerd",
            });
          } else if (
            error.message === "Firebase: Error (auth/network-request-failed)."
          ) {
            resolve({
              res: null,
              err: "Internet not available",
            });
          } else if (
            error.message === "Firebase: Error (auth/invalid-email)."
          ) {
            resolve({
              res: null,
              err: "Invalid Email",
            });
          } else if (
            error.message === "Firebase: Error (auth/wrong-password)."
          ) {
            resolve({
              res: null,
              err: "Wrong Password",
            });
          } else {
            resolve({
              res: null,
              err: error.message,
            });
          }
        });
    });
  }

  static async DeleteUser(): Promise<MyFetchInterface> {
    return new Promise((resolve) => {
      const auth = getAuth();

      if (!auth.currentUser) {
        resolve({
          res: null,
          err: "User not signed in",
        });
        return;
      }
      deleteUser(auth.currentUser)
        .then(() => {
          resolve({
            res: "User Deleted",
            err: null,
          });
          // User deleted.
        })
        .catch((error) => {
          // An error ocurred
          // ...
        });
    });
  }

  static async updateLoggedInAdminProfile(
    slug: string | undefined,
    userProfile: {
      fullName: string;
      avatar: string;
    }
  ): Promise<MyFetchInterface> {
    return new Promise((resolve) => {
      const auth = getAuth();
      if (!auth.currentUser) {
        resolve({
          res: null,
          err: "User not signed in",
        });
        return;
      }
      updateProfile(auth.currentUser, {
        displayName: userProfile.fullName,
        photoURL: userProfile.avatar,
      })
        .then(() => {
          resolve({
            res: "Profile updated",
            err: null,
          });
        })
        .catch((error) => {
          resolve({
            res: null,
            err: "An error occurred. Please try again.",
          });
        });
    });
  }

  static async logOut(): Promise<void> {
    console.log("loggedout");
    const auth = getAuth();
    await signOut(auth);
    CookiesHandler.removeAccessToken();
    CookiesHandler.removeSlug();
    localStorage.clear();
    sessionStorage.clear();
    Router.push("/login");
  }

  static async changePassword(
    email: string,
    oldPassword: string,
    newPassword: string
  ): Promise<MyFetchInterface> {
    return new Promise((resolve) => {
      const auth = getAuth();

      if (!auth.currentUser) {
        resolve({
          res: null,
          err: "User not signed in",
        });
        return;
      }

      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(email, oldPassword);

      reauthenticateWithCredential(auth.currentUser, credential).catch(
        (error) => {
          resolve({
            res: null,
            err: "Wrong Password",
          });
        }
      );

      updatePassword(user, newPassword)
        .then(() => {
          resolve({
            res: "Password Updated",
            err: null,
          });
        })
        .catch((error) => {
          resolve({
            res: null,
            err: "An error occurred. Please try again.",
          });
        });
    });
  }
}
