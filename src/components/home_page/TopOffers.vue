<template>
  <div class="top-offers bg-grey-lighten-4 pt-9 pb-6">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4" class="py-0 px-3 pr-lg-6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%"
            >
              <img
                src="@/assets/images/playstations.webp"
                :style="`width: 100%; height:100%; cursor:pointer; transition: 0.3s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          class="py-0 px-3 pr-lg-6 mt-3 mt-lg-0"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%"
            >
              <img
                src="@/assets/images/headset.webp"
                :style="`width: 100%; height:100%; cursor:pointer; transition: 0.3s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" class="py-0 mt-3 mt-lg-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%"
            >
              <img
                src="@/assets/images/chairs.webp"
                :style="`width: 100%; height:100%; cursor:pointer; transition: 0.3s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" class="mt-10 pr-4 py-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%"
            >
              <img
                src="@/assets/images/iphones.webp"
                :style="`width: 100%; height:100%; cursor:pointer; transition: 0.3s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" class="mt-10 pl-4 py-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%"
            >
              <img
                src="@/assets/images/laptops.webp"
                :style="`width: 100%; height:100%;   cursor:pointer; transition: 0.3s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
