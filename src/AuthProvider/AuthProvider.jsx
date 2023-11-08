import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

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
        isLoading(true)
        return signOut(auth);
    }

    const update = ( name , photo ) => {
        return updateProfile(auth.currentUser , {
            displayName : name,
            photoURL : photo
        })
    }
    

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                axios.post(`https://grillino-assignment-server.vercel.app/jwt` , {email : user?.email} , { withCredentials : true})
                .then(res => {
                    console.log(res.data)
                })
            }
            isLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [user?.email])

    const authInfo = { user, loading , update , createUser, login, googleLogin, githubLogin , logOut , quantityValue , setQuantityValue}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.node
}