import React, { useState } from 'react';
// import classNames from 'classnames';
// import {
//   FreeMode,
//   // Scrollbar,
//   Autoplay,
//   Mousewheel,
//   Keyboard,
//   // Pagination,
//   Parallax,
// } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/modules/free-mode/free-mode.scss';
// import 'swiper/modules/scrollbar/scrollbar.scss';
// // import "swiper/scss/free-mode";
// // import "swiper/scss/scrollbar";
import './UsefulInfo.scss';

export const UsefulInfo = () => {
  const [activeSlide, setActiveSlide] = useState('1');

  // function changeImg() {
  //   const tabsContent = document.querySelectorAll('[data-tab]');

  //   tabsContent.forEach((block) => {
  //     if (block.classList.contains('swiper-slide-active')) {
  //       const active = block.getAttribute('data-tab');
  //       // // eslint-disable-next-line no-console
  //       // console.log(typeof active);

  //       setActiveSlide(active);
  //     }
  //   });
  // }

  // return (
  //   <section className="UsefulInfo App__section">
  //     <Swiper
  //       direction="vertical"
  //       slidesPerView="auto"
  //       parallax={{ enabled: true }}
  //       speed={600}
  //       autoplay={{
  //         delay: 3000,
  //         disableOnInteraction: false,
  //       }}
  //       freeMode={{ sticky: true, enable: true }}
  //       // scrollbar={{ draggable: true }}
  //       // pagination={{ clickable: true }}
  //       mousewheel
  //       keyboard={{ enabled: true }}
  //       modules={[
  //         // Scrollbar,
  //         Mousewheel,
  //         Keyboard,
  //         // Pagination,
  //         Parallax,
  //         Autoplay,
  //         FreeMode,
  //       ]}
  //       className="UsefulInfo__swiper"
  //       onSlideChangeTransitionEnd={() => changeImg()}
  //       // scrollbar: {
  //       //   el: '.swiper-scrollbar',
  //       //   draggable: false,
  //       //   dragSize: 0,
  //       // },
  //     >
  //       <SwiperSlide
  //         className="UsefulInfo__block UsefulInfo__block--main"
  //         data-tab="1"
  //       >
  //         <h4 className="UsefulInfo__subtitle">Useful information</h4>
  //         <h2 className="UsefulInfo__title UsefulInfo__title--main">
  //           How does Google Search work?\
  //         </h2>
  //         <div className="UsefulInfo__infoBlock">
  //           <p className="UsefulInfo__info">
  //             Today, the largest search resource on the planet is Google
  //             Search. It is practically a monopoly in the field of
  //             information search. That is why our company, when creating
  //             its GEO advertising technology, used this system as a basis.
  //           </p>
  //           <p className="UsefulInfo__info">
  //             Let&apos;s figure out together how exactly Google Search works.
  //           </p>
  //           <p className="UsefulInfo__info">
  //             When a user enters a search query, Google Search processes it in
  //             less than one second and returns the search results in a
  //             specific sequence.
  //           </p>
  //           <p className="UsefulInfo__info">
  //             Android phones, 75% of phones based on other systems, as well as
  //             laptops and home computers use Google in one or another way.
  //           </p>
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide
  //         className="UsefulInfo__block UsefulInfo__title--firstBlock"
  //         data-tab="2"
  //       >
  //         <h2 className="UsefulInfo__title UsefulInfo__title--firstBlock">
  //           First block:
  //           <br />
  //           Advertisements
  //         </h2>
  //         <div className="UsefulInfo__infoBlock">
  //           <p className="UsefulInfo__info UsefulInfo__info--first">
  //             Search results tagged &quot;advertising&quot;. Such ads are
  //             always displayed at the top of the list (from 1 to 4 ads)
  //             and at the bottom of the list (from 1 to 5 ads). The place
  //             in the list is determined by the Google Adwords auction.
  //           </p>
  //           <p className="UsefulInfo__info UsefulInfo__info--first">
  //             Google Adwords guarantees your ad or website visits but requires
  //             constant financial investment. For example, the cost of such
  //             advertising per month for clothing stores in Lisbon will be
  //             about 5000 €. and more. Agree, not every small or medium
  //             business can afford such an advertising budget. However,
  //             our clients often use Adwords in tandem with GEO advertising.
  //           </p>
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide
  //         className="UsefulInfo__block UsefulInfo__block--second"
  //         data-tab="3"
  //       >
  //         <h2 className="UsefulInfo__title UsefulInfo__title--secondBlock">
  //           Second block:
  //           <br />
  //           Google Maps search
  //         </h2>
  //         <div className="UsefulInfo__infoBlock">
  //           <p className="UsefulInfo__info">
  //             Search combines three services: Google Maps, Google Places,
  //             and Google Street View. To be displayed in the search on the
  //             Map, it is enough to register in the Google My Business system.
  //           </p>
  //           <p className="UsefulInfo__info">
  //             Here the place in the list depends on many factors, based on
  //             which the Search is individually adjusted to the client.
  //           </p>
  //           <p className="UsefulInfo__info">
  //             The search is influenced by the following factors: location,
  //             the workload of the institution, rating, presentation quality
  //             (photo, video, text), quantity and quality of reviews, user
  //             activity, business activity, age category, client’s paying
  //             capacity, etc.
  //           </p>
  //           <p className="UsefulInfo__info">
  //             This is the most interesting search position for us. It
  //             is on this data that we can influence, thanks to the technology
  //             of GEO advertising. Fast, inexpensive, efficient.
  //           </p>
  //         </div>
  //       </SwiperSlide>
  //       <SwiperSlide
  //         className="UsefulInfo__block UsefulInfo__block--third"
  //         data-tab="4"
  //       >
  //         <h2 className="UsefulInfo__title UsefulInfo__title--thirdBlock">
  //           Third block:
  //           <br />
  //           Organic search
  //         </h2>
  //         <div className="UsefulInfo__infoBlock">
  //           <p className="UsefulInfo__info">
  //             It is necessary to regularly update and supplement the
  //             information that would correspond to the interests of
  //             potential customers for a website to appear in organic
  //             search results.
  //           </p>
  //           <p className="UsefulInfo__info">
  //             For example, for a clothing store, these are articles,
  //             blogs, or videos about the fashion world. It also
  //             requires constant work with customers and the product
  //             catalog.
  //           </p>
  //           <p className="UsefulInfo__info">
  //             This search block is the hardest to hit. Often there are
  //             companies with a high budget or aggregators (OLX, Hotline,
  //             Amazon) here.
  //           </p>
  //         </div>
  //       </SwiperSlide>
  //     </Swiper>
  //     <div className="UsefulInfo__images">
  //       <div
  //         className={
  //           classNames(`UsefulInfo__img UsefulInfo__img--1 + ${activeSlide === '1'
  //             ? 'UsefulInfo__img--active'
  //             : ''
  //           }`)
  //         }
  //       >
  //         {/* <img src="../../images/usefulInfo/01.png" alt="01" /> */}
  //       </div>
  //       <div
  //         className={
  //           classNames(`UsefulInfo__img UsefulInfo__img--2 + ${activeSlide === '2'
  //             ? 'UsefulInfo__img--active'
  //             : ''
  //           }`)
  //         }
  //       >
  //         {/* <img src="../../images/usefulInfo/02.png" alt="02" /> */}
  //       </div>
  //       <div
  //         className={
  //           classNames(`UsefulInfo__img UsefulInfo__img--3 + ${activeSlide === '3'
  //             ? 'UsefulInfo__img--active'
  //             : ''
  //           }`)
  //         }
  //       >
  //         {/* <img src="../../images/usefulInfo/03.png" alt="03" /> */}
  //       </div>
  //       <div
  //         className={
  //           classNames(`UsefulInfo__img UsefulInfo__img--4 + ${activeSlide === '4'
  //             ? 'UsefulInfo__img--active'
  //             : ''
  //           }`)
  //         }
  //       >
  //         {/* <img src="../../images/usefulInfo/04.png" alt="04" /> */}
  //       </div>
  //     </div>
  //   </section>
  // );
};
