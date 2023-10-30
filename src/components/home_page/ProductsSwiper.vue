<template>
  <div class="product-swiper pt-16 px-5 py-6">
    <div class="title mb-10 px-5 d-flex align-center justify-space-between">
      <h2
        style="font-weight: 900; font-size: 30px"
        :class="[[`text-${titleColor}`]]"
      >
        {{ title }}
      </h2>
      <router-link
        class="text-white px-6 py-4 shop-all"
        style="
          font-size: 18px;
          background-color: rgb(87, 10, 160);
          width: fit-content;
          border-radius: 50%;
        "
        :to="{
          name: 'products_category',
          params: {
            title: categories[index].title,
            category: categories[index].route,
          },
        }"
        >Shop All</router-link
      >
    </div>
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      class="pb-10 px-5"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
      :autoplay="{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnTnteraction: false,
      }"
      :breakpoints="breakpoints"
      :loop="true"
    >
      <SwiperSlide v-for="item in products" :key="item.id">
        <v-card elevation="0" class="pb-5">
          <v-hover v-slot="{ isHovering, props }">
            <div class="img-parent" style="height: 200px; overflow: hidden">
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
              item.description.split(" ").length <= 8
                ? item.description
                : item.description.split(" ").slice(0, 9).join(" ") + "...."
            }}
          </v-card-text>
          <v-rating
            v-model="item.rating"
            half-increments
            readonly
            color="yellow-darken-3"
            size="x-small"
            density="combact"
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
          <div class="mt-5 buttom">
            <v-btn
              density="combact"
              class="py-3 px-12 choose-option"
              style="text-transform: none; border-radius: 30px"
              variant="outlined"
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
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"; //  جاهزة component عبارة عن
import { Pagination, Navigation, Autoplay } from "swiper";
import { productsModule } from "@/stores/products";
import { mapState } from "pinia";
export default {
  inject: ["Emitter"],
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
  props: {
    products: {
      type: Array,
    },
    title: {
      type: String,
    },
    titleColor: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
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
      767: {
        slidesPerView: 3,
      },
      990: {
        slidesPerView: 4,
      },
    },
  }),
};
</script>

<style lang="scss">
.product-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 2px solid rgb(49, 46, 46);
    background-color: white;
    top: 40%;
    &::after {
      font-size: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(49, 46, 46);
      font-weight: 900;
    }
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    //padding-bottom: 30px;
  }
  .img-parent:hover {
    .quick-view-btn {
      opacity: 1 !important;
    }
  }
}

// Media Queries

@media (max-width: 580px) {
  .img-parent {
    height: 300px !important;
  }
  .swiper-button-next,
  .swiper-button-prev {
    top: 90%;
  }
  .choose-option {
    margin-left: 32px;
  }
  .product-swiper {
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
