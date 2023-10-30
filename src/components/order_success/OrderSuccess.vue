<template>
  <div class="order-success">
    <v-dialog v-model="dialog" width="50%" persistent="">
      <v-card class="text-center py-7">
        <div class="text-center">
          <v-icon
            size="76"
            color="green"
            style="
              background: white;
              color: green;
              width: 100px;
              height: 100px;
              border-radius: 50%;
              font-size: 76px;
              border: 1px solid green;
            "
            >mdi-check</v-icon
          >
        </div>
        <v-card-title style="font-size: 30px; font-weight: bold; color: black"
          >Order Placed Successfuly!</v-card-title
        >
        <v-card-text style="font-size: 17px; color: rgb(127, 126, 126)"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          repellat aliquid nihil ab non ratione explicabo, reiciendis tempora
          consectetur, impedit odio expedita? Eum impedit ea quas. Eius quam
          corrupti expedita!</v-card-text
        >
        <v-card-actios class="mt-5 justify-center">
          <v-btn variant="elevated" color="blue" @click="restData"
            >Got it!</v-btn
          >
        </v-card-actios>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { cartStore } from "@/stores/cart";
import { mapActions } from "pinia";
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    popup: {
      type: Boolean,
    },
  },
  watch: {
    dialog(newVal) {
      if (!newVal) {
        setTimeout(() => {
          this.$emit("close_popup");
        }, 200);
      }
    },
  },
  mounted() {
    this.dialog = this.popup;
  },
  methods: {
    ...mapActions(cartStore, ["reSetItem"]),
    restData() {
      this.reSetItem();
      this.dialog = false;
      this.$router.push({ name: "home" });
    },
  },
};
</script>
