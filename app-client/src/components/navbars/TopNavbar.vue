<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-mix">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Vue Mix</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" href="#">Home</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link" href="#">About</RouterLink>
          </li>
        </ul>

        <form class="input-group d-lg-none mb-2 mb-lg-0" role="search">
          <input class="form-control rounded-0 border-0" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-light bg-white rounded-0 border-0" type="submit"><i class="bi bi-search"></i></button>
        </form>

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item d-none d-lg-block">
            <a class="nav-link link-light" href="#"><i class="bi bi-search me-2"></i></a>
          </li>
          <li class="nav-item">
            <LangSwitch />
          </li>

          <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
            <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
            <hr class="d-lg-none my-2 text-white-50" />
          </li>

          <MyAccount />

          <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
            <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
            <hr class="d-lg-none my-2 text-white-50" />
          </li>

          <li class="nav-item">
            <ToggleTheme />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import MyAccount from "../dropdowns/MyAccount.vue";
import ToggleTheme from "../dropdowns/ToggleTheme.vue";
import LangSwitch from "../dropdowns/LangSwitch.vue";
</script>

<style lang="scss" scoped></style>
