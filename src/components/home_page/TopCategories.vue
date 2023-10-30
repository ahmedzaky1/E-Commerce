<template>
  <div class="top-categories">
    <div class="cyber-banner">
      <img src="@/assets/images/cyber-banner.webp" alt="" />
    </div>
    <div class="categories pt-13">
      <div class="title mb-5 px-5 d-flex align-center justify-center">
        <h2
          style="font-weight: 900; font-size: 22px; margin-left: 95px"
          class="text-center flex-grow-1"
        >
          Top Categories
        </h2>
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
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            v-for="cat in categories"
            :key="cat.title"
          >
            <v-card class="text-center py-3 px-2" elevation="0">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="img-parent"
                  style="
                    overflow: hidden;
                    width: 100%;
                    height: 180px;
                    border-radius: 50%;
                  "
                >
                  <img
                    :style="`height: 100% ;display: block;margin-left: auto;margin-right: auto; cursor:pointer; transition: 0.3s all ease-in-out; scale: ${
                      isHovering ? 1.05 : 1
                    }`"
                    :src="cat.image"
                    alt=""
                    v-bind="props"
                  />
                </div>
              </v-hover>
              <v-card-text>{{ cat.title }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        title: "Mobile Phone",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "Laptops & Tablets",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "Televisions",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
      {
        title: "PCs & Accessories",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "Audio & Video",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
      },
      {
        title: "Gaming & Accessories",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
      },
      {
        title: "Home Appliances",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862",
      },
      {
        title: "Kitchen",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=10616357514144629263",
      },
      {
        title: "Cameras",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=912885117927234410",
      },
      {
        title: "ConSumables",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=10616357514144629263",
      },
      {
        title: "Smart Homes",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=10616357514144629263",
      },
      {
        title: "Accessories",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=10616357514144629263",
      },
    ],
  }),
};
</script>

<style lang="scss">
//media
@media (max-width: 580px) {
  .cyber-banner {
    height: 300px !important;
  }
  .categories {
    .title {
      display: flex;
      position: relative;
      h2 {
        position: absolute;
        display: flex;
        font-size: 20px !important;
        justify-content: start;
        left: -70px;
      }
    }
  }
  .shop-all {
    position: absolute;
    font-size: 12px !important;
    background-color: rgb(87, 10, 160);
    width: fit-content;
    border-radius: 50%;
    left: 300px;
  }
}
</style>
