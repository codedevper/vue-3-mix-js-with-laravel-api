<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <h2 class="modal-title fw-bold mb-0">Verify Email</h2>
        <RouterLink to="/" type="button" class="btn-close"></RouterLink>
      </div>

      <div class="modal-body p-5 pt-0">
        <div class="alert alert-danger d-flex align-items-center" role="alert">
          <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill" /></svg>
          <div>Your email address is not verified.</div>
        </div>
        <form class="">
          <div class="mb-3">
            <input type="hidden" class="form-control rounded-3" id="email" placeholder="name@example.com" />
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Resend Verification Email</button>
          <RouterLink to="/accounts/signout" class="w-100 mt-2 btn btn-lg rounded-3 btn-danger" type="button">Sign out</RouterLink>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
