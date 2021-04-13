<template>
  <div class="container-fluid">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
  </div>
</template>

<script>
import appHeader from "../../components/layout/header";
import appSidebar from "../../components/layout/sidebar";
export default {
  components: {
    appHeader,
    appSidebar,
  },
};
</script>

<style></style>
