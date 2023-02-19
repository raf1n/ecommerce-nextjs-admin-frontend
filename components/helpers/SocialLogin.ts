// import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup,signInWithEmailAndPassword,updateProfile,onAuthStateChanged, GoogleAuthProvider, User, sendEmailVerification,FacebookAuthProvider, signOut,createUserWithEmailAndPassword, sendPasswordResetEmail, fetchSignInMethodsForEmail  } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { MyFetchInterface } from "../../interfaces/models";
import { CookiesHandler } from '../../src/utils/CookiesHandler';




export class SocialLogin {
    static initFirebase() {
        const configs = {
            apiKey: process.env['NEXT_PUBLIC_API_KEY'],
            authDomain: process.env['NEXT_PUBLIC_AUTH_DOMAIN'],
            projectId: process.env['NEXT_PUBLIC_PROJECT_ID'],
            storageBucket: process.env['NEXT_PUBLIC_STORAGE_BUCKET'],
            messagingSenderId: process.env['NEXT_PUBLIC_MESSAGING_SENDER_ID'],
            appId: process.env['NEXT_PUBLIC_APP_ID']
            // apiKey: "AIzaSyBkOKjseKpoM0DuYR6mdm1HEPtGIShuR8Q",
            // authDomain: "ecommerce-3dcd5.firebaseapp.com",
            // projectId: "ecommerce-3dcd5",
            // storageBucket: "ecommerce-3dcd5.appspot.com",
            // messagingSenderId: "105572754219",
            // appId: "1:105572754219:web:11852ba2f50a6f9232db6e"
        }
        initializeApp(configs);
        // const db = getFirestore(initializeApp(configs));
        // return db
    }
    
 

    static async sendEmail() {
        const auth = getAuth();
        if (!auth.currentUser) {
            return
        }
    sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  }).catch(error=>{
        console.log('error',error)    
        })
    }
  
    static async loginWithEmailPassword(email: any, password: any): Promise<MyFetchInterface> {
        return new Promise((resolve) => {
            const auth = getAuth();
            
            signInWithEmailAndPassword(auth, email, password)
                .then((result) => {
                console.log('loginWithEmailPassword',result)
                            resolve({
                                res: result,
                                err: null
                            })
                        })
                        .catch(error => {            
                            console.log('repoo', error)
                            if (error.message === 'Firebase: Error (auth/user-not-found).') {
                                resolve({
                                    res: null,
                                    err: 'Not Registerd'
                                });
                            }
                            else if(error.message === 'Firebase: Error (auth/network-request-failed).') {
                                resolve({
                                    res: null,
                                    err: 'Internet not available'
                                });
                            }
                            else if(error.message === 'Firebase: Error (auth/invalid-email).') {
                                resolve({
                                    res: null,
                                    err: 'Invalid Email'
                                });
                            }
                            else if(error.message === 'Firebase: Error (auth/wrong-password).') {
                                resolve({
                                    res: null,
                                    err: 'Wrong Password'
                                });
                            }
                            else {
                                resolve({
                                    res: null,
                                    err: error.message
                                });
                            }
                        })
        })
    }
  
    static async logOut(): Promise<void> {
        console.log('loggedout');
        const auth = getAuth();
        await signOut(auth)
        CookiesHandler.removeAccessToken();
        localStorage.clear();
        sessionStorage.clear();
    }
}