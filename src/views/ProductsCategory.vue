<template>
  <div class="product-category mt-10">
    <h1 class="text-center" style="font-size: 25px; font-weight: 900">
      {{ $route.params.title }}
    </h1>
    <v-container>
      <v-card :loading="loading" class="pt-5" min-height="700px" elevation="0">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="item in categoryProducts.products"
            :key="item.id"
            class="px-10 px-sm-5 mt-8 mt-lg-0"
          >
            <v-card elevation="0" class="pb-5">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="img-parent position-relative"
                  style="height: 170px; overflow: hidden"
                >
                  <img
                    :src="
                      showenItem[item.title]
                        ? showenItem[item.title]
                        : item.thumbnail
                    "
                    class="w-100"
                    :style="`height: 100% ; cursor:pointer; transition: 0.3s all ease-in-out; scale: ${
                      isHovering ? 1.05 : 1
                    }`"
                    alt=""
                    v-bind="props"
                  />
                  <v-btn
                    density="compact"
                    width="100"
                    height="35"
                    variant="outlined"
                    color="black"
                    class="bg-white quick-view-btn"
                    style="
                      text-transform: none;
                      position: absolute;
                      left: 50%;
                      top: 21%;
                      transform: translate(-50%, -50%);
                      border-radius: 30px;
                      font-size: 14px;
                      transition: 0.2 all ease-in-out;
                      opacity: 0;
                    "
                    @click="openQuickView(item)"
                    >Quick View</v-btn
                  >
                </div>
              </v-hover>
              <v-card-text class="pl-0 pb-1 pt-7" style="font-size: 17px">
                ({{ item.title }})
                {{
                  item.description + " " + item.title.split(" ").length <= 4
                    ? item.description
                    : item.description
                        .split(" ")
                        .slice(0, 6 - item.title.split(" ").length)
                        .join(" ") + " ..."
                }}
              </v-card-text>
              <v-rating
                v-model="item.rating"
                half-increments
                readonly
                color="yellow-darken-3"
                size="x-small"
                density="cobact"
              ></v-rating>
              <v-card-text class="pl-0 pt-0">
                <del>${{ item.price }}</del> From
                <span
                  class="text-red font-weight-bold"
                  style="font-weight: 900; font-size: 19px"
                  >${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100)
                    )
                  }}</span
                >
              </v-card-text>
              <v-btn-toggle v-model="showenItem[item.title]">
                <v-btn
                  v-for="(pic, i) in item.images"
                  :value="pic"
                  :key="i"
                  size="x-small"
                  rounded="xl"
                  :ripple="false"
                >
                  <img
                    :src="pic"
                    alt=""
                    width="30"
                    style="
                      border-radius: 50%;
                      border: 1px solid rgb(135, 135, 135);
                      height: 30px;
                    "
                  />
                </v-btn>
              </v-btn-toggle>
              <div class="mt-5">
                <v-btn
                  density="combact"
                  class="py-3 px-12"
                  style="text-transform: none; border-radius: 30px"
                  variant="outlined"
                  @click="
                    $router.push({
                      name: 'product_details',
                      params: { productId: item.id },
                    })
                  "
                  ><span style="font-size: 16px; font-weight: 700"
                    >Choose Options</span
                  ></v-btn
                >
              </div>
              <!-- {{ showenItem[item.title] }}  Show path/name of image -->
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
export default {
  inject: ["Emitter"],
  data: () => ({
    showenItem: {},
    loading: false,
  }),
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  watch: {
    async $route() {
      document.documentElement.scrollTo(0, 0);
      this.loading = true;
      await this.getProductsByCategory(this.$route.params.category);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.getProductsByCategory(this.$route.params.category);
    this.loading = false;
  },
};
</script>

<style lang="scss">
.product-category {
  .img-parent:hover {
    .quick-view-btn {
      opacity: 1 !important;
    }
  }
}
</style>
