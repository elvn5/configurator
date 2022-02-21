// eslint-disable-next-line max-len
// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
import functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
import admin = require("firebase-admin");
admin.initializeApp();

exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await admin.firestore().collection("messages").add({original: original});
  // Send back a message that we've successfully written the message
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});

