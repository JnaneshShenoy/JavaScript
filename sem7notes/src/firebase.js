import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
   apiKey: "AIzaSyD4R6QiOOfTaEdO9LzAncyBPhcomI08YOM",
   authDomain: "sem7notes-90251.firebaseapp.com",
   projectId: "sem7notes-90251",
   storageBucket: "sem7notes-90251.appspot.com",
   messagingSenderId: "558010358290",
   appId: "1:558010358290:web:3a1a7bb5d86fc9481c96cb",
   // measurementId: "G-YWQPQ1Q5HN"
 };

 const app = initializeApp(firebaseConfig);
 const storage = getStorage(app);
//  const analytics = getAnalytics(app);

export { storage };
