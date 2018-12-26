<template>
  <div>
    <!-- home -->
    <section id="home" class="home section--bg" data-bg="../static/img/home/slide.jpg">
      <div class="container">
        <div class="row" style="margin-top: 100px">
          <div class="col-xs-12">
            <!-- home content -->
            <div
              class="home__content-wrap animate"
              data-animate="fadeIn"
              data-duration="1.0s"
              data-delay="0.5s"
            >
              <!-- <div class="home__content" align="center"> -->
              <h1 class="home__title">Personal Page</h1>
              <!-- </div> -->
              <!-- about -->
              <!-- <div
								class="col-xs-12 col-sm-3 animate"
								data-animate="fadeIn"
								data-duration="1.0s"
								data-delay="0.5s"
              >-->
              <!-- ------------------- Тут аватраки и другая инфа ------------------- -->
              <!-- <img src="http://polyanika.com.ua/wp-content/uploads/2014/03/Kartinki-i-raskraski-Smesharik-Losyash-dlya-detey.jpg"> -->
              <!-- </div>

							<div
								class="col-xs-12 col-sm-9 animate"
								data-animate="fadeIn"
								data-duration="1.0s"
								data-delay="0.5s"
              >-->
              <!-- ------------------- Тут таблица (vue good table) ------------------- -->
              <!-- </div> -->
              <div
                class="col-xs-12 col-md-3 animate"
                data-animate="fadeIn"
                data-duration="1.0s"
                data-delay="0.5s"
              >
                <div id="left_div_pp" style="float:left; width: 240px;">
                  <!-- <div style="float: left"> -->
                  <span
                    class="home__text"
                    style="margin-bottom: 10px"
                  >Login: {{this.$store.state.User && this.$store.state.User.login}}</span>
                  
                  <img
                    class="img-avatar"
                    :src="this.$store.state.User && this.$store.state.User.avatar && this.$store.state.User.avatar.image"
                    :title="this.$store.state.User && this.$store.state.User.avatar && this.$store.state.User.avatar.name"
                    alt="Without avatar"
                  >

                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      style="display: none"
                      ref="updateAvatar"
                      @change="updateAvatar"
                    >
                    <button
                      style="margin-top:10px; width: 200px; height: 50px"
                      class="home__btn home__btn--color"
                      @click="simulateClickupdateAvatar"
                    >Update avatar</button>
                    <p v-if="errorUpdate" style="color: red; margin-top: 10px;">{{errorUpdate}}</p>
                  </div>

                  <div style="margin-top: 40px;">
                    <p class="home__text" style="margin-bottom: 10px">Buy/Sale coins</p>
                    <button
                      style="width: 200px"
                      class="home__btn home__btn--color"
                      @click="buyCoins"
                    >Buy coins</button>
                    <p v-if="errorBuy" style="color: red; margin-top: 10px;">{{errorBuy}}</p>
                  </div>

                  <div style="margin-top: 40px;">
                    <p class="home__text" style="margin-bottom: 0px">Sale coin</p>
                    <div class="styled-select green semi-square" style="margin: 20px;">
                      <select v-model="saleCoinId">
                        <option v-for="option in options" :key="option">{{ option }}</option>
                      </select>
                    </div>
                    <input
                      v-model="salePrice"
                      type="number"
                      step="0.01"
                      class="form__input"
                      placeholder="Sale price"
                      style="width: 200px; height: 30px; margin: 10px 20px;"
                    >
                    <input
                      v-model="saleQuantity"
                      type="number"
                      step="0.01"
                      class="form__input"
                      placeholder="Sale quantity"
                      style="width: 200px; height: 30px; margin: 10px 20px;"
                    >
                    <button
                      style="width: 200px"
                      class="home__btn home__btn--color"
                      @click="saleCoin"
                    >Sale coin</button>
                    <p v-if="errorSale" style="color: red; margin-top: 10px;">{{errorSale}}</p>
                  </div>
                </div>
              </div>

              <div
                class="col-xs-12 col-md-9 animate"
                data-animate="fadeIn"
                data-duration="1.0s"
                data-delay="0.5s"
              >
                <div id="right_div_pp">
                  <span
                    class="home__text"
                    style="margin-bottom: 10px"
                  >Balance: {{this.$store.state.User && this.$store.state.User.balance}}</span>
                  <div>
                    <vue-good-table
                      :line-numbers="true"
                      :columns="table.columns"
                      :rows="table.rows"
                      theme="black-rhino"
                      :pagination-options="{
											mode: 'pages',
											perPage: 10,
											enabled: true,
											perPageDropdown: [],
										}"
                      styleClass="vgt-table bordered"
                      :sort-options="{
											enabled: true,
											initialSortBy: [{field: this.funPrice, type: 'desc'}],
										}"
                      :search-options="{
											enabled: true,
											skipDiacritics: true,
										}"
                    ></vue-good-table>
                  </div>
                </div>
              </div>
              <!-- end about -->
            </div>
            <!-- end home content -->
          </div>
        </div>
      </div>
    </section>
    <!-- end home -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorSale: null,
      errorBuy: null,
      errorUpdate: null,
      saleCoinId: "BTC",
      options: this.$store.state.allCoins,
      salePrice: "",
      saleQuantity: "",
      table: {
        columns: [
          {
            label: "Symbol",
            field: "id",
            filterable: true
          },
          {
            label: "",
            field: this.funImage,
            html: true
          },
          {
            label: "Week",
            field: this.funPercentageWeek,
            type: "number",
            html: true
          },
          {
            label: "Day",
            field: this.funPercentageDay,
            type: "number",
            html: true
          },
          {
            label: "Hour",
            field: this.funPercentageHour,
            type: "number",
            html: true
          },
          {
            label: "Price",
            field: this.funPrice,
            type: "number",
            filterable: true
          },
          {
            label: "Quantity",
            field: "quantity",
            type: "number",
            filterable: true
          },
          {
            label: "Buy",
            field: this.funBuy,
            html: true
          }
        ],
        rows: this.$store.state.personalPage.coins
      }
    };
  },
  created() {
    this.$store.state.startAnimate();

    const init = () =>
      this.$store.state.sendRequest({
        method: "personalUploadInfo",
        data: {},
        callback: response => {
          if (response.ok) {
            this.$store.state.personalPage.coins.length = 0;
            for (const coin of response.ok.coins)
              this.$store.state.personalPage.coins.push(coin);
          }
        }
      });

    init();

    this.$store.state.personalPage.intervalUpdate = setInterval(
      init,
      this.$store.state.personalPage.timeIntervalUpdate
    );
  },
  destroyed() {
    clearInterval(this.$store.state.personalPage.intervalUpdate);
  },
  methods: {
    funImage(row) {
      return `<img style="width: 20px; height: 20px;" src=${
        row.imageUrl
      } title=${row.name} alt="Without image">`;
    },
    funPercentageWeek(row) {
      return this.funColorPercentage(row.changePerWeek);
    },
    funPercentageDay(row) {
      return this.funColorPercentage(row.changePerDay);
    },
    funPercentageHour(row) {
      return this.funColorPercentage(row.changePerHour);
    },
    funColorPercentage(value) {
      return `<div style="color:${
        value >= 0 ? "green" : "red"
      }">${value}%</div>`;
    },
    funPrice(row) {
      return row.price + "$";
    },
    funBuy(row) {
      return `<input id="buy-${
        row.id
      }" type="number" step="0.01" class="form__input" style="height: 30px; margin-bottom: 0">`;
    },
    simulateClickupdateAvatar() {
      this.$refs.updateAvatar.click();
    },
    updateAvatar(event) {
      const image = event.srcElement.files[0];

      if (!image) return;
      if (image.size > 1 * 1024 * 1024) {
        this.errorUpdate = "Incorrect picture (size > 1MB)";
        setTimeout(() => (this.errorUpdate = null), 3000);
        return;
      }

      const imageName = image.name;
      const reader = new FileReader();

      reader.onloadend = event => {
        this.$store.state.User.avatar = {
          image: event.target.result,
          name: imageName
        };

        this.$store.state.sendRequest({
          method: "personalUpdateAvatar",
          data: {
            imageName,
            imageBase64: event.target.result
          },
          callback: response => {
            // if (response.ok) this.$store.state.User.avatar = response.ok.avatar;
            if (!response.ok) {
              this.errorUpdate = response.error.message;
              setTimeout(() => (this.errorUpdate = null), 3000);
            }
          }
        });
      };

      reader.readAsDataURL(image);
    },
    buyCoins() {
      const personalPageCoins = this.$store.state.personalPage.coins;
      let coins = [];
      let inputs = [];

      for (const coin of personalPageCoins) {
        const id = `buy-${coin.id}`;
        let quantity;
        try {
          const input = document.getElementById(id);
          inputs.push(input);
          quantity = Number(input.value);
          if (quantity > 0)
            coins.push({
              id: coin.id,
              quantity
            });
          if (!(quantity >= 0)) throw new Error();
        } catch (err) {
          this.errorBuy = "Incorrect quantity!";
          setTimeout(() => (this.errorBuy = null), 3000);
          return;
        }
      }

      this.$store.state.sendRequest({
        method: "personalBuyCoins",
        data: {
          coins
        },
        callback: response => {
          if (response.ok) {
            this.$store.state.User.balance = response.ok.balance;

            const coinsHash = response.ok.coins.reduce((object, coin) => {
              object[coin.coinId] = coin.quantity;
              return object;
            }, {});

            for (const coin of this.$store.state.personalPage.coins)
              if (coinsHash[coin.id]) coin.quantity = coinsHash[coin.id];

            for (const input of inputs) input.value = "";
          } else {
            this.errorBuy = response.error.message;
            setTimeout(() => (this.errorBuy = null), 3000);
          }
        }
      });
    },
    saleCoin() {
      const coinId = this.saleCoinId;
      const price = Number(this.salePrice);
      const quantity = Number(this.saleQuantity);

      if (!(price >= 0.01) || !(quantity >= 0.01)) {
        this.errorSale = "Incorrect quantity or price!";
        setTimeout(() => (this.errorSale = null), 3000);
        return;
      }

      this.$store.state.sendRequest({
        method: "personalSaleCoins",
        data: {
          coin: {
            id: coinId,
            price,
            quantity
          }
        },
        callback: response => {
          if (response.ok) {
            const coins = this.$store.state.personalPage.coins;
            const saleCoin = response.ok.coin;

            for (const coin of coins)
              if (coin.id === saleCoin.coinId) {
                coin.quantity = saleCoin.quantity;
                break;
              }

            this.salePrice = "";
            this.saleQuantity = "";
          } else {
            this.errorSale = response.error.message;
            setTimeout(() => (this.errorSale = null), 3000);
          }
        }
      });
    }
  }
};
</script>

<style>
.img-avatar {
  position: relative;
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
}

.styled-select {
  background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 0;
  height: 29px;
  overflow: hidden;
  width: 200px;
}

.styled-select select {
  background: transparent;
  border: none;
  font-size: 14px;
  height: 29px;
  padding: 5px;
  width: 200px;
}

/* -------------------- Rounded Corners */
.rounded {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
}

.semi-square {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

/* -------------------- Colors: Background */
.green {
  background-color: #779126;
}
.blue {
  background-color: #3b8ec2;
}
</style>