import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBWDrCHWf8v_YLmsDlObLl3yqzmEZtGphg",
  authDomain: "taskmanager-3d611.firebaseapp.com",
  databaseURL: "https://taskmanager-3d611.firebaseio.com",
  projectId: "taskmanager-3d611",
  storageBucket: "taskmanager-3d611.appspot.com",
  messagingSenderId: "734939824205",
  appId: "1:734939824205:web:1a5fd8f24678739896dc04"
};

export const firebaseApp        = firebase.initializeApp(firebaseConfig);


export const tasksRef           = firebase.database().ref("tasks");
export const tasksCompletedRef  = firebase.database().ref("tasksCompleted");
export const usersRef           = firebase.database().ref("users");

// usersRef.child("ZeNHJiHR1bNUUNljCnjX8KsZvVo2").set({
//   website: 'thuy.com',
//   isAdmin: false,
//   uid: "ZeNHJiHR1bNUUNljCnjX8KsZvVo2"
// })