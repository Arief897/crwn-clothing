// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDvg5pjXqxmOKZlDCG2yY62nz_zua6tUgE",
  authDomain: "crown-clothing-db-66857.firebaseapp.com",
  projectId: "crown-clothing-db-66857",
  storageBucket: "crown-clothing-db-66857.appspot.com",
  messagingSenderId: "648565636884",
  appId: "1:648565636884:web:08f370a926f30d74a20c01"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters(
    {
        prompt: "select_account"
    }
);

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, 
                {
                    displayName,
                    email,
                    createdAt
                }
            );
        } catch (error) {
            console.log('error creating the user' + error.message);
        };
    };
    
    return userDocRef;
};