import firebase from "../firebase";
import {app} from "../firebase";

const auth = app.auth();
const db = app.firestore();

const register = async  (name, email, password) =>{
    try{
        const res =  await auth.createUserWithEmailAndPassword(email,password); //Sukuriamas vartotojas Google cloude
        const user = res.user; //Pasiimam sukurto vartotojo duomenis
        await db.collection('users').add({ //Pridedam mums reikalingus user duonenis i savo firestore DB
            uid:user.uid,
            name,
            authProvider:'local',
            email
        })

    }catch(err){
        console.log(err)
    }
}

const login = async (email,password)=>{
    try{
        await auth.signInWithEmailAndPassword(email,password);
    }catch(err){
        console.log(err)
    }
}

const logout = ()=>{
    auth.signOut();
}

const resetPassword = async (email)=>{
    try{
        await auth.sendPasswordResetEmail(email)
        alert("Slaptazodzio priminimas issiustas")
    }catch(err){
        console.log(err)
    }
}

export default firebase
export {
    auth,
    db,
    register,
    login,
    logout,
    resetPassword
}