<template>
  <div id="layout-default">
    <header>
      <TopNavbar />
    </header>

    <main>
      <slot />
    </main>

    <footer class="text-muted py-5">
      <div class="container">
        <p class="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p class="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
        <p class="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.2/getting-started/introduction/">getting started guide</a>.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import TopNavbar from "../components/navbars/TopNavbar.vue";
</script>

<style lang="scss"
></style>
