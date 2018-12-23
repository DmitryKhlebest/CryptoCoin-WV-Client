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
                <b>There are many variations of passages</b> of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                <b>randomised words</b> which don't look even slightly believable.
              </p>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                <b>All the Lorem Ipsum generators on the Internet</b> tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
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
              <h3 class="box4__title">Sign up for BuyCoin</h3>
              <p class="box4__text">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                <b>randomised words</b> which don't look even slightly.
              </p>
            </div>
            <!-- end box (style 4) -->
          </div>

          <div class="col-xs-12 col-sm-4">
            <!-- box (style 4) -->
            <div class="box4 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.6s">
              <span class="box4__number">02</span>
              <h3 class="box4__title">Connect Your Bank Account</h3>
              <p class="box4__text">
                There are many variations of passages of Lorem Ipsum available,
                <b>but the majority have suffered</b> alteration in some form, by injected humour, or randomised words which don't look even slightly.
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
                There are many variations of passages of Lorem Ipsum available, but the majority
                <a
                  href="#"
                >have suffered</a> alteration in some form, by injected humour, or randomised words which don't look even slightly.
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
        <li class="ticker__item" v-for="coin of coins" :key="coin.id">
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
            <h2 class="section__title">BuyCoin Template</h2>
            <span class="section__tagline">Excellent for your business</span>
          </div>
          <!-- end section title -->
          <div class="col-xs-12 col-sm-6 col-md-4">
            <!-- box (style 2) -->
            <div class="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.4s">
              <span class="lnr lnr-diamond box2__icon"></span>
              <h3 class="box2__title">Modern Design</h3>
              <p
                class="box2__text"
              >If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            </div>
            <!-- end box (style 2) -->
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <!-- box (style 2) -->
            <div class="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.6s">
              <span class="lnr lnr-magic-wand box2__icon"></span>
              <h3 class="box2__title">Easy Costomize</h3>
              <p
                class="box2__text"
              >All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.</p>
            </div>
            <!-- end box (style 2) -->
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <!-- box (style 2) -->
            <div class="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.8s">
              <span class="lnr lnr-leaf box2__icon"></span>
              <h3 class="box2__title">Clean Code</h3>
              <p
                class="box2__text"
              >It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <!-- end box (style 2) -->
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <!-- box (style 2) -->
            <div class="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.4s">
              <span class="lnr lnr-laptop-phone box2__icon"></span>
              <h3 class="box2__title">Fully Responsive</h3>
              <p
                class="box2__text"
              >Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
            </div>
            <!-- end box (style 2) -->
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <!-- box (style 2) -->
            <div class="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.6s">
              <span class="lnr lnr-layers box2__icon"></span>
              <h3 class="box2__title">20+ Color Schemes</h3>
              <p
                class="box2__text"
              >It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <!-- end box (style 2) -->
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4">
            <!-- box (style 2) -->
            <div class="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.8s">
              <span class="lnr lnr-rocket box2__icon"></span>
              <h3 class="box2__title">Excellent purchase</h3>
              <p
                class="box2__text"
              >Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
            </div>
            <!-- end box (style 2) -->
          </div>
        </div>
      </div>
    </section>
    <!-- end features -->
    <!-- roadmap -->
    <section id="roadmap" class="section section--grey">
      <div class="container-fluid">
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
                <span>Q3 2016</span>
                <p>Project start-up. Product conception. System architecture development.</p>
              </li>
              <li>
                <span>Q4 2016</span>
                <p>Connection to stock exchanges. Development of trading platform and the system’s core elements.</p>
              </li>
              <li>
                <span>Q1 2017</span>
                <p>Test environment launch for algorithm creators. Development of the first algorithms.</p>
              </li>
              <li>
                <span>Q2 2017</span>
                <p>Tradingene public product launch for algorithm creators. Broadening of financial instruments for algorithm creation.</p>
              </li>
              <li>
                <span>Q3 2018</span>
                <p>Development of user interface prototype for investors.</p>
              </li>
            </ul>
          </div>
          <!-- end roadmap -->
          <!-- section button -->
          <div
            class="col-xs-12 animate"
            data-animate="fadeIn"
            data-duration="1.0s"
            data-delay="0.6s"
          >
            <a
              href="https://themeforest.net/user/dmitryvolkov/portfolio?ref=DmitryVolkov"
              target="_blank"
              class="section__btn"
            >purchase now</a>
          </div>
          <!-- end section button -->
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
              href="https://vimeo.com/45830194"
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
              >It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
              >All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
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
              >The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
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
              <span class="counter__value">{{info.countOnline}}</span>
              <span class="counter__title">Count online</span>
            </div>
          </div>

          <div class="col-xs-12 col-sm-4 col-lg-4">
            <div class="counter__box">
              <span class="counter__value">{{info.totalPrice}}</span>
              <span class="counter__title">Total price</span>
            </div>
          </div>

          <div class="col-xs-12 col-sm-4 col-lg-4">
            <div class="counter__box">
              <span class="counter__value">{{info.totalQuantity}}</span>
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
          <img class="team__img" src="../static/img/team/member.png" alt>
          <div class="team__meta">
            <p>Mark</p>
            <span>CEO</span>
            <ul class="clearfix">
              <li>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="item">
          <img class="team__img" src="../static/img/team/member.png" alt>
          <div class="team__meta">
            <p>Jonathan</p>
            <span>Founder</span>
            <ul class="clearfix">
              <li>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
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
            >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
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
                  <br>32 Barnard St. #145 Savannah, GA 80634
                </li>
                <li>
                  <span class="lnr lnr-calendar-full"></span>Mon - Fri 08:00 - 19:00
                </li>
                <li>
                  <span class="lnr lnr-inbox"></span>
                  <a href="mailto:support@buycoin.com">support@buycoin.com</a>
                </li>
                <li>
                  <span class="lnr lnr-phone-handset"></span>
                  <a href="tel:+18002345678">+1 (800) 234-5678</a>
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
            <form action="#" class="form form--contacts">
              <input type="text" class="form__input" placeholder="Name">
              <input type="text" class="form__input" placeholder="Email">
              <textarea class="form__textarea" placeholder="Message"></textarea>
              <button class="form__btn" type="button">Send</button>
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
              <!-- slider item -->
              <div class="item">
                <a href="#">
                  <img src="../static/img/partners/partner.png" alt>
                </a>
              </div>
              <!-- end slider item -->
              <!-- slider item -->
              <div class="item">
                <a href="#">
                  <img src="../static/img/partners/partner.png" alt>
                </a>
              </div>
              <!-- end slider item -->
              <!-- slider item -->
              <div class="item">
                <a href="#">
                  <img src="../static/img/partners/partner.png" alt>
                </a>
              </div>
              <!-- end slider item -->
              <!-- slider item -->
              <div class="item">
                <a href="#">
                  <img src="../static/img/partners/partner.png" alt>
                </a>
              </div>
              <!-- end slider item -->
              <!-- slider item -->
              <div class="item">
                <a href="#">
                  <img src="../static/img/partners/partner.png" alt>
                </a>
              </div>
              <!-- end slider item -->
              <!-- slider item -->
              <div class="item">
                <a href="#">
                  <img src="../static/img/partners/partner.png" alt>
                </a>
              </div>
              <!-- end slider item -->
              <!-- slider item -->
              <div class="item">
                <a href="#">
                  <img src="../static/img/partners/partner.png" alt>
                </a>
              </div>
              <!-- end slider item -->
              <!-- slider item -->
              <div class="item">
                <a href="#">
                  <img src="../static/img/partners/partner.png" alt>
                </a>
              </div>
              <!-- end slider item -->
            </div>
            <!-- end partners slider -->
          </div>
        </div>
      </div>
    </div>
    <!-- end partners -->
    <!-- sign in -->
    <div id="signin" class="mfp-hide modal">
      <button class="modal__close" type="button">
        <span class="lnr lnr-cross"></span>
      </button>

      <h6 class="modal__title">Sign In</h6>

      <form class="form form--modal" action="#">
        <input type="text" class="form__input" placeholder="Username">
        <input type="password" class="form__input" placeholder="Password">
        <button class="form__btn" type="button">Sign In</button>
      </form>

      <a href="#signup" class="modal__link modal-btn">Registration</a>
    </div>
    <!-- end sign in -->
    <!-- registration -->
    <div id="signup" class="mfp-hide modal">
      <button class="modal__close" type="button">
        <span class="lnr lnr-cross"></span>
      </button>

      <h6 class="modal__title">Registration</h6>

      <form class="form form--modal" action="#">
        <input type="text" class="form__input" placeholder="Username">
        <input type="text" class="form__input" placeholder="Email">
        <input type="password" class="form__input" placeholder="Password">
        <button class="form__btn" type="button">Registration</button>
      </form>

      <a href="#signin" class="modal__link modal-btn">Sign In</a>
    </div>
    <!-- end registration -->
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
  </div>
</template>

<script>

// request = {
// 	method: 'homeUploadInfo',
// 	data: {}
// };

// response = {
// 	method: 'homeUploadInfo',
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
// 					marketCap
// 				}
// 			],
// 			info: {
// 				countOnline,
// 				totalQuantity,
// 				totalPrice
// 			}
// 		}
// 	}
// };

const data = {
  coins: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
  info: {
    // countOnline: 0,
    // totalPrice: 0,
    // totalQuantity: 0
  }
};

export default {
  data: () => data,
  created() {
    this.$store.state.sendRequest({
      method: "homeUploadInfo",
      data: {},
      callback: response => {
        if (response.ok) {
          data.coins = response.ok.coins;
          data.info = response.ok.info;
        }
      }
    });
  }
};
</script>
