<template>
  <div class="new-products pt-12">
    <div class="title pt-15 px-10 d-flex align-center justify-space-between">
      <h2 style="font-weight: 900; font-size: 30px">New Products</h2>
      <a
        href="#"
        class="text-white px-6 py-4 shop-all"
        style="
          font-size: 18px;
          background-color: rgb(87, 10, 160);
          width: fit-content;
          border-radius: 50%;
        "
        >Shop All</a
      >
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="7" class="pt-20 order-1 order-md-0">
          <Swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            class="pb-10 px-5"
            :autoplay="{ delay: 3000 }"
            :breakpoints="breakpoints"
          >
            <SwiperSlide v-for="item in products" :key="item.id">
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
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      )
                    }}</span
                  >
                </v-card-text>
                <v-btn-toggle v-model="showenItem[item.title]" mandatory>
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
                    class="py-3 px-12 choose-option"
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
            </SwiperSlide>
            <div class="swiper-prev"></div>
            <div class="swiper-next"></div>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col cols="12" md="5">
          <img src="@/assets/images/vr-banner.webp" class="w-100" alt="" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"; //  جاهزة component عبارة عن
import { Pagination, Autoplay } from "swiper";
export default {
  inject: ["Emitter"],
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  props: {
    products: {
      type: Array,
    },
    index: {
      type: Number,
    },
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    showenItem: {},
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      580: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  }),
};
</script>

<style lang="scss">
.new-products {
  .img-parent:hover {
    .quick-view-btn {
      opacity: 1 !important;
    }
  }
}
// Media Queries

@media (max-width: 580px) {
  .new-products {
    height: 300px !important;
  }
  .swiper-button-next,
  .swiper-button-prev {
    top: 90%;
  }
  .choose-option {
    margin-left: 32px;
  }
  .new-products {
    .title {
      h2 {
        font-size: 20px !important;
      }
    }
  }
  .shop-all {
    font-size: 12px !important;
    background-color: rgb(87, 10, 160);
    width: fit-content;
    border-radius: 50%;
  }
}
</style>
