<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <h2 class="modal-title fw-bold mb-0">Reset Password</h2>
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

        <div v-if="success" class="alert alert-success d-flex align-items-center" role="alert">
          <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
            <use xlink:href="#check-circle-fill" />
          </svg>
          <div>
            Your password has been reset!
          </div>
        </div>

        <form @submit.prevent="resetPassword">
          <div class="form-floating mb-3">
            <input v-model="password" type="password" class="form-control rounded-3" :class="errors.password ? 'is-invalid' : ''" id="password" placeholder="New Password" />
            <label for="password">New Password</label>
          <div v-if="errors.password" class="invalid-feedback">
            {{ errors.password.toString() }}
          </div>
          </div>
          <div class="form-floating mb-3">
            <input v-model="password_confirmation" type="password" class="form-control rounded-3" :class="errors.password_confirmation ? 'is-invalid' : ''" id="password_confirmation" placeholder="Confirm New Password" />
            <label for="password_confirmation">Confirm New Password</label>
            <div v-if="errors.password_confirmation" class="invalid-feedback">
              {{ errors.password_confirmation.toString() }}
            </div>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" :disabled="!password || !password_confirmation">Reset Password</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { getCurrentInstance } from "vue";
import { useRoute } from "vue-router";

const auth = useAuthStore();

const internalInstance = getCurrentInstance();

const route = useRoute();

const token = ref(route.params.token);
const email = ref(route.query.email);
const password = ref("");
const password_confirmation = ref("");
const message = ref();
const errors = ref({});
const loading = ref(false);
const success = ref(false);

function resetPassword() {
  internalInstance.appContext.config.globalProperties.$Progress.start();
  loading.value = !loading.value;
  // Make a request
  auth
    .resetPasswordWithToken(token.value, email.value, password.value, password_confirmation.value)
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
