import React, { useContext } from 'react';
import firebaseConfig from '../firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { userContext } from '../../App';

const app = initializeApp(firebaseConfig)


const Login = () => {
    const {loggedInUser, setLoggedInUser} = useContext(userContext);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleEVents = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const { displayName, email } = result.user;
                const siggnedInUser = { name: displayName, email }
                console.log(siggnedInUser);
                setLoggedInUser(siggnedInUser);

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };
    return (
        <div>
            <h1>this is login</h1>
            <button onClick={handleEVents}>Sign in</button>
        </div>
    );
}


export default Login;