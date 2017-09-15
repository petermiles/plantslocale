const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const ref = admin.database().ref();

exports.createUserAccount = functions.auth.user().onCreate(event => {
  const uid = event.data.uid;
  const email = event.data.email;
  const watchlist = "hello";
  const photoUrl =
    event.data.photoUrl || "http://via.placeholder.com/350x150.jpg";

  const newUserRef = ref.child(`/users/${uid}`);
  return newUserRef.set({
    photoUrl: photoUrl,
    email: email
  });
});
