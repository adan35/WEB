import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBh2XuTP1ZFnBTcOiSlT4qPLzXlPDVv9X0",
    authDomain: "crwn-db-6abe2.firebaseapp.com",
    projectId: "crwn-db-6abe2",
    storageBucket: "crwn-db-6abe2.appspot.com",
    messagingSenderId: "1078125544235",
    appId: "1:1078125544235:web:9056ce715c9709e4bd7b6e",
    measurementId: "G-7F2MQ0JEXB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const users = await collection(db, "users");
    const userSnapshot = await getDocs(users);
    let flag = true;
    userSnapshot.forEach(doc => {
        if (doc.get("email") === userAuth.email) {
            flag = false;
        }
        return null;
    });

    if (flag) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await addDoc(users, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            alert("error created at user" + error.message);
        }
    }

    return users;
}

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    'prompt': 'select_account'
});

export const auth = getAuth();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

