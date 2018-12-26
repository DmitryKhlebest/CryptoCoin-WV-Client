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
                <h1 class="home__title">History</h1>
                <div
                  class="col-xs-12 col-md-6 animate"
                  data-animate="fadeIn"
                  data-duration="1.0s"
                  data-delay="0.5s"
                >
                  <p class="home__text" style="margin-bottom: 10px">Purchases table</p>
                  <vue-good-table
                    :line-numbers="true"
                    :columns="purchasesTable.columns"
                    :rows="purchasesTable.rows"
                    theme="black-rhino"
                    :pagination-options="{
											mode: 'pages',
											perPage: 5,
											enabled: true,
											perPageDropdown: [5],
										}"
                    styleClass="vgt-table bordered"
                    :sort-options="{
											enabled: true,
											initialSortBy: [{field: this.funDate, type: 'desc'}],
										}"
                    :search-options="{
											enabled: true,
											skipDiacritics: true,
										}"
                  ></vue-good-table>
                </div>
                <div
                  class="col-xs-12 col-md-6 animate"
                  data-animate="fadeIn"
                  data-duration="1.0s"
                  data-delay="0.5s"
                >
                  <p class="home__text" style="margin-bottom: 10px;">Sales table</p>
                  <vue-good-table
                    :line-numbers="true"
                    :columns="salesTable.columns"
                    :rows="salesTable.rows"
                    theme="black-rhino"
                    :pagination-options="{
											mode: 'pages',
											perPage: 5,
											enabled: true,
											perPageDropdown: [5],
										}"
                    styleClass="vgt-table bordered"
                    :sort-options="{
											enabled: true,
											initialSortBy: [{field: this.funDate, type: 'desc'}],
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
      purchasesTable: {
        columns: [
          {
            label: "Seller",
            field: "seller",
            filterable: true
          },
          {
            label: "Symbol",
            field: "coinId",
            filterable: true
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
            label: "Date-time",
            field: this.funDate
          }
        ],
        rows: this.$store.state.historyPage.coins.purchasesTable
      },
      salesTable: {
        columns: [
          {
            label: "Buyer",
            field: "buyer",
            filterable: true
          },
          {
            label: "Symbol",
            field: "coinId",
            filterable: true
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
            label: "Date-time",
            field: this.funDate
          }
        ],
        rows: this.$store.state.historyPage.coins.salesTable
      }
    };
  },
  created() {
    this.$store.state.startAnimate();

    const init = () =>
      this.$store.state.sendRequest({
        method: "historyUploadInfo",
        data: {},
        callback: response => {
          if (response.ok) {
            this.$store.state.historyPage.coins.purchasesTable.length = 0;
            for (const coin of response.ok.purchasesTable)
              this.$store.state.historyPage.coins.purchasesTable.push(coin);
            this.$store.state.historyPage.coins.salesTable.length = 0;
            for (const coin of response.ok.salesTable)
              this.$store.state.historyPage.coins.salesTable.push(coin);
          }
        }
      });

    init();

    this.$store.state.historyPage.intervalUpdate = setInterval(
      init,
      this.$store.state.historyPage.timeIntervalUpdate
    );
  },
  destroyed() {
    clearInterval(this.$store.state.historyPage.intervalUpdate);
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
    funDate(row) {
      return row.dateTime.replace("T", " ").slice(0, 19);
    }
  }
};
</script>
