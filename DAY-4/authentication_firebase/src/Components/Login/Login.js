import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, googleProvider } from './firebase.config';

const Login = () => {
    const SignInWithGoogle = async () => {
       try { signInWithPopup(auth, googleProvider)
    }
       catch(err){
        console.log(err);
       }

    }
    return (
        <div>
        <button onClick={SignInWithGoogle}>Sign In With Google</button>
        </div>
    );
};

export default Login;