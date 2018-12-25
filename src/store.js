import Vue from 'vue';
import Vuex from 'vuex';
import sendRequest from "./webSocket";
import startAnimate from "./static/js/myMain.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sendRequest,
    startAnimate,
    User: null,
    homePage: {
      coins: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      info: {},
      timeIntervalUpdate: 60 * 1000,
      intervalUpdate: "",
      partners: [
        "https://www.cryptocompare.com/media/19633/btc.png",
        "https://www.cryptocompare.com/media/19782/litecoin-logo.png",
        "https://www.cryptocompare.com/media/34477776/xrp.png",
        "https://www.cryptocompare.com/media/20696/str.png",
        "https://www.cryptocompare.com/media/1383672/usdt.png",
        "https://www.cryptocompare.com/media/20646/eth_logo.png",
        "https://www.cryptocompare.com/media/1383652/eos_1.png",
        "https://www.cryptocompare.com/media/1383919/12-bitcoin-cash-square-crop-small-grn.png",
        "https://www.cryptocompare.com/media/34477805/trx.jpg",
        "https://www.cryptocompare.com/media/12318177/ada.png"
      ]
    },
    personalPage: {
      coins: [],
      timeIntervalUpdate: 60 * 1000,
      intervalUpdate: ""
    },
    marketPage: {
      coins: [],
      timeIntervalUpdate: 60 * 1000,
      intervalUpdate: ""
    },
    historyPage: {
      coins: {
        purchasesTable: [],
        salesTable: []
      },
      timeIntervalUpdate: 60 * 1000,
      intervalUpdate: ""
    },
    allCoins: [
      'BTC',
      'LTC',
      'XRP',
      'XLM',
      'USDT',
      'ETH',
      'EOS',
      'BCH',
      'TRX',
      'ADA'
    ]
  },
  mutations: {},
  actions: {}
});
