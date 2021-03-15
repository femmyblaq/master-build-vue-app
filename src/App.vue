<template>
  <div id="app">
    <app-header v-if="!['signin', 'signup', 'help'].includes($route.name)" />
    <router-view></router-view>
    <app-footer v-if="!['signin', 'signup', 'help'].includes($route.name)" />
    <!-- <app-sidebar></app-sidebar>
    <app-header></app-header> -->
  </div>
</template>

<script>
import appHeader from "./components/header";
import appFooter from "../Footer/footer";

export default {
  components: {
    appHeader,
    appFooter,
  },
};
// import appSidebar from "./components/layout/sidebar";
// import appHeader from "./components/layout/header";
// export default {
//   components: {
//     appSidebar,
//     appHeader,
//   },
// };
</script>

<style></style>
