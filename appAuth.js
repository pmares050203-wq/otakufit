import { auth, db } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

export function requireUser(cb){
  onAuthStateChanged(auth, async (user) => {
    if(!user){
      window.location.href = "login.html";
      return;
    }
    const uref = doc(db, "users", user.uid);
    const usnap = await getDoc(uref);
    cb(user, usnap.exists() ? usnap.data() : null);
  });
}
