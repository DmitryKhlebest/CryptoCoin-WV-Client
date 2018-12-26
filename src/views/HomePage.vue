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
              <div class="home__content">
                <h1 class="home__title">BuyCoin Landing Page</h1>

                <p class="home__text">Secure & Easy Way To Trade</p>

                <a data-scroll href="#started" class="home__btn home__btn--color">How Started</a>
                <a data-scroll href="#features" class="home__btn">BuyCoin Template</a>
                <a data-scroll href="#roadmap" class="home__btn home__btn--color">Roadmap</a>
                <br>
                <br>
                <a data-scroll href="#safety" class="home__btn">It is safe</a>
                <a data-scroll href="#statistics" class="home__btn home__btn--color">Statistics</a>
                <a data-scroll href="#team" class="home__btn">Our Team</a>
              </div>
            </div>
            <!-- end home content -->
          </div>
        </div>
      </div>
    </section>
    <!-- end home -->
    <!-- about -->
    <section id="about" class="about about--wave section--gradient">
      <div class="container">
        <div class="row">
          <!-- section title -->
          <div
            class="col-xs-12 animate"
            data-animate="fadeIn"
            data-duration="1.0s"
            data-delay="0.2s"
          >
            <h2 class="section__title section__title--white section__title--margin">About BuyCoin</h2>
          </div>
          <!-- end section title -->
          <div
            class="col-xs-12 animate"
            data-animate="fadeIn"
            data-duration="1.0s"
            data-delay="0.5s"
          >
            <!-- about text -->
            <div class="about__text">
              <p>
                <b>A cryptocurrency (or crypto currency) is a digital asset</b>
                designed to work as a medium of exchange that uses strong
                <b>cryptography</b>
                to secure
                <b>financial transactions</b>,
                control the creation of additional units, and verify the transfer of assets. Cryptocurrencies are a kind of
                <b>alternative currency</b> and
                <b>digital currency</b> (of which virtual currency is a subset). Cryptocurrencies use
                <b>decentralized control</b> as opposed to centralized digital currency and central banking systems.
                <b>The decentralized control</b> of each cryptocurrency works through distributed ledger technology, typically a
                <b>blockchain</b>, that serves as a public financial transaction database.
              </p>
            </div>
            <!-- end about text -->
          </div>
        </div>
      </div>
    </section>
    <!-- end about -->
    <!-- get started -->
    <section id="started" class="section section--pt0">
      <div class="container">
        <div class="row">
          <!-- section title -->
          <div
            class="col-xs-12 animate"
            data-animate="fadeIn"
            data-duration="1.0s"
            data-delay="0.2s"
          >
            <h2 class="section__title">How To Get Started</h2>
            <span class="section__tagline">Your tagline</span>
          </div>
          <!-- end section title -->
          <div class="col-xs-12 col-sm-4">
            <!-- box (style 4) -->
            <div class="box4 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.4s">
              <span class="box4__number">01</span>
              <h3 class="box4__title">Registration</h3>
              <p class="box4__text">
                Registration is the process of telling the site your data to access the full
                <b>functionality of the site</b>, that can not be viewed or downloaded by unauthorized users.
              </p>
            </div>
            <!-- end box (style 4) -->
          </div>

          <div class="col-xs-12 col-sm-4">
            <!-- box (style 4) -->
            <div class="box4 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.6s">
              <span class="box4__number">02</span>
              <h3 class="box4__title">Authorization</h3>
              <p class="box4__text">
                After the registration phase is completed, you can log in using your username. Enter the
                <b>username</b> you provided during registration and the access
                <b>password</b> for your account.
              </p>
            </div>
            <!-- end box (style 4) -->
          </div>

          <div class="col-xs-12 col-sm-4">
            <!-- box (style 4) -->
            <div class="box4 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.8s">
              <span class="box4__number">03</span>
              <h3 class="box4__title">Buy and Sell Coin</h3>
              <p class="box4__text">
                After authorization on the site you will be presented with its
                <b>full functionality</b>. You will be able to
                <b>buy and sell cryptocurrency</b> from the system as well as from other users.
              </p>
            </div>
            <!-- end box (style 4) -->
          </div>
        </div>
      </div>
    </section>
    <!-- end get started -->
    <!-- ticker -->
    <div class="ticker section--gradient">
      <!-- ticker list -->
      <ul class="ticker__list clearfix">
        <li class="ticker__item" v-for="coin of this.$store.state.homePage.coins" :key="coin.id">
          <span class="name">Name: {{coin.name}}</span>
          <span class="price">Price: {{coin.price}}$</span>
          <span
            :class="{ 'change': true, 'change--green': coin.changePerHour >= 0, 'change--red': coin.changePerHour < 0 }"
          >Change (hour): {{coin.changePerHour}}%</span>
          <span
            :class="{ 'change': true, 'change--green': coin.changePerDay >= 0, 'change--red': coin.changePerDay < 0 }"
          >Change (day): {{coin.changePerDay}}%</span>
          <span
            :class="{ 'change': true, 'change--green': coin.changePerWeek >= 0, 'change--red': coin.changePerWeek < 0 }"
          >Change (week): {{coin.changePerWeek}}%</span>
          <span class="price">Market cap: {{coin.marketCap}}$</span>
        </li>
      </ul>
      <!-- end ticker list -->
    </div>
    <!-- end ticker -->
    <!-- features -->
    <section id="features" class="section">
      <div class="container">
        <div class="row">
          <!-- section title -->
          <div
            class="col-xs-12 animate"
            data-animate="fadeIn"
            data-duration="1.0s"
            data-delay="0.2s"
          >
            <h2 class="section__title">BuyCoin</h2>
            <span class="section__tagline">Excellent for your business</span>
          </div>
          <!-- end section title -->
          <div class="col-xs-12 col-sm-6 col-md-4">
            <!-- box (style 2) -->
            <div class="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.4s">
              <span class="lnr lnr-diamond box2__icon"></span>
              <h3 class="box2__title">Reliability and safety</h3>
              <p
                class="box2__text"
              >Cryptocurrency networks use encryption algorithms that protect users ' personal data, as well as information about transactions of network members.</p>
            </div>
            <!-- end box (style 2) -->
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <!-- box (style 2) -->
            <div class="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.6s">
              <span class="lnr lnr-magic-wand box2__icon"></span>
              <h3 class="box2__title">Low transaction fees</h3>
              <p
                class="box2__text"
              >Fees do not depend on the amount of cryptocurrency that users transfer within the system.</p>
            </div>
            <!-- end box (style 2) -->
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <!-- box (style 2) -->
            <div class="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.8s">
              <span class="lnr lnr-leaf box2__icon"></span>
              <h3 class="box2__title">Round-the-clock</h3>
              <p
                class="box2__text"
              >Transfer money wherever you want, at any time without any difficulties.</p>
            </div>
            <!-- end box (style 2) -->
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <!-- box (style 2) -->
            <div class="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.4s">
              <span class="lnr lnr-laptop-phone box2__icon"></span>
              <h3 class="box2__title">Availability</h3>
              <p
                class="box2__text"
              >Registering a crypto wallet is very simple. It does not matter how old you are, what country you are from, what political and religious views you have.</p>
            </div>
            <!-- end box (style 2) -->
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <!-- box (style 2) -->
            <div class="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.6s">
              <span class="lnr lnr-layers box2__icon"></span>
              <h3 class="box2__title">Not controlled</h3>
              <p
                class="box2__text"
              >Cryptocurrency is an international network blockchain, it is impossible to control or prohibit.</p>
            </div>
            <!-- end box (style 2) -->
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <!-- box (style 2) -->
            <div class="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.8s">
              <span class="lnr lnr-rocket box2__icon"></span>
              <h3 class="box2__title">Transparency</h3>
              <p
                class="box2__text"
              >The blockchain of any crypto currency is open. Everyone can learn it with the help of certain tools.</p>
            </div>
            <!-- end box (style 2) -->
          </div>
        </div>
      </div>
    </section>
    <!-- end features -->
    <!-- roadmap -->
    <section id="roadmap" class="section section--grey">
      <div class="container">
        <div class="row">
          <!-- section title -->
          <div
            class="col-xs-12 animate"
            data-animate="fadeIn"
            data-duration="1.0s"
            data-delay="0.2s"
          >
            <h2 class="section__title">Roadmap</h2>
            <span class="section__tagline">Thorny path</span>
          </div>
          <!-- end section title -->
          <!-- roadmap -->
          <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-12 col-lg-offset-0">
            <ul
              class="roadmap animate"
              data-animate="fadeIn"
              data-duration="1.0s"
              data-delay="0.4s"
            >
              <li>
                <span>Step 1</span>
                <p>Project start-up. Product conception. System architecture development.</p>
              </li>
              <li>
                <span>Step 2</span>
                <p>Database development in accordance with the requirements.</p>
              </li>
              <li>
                <span>Step 3</span>
                <p>The invention and adoption of requests and responses.</p>
              </li>
              <li>
                <span>Step 4</span>
                <p>Development of the server part of the application.</p>
              </li>
              <li>
                <span>Step 5</span>
                <p>Development of a prototype user interface.</p>
              </li>
            </ul>
          </div>
          <!-- end roadmap -->
        </div>
      </div>
    </section>
    <!-- end roadmap -->
    <!-- video -->
    <section class="section section--bg video" data-bg="../static/img/section-bg/section-bg1.jpg">
      <div class="container">
        <div class="row">
          <div
            class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3"
          >
            <a
              href="https://www.youtube.com/watch?v=HLYuxoytR3s"
              class="video__btn animate"
              data-animate="fadeIn"
              data-duration="1.0s"
              data-delay="0.2s"
            >
              <i class="fa fa-play-circle"></i>
            </a>
            <h4
              class="video__title animate"
              data-animate="fadeIn"
              data-duration="1.0s"
              data-delay="0.4s"
            >Video Review</h4>
            <p
              class="video__text animate"
              data-animate="fadeIn"
              data-duration="1.0s"
              data-delay="0.6s"
            >Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>
        </div>
      </div>
    </section>
    <!-- end video -->
    <!-- safety -->
    <section id="safety" class="section">
      <div class="container">
        <div class="row">
          <!-- section title -->
          <div
            class="col-xs-12 animate"
            data-animate="fadeIn"
            data-duration="1.0s"
            data-delay="0.2s"
          >
            <h2 class="section__title section__title--underline">It is safe</h2>
          </div>
          <!-- end section title -->
          <div class="col-xs-12 col-sm-4">
            <!-- box (style 3) -->
            <div
              class="box3 box3--line animate"
              data-animate="zoomIn"
              data-duration="1.0s"
              data-delay="0.4s"
            >
              <div class="box3__icon">
                <span class="lnr lnr-lock"></span>
              </div>
              <h3 class="box3__title">Security</h3>
              <p
                class="box3__text"
              >A vulnerability is a weakness in design, implementation, operation or internal control.Our site has no vulnerabilities.</p>
            </div>
            <!-- end box (style 3) -->
          </div>

          <div class="col-xs-12 col-sm-4">
            <!-- box (style 3) -->
            <div
              class="box3 box3--line animate"
              data-animate="zoomIn"
              data-duration="1.0s"
              data-delay="0.6s"
            >
              <div class="box3__icon">
                <span class="lnr lnr-license"></span>
              </div>
              <h3 class="box3__title">License</h3>
              <p
                class="box3__text"
              >A license for these activities is not required. They are not included in the list of activities for which you need to obtain a license.</p>
            </div>
            <!-- end box (style 3) -->
          </div>

          <div class="col-xs-12 col-sm-4">
            <!-- box (style 3) -->
            <div class="box3 animate" data-animate="zoomIn" data-duration="1.0s" data-delay="0.8s">
              <div class="box3__icon">
                <span class="lnr lnr-thumbs-up"></span>
              </div>
              <h3 class="box3__title">Result</h3>
              <p
                class="box3__text"
              >Uptime. Real-time update. Your money is always safe. Withdrawals at any time.</p>
            </div>
            <!-- end box (style 3) -->
          </div>
        </div>
      </div>
    </section>
    <!-- end safety -->
    <!-- statistics -->
    <section id="statistics" class="section section--grey">
      <div class="container">
        <div class="row">
          <!-- section title -->
          <div
            class="col-xs-12 animate"
            data-animate="fadeIn"
            data-duration="1.0s"
            data-delay="0.2s"
          >
            <h2 class="section__title">Statistics</h2>
            <span class="section__tagline">We are now</span>
          </div>
        </div>
      </div>
    </section>
    <!-- end statistics -->
    <!-- counter -->
    <div class="section section--bg counter" data-bg="../static/img/section-bg/section-bg1.jpg">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-4 col-lg-4">
            <div class="counter__box">
              <span class="counter__value">{{this.$store.state.homePage.info.countOnline}}</span>
              <span class="counter__title">Count online</span>
            </div>
          </div>

          <div class="col-xs-12 col-sm-4 col-lg-4">
            <div class="counter__box">
              <span class="counter__value">{{this.$store.state.homePage.info.totalPrice}}</span>
              <span class="counter__title">Total price</span>
            </div>
          </div>

          <div class="col-xs-12 col-sm-4 col-lg-4">
            <div class="counter__box">
              <span class="counter__value">{{this.$store.state.homePage.info.totalQuantity}}</span>
              <span class="counter__title">Total quantity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end counter -->
    <!-- team -->
    <section id="team" class="section">
      <div class="container">
        <div class="row">
          <!-- section title -->
          <div
            class="col-xs-12 animate"
            data-animate="fadeIn"
            data-duration="1.0s"
            data-delay="0.2s"
          >
            <h2 class="section__title">Our Team</h2>
            <span class="section__tagline">Your tagline</span>
          </div>
          <!-- end section title -->
        </div>
      </div>

      <!-- slider -->
      <div
        class="owl-carousel team team--grey animate"
        data-animate="fadeIn"
        data-duration="1.0s"
        data-delay="0.2s"
      >
        <div class="item">
          <a href="https://vk.com/khlebest_dmitry">
            <img class="team__img" src="../static/img/team/84l4wbio5mU.jpg" alt>
            <div class="team__meta">
              <p>Khlebest Dmitry</p>
              <span>Backend daveloper</span>
            </div>
          </a>
        </div>

        <div class="item">
          <a href="https://vk.com/id270520577">
            <img class="team__img" src="../static/img/team/BpNrk2FYPJU.jpg" alt>
            <div class="team__meta">
              <p>Zhirov Vladislav</p>
              <span>Front developer</span>
            </div>
          </a>
        </div>
      </div>
      <!-- end slider -->
    </section>
    <!-- end team -->
    <!-- get in touch -->
    <section id="contacts" class="section">
      <div class="container">
        <div class="row">
          <!-- section title -->
          <div
            class="col-xs-12 animate"
            data-animate="fadeIn"
            data-duration="1.0s"
            data-delay="0.2s"
          >
            <h2 class="section__title">Get in Touch</h2>
            <p
              class="section__text"
            >Through this form you can leave a message to the administration, ask questions and quickly get feedback by e-mail.</p>
          </div>
          <!-- end section title -->
          <div
            class="col-xs-12 col-sm-6 animate"
            data-animate="fadeIn"
            data-duration="1.0s"
            data-delay="0.5s"
          >
            <!-- contacts -->
            <div class="contacts">
              <ul class="contacts__list">
                <li>
                  <span class="lnr lnr-map"></span>
                  The BuyCoin Company, LLC
                  <br>Street Petrus Brovki, 6, audience 415, the first building.
                </li>
                <li>
                  <span class="lnr lnr-calendar-full"></span>Mon - Fri 08:00 - 19:00
                </li>
                <li>
                  <span class="lnr lnr-inbox"></span>
                  <a href="mailto:vladzhirov1997new@gmail.com">vladzhirov1997new@gmail.com</a>
                  <br>
                  <a href="khlebestdima@gmail.com">khlebestdima@gmail.com</a>
                </li>
                <li>
                  <span class="lnr lnr-phone-handset"></span>
                  <a href="tel:+375447125551">+375 (44) 712-55-51</a>
                  <br>
                  <a href="tel:+375292534774">+375 (29) 253-47-74</a>
                </li>
              </ul>
            </div>
            <!-- end contacts -->
          </div>

          <div
            class="col-xs-12 col-sm-6 animate"
            data-animate="fadeIn"
            data-duration="1.0s"
            data-delay="0.5s"
          >
            <!-- form -->
            <form id="contact" name="contact" action="sendMessage" class="form form--contacts">
              <input
                v-model="formName"
                type="name"
                id="name"
                name="name"
                class="form__input"
                placeholder="Name"
              >
              <input
                v-model="formEmail"
                type="email"
                id="email"
                name="email"
                class="form__input"
                placeholder="Email"
              >
              <textarea
                v-model="formText"
                id="msg"
                name="msg"
                class="form__textarea"
                placeholder="Message"
              ></textarea>
              <button class="form__btn" type="button" @click="sendMessage">Send</button>
              <p v-if="send" style="color: green; margin-top: 10px;">Message sent</p>
            </form>
            <!-- end form -->
          </div>
        </div>
      </div>
    </section>
    <!-- end get in touch -->
    <!-- partners -->
    <div
      class="partners section--grey animate"
      data-animate="fadeIn"
      data-duration="1.0s"
      data-delay="0.2s"
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <!-- partners slider -->
            <div class="owl-carousel partners__slider">
              <div
                v-for="partner of this.$store.state.homePage.partners"
                :key="partner"
                class="item"
              >
                <!-- slider item -->
                <a :href="partner">
                  <img style="width: 80px; height: 80px;" :src="partner" alt>
                </a>
                <!-- end slider item -->
              </div>
            </div>
            <!-- end partners slider -->
          </div>
        </div>
      </div>
    </div>
    <!-- end partners -->
    <!-- preloader -->
    <!-- <div class="preloader">
			<div class="preloader__logo">
				<img src="../static/img/logo--dark.png" alt>
			</div>
			<div class="preloader__spinner">
				<div class="preloader__bounce1"></div>
				<div class="preloader__bounce2"></div>
			</div>
    </div>-->
    <!-- end preloader -->
    <a data-scroll href="#home" id="upbutton"></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formName: "",
      formEmail: "",
      formText: "",
      send: false
    };
  },
  created() {
    this.$store.state.startAnimate();

    const init = () =>
      this.$store.state.sendRequest({
        method: "homeUploadInfo",
        data: {},
        callback: response => {
          if (response.ok) {
            this.$store.state.homePage.coins = response.ok.coins;
            this.$store.state.homePage.info = response.ok.info;
          }
        }
      });

    init();

    this.$store.state.homePage.intervalUpdate = setInterval(
      init,
      this.$store.state.homePage.timeIntervalUpdate
    );
  },
  destroyed() {
    clearInterval(this.$store.state.homePage.intervalUpdate);
  },
  methods: {
    sendMessage() {
      $.ajax({
        type: "POST",
        url: "../static/sendmessage.php",
        data: $("#contact").serialize(),
        success: function(data) {
          if (data == "true") {
            this.send = true;
          }
        }
      });
    }
  }
};

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    if ($("#upbutton").is(":hidden")) {
      $("#upbutton")
        .css({ opacity: 1 })
        .fadeIn("slow");
    }
  } else {
    $("#upbutton")
      .stop(true, false)
      .fadeOut("fast");
  }
});
</script>

<style>
#upbutton {
  background: url("../static/img/up.png") no-repeat top left;
  height: 35px;
  width: 60px;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  display: none;
  position: fixed;
  z-index: 999;
}
</style>
