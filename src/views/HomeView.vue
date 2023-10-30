<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsCompontent
      :products="flashDeals"
      title="Flash Deals"
      titleColor="red"
      :index="0"
    />
    <TopCategories />
    <NewProducts :products="newProducts" :index="1" />
    <QualityFeatures />
    <ProductsCompontent
      :products="mobilePhone"
      title="Mobile Phone"
      titleColor="#404040"
      :index="0"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <img src="@/assets/images/band-left-cover.webp" alt="" />
        </v-col>
        <v-col cols="6">
          <img src="@/assets/images/band-right-cover.webp" alt="" />
        </v-col>
      </v-row>
    </v-container>
    <ProductsCompontent
      :products="fragrances"
      title="Fragrances"
      titleColor="#404040"
      :index="2"
    />
    <img src="@/assets/images/tv-banner.webp" class="w-100" alt="" />
    <ProductsCompontent
      :products="groceries"
      title="Groceries"
      titleColor="#404040"
      :index="6"
    />
    <WhyShop />
  </div>
</template>

<script>
import UpperBanner from "../components/home_page/UpperBanner";
import TheFeatures from "../components/home_page/TheFeatures";
import TopOffers from "../components/home_page/TopOffers";
import ProductsCompontent from "../components/home_page/ProductsSwiper.vue";
import TopCategories from "../components/home_page/TopCategories.vue";
import NewProducts from "../components/home_page/NewProducts.vue";
import QualityFeatures from "../components/home_page/QualityFeatures.vue";
import WhyShop from "../components/home_page/WhyShop.vue";
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsCompontent,
    TopCategories,
    NewProducts,
    QualityFeatures,
    WhyShop,
  },
  computed: {
    ...mapState(productsModule, [
      "flashDeals",
      "newProducts",
      "mobilePhone",
      "fragrances",
      "groceries",
    ]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
