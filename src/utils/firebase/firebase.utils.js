import {initializeApp } from 'firebase/app'
import {getAuth, 
    signInWithRedirect,
     signInWithPopup,
      GoogleAuthProvider
    } from 'firebase/auth'

    import {
        getFirestore,
        doc,
        getDoc,
        setDoc,
    } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAW3GWRtJWS0KLJu_PR2oZZUX-rkERn4J8",
    authDomain: "crwn-clothing-db-30a6b.firebaseapp.com",
    projectId: "crwn-clothing-db-30a6b",
    storageBucket: "crwn-clothing-db-30a6b.appspot.com",
    messagingSenderId: "571396020520",
    appId: "1:571396020520:web:459d5b21c8ce0654ced81d"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = ()  => signInWithPopup(auth, provider);



export const db = getFirestore();
 export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);


  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try{
         await  setDoc(userDocRef,{
             displayName,
             email,
             createdAt
         });
      }  
      catch(error){
         console.log('error creating user', error.message);
      }
    }

    return userDocRef;
};





