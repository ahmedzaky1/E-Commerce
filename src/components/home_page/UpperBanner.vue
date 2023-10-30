<template>
  <div class="banner">
    <div class="parent">
      <img src="@/assets/images/banner-bg.jpg" alt="" />
      <div class="cont">
        <h3><span>Hug Saving</span> on UHD Televisions</h3>
        <p class="hint">Sale Up to 70% off on selected items*</p>
        <v-btn
          variant="outlined"
          width="180"
          height="50"
          style="border-radius: 30px; text-transform: none; font-size: 20px"
          >Shop Now</v-btn
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  .parent {
    height: 390px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .cont {
    color: white;
    padding: 120px 0 0 0;
    position: absolute;
    left: 70px;
    top: -50px;
    width: 600px;
    h3 {
      font-size: 45px;
      font-weight: 900;
      span {
        color: rgb(38, 183, 188);
      }
    }
    .hint {
      margin: 20px 0 40px 0;
    }
  }
}

// Media Queries
@media (max-width: 990px) {
  .banner {
    .parent {
      .cont {
        padding-left: 20px;
        h3 {
          font-size: 35px;
        }
        width: 500px;
        left: 0;
      }
    }
  }
}
@media (max-width: 767px) {
  .banner {
    .parent {
      height: 320px;
      .cont {
        padding-left: 20px;
        h3 {
          font-size: 30px;
        }
        width: 500px;
        left: 0;
        .hint {
          font-size: 14px;
        }
      }
    }
  }
}
@media (max-width: 532px) {
  .banner {
    .parent {
      position: relative;
      height: 250px;
      .cont {
        padding-left: 20px;
        padding-top: 90px;
        h3 {
          font-size: 20px;
        }
        width: 50%;
        left: 0;
        .hint {
          font-size: 12px;
        }
        button {
          position: absolute;
          height: 30px !important;
          width: 130px !important;
          font-size: 11px !important;
          bottom: 1px;
        }
      }
    }
  }
}
</style>
