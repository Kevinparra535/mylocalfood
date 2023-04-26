const api = {
  login: {
    async sigIn(email, password) {
      try {
        return user;
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error(errorMessage);
      }
    },

    async signUp(email, password) {
      try {
        return user;
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error(errorMessage);
      }
    },
  },
};

export default api;
