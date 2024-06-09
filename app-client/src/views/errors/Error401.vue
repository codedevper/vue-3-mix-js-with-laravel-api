<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="text-center p-5 pb-4 border-bottom-0">
        <h2 class="modal-title fw-bold mb-0">Session Expired!</h2>
      </div>

      <div class="modal-body p-5 pt-0 d-flex justify-content-center align-items-center">
        <div class="text-center text-sm text-gray-600 mb-4">Please log in again to continue.</div>
      </div>
      <div class="modal-footer border-top-0">
        <a href="/accounts/signin" class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="button">Sign in</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";

const internalInstance = getCurrentInstance();

internalInstance.appContext.config.globalProperties.$Progress.fail();

localStorage.removeItem("isLoggedIn");
document.cookie = "laravel_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "XSRF-TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
</script>

<style lang="scss" scoped></style>
