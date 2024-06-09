<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <h2 class="modal-title fw-bold mb-0">Sign in now</h2>
        <RouterLink to="/" type="button" class="btn-close"></RouterLink>
      </div>

      <div class="modal-body p-5 pt-0">
        <div v-if="message" class="alert alert-danger d-flex align-items-center" role="alert">
          <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
            <use xlink:href="#exclamation-triangle-fill" />
          </svg>
          <div>
            {{ message }}
          </div>
        </div>

        <form @submit.prevent="emailSignIn">
          <div class="form-floating mb-3">
            <input v-model="email" type="email" class="form-control rounded-3" :class="errors.email ? 'is-invalid' : ''" id="email" placeholder="name@example.com" />
            <label for="email">Email address</label>
            <div v-if="errors.email" id="email" class="invalid-feedback">
              {{ errors.email.toString() }}
            </div>
          </div>
          <div class="form-floating mb-3">
            <input v-model="password" type="password" class="form-control rounded-3" :class="errors.password ? 'is-invalid' : ''" id="password" placeholder="Password" />
            <label for="password">Password</label>
            <div v-if="errors.password" class="invalid-feedback">
              {{ errors.password.toString() }}
            </div>
          </div>
          <div class="mb-3">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col text-start">
                <div class="checkbox">
                  <label> <input type="checkbox" value="remember-me" /> Remember me </label>
                </div>
              </div>
              <div class="col text-end">
                <RouterLink to="/accounts/forgot-password" class="link-dark text-decoration-none">Forgot Password?</RouterLink>
              </div>
            </div>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" :disabled="!email || !password">Sign in</button>
          <RouterLink to="/accounts/signup" class="w-100 mt-2 btn btn-lg rounded-3 btn-outline-dark" type="button">Create an account</RouterLink>
          <hr class="my-4" />
          <h2 class="text-center fs-5 fw-bold mb-3">Or use a third-party</h2>
          <button class="w-100 py-2 mb-2 btn btn-info text-light rounded-3" type="button">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#twitter" /></svg>
            Sign up with Twitter
          </button>
          <button class="w-100 py-2 mb-2 btn btn-primary rounded-3" type="button">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#facebook" /></svg>
            Sign up with Facebook
          </button>
          <button class="w-100 py-2 mb-2 btn btn-dark rounded-3" type="button">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#github" /></svg>
            Sign up with GitHub
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { getCurrentInstance } from "vue";

const auth = useAuthStore();

const internalInstance = getCurrentInstance();

const email = ref("");
const password = ref("");
const message = ref();
const errors = ref({});
const loading = ref(false);

function emailSignIn() {
  internalInstance.appContext.config.globalProperties.$Progress.start();
  loading.value = !loading.value;
  // Make a request
  auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then(function (response) {
      internalInstance.appContext.config.globalProperties.$Progress.finish();
      // handle success
      console.log(response);

      window.location.reload(true);
    })
    .catch(function (error) {
      internalInstance.appContext.config.globalProperties.$Progress.fail();
      // handle error
      //console.log(error.response.data.message);
      //console.log(error.response.data.errors);
      message.value = error.response.data.message;
      errors.value = error.response.data.errors;
      loading.value = !loading.value;
    })
    .then(function () {
      // always executed
    });
}
</script>

<style lang="scss" scoped></style>
