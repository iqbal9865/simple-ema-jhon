import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Shipment/Login/firebase.config';

export const initializeLoginFrameWork = () => {
    if(firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig)
    }
} 
export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res => {
      const {displayName,email,photoURL} = res.user;
      const loginUser = {
        isSignedIn: true,
        Name: displayName,
        email: email,
        photo: photoURL   
      }
      return loginUser;
    //   console.log(displayName,email,photoURL)
    })
    .catch((error) => {
      console.log(error.message)
    })
}
export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
        const signOutUser = {
          // isSignedIn: false,
          Name: '',
          email: '',
          photo: '',
          success: false
        }
      return signOutUser;  
    })
    .catch((error) => {

    })
}
// export const createUserWithEmailAndPassword = () => {
//     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//   .then((res) => {
//     // Signed in 
//     const newUserInfo = {...user}
//     newUserInfo.error = '';
//     newUserInfo.success = true;
//     setUser(newUserInfo)
//     // setLogInUser(newUserInfo)
//     updateUserName(user.name)
//   })
//   .catch((error) => {
//     const newUserInfo = {...user}
//     newUserInfo.error = error.message;
//     newUserInfo.success = false;
//     setUser(newUserInfo)
   
//     // ..
//   });
// } 
// export const signInWithEmailAndPassword = () => {
//     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//     .then((res) => {
//       const newUserInfo = {...user}
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       setUser(newUserInfo)
//       setLogInUser(newUserInfo)
//      
//       console.log('sign in user ', res.user)
//       // Signed in
//       // var user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const newUserInfo = {...user}
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       setUser(newUserInfo)
//       updateUserName(user.Name)
//     });
// } 
// const updateUserName = Name => {
//     var user = firebase.auth().currentUser;
  
//     user.updateProfile({
//       displayName: Name,
      
//     }).then(function() {
//       // Update successful.
//     }).catch(function(error) {
//       // An error happened.
//     });  
//   } 