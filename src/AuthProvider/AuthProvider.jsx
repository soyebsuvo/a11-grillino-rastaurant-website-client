import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
export default function AuthProvider({ children }) {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, isLoading] = useState(true)
    const [quantityValue , setQuantityValue] = useState(1)

    const createUser = (email, password) => {
        isLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        isLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        isLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        isLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }
    

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            isLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = { user, loading , createUser, login, googleLogin, githubLogin , logOut , quantityValue , setQuantityValue}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.node
}