<template>
  <div class="quick-view">
    <v-dialog v-model="dialog" max-width="900" max-height="500">
      <v-icon
        style="
          position: absolute;
          right: -14px;
          top: -14px;
          background-color: black;
          color: rgb(180, 180, 180);
          font-size: 18px;
          padding: 13px;
          z-index: 10;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-card elevation="0" class="content_card">
        <v-container fluid class="bg-white pt-10 px-10">
          <v-row>
            <v-col cols="12" sm="7">
              <img
                :src="tab ? tab : product.thumbnail"
                class="w-100"
                alt=""
                height="400"
                v-if="!loading"
              />
              <v-skeleton-loader
                v-if="loading"
                type="image, image, image"
              ></v-skeleton-loader>
              <v-tabs center-active height="130" v-model="tab" class="mt-10">
                <v-tab
                  v-for="(img, i) in product.images"
                  :key="i"
                  class="mx-10"
                  :value="img"
                >
                  <img :src="img" alt="" width="70" height="100"
                /></v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="12" md="5" class="pt-0 pl-6 mt-8 mt-md-0">
              <v-skeleton-loader
                v-if="loading"
                type="article, article, article"
              ></v-skeleton-loader>
              <v-card elevation="0" v-if="!loading">
                <v-card-title
                  class="px-0"
                  style="
                    font-size: 19px;
                    font-weight: bold;
                    white-space: pre-warp;
                  "
                  >({{ product.title }}) Sample - {{ product.category }} For
                  Sale</v-card-title
                >
                <div
                  class="rating-parent d-flex align-center"
                  style="gap: 10px"
                >
                  <v-rating
                    v-model="product.rating"
                    half-increments
                    readonly
                    color="yellow-darken-3"
                    size="x-small"
                    density="cobact"
                  ></v-rating>
                  <span
                    class="mt-1"
                    style="color: rgb(88, 87, 87); font-size: 13px"
                    >Stock: {{ product.stock }}</span
                  >
                </div>
                <v-card-text
                  class="px-0"
                  style="color: rgb(88, 87, 87); font-size: 13px"
                  >{{ product.description }}</v-card-text
                >
                <v-card-text
                  class="px-0 pt-0"
                  style="color: rgb(88, 87, 87); font-size: 13px"
                  >Brand: {{ product.brand }}</v-card-text
                >
                <v-card-text
                  class="px-0 pt-0"
                  style="color: rgb(88, 87, 87); font-size: 13px"
                  >Availability:
                  {{
                    product.stock > 0 ? "In Stock" : "Out Of Srock"
                  }}</v-card-text
                >
                <v-card-text class="pl-0 pt-0">
                  <del>${{ product.price }}</del> From
                  <span
                    class="font-weight-bold"
                    style="font-weight: 900; font-size: 16px"
                    >${{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )
                    }}</span
                  >
                </v-card-text>
                <v-card-text class="pl-0 pt-0"> Quantity </v-card-text>
                <div
                  class="counter px-1"
                  style="
                    border-radius: 30px;
                    border: 1px solid rgb(197, 194, 194);
                    width: fit-content;
                  "
                >
                  <v-icon size="22px" @click="quantity > 1 ? quantity-- : 1"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    style="
                      border: none;
                      outline: none;
                      width: 60px;
                      font-size: 14px;
                    "
                    class="text-center py-3"
                    min="1"
                    v-model="quantity"
                  />
                  <v-icon size="22px" @click="quantity++">mdi-plus</v-icon>
                </div>
                <v-card-actions class="mt-7 w-100 px-0">
                  <v-btn
                    variant="outline"
                    style="
                      text-transform: none;
                      border-radius: 30px;
                      background-color: black;
                      color: white;
                      font-size: 15px;
                      font-weight: bold;
                    "
                    class="w-75"
                    density="compact"
                    height="45"
                    @click="addToCart(product)"
                    :loading="btnLoading"
                    >Add To Cart</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
import { cartStore } from "@/stores/cart";
import { mapActions } from "pinia";
export default {
  inject: ["Emitter"],
  components: {
    VSkeletonLoader,
  },
  methods: {
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.Emitter.emit("showMsg", item.title);
        this.dialog = false;
      }, 1000);
    },
  },
  data: () => ({
    dialog: false,
    loading: false,
    tab: "",
    quantity: 1,
    product: "",
    btnLoading: false,
  }),
  mounted() {
    this.Emitter.on("openQuickView", (data) => {
      this.loading = true;
      this.product = data;
      this.dialog = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  },
};
</script>

<style lang="scss">
.content_card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: #959595;
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: #d2cfcf;
  }
}
</style>
