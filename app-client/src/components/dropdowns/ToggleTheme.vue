<template>
  <div class="dropdown">
    <a class="nav-link link-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-circle-half"></i> <span class="d-lg-none ms-2">Toggle theme</span></a>
    <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="navbarDropdown">
      <li>
        <a class="dropdown-item" href="#" @click="lightMode"><i class="bi bi-sun-fill opacity-50 me-2"></i> Light</a>
      </li>
      <li>
        <a class="dropdown-item" href="#" @click="darkMode"><i class="bi bi-moon-stars-fill opacity-50 me-2"></i> Dark</a>
      </li>
      <li><hr class="dropdown-divider" /></li>
      <li>
        <a class="dropdown-item" href="#" @click="autoMode"><i class="bi bi-circle-half opacity-50 me-2"></i> Auto</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const activeTheme = localStorage.getItem("theme");

const checkSystemTheme = function () {
  // if OS dark mode is set, and there's no stored theme, set the theme to dark (but don't store it)
  if (window.matchMedia("(prefers-color-scheme: dark)").matches && !activeTheme) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    // otherwise, set the theme to the default (light)
    document.documentElement.removeAttribute("data-theme");
  }
};

if (activeTheme) {
  document.documentElement.setAttribute("data-theme", activeTheme);
} else {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    checkSystemTheme();
  });
  checkSystemTheme();
}

function lightMode() {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
}

function darkMode() {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
}

function autoMode() {
  document.documentElement.removeAttribute("data-theme");
  localStorage.removeItem("theme");
  checkSystemTheme();
}
</script>

<style lang="scss" scoped></style>
