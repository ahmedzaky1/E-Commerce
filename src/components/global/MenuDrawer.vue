<template>
  <div class="menu-drawer">
    <v-navigation-drawer
      temporary
      v-model="drawer"
      :width="windowWidth <= 767 ? windowWidth / 2 : 370"
      class="px-5 pt-0 cart-drawer"
    >
      <v-card class="px-0" elevation="0">
        <v-card-title
          class="p1-0 pr-2 d-flex justify-space-between align-center w-100"
          style="font-size: 17px; font-weight: bold"
          >Menu <v-icon @click="drawer = false">mdi-close</v-icon></v-card-title
        >

        <v-list>
          <v-list-item
            class="px-0"
            v-for="cat in categories"
            :key="cat.route"
            @click="
              $router.push({
                name: 'products_category',
                params: { title: cat.title, category: cat.route },
              })
            "
          >
            <v-list-item-title>{{ cat.title }}</v-list-item-title>
          </v-list-item>
          <v-list-group>
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" class="px-0">
                <v-list-item-title>Languages </v-list-item-title>
              </v-list-item>
            </template>
            <v-list-item>
              <v-list-item-title>English</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Deutsch</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapState } from "pinia";
export default {
  inject: ["Emitter"],
  props: {
    windowWidth: {
      type: Number,
    },
  },
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("openMenu", () => {
      this.drawer = !this.drawer;
    });
  },
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
};
</script>
