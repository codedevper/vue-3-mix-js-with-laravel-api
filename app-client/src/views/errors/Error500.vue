<template>
  <div class="modal-dialog modal-fullscreen px-4" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="text-center p-5 pb-4 border-bottom-0">
        <h2 class="modal-title fw-bold mb-0">Oops...</h2>
      </div>

      <div class="modal-body p-5 pt-0 d-flex justify-content-center align-items-center">
        <div class="text-center text-sm text-gray-600 mb-4">
          Something went wrong! Please try again.
        </div>
      </div>
      <div class="modal-footer border-top-0">
        <RouterLink to="/" class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="button">Back to Home</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
