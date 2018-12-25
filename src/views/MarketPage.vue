<template>
  <div>
    <!-- home -->
    <section id="home" class="home section--bg" data-bg="../static/img/home/slide.jpg">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <!-- home content -->
            <div
              class="home__content-wrap animate"
              data-animate="fadeIn"
              data-duration="1.0s"
              data-delay="0.5s"
            >
              <div class="home__content" align="center">
                <h1 class="home__title" style="margin-top: 100px;">Market</h1>
                <div>
                  <button
                    style="width: 200px; margin-bottom: 10px; display: inline-block; margin-right: 20px;"
                    class="home__btn"
                    @click="updateMarket"
                  >Update market</button>
                  <p
                    v-if="errorUpdate"
                    style="color: red; margin-top: 10px; display: inline-block;"
                  >{{errorUpdate}}</p>
                  <p
                    v-if="errorBuy"
                    style="color: red; margin-top: 10px; display: inline-block;"
                  >{{errorBuy}}</p>
                  <button
                    style="width: 200px; margin-bottom: 10px; display: inline-block; margin-left: 20px;"
                    class="home__btn home__btn--color"
                    @click="buyCoins"
                  >Buy coins</button>
                </div>
                <div>
                  <vue-good-table
                    :line-numbers="true"
                    :columns="table.columns"
                    :rows="table.rows"
                    theme="black-rhino"
                    :pagination-options="{
											mode: 'pages',
											perPage: 8,
											enabled: true,
											perPageDropdown: [8],
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
      errorBuy: null,
      errorUpdate: null,
      table: {
        columns: [
          {
            label: "Login",
            field: "login",
            filterable: true
          },
          {
            label: "Symbol",
            field: "coinId",
            filterable: true,
            filterOptions: {
              enabled: true,
              placeholder: "All",
              filterDropdownItems: this.$store.state.allCoins
            }
          },
          {
            label: "",
            field: this.funImage,
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
        rows: this.$store.state.marketPage.coins
      }
    };
  },
  created() {
    this.$store.state.startAnimate();

    const init = () =>
      this.$store.state.sendRequest({
        method: "marketUploadInfo",
        data: {},
        callback: response => {
          if (response.ok) {
            this.$store.state.marketPage.coins.length = 0;
            for (const coin of response.ok.coins)
              this.$store.state.marketPage.coins.push(coin);
          }
        }
      });

    init();

    this.$store.state.marketPage.intervalUpdate = setInterval(
      init,
      this.$store.state.marketPage.timeIntervalUpdate
    );
  },
  destroyed() {
    clearInterval(this.$store.state.marketPage.intervalUpdate);
  },
  methods: {
    funImage(row) {
      return `<img style="width: 20px; height: 20px;" src=${
        row.imageUrl
      } title=${row.name} alt="Without image">`;
    },
    funPrice(row) {
      return row.price + "$";
    },
    funBuy(row) {
      return `<input id="buy-${
        row.id
      }" type="number" step="0.01" class="form__input" style="height: 30px; margin-bottom: 0">`;
    },
    updateMarket() {
      this.$store.state.sendRequest({
        method: "marketUploadInfo",
        data: {},
        callback: response => {
          if (response.ok) {
            this.$store.state.marketPage.coins.length = 0;
            for (const coin of response.ok.coins)
              this.$store.state.marketPage.coins.push(coin);
          } else {
            this.errorUpdate = response.error.message;
            setTimeout(() => (this.errorUpdate = null), 3000);
          }
        }
      });
    },
    buyCoins() {
      const marketPageCoins = this.$store.state.marketPage.coins;
      let coins = [];

      for (const coin of marketPageCoins) {
        const id = `buy-${coin.id}`;

        let quantity;
        try {
          if (!document.getElementById(id)) continue;

          quantity = Number(document.getElementById(id).value);
          if (quantity > 0)
            coins.push({
              id: coin.id,
              quantity
            });
          if (!(quantity >= 0)) throw new Error();
        } catch (err) {
          this.errorBuy = "Error: buy coins";
          setTimeout(() => (this.errorBuy = null), 3000);
          return;
        }
      }

      this.$store.state.sendRequest({
        method: "marketBuyCoins",
        data: {
          coins
        },
        callback: response => {
          if (response.ok) {
            this.$store.state.User.balance = response.ok.balance;

            const coinsHash = response.ok.coins.reduce((object, coin) => {
              object[coin.id] = coin.quantity;
              return object;
            }, {});

            const coins = this.$store.state.marketPage.coins;

            for (const coin of coins) {
              if (coinsHash[coin.id] === 0)
                coins.splice(coins.indexOf(coin), 1);
              if (
                coinsHash[coin.id] !== null &&
                coinsHash[coin.id] !== undefined
              )
                coin.quantity = coinsHash[coin.id];
            }
          } else {
            this.errorBuy = response.error.message;
            setTimeout(() => (this.errorBuy = null), 3000);
          }
        }
      });
    }
  }
};
</script>
