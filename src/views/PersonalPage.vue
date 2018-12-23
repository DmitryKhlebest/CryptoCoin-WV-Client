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
              <div id="left_div_pp" style="float:left">
                <!-- <div style="float: left"> -->
                <span
                  class="home__text"
                  style="margin-bottom: 10px"
                >Login: {{this.$store.state.User && this.$store.state.User.login}}</span>
                
                <img
                  class="img-avatar"
                  :src="this.$store.state.User.avatar.image"
                  :title="this.$store.state.User.avatar.name"
                  alt="Without avatar"
                >

                <div>
                  <input
                    type="file"
                    accept="image/*"
                    style="display: none"
                    ref="uploadAvatar"
                    @change="uploadAvatar"
                  >
                  <button
                    style="margin-top:10px; width: 200px"
                    class="btn btn-primary"
                    @click="simulateClickUploadAvatar"
                  >Upload avatar</button>
                </div>

                <div style="margin-top: 70px;">
                  <p class="home__text" style="margin-bottom: 10px">Buy/Sale coins</p>
                  <button style="width: 200px" class="btn btn-primary" @click="buyCoins">Buy coins</button>
                </div>

                <div style="margin-top: 70px;">
                  <p class="home__text" style="margin-bottom: 10px">Sale coin</p>
                  <div class="styled-select green semi-square">
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
                    style="width: 200px; height: 30px; margin: 10px 0;"
                  >
                  <input
                    v-model="saleQuantity"
                    type="number"
                    step="0.01"
                    class="form__input"
                    placeholder="Sale quantity"
                    style="width: 200px; height: 30px; margin: 10px 0;"
                  >
                  <button style="width: 200px" class="btn btn-primary" @click="saleCoin">Sale coin</button>
                </div>
              </div>

              <div id="right_div_pp" style="margin-left:240px; margin-top: 20px">
                <span
                  class="home__text"
                  style="margin-bottom: 10px"
                >Balance: {{this.$store.state.User && this.$store.state.User.balance}}</span>
                <div>
                  <vue-good-table
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
      saleCoinId: "BTC",
      options: [],
      salePrice: "",
      saleQuantity: "",
      table: {
        columns: [
          {
            label: "Symbol",
            field: "id",
            filterable: true
            // filterOptions: {
            //   enabled: true
            //   placeholder: 'All',
            //   filterDropdownItems: ['Chris', 'Dan', 'Susan'],
            //   filterValue: 'Chris',
            // }
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
            // type: "percentage",
            html: true
          },
          {
            label: "Day",
            field: this.funPercentageDay,
            type: "number",
            // field: "changePerDay",
            // type: "percentage",
            html: true
          },
          {
            label: "Hour",
            field: this.funPercentageHour,
            type: "number",
            // field: "changePerHour",
            // type: "percentage",
            html: true
          },
          {
            label: "Price",
            field: this.funPrice,
            // field: "price",
            type: "number",
            // html: false,
            filterable: true
          },
          {
            label: "Quantity",
            field: "quantity",
            type: "number",
            html: false,
            filterable: true
          },
          {
            label: "Buy",
            field: this.funBuy,
            // type: "number",
            html: true
            // filterable: true
          }
          // {
          //   label: "Created On",
          //   field: "createdAt",
          //   type: "date",
          //   inputFormat: "YYYY-MM-DD",
          //   outputFormat: "MMM Do YY"
          // }
        ],
        rows: this.$store.state.personalPage.coins
        // rows: data.coins
        // rows: coins
      }
    };
  },
  created() {
    // request = {
    // 	method: 'personalUploadInfo',
    // 	data: {}
    // };

    // response = {
    // 	method: 'personalUploadInfo',
    // 	data: {
    // 		ok: {
    // 			coins: [
    // 				{
    // 					id,
    // 					name,
    // 					price,
    // 					changePerHour,
    // 					changePerDay,
    // 					changePerWeek,
    // 					quantity,
    // 					imageUrl
    // 				}
    // 			]
    // 		}
    // 	}
    // };
    // let coins = this.$store.state.personalPageCoins;
    // setInterval(() => console.log(coins), 10000);

    const init = () =>
      this.$store.state.sendRequest({
        method: "personalUploadInfo",
        data: {},
        callback: response => {
          if (response.ok) {
            this.$store.state.personalPage.coins.length = 0;
            for (const coin of response.ok.coins)
              this.$store.state.personalPage.coins.push(coin);
            this.options = response.ok.coins.map(coin => coin.id);
          }
        }
      });

    init();

    setInterval(init, 60 * 1000);
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
      // return value + '%';
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
      }" type="number" step="0.01" class="form__input" style="width: 100px; height: 30px; margin-bottom: 0">`;
    },
    simulateClickUploadAvatar() {
      this.$refs.uploadAvatar.click();
    },
    uploadAvatar(event) {
      const image = event.srcElement.files[0];

      if (image.size > 1 * 1024 * 1024) {
        alert(
          "Picture size is very big, please choose a picture no more than 1 MB!"
        );
        return;
      }

      const imageName = image.name;
      const reader = new FileReader();

      reader.onloadend = event => {
        this.$store.state.User.avatar = {
          image: event.target.result,
          name: imageName
        };
        // request = {
        // 	method: 'personalUpdateAvatar',
        // 	data: {
        // 		imageName,
        // 		imageBase64
        // 	}
        // };

        // response = {
        // 	method: 'personalUpdateAvatar',
        // 	data: {
        // 		ok: {
        // 			avatarPath
        // 		}
        // 	}
        // };
        this.$store.state.sendRequest({
          method: "personalUpdateAvatar",
          data: {
            imageName,
            imageBase64: event.target.result
          },
          callback: () => {
            // if (response.ok) this.$store.state.User.avatar = response.ok.avatar;
          }
        });
      };

      reader.readAsDataURL(image);
    },
    buyCoins(evnt) {
      const personalPageCoins = this.$store.state.personalPage.coins;
      let coins = [];

      for (const coin of personalPageCoins) {
        const id = `buy-${coin.id}`;
        // console.log(document.getElementById(id));
        // let quantity;
        // try {
        //   quantity = Number(document.getElementById(id).value);
        //   if (quantity < 0) throw new Error();
        // } catch (err) {
        //   alert("Некорректное количество коинов (должно быть >0)");
        //   return;
        // }
        const quantity = Number(document.getElementById(id).value);
        coins.push({
          id: coin.id,
          quantity
        });
      }

      // request = {
      // 	method: 'personalBuyCoins',
      // 	data: {
      // 		coins: [
      // 			{
      // 				id,
      // 				quantity
      // 			}
      // 		]
      // 	}
      // };

      // response = {
      // 	method: 'personalBuyCoins',
      // 	data: {
      // 		ok: {
      // 			balance,
      // 			coins: [
      // 				{
      // 					id,
      // 					quantity
      // 				}
      // 			]
      // 		}
      // 	}
      // };

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
              coin.quantity = coinsHash[coin.id];
          }
        }
      });
    },
    saleCoin() {
      //   request = {
      //     method: "personalSaleCoins",
      //     data: {
      //       coin: {
      //         id,
      //         price,
      //         quantity
      //       }
      //     }
      //   };
      //   response = {
      //     method: "personalSaleCoins",
      //     data: {
      //       ok: {
      //         coin: {
      //           coinId,
      //           quantity
      //         }
      //       }
      //     }
      //   };

      this.$store.state.sendRequest({
        method: "personalSaleCoins",
        data: {
          coin: {
            id: this.saleCoinId,
            price: Number(this.salePrice),
            quantity: Number(this.saleQuantity)
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
          }
        }
      });
    }
  },
  components: {}
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