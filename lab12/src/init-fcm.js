import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyB1tsBHMx_vfHdX3eD7349jYgY73DVuOZA",
  authDomain: "sec01-de683.firebaseapp.com",
  projectId: "sec01-de683",
  storageBucket: "sec01-de683.appspot.com",
  messagingSenderId: "313359493033",
  appId: "1:313359493033:web:a7e190a1b167d171e386b8",
  measurementId: "G-RVJK43KJGT"
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
  "BBMq4_uI0RZKtT1ZO2jsow4eW81SRljA4eHabecYaxV0kHo8feobInbRDM95i00M2OyczwCfY4O9gbRMDs7rTxs"
);

export { messaging };
