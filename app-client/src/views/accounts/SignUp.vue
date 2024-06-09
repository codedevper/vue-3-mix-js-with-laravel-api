<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <h2 class="modal-title fw-bold mb-0">Sign up for free</h2>
        <RouterLink to="/" type="button" class="btn-close"></RouterLink>
      </div>

      <div class="modal-body p-5 pt-0">
        <form class="">
          <div class="form-floating mb-3">
            <input type="text" class="form-control rounded-3" id="name" placeholder="Your name">
            <label for="name">Your name</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="email" placeholder="name@example.com">
            <label for="email">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-3" id="password" placeholder="Password">
            <label for="password">Password</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-3" id="password_confirmation" placeholder="Confirm Password">
            <label for="password_confirmation">Confirm Password</label>
          </div>
          <small class="text-muted mb-2">By clicking Sign up, you agree to the terms of use.</small>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
          <RouterLink to="/accounts/signin" class="w-100 mt-2 btn btn-lg rounded-3 btn-outline-dark" type="button">Already have an account?</RouterLink>
          <hr class="my-4">
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

</script>

<style lang="scss" scoped>

</style>