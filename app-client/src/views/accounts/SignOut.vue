<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="p-5 pb-4 border-bottom-0">
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      <div class="modal-body p-5 pt-0 d-flex justify-content-center align-items-center">
        <div class="text-center text-sm text-gray-600 mb-4">Please wait...</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { onMounted } from "@vue/runtime-core";
import { getCurrentInstance } from "vue";

const auth = useAuthStore();

document.title = `Please wait...`;

onMounted(() => emailSignOut());

const internalInstance = getCurrentInstance();

function emailSignOut() {
  internalInstance.appContext.config.globalProperties.$Progress.start();
  // Make a request
  auth
    .signOut()
    .then(function (response) {
      internalInstance.appContext.config.globalProperties.$Progress.finish();
      // handle success
      console.log(response);

      window.location.href = "/accounts/signin";
    })
    .catch(function (error) {
      internalInstance.appContext.config.globalProperties.$Progress.fail();
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
</script>

<style lang="scss" scoped>

</style>
