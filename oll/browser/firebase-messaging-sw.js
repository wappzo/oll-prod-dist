importScripts('https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.21.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBokA32ReLh-5OrtR_CXxBWn26lcSqUIik",
  authDomain: "oll-co.firebaseapp.com",
  projectId: "oll-co",
  storageBucket: "oll-co.appspot.com",
  messagingSenderId: "406496525381",
  appId: "1:406496525381:web:e941851c8617c40d70372c",
  measurementId: "G-JX7GQKQRFC"
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  // Customize notification here
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon,
    data: payload.data
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  if (event.notification.data.url) {
    event.waitUntil(self.clients.openWindow(event.notification.data.url));
  } else {
    event.waitUntil(self.clients.openWindow('/'));
  }
});