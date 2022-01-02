import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

// providers
// const googleProvider = new GoogleAuthProvider();



const useFirebase = () => {

    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // google sign in
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider).then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user);
        }).catch((error) => {
            setError(error.message);
        });
    }

    //Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return () => unsubscribe;
    }, [])

    // sign out
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message);
        });
    }

    return {
        signInWithGoogle,
        user,
        error,
        logOut
    };
};
export default useFirebase;