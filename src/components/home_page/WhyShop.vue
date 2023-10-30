<template>
  <div class="shop-with py-14">
    <div class="title mb-5">
      <h2 class="text-center"><span>Why Shop</span>With Us?</h2>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
            <v-card
              elevation="0"
              class="text-center text-white"
              color="transparent"
            >
              <div class="img-parent">
                <img
                  src="@/assets/images/free-shipping.png"
                  style="
                    height: 100%;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    cursor: pointer;
                  "
                  alt=""
                />
              </div>
              <v-card-title
                style="
                  white-space: pre-warp;
                  line-height: 1.2;
                  font-weight: 500;
                "
                >Free Shipping On Frist Order</v-card-title
              >
              <v-card-text class="pb-0" style="font-size: 14px"
                >Fuga ratione minima tempora rem facere.</v-card-text
              >
              <a
                href="#"
                style="color: white; font-weight: 500; font-size: 14px"
                >Learn More</a
              >
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              elevation="0"
              class="text-center text-white"
              color="transparent"
            >
              <div class="img-parent">
                <img
                  src="@/assets/images/weekly-flash-sales.png"
                  style="
                    height: 100%;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    cursor: pointer;
                  "
                  alt=""
                />
              </div>
              <v-card-title
                style="
                  white-space: pre-warp;
                  line-height: 1.2;
                  font-weight: 500;
                "
                >Weekly Flash Sale</v-card-title
              >
              <v-card-text class="pb-0" style="font-size: 14px"
                >Fuga ratione minima tempora rem facere.</v-card-text
              >
              <a
                href="#"
                style="color: white; font-weight: 500; font-size: 14px"
                >Learn More</a
              >
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              elevation="0"
              class="text-center text-white"
              color="transparent"
            >
              <div class="img-parent">
                <img
                  src="@/assets/images/discount.png"
                  style="
                    height: 100%;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    cursor: pointer;
                  "
                  alt=""
                />
              </div>
              <v-card-title
                style="
                  white-space: pre-warp;
                  line-height: 1.2;
                  font-weight: 500;
                "
                >Anual Payment Discount</v-card-title
              >
              <v-card-text class="pb-0" style="font-size: 14px"
                >Fuga ratione minima tempora rem facere.</v-card-text
              >
              <a
                href="#"
                style="color: white; font-weight: 500; font-size: 14px"
                >Learn More</a
              >
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card
              elevation="0"
              class="text-center text-white"
              color="transparent"
            >
              <div class="img-parent">
                <img
                  src="@/assets/images/cash-back.png"
                  style="
                    height: 100%;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    cursor: pointer;
                  "
                  alt=""
                />
              </div>
              <v-card-title
                style="
                  white-space: pre-warp;
                  line-height: 1.2;
                  font-weight: 500;
                "
                >Cashback Reward Program</v-card-title
              >
              <v-card-text class="pb-0" style="font-size: 14px"
                >Fuga ratione minima tempora rem facere.</v-card-text
              >
              <a
                href="#"
                style="color: white; font-weight: 500; font-size: 16px"
                >Learn More</a
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss">
.shop-with {
  background-image: url(../../assets/images/why-shop-with-us-banner.webp);
  background-repeat: repeat-x;
  background-size: cover;
  h2 {
    color: white;
    font-size: 30px;
    font-weight: 900;
    span {
      color: rgb(38, 183, 188);
    }
  }
}
</style>
