import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../config/firebaseConfig";

const api = {
  login: {
    async sigIn(email, password) {
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(user);
        return user;
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error(errorMessage);
      }
    },

    async signUp(email, password) {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(user);
        return user;
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error(errorMessage);
      }
    },

    userIsSigned() {
      return onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          return uid;
        } else {
          return null;
        }
      });
    },
  },
};

export default api;
