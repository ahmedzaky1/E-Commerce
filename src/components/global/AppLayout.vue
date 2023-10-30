<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer :windowWidth="windowWidth" />
      <MenuDrawer :windowWidth="windowWidth" />
      <v-main
        :style="`padding-top: ${
          $route.name == 'check_out'
            ? '0px'
            : windowWidth <= 990
            ? '60px'
            : '150px'
        }`"
      >
        <slot></slot>
      </v-main>
      <AppNav v-show="windowWidth > 990 && $route.name != 'check_out'" />
      <ResponsiveNav
        v-show="windowWidth <= 990 && $route.name != 'check_out'"
      />
      <FixedNav v-show="windowWidth > 990 && $route.name != 'check_out'" />
      <AppFooter v-show="$route.name != 'check_out'" />
    </v-layout>
  </div>
</template>

<!-- <script setup>
import { ref } from "vue";
const drawer = ref(false);
</script> -->

<script>
import AppNav from "./AppNav.vue";
import FixedNav from "./FixedNav.vue";
import AppFooter from "./AppFooter.vue";
import CartDrawer from "./CartDrawer.vue";
import ResponsiveNav from "./ResponsiveNav.vue";
import MenuDrawer from "./MenuDrawer.vue";
export default {
  data: () => ({
    windowWidth: 0,
  }),
  components: {
    AppNav,
    AppFooter,
    CartDrawer,
    FixedNav,
    ResponsiveNav,
    MenuDrawer,
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
};
</script>
