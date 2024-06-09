import { defineStore } from 'pinia'
import axios from "axios";

const csrf = () => axios.get('/sanctum/csrf-cookie')

export const useAuthStore = defineStore({
  id: 'authStore',
  state: () => ({
    loggedIn: localStorage.getItem("isLoggedIn") ? true : false,
    user: [],
  }),
  getters: {
    //
  },
  actions: {
    async createUserWithEmailAndPassword(name, email, password, password_confirmation) {
      // Make a request
      await axios
        .post("/register", {
          name: name,
          email: email,
          password: password,
          password_confirmation: password_confirmation,
        })
        .then(function (response) {
          // handle success
          localStorage.setItem("isLoggedIn", true);

          return Promise.resolve(response.data);
        })
        .catch(function (error) {
          // handle error
          return Promise.reject(error);
        });
    },
    async signInWithEmailAndPassword(email, password) {
      await csrf();
      // Make a request
      await axios
        .post("/login", {
          email: email,
          password: password,
        })
        .then(function (response) {
          // handle success
          localStorage.setItem("isLoggedIn", true);

          return Promise.resolve(response.data);
        })
        .catch(function (error) {
          // handle error
          return Promise.reject(error);
        });
    },
    async signOut() {
      await csrf();
      // Make a request
      await axios
        .post("/logout")
        .then(function (response) {
          // handle success
          localStorage.removeItem("isLoggedIn");

          return Promise.resolve(response.data);
        })
        .catch(function (error) {
          // handle error
          return Promise.reject(error);
        })
        .then(function () {
          // always executed
        });
    },
    
    async sendPasswordResetLink(email) {
      await csrf();
      // Make a request
      await axios
        .post("/forgot-password", {
          email: email,
        })
        .then(function (response) {
          // handle success

          return Promise.resolve(response.data);
        })
        .catch(function (error) {
          // handle error
          return Promise.reject(error);
        });
    },
    async resetPasswordWithToken(token, email, password, password_confirmation) {
      await csrf();
      // Make a request
      await axios
        .post("/reset-password", {
          token: token,
          email: email,
          password: password,
          password_confirmation: password_confirmation,
        })
        .then(function (response) {
          // handle success

          return Promise.resolve(response.data);
        })
        .catch(function (error) {
          // handle error
          return Promise.reject(error);
        });
    },

    async ftechUser() {
      this.user = (await axios.get("api/user")).data;

      this.loggedIn = true;
    },
  }
})
