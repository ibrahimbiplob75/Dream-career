import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "./firebase.config";



export const AuthContext=createContext(null)

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser]=useState()

    const googleSignIn=()=>{
        signInWithPopup(auth, googleProvider);
    }

    const emailSign = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
    const emailLogin=(email,password)=> {
       return signInWithEmailAndPassword(auth, email, password);
    }
   

    const logout = () => {
      signOut(auth);
    };


    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
          console.log("Auth state user info",currentUser)
          setUser(currentUser)
        }
        return ()=>{
          return unsubscribe();
        }
      })
    },[logout])


    const authInfo = {
      googleSignIn,
      emailSign,
      logout,
      emailLogin,
      user,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;
