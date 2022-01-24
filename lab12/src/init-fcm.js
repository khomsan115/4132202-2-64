import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyB560qvJwUrU8PaEnO6lb3pTrhybJ5H3XU",
  authDomain: "react-sec01-003.firebaseapp.com",
  projectId: "react-sec01-003",
  storageBucket: "react-sec01-003.appspot.com",
  messagingSenderId: "504087721169",
  appId: "1:504087721169:web:71b739e2c349d6e4e141f0"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BJDNJUa4KRDKcfwEnYML3vqGUBRFFoLnCWaibptaN7GWtAZOjQDZga4Weh-GMqFcD8bNUva1CQT33rvlOKfmF3w"
);

export { messaging };
