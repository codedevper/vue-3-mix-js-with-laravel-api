<template>
  <div class="d-lg-flex">
    <li v-if="!$auth.loggedIn" class="nav-item mb-2 mb-lg-0">
      <RouterLink to="/accounts/signin" class="btn btn-light w-100 rounded-0" href="#">Sign in</RouterLink>
    </li>
    <li v-if="!$auth.loggedIn" class="nav-item mb-2 mb-lg-0">
      <RouterLink to="/accounts/signup" class="btn btn-outline-light w-100 rounded-0 ms-lg-2" href="#">Create account</RouterLink>
    </li>
    <li v-if="$auth.loggedIn" class="nav-item mb-2 mb-lg-0">
      <div class="dropdown">
        <a class="nav-link link-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="../../assets/img/avatars/Author-Wumpus-Webflow.png" alt="mdo" width="32" height="32" class="rounded-circle">
          <span class="text-light ms-2">Welcome, {{ $auth.user.name }}!</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDropdown">
          <li><RouterLink to="/console" class="dropdown-item" href="#">Console</RouterLink></li>
          <li><RouterLink to="/accounts/settings" class="dropdown-item" href="#">Settings</RouterLink></li>
          <li><hr class="dropdown-divider" /></li>
          <li><RouterLink to="/accounts/signout" class="dropdown-item" href="#">Sign out</RouterLink></li>
        </ul>
      </div>
    </li>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
