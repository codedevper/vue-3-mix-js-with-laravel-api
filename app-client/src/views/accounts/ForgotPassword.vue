<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <h2 class="modal-title fw-bold mb-0">Forgot Password?</h2>
        <RouterLink to="/" type="button" class="btn-close"></RouterLink>
      </div>

      <div class="modal-body p-5 pt-0">
        <div class="mb-4 text-sm text-gray-600">
          No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
        </div>

        <div v-if="message" class="alert alert-danger d-flex align-items-center" role="alert">
          <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
            <use xlink:href="#exclamation-triangle-fill" />
          </svg>
          <div>
            {{ message }}
          </div>
        </div>

        <div v-if="success" class="alert alert-success d-flex align-items-center" role="alert">
          <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
            <use xlink:href="#check-circle-fill" />
          </svg>
          <div>
            We have emailed your password reset link!
          </div>
        </div>

        <form @submit.prevent="resetPassword">
          <div class="form-floating mb-3">
            <input v-model="email" type="email" class="form-control rounded-3" :class="errors.email ? 'is-invalid' : ''" id="email" placeholder="name@example.com" />
            <label for="email">Email address</label>
            <div v-if="errors.email" id="email" class="invalid-feedback">
              {{ errors.email.toString() }}
            </div>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" :disabled="!email">Send Password Reset Link</button>
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
const message = ref();
const errors = ref({});
const loading = ref(false);
const success = ref(false);

function resetPassword() {
  internalInstance.appContext.config.globalProperties.$Progress.start();
  loading.value = !loading.value;
  // Make a request
  auth
    .sendPasswordResetLink(email.value)
    .then(function (response) {
      internalInstance.appContext.config.globalProperties.$Progress.finish();
      // handle success
      console.log(response);

      success.value = true;
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
