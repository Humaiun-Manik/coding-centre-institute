import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import {
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile,
    sendEmailVerification,
    sendPasswordResetEmail
} from "firebase/auth";

initializeAuthentication();

// providers
// const googleProvider = new GoogleAuthProvider();



const useFirebase = () => {

    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');

    // google sign in
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider).then((result) => {
            const user = result.user;
            setUser(user);
        }).catch((error) => {
            setError(error.message);
        });
    };

    // gitHub sign in
    const signInWithGitHub = () => {
        const gitHubProvider = new GithubAuthProvider();
        signInWithPopup(auth, gitHubProvider).then((result) => {
            const user = result.user;
            setUser(user);
        }).catch((error) => {
            setError(error.message);
        });
    };

    // email sign in
    const signInWithEmail = (e) => {
        // const gitHubProvider = new GithubAuthProvider();
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((result) => {
            const user = result.user;
            setUser(user);
        }).catch((error) => {
            setError(error.message);
        });
    };

    //Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return () => unsubscribe;
    }, [])

    // sign up with email and password
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setNameAndImage();
                emailVerify();
                alert("User has been created");
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // set name and profile img url
    const setNameAndImage = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        }).then(() => {
        }).catch((error) => {
            setError(error.message);
        });
    }

    // email verification
    const emailVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert(`An verification mail has been sent to ${email}`)
            });
    }

    // reset password
    const resetPassword = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('password reset email has been sent');
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // get name
    const getName = (e) => {
        setName(e?.target?.value);
    }
    // get email
    const getEmail = (e) => {
        setEmail(e?.target?.value);
    };
    // get password
    const getPassword = (e) => {
        setPassword(e?.target?.value);
    };
    // get photo url
    const getPhotoURL = (e) => {
        setPhoto(e?.target?.value);
    };


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
        signInWithGitHub,
        signInWithEmail,
        user,
        error,
        getName,
        getEmail,
        getPassword,
        getPhotoURL,
        signUp,
        logOut,
        resetPassword
    };
};
export default useFirebase;