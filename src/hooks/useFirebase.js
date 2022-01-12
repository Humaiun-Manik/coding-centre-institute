import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import { useNavigate } from "react-router-dom";
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

const useFirebase = () => {

    const path = useNavigate();
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');
    const [loading, setLoading] = useState(true);

    // clear error
    useEffect(() => {
        setTimeout(() => {
            setError();
        }, 5000);
    }, [error]);

    // observe user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    // google sign in
    const signInWithGoogle = (pathname) => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                path(pathname);
            }).catch((error) => {
                setError(error.message);
            });
    };

    // gitHub sign in
    const signInWithGitHub = (pathname) => {
        const gitHubProvider = new GithubAuthProvider();
        signInWithPopup(auth, gitHubProvider).then((result) => {
            const user = result.user;
            setUser(user);
            path(pathname);
        }).catch((error) => {
            setError(error.message);
        });
    };

    // email and password sign in
    const signInWithEmail = (e, pathname) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((result) => {
            const user = result.user;
            setUser(user);
            path(pathname);
        }).catch((error) => {
            setError(error.message);
        });
    };

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
        resetPassword,
        loading
    };
};
export default useFirebase;