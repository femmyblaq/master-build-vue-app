<template>
  <div id="app">
    <app-header
      v-if="!['Signin', 'Signup', 'Dashboard', 'help'].includes($route.name)"
    />
    <router-view></router-view>
    <app-footer
      v-if="!['Signin', 'Signup', 'Dashboard', 'help'].includes($route.name)"
    />
    <notifications group="foo" :max="1" />
    <!-- <app-sidebar></app-sidebar>
    <app-header></app-header> -->
  </div>
</template>

<script>
import appHeader from "./components/header";
import appFooter from "./components/Footer/footer";

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
