export const propBookingRebM = () => {

gsap.registerPlugin(ExpoScaleEase);

// SET REB M COVER IF ALREADY COMPLETED
if (sessionStorage.getItem("rebmSuccessPlayed", true)) {

  gsap.set(".rebm-booked__cover", { display: "block" });
  gsap.set([".cb-btn__covered", ".rebs-btn__covered", ".rebxxl-btn__covered"], { display: "flex" });
  gsap.set(".nav__currency-wrap", {display: "none"});
  
} 

// GLOBAL BOOKING VARS
var bookHole = gsap.utils.toArray('.book-hole');
var bookHoleMob = gsap.utils.toArray('.book-hole-mobile');
var bookCancelinner = gsap.utils.toArray('.booking-cancel__track');
var BookContain = gsap.utils.toArray('.booking-items__container');
var CategoryCb = gsap.utils.toArray('.category-cb__track');
var CategoryReb = gsap.utils.toArray('.category-reb__track');
var cbWrap = gsap.utils.toArray('.cb__booking-wrap');
var rebsWrap = gsap.utils.toArray('.rebs__booking-wrap');
var rebmWrap = gsap.utils.toArray('.rebm__booking-wrap');
var rebxxlWrap = gsap.utils.toArray('.rebxxl__booking-wrap'); // formerly eur, usd, gbp, etc
var cbBg = gsap.utils.toArray('.cb__backdrop');
var rebsBg = gsap.utils.toArray('.reb-s__backdrop');
var rebmBg = gsap.utils.toArray('.reb-m__backdrop');
var rebxxlBg = gsap.utils.toArray('.reb-xxl__backdrop'); 
let cursor = gsap.utils.toArray(".cursor-dot");
var navBg = gsap.utils.toArray('.nav__backdrop');  
let bookSuccessBtn = gsap.utils.toArray([".cb-exit__success", ".rebs-exit__success", ".rebm-exit__success", ".rebxxl-exit__success"]);
let mm = gsap.matchMedia();
  
// GSAP SET GLOBAL
gsap.set(bookCancelinner, { x: -30, opacity: 0 });
gsap.set([CategoryCb, CategoryReb], { display: "none", x: -30, opacity: 0 });
gsap.set([BookContain], { display: "none" });
gsap.set([cbWrap, rebsWrap, rebmWrap, rebxxlWrap], { display: "none" });
gsap.set([cbBg, rebsBg, rebmBg, rebxxlBg], { autoAlpha: 0 });
gsap.set(navBg, {autoAlpha: 0});

//----------------------- BOOK REB M - BEGIN -----------------------//

// REB M CLOSE VARS
var rebmBtnsWrap = gsap.utils.toArray(".rebm-btns__wrap");
var RebmEurCancel = gsap.utils.toArray(".rebm-eur-cancel");
var RebmUsdCancel = gsap.utils.toArray(".rebm-usd-cancel");
var RebmGbpCancel = gsap.utils.toArray(".rebm-gbp-cancel");
var RebmSekCancel = gsap.utils.toArray(".rebm-sek-cancel");
var RebmSgdCancel = gsap.utils.toArray(".rebm-sgd-cancel");
let rebMexitSuccess = gsap.utils.toArray(".rebm-exit__success");

// REB M OPEN VARS
var rebmEurOpen = gsap.utils.toArray('.reb-m-eur__cta');
var rebmEurWrap = gsap.utils.toArray('.reb-m-eur__booking-wrap');
var rebmUsdOpen = gsap.utils.toArray('.reb-m-usd__cta');
var rebmUsdWrap = gsap.utils.toArray('.reb-m-usd__booking-wrap');
var rebmGbpOpen = gsap.utils.toArray('.reb-m-gbp__cta');
var rebmGbpWrap = gsap.utils.toArray('.reb-m-gbp__booking-wrap');
var rebmSekOpen = gsap.utils.toArray('.reb-m-sek__cta');
var rebmSekWrap = gsap.utils.toArray('.reb-m-sek__booking-wrap');
var rebmSgdOpen = gsap.utils.toArray('.reb-m-sgd__cta');
var rebmSgdWrap = gsap.utils.toArray('.reb-m-sgd__booking-wrap');

// GSAP SET REB M ALL CURRENCIES
gsap.set([rebmEurWrap, rebmUsdWrap, rebmGbpWrap, rebmSekWrap, rebmSgdWrap], { x: -30, opacity: 0, display: "none"  });
gsap.set([RebmEurCancel, RebmUsdCancel, RebmGbpCancel, RebmSekCancel, RebmSgdCancel, rebmBtnsWrap], { display: "none" });

// DESKTOP
mm.add("(min-width: 991px)", () => {  
  
// OPEN REB S EUR
rebmEurOpen.forEach(rebmEurOp => {

    let ctaMask = rebmEurOp.querySelector(".book-cta__mask"),
        ctaTxt = rebmEurOp.querySelector(".cta-txt"),
        ctaCover = rebmEurOp.querySelector(".cta-redact-cover"),
    
 rebmeur_open = gsap.timeline({ paused: true });

  rebmeur_open
  .set(rebmBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { scale: 0, autoAlpha: 0 }, "<")
  .set([BookContain, RebmEurCancel], { display: "flex" }, "<")
  .set([".redact-cover-reb-exit", ".redact-cover-nav"], { scaleX: 0 }, "<") 
  .set(".reb-exit-txt", { autoAlpha: 1 }, "<")
  .set(".reb-menu-txt", { autoAlpha: 0 }, "<")
  .set(".redact-cover-nav", { backgroundColor: '#ffffff'})
  .set(bookSuccessBtn, { display: "none" }, "<")
  //.set(BookContain, { display: "flex" }, "<")
  .set(rebmWrap, { display: "flex"}, "<")
  .set(rebmBtnsWrap, { display: "block" }, "<")
  //.set(RebmEurCancel, { display: "flex" }, "<")
  .set(rebmEurWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebmBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebmEurWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(navBg, {scale: 40, autoAlpha: 1, display: "block"})
  //.set(bookHole, {display: "block"}, "<")
  .set(ctaMask, {filter:"invert(0%)" })
  .set([".menu__btn", ".currency__btn", ".home-nav__btn", ".nav__logo-btn"], { display: "flex", overwrite: 'auto' })
  .set([".home-logo", ".beta__txt", ".menu-txt", ".touch-print-open__wrap", ".query-txt", ".currencies-list__contain", ".query-away__track", ".mrebel-says__category-contain"], { opacity: 1, overwrite: 'auto' });
       
   rebmEurOp.addEventListener('click', () => {   
    rebmeur_open.play(0);
  });
})

// CLOSE REB S EUR
RebmEurCancel.forEach((RebmEurCancel) => {
  if (!RebmEurCancel) return
  //const bookHole = document.querySelector('.book-hole')
  //if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  //gsap.set(bookHole, { scale: 1 })

  RebmEurCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebmeur_cancel = gsap.timeline();

     //gsap.set(bookHole, { left: xDist, top: yDist })
       
rebmeur_cancel
//.set(".menu__btn", { display: "none", opacity: 0 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { scale: 0.5, autoAlpha: 1, left: "-1.65em", top: "1.7em", overwrite: 'auto' }, "<")
.set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebmEurWrap, CategoryReb], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(navBg, { scale:40 }, {scale: 0, ease: Expo.easeOut, duration: 1.2 }, "-=0.2")
.to([".redact-cover-reb-exit", ".redact-cover-nav"], { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 0.179, ease: "linear"}) 
.to(".reb-menu-txt", { autoAlpha: 1, duration: 0.001 })
.to(".reb-exit-txt", { autoAlpha: 0, duration: 0.001 }, "<")
.set([BookContain, RebmEurCancel], { display: "none" })
.to([".redact-cover-reb-exit", ".redact-cover-nav"], { scaleX: 0, transformOrigin: "100% 0%", duration: 0.179, ease: "linear"}) 
.set(navBg, { autoAlpha: 0 })
.set(".redact-cover-nav", { backgroundColor: '#000000'})
//.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
//.to(cursor, { delay: 0.55, scale: 0.07, autoAlpha: 1, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebmWrap, { display: "none" })
.set(rebmBtnsWrap, { display: "none" })
//set(RebmEurCancel, { display: "none" })
.set(rebmEurWrap, { opacity: 0, display: "none", x: -30 });


    });
})

// OPEN REB S USD
rebmUsdOpen.forEach(rebmUsdOp => {

    let ctaMask = rebmUsdOp.querySelector(".book-cta__mask"),
        ctaTxt = rebmUsdOp.querySelector(".cta-txt"),
        ctaCover = rebmUsdOp.querySelector(".cta-redact-cover"),
    
 rebmusd_open = gsap.timeline({ paused: true });

  rebmusd_open
  .set(rebmBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { scale: 0, autoAlpha: 0 }, "<")
  .set([BookContain, RebmUsdCancel], { display: "flex" }, "<")
  .set([".redact-cover-reb-exit", ".redact-cover-nav"], { scaleX: 0 }, "<") 
  .set(".reb-exit-txt", { autoAlpha: 1 }, "<")
  .set(".reb-menu-txt", { autoAlpha: 0 }, "<")
  .set(".redact-cover-nav", { backgroundColor: '#ffffff'})
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(rebmWrap, { display: "flex"}, "<")
  .set(rebmBtnsWrap, { display: "block" }, "<")
  .set(rebmUsdWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebmBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebmUsdWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(navBg, {scale: 40, autoAlpha: 1, display: "block"})
  .set(ctaMask, {filter:"invert(0%)" })
  .set([".menu__btn", ".currency__btn", ".home-nav__btn", ".nav__logo-btn"], { display: "flex", overwrite: 'auto' })
  .set([".home-logo", ".beta__txt", ".menu-txt", ".touch-print-open__wrap", ".query-txt", ".currencies-list__contain", ".query-away__track", ".mrebel-says__category-contain"], { opacity: 1, overwrite: 'auto' });
       
   rebmUsdOp.addEventListener('click', () => {   
    rebmusd_open.play(0);
  });
})

// CLOSE REB S USD
RebmUsdCancel.forEach((RebmUsdCancel) => {
  if (!RebmUsdCancel) return
  //const bookHole = document.querySelector('.book-hole')
  //if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  //gsap.set(bookHole, { scale: 1 })

  RebmUsdCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebmusd_cancel = gsap.timeline();

      //gsap.set(bookHole, { left: xDist, top: yDist })
       
rebmusd_cancel
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { scale: 0.5, autoAlpha: 1, left: "-1.65em", top: "1.7em", overwrite: 'auto' }, "<")
.set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebmUsdWrap, CategoryReb], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(navBg, { scale:40 }, {scale: 0, ease: Expo.easeOut, duration: 1.2 }, "-=0.2")
.to([".redact-cover-reb-exit", ".redact-cover-nav"], { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 0.179, ease: "linear"}) 
.to(".reb-menu-txt", { autoAlpha: 1, duration: 0.001 })
.to(".reb-exit-txt", { autoAlpha: 0, duration: 0.001 }, "<")
.set([BookContain, RebmUsdCancel], { display: "none" })
.to([".redact-cover-reb-exit", ".redact-cover-nav"], { scaleX: 0, transformOrigin: "100% 0%", duration: 0.179, ease: "linear"}) 
.set(navBg, { autoAlpha: 0 })
.set(".redact-cover-nav", { backgroundColor: '#000000'})
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebmWrap, { display: "none" })
.set(rebmBtnsWrap, { display: "none" })
.set(rebmUsdWrap, { opacity: 0, display: "none", x: -30 });

    });
})

// OPEN REB S GBP
rebmGbpOpen.forEach(rebmGbpOp => {

    let ctaMask = rebmGbpOp.querySelector(".book-cta__mask"),
        ctaTxt = rebmGbpOp.querySelector(".cta-txt"),
        ctaCover = rebmGbpOp.querySelector(".cta-redact-cover"),
    
 rebmgbp_open = gsap.timeline({ paused: true });

  rebmgbp_open
  .set(rebmBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { scale: 0, autoAlpha: 0 }, "<")
  .set([BookContain, RebmGbpCancel], { display: "flex" }, "<")
  .set([".redact-cover-reb-exit", ".redact-cover-nav"], { scaleX: 0 }, "<") 
  .set(".reb-exit-txt", { autoAlpha: 1 }, "<")
  .set(".reb-menu-txt", { autoAlpha: 0 }, "<")
  .set(".redact-cover-nav", { backgroundColor: '#ffffff'})
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(rebmWrap, { display: "flex"}, "<")
  .set(rebmBtnsWrap, { display: "block" }, "<")
  .set(rebmGbpWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebmBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebmGbpWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(navBg, {scale: 40, autoAlpha: 1, display: "block"})
  .set(ctaMask, {filter:"invert(0%)" })
  .set([".menu__btn", ".currency__btn", ".home-nav__btn", ".nav__logo-btn"], { display: "flex", overwrite: 'auto' })
  .set([".home-logo", ".beta__txt", ".menu-txt", ".touch-print-open__wrap", ".query-txt", ".currencies-list__contain", ".query-away__track", ".mrebel-says__category-contain"], { opacity: 1, overwrite: 'auto' });
       
   rebmGbpOp.addEventListener('click', () => {   
    rebmgbp_open.play(0);
  });
})

// CLOSE REB S GBP
RebmGbpCancel.forEach((RebmGbpCancel) => {
  if (!RebmGbpCancel) return
  //const bookHole = document.querySelector('.book-hole')
  //if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  //gsap.set(bookHole, { scale: 1 })

  RebmGbpCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebmgbp_cancel = gsap.timeline();

      //gsap.set(bookHole, { left: xDist, top: yDist })
       
rebmgbp_cancel
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { scale: 0.5, autoAlpha: 1, left: "-1.65em", top: "1.7em", overwrite: 'auto' }, "<")
.set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebmGbpWrap, CategoryReb], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(navBg, { scale:40 }, {scale: 0, ease: Expo.easeOut, duration: 1.2 }, "-=0.2")
.to([".redact-cover-reb-exit", ".redact-cover-nav"], { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 0.179, ease: "linear"}) 
.to(".reb-menu-txt", { autoAlpha: 1, duration: 0.001 })
.to(".reb-exit-txt", { autoAlpha: 0, duration: 0.001 }, "<")
.set([BookContain, RebmGbpCancel], { display: "none" })
.to([".redact-cover-reb-exit", ".redact-cover-nav"], { scaleX: 0, transformOrigin: "100% 0%", duration: 0.179, ease: "linear"}) 
.set(navBg, { autoAlpha: 0 })
.set(".redact-cover-nav", { backgroundColor: '#000000'})
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebmWrap, { display: "none" })
.set(rebmBtnsWrap, { display: "none" })
.set(rebmGbpWrap, { opacity: 0, display: "none", x: -30 });

    });
})

// OPEN REB S SEK
rebmSekOpen.forEach(rebmSekOp => {

    let ctaMask = rebmSekOp.querySelector(".book-cta__mask"),
        ctaTxt = rebmSekOp.querySelector(".cta-txt"),
        ctaCover = rebmSekOp.querySelector(".cta-redact-cover"),
    
 rebmsek_open = gsap.timeline({ paused: true });

  rebmsek_open
  .set(rebmBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { scale: 0, autoAlpha: 0 }, "<")
  .set([BookContain, RebmSekCancel], { display: "flex" }, "<")
  .set([".redact-cover-reb-exit", ".redact-cover-nav"], { scaleX: 0 }, "<") 
  .set(".reb-exit-txt", { autoAlpha: 1 }, "<")
  .set(".reb-menu-txt", { autoAlpha: 0 }, "<")
  .set(".redact-cover-nav", { backgroundColor: '#ffffff'})
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(rebmWrap, { display: "flex"}, "<")
  .set(rebmBtnsWrap, { display: "block" }, "<")
  .set(rebmSekWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebmBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebmSekWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(navBg, {scale: 40, autoAlpha: 1, display: "block"})
  .set(ctaMask, {filter:"invert(0%)" })
  .set([".menu__btn", ".currency__btn", ".home-nav__btn", ".nav__logo-btn"], { display: "flex", overwrite: 'auto' })
  .set([".home-logo", ".beta__txt", ".menu-txt", ".touch-print-open__wrap", ".query-txt", ".currencies-list__contain", ".query-away__track", ".mrebel-says__category-contain"], { opacity: 1, overwrite: 'auto' });
       
   rebmSekOp.addEventListener('click', () => {   
    rebmsek_open.play(0);
  });
})

// CLOSE REB S SEK
RebmSekCancel.forEach((RebmSekCancel) => {
  if (!RebmSekCancel) return
  //const bookHole = document.querySelector('.book-hole')
  //if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  //gsap.set(bookHole, { scale: 1 })

  RebmSekCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebmsek_cancel = gsap.timeline();

      //gsap.set(bookHole, { left: xDist, top: yDist })
       
rebmsek_cancel
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { scale: 0.5, autoAlpha: 1, left: "-1.65em", top: "1.7em", overwrite: 'auto' }, "<")
.set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebmSekWrap, CategoryReb], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(navBg, { scale:40 }, {scale: 0, ease: Expo.easeOut, duration: 1.2 }, "-=0.2")
.to([".redact-cover-reb-exit", ".redact-cover-nav"], { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 0.179, ease: "linear"}) 
.to(".reb-menu-txt", { autoAlpha: 1, duration: 0.001 })
.to(".reb-exit-txt", { autoAlpha: 0, duration: 0.001 }, "<")
.set([BookContain, RebmSekCancel], { display: "none" })
.to([".redact-cover-reb-exit", ".redact-cover-nav"], { scaleX: 0, transformOrigin: "100% 0%", duration: 0.179, ease: "linear"}) 
.set(navBg, { autoAlpha: 0 })
.set(".redact-cover-nav", { backgroundColor: '#000000'})
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebmWrap, { display: "none" })
.set(rebmBtnsWrap, { display: "none" })
.set(rebmSekWrap, { opacity: 0, display: "none", x: -30 });

    });
})

// OPEN REB S SGD
rebmSgdOpen.forEach(rebmSgdOp => {

    let ctaMask = rebmSgdOp.querySelector(".book-cta__mask"),
        ctaTxt = rebmSgdOp.querySelector(".cta-txt"),
        ctaCover = rebmSgdOp.querySelector(".cta-redact-cover"),
    
 rebmsgd_open = gsap.timeline({ paused: true });

  rebmsgd_open
  .set(rebmBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { scale: 0, autoAlpha: 0 }, "<")
  .set([BookContain, RebmSgdCancel], { display: "flex" }, "<")
  .set([".redact-cover-reb-exit", ".redact-cover-nav"], { scaleX: 0 }, "<") 
  .set(".reb-exit-txt", { autoAlpha: 1 }, "<")
  .set(".reb-menu-txt", { autoAlpha: 0 }, "<")
  .set(".redact-cover-nav", { backgroundColor: '#ffffff'})
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(rebmWrap, { display: "flex"}, "<")
  .set(rebmBtnsWrap, { display: "block" }, "<")
  .set(rebmSgdWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebmBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebmSgdWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(navBg, {scale: 40, autoAlpha: 1, display: "block"})
  .set(ctaMask, {filter:"invert(0%)" })
  .set([".menu__btn", ".currency__btn", ".home-nav__btn", ".nav__logo-btn"], { display: "flex", overwrite: 'auto' })
  .set([".home-logo", ".beta__txt", ".menu-txt", ".touch-print-open__wrap", ".query-txt", ".currencies-list__contain", ".query-away__track", ".mrebel-says__category-contain"], { opacity: 1, overwrite: 'auto' });
       
   rebmSgdOp.addEventListener('click', () => {   
    rebmsgd_open.play(0);
  });
})

// CLOSE REB S SGD
RebmSgdCancel.forEach((RebmSgdCancel) => {
  if (!RebmSgdCancel) return
  //const bookHole = document.querySelector('.book-hole')
  //if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  //gsap.set(bookHole, { scale: 1 })

  RebmSgdCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebmsgd_cancel = gsap.timeline();

      //gsap.set(bookHole, { left: xDist, top: yDist })
       
rebmsgd_cancel
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { scale: 0.5, autoAlpha: 1, left: "-1.65em", top: "1.7em", overwrite: 'auto' }, "<")
.set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebmSgdWrap, CategoryReb], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(navBg, { scale:40 }, {scale: 0, ease: Expo.easeOut, duration: 1.2 }, "-=0.2")
.to([".redact-cover-reb-exit", ".redact-cover-nav"], { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 0.179, ease: "linear"}) 
.to(".reb-menu-txt", { autoAlpha: 1, duration: 0.001 })
.to(".reb-exit-txt", { autoAlpha: 0, duration: 0.001 }, "<")
.set([BookContain, RebmSgdCancel], { display: "none" })
.to([".redact-cover-reb-exit", ".redact-cover-nav"], { scaleX: 0, transformOrigin: "100% 0%", duration: 0.179, ease: "linear"}) 
.set(navBg, { autoAlpha: 0 })
.set(".redact-cover-nav", { backgroundColor: '#000000'})
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebmWrap, { display: "none" })
.set(rebmBtnsWrap, { display: "none" })
.set(rebmSgdWrap, { opacity: 0, display: "none", x: -30 });

    });
})

// CLOSE REB S SUCCESS - ALL CURRENCIES

rebMexitSuccess.forEach((rebMexitSuccess) => {
  if (!rebMexitSuccess) return
  //const bookHole = document.querySelector('.book-hole')
  //if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  //gsap.set(bookHole, { scale: 1 })

  rebMexitSuccess.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebm_cancel_success = gsap.timeline();

      //gsap.set(bookHole, { left: xDist, top: yDist })
           
    rebm_cancel_success
             .set(cursor, { scale: 0.5, autoAlpha: 1, left: "-1.65em", top: "1.7em", overwrite: 'auto' }, "<")
             .set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
             .set(".rebm-booked__cover", { display: "block" }, "<")
             .set([".cb-btn__covered", ".rebs-btn__covered", ".rebxxl-btn__covered", ".spa-btn__covered"], { display: "flex" }, "<")
             .to([".reb-success-marquee__wrap", ".reb-success-img__wrap"], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .to(CategoryReb, { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
             .to([rebmEurWrap, rebmUsdWrap, rebmGbpWrap, rebmSgdWrap, rebmSekWrap], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
             .fromTo(navBg, { scale:40 }, {scale: 0, ease: Expo.easeOut, duration: 1.2, onComplete() { sessionStorage.setItem("rebmSuccessPlayed", true) } }, "-=0.2")
             .to([".redact-cover-reb-exit", ".redact-cover-nav"], { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 0.179, ease: "linear"}) 
             .to(".reb-menu-txt", { autoAlpha: 1, duration: 0.001 })
             .to(".reb-exit-txt", { autoAlpha: 0, duration: 0.001 }, "<")
             .set([BookContain, RebmEurCancel, RebmUsdCancel, RebmGbpCancel, RebmSgdCancel, RebmSekCancel, bookSuccessBtn], { display: "none" })
             .to([".redact-cover-reb-exit", ".redact-cover-nav"], { scaleX: 0, transformOrigin: "100% 0%", duration: 0.179, ease: "linear"}) 
             .set(navBg, { autoAlpha: 0 })
             .set(".redact-cover-nav", { backgroundColor: '#000000'})
             .set(CategoryReb, { x: -30, opacity: 0, display: "none" })
             .set(bookCancelinner, { x: -30, opacity: 0 })
             .set(rebmWrap, { display: "none" })
             .set(rebmBtnsWrap, { display: "none" })
             .set([rebmEurWrap, rebmUsdWrap, rebmGbpWrap, rebmSgdWrap, rebmSekWrap], { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set([".ready-fini__wrap", ".reb-success-marquee__wrap", ".reb-success-img__wrap", ".cb-success-marquee__wrap", ".cb-success-img__wrap", ".home-mrebel__qa-pong-wrap"], { yPercent: 101, opacity: 0 })
             .set([".reb-success-items__contain", ".cb-success-items__contain", ".q-a-pong__mask", ".ready-fini__mask"], { display: "none" });
    
        });
     })
  });

// iPad and Mobile
mm.add("(max-width: 990px)", () => {  
  
// OPEN REB M EUR
rebmEurOpen.forEach(rebmEurOp => {

    let ctaMask = rebmEurOp.querySelector(".book-cta__mask"),
        ctaTxt = rebmEurOp.querySelector(".cta-txt"),
        ctaCover = rebmEurOp.querySelector(".cta-redact-cover"),
    
 rebmeur_open = gsap.timeline({ paused: true });

  rebmeur_open
  .set(rebmBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebmWrap, { display: "flex"}, "<")
  .set(rebmBtnsWrap, { display: "block" }, "<")
  .set(RebmEurCancel, { display: "flex" }, "<")
  .set(rebmEurWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebmBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .set(".touch-print-open__wrap", { autoAlpha: 0 }, "-=0.4")
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebmEurWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHoleMob, {display: "flex"}, "<")
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebmEurOp.addEventListener('click', () => {   
    rebmeur_open.play(0);
  });
})

// CLOSE REB M EUR
RebmEurCancel.forEach((RebmEurCancel) => {
  if (!RebmEurCancel) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1, display: "none" })

  RebmEurCancel.addEventListener("touchstart", (e) => {

   let touch = e.targetTouches[0]; 
   let xDist = touch.clientX - bookingContain.getBoundingClientRect().x
   let yDist = touch.clientY - bookingContain.getBoundingClientRect().y
   let rebmeur_cancel = gsap.timeline();

   gsap.set(bookHoleMob, { display: "flex", left: xDist, top: yDist, xPercent: -50, yPercent: -50 });
    
rebmeur_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".touch-print-open__wrap", { autoAlpha: 1 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebmEurWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebmWrap, { display: "none" })
.set(rebmBtnsWrap, { display: "none" })
.set(RebmEurCancel, { display: "none" })
.set(rebmEurWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHoleMob, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN REB M USD
rebmUsdOpen.forEach(rebmUsdOp => {

    let ctaMask = rebmUsdOp.querySelector(".book-cta__mask"),
        ctaTxt = rebmUsdOp.querySelector(".cta-txt"),
        ctaCover = rebmUsdOp.querySelector(".cta-redact-cover"),
    
 rebmusd_open = gsap.timeline({ paused: true });

  rebmusd_open
  .set(rebmBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebmWrap, { display: "flex"}, "<")
  .set(rebmBtnsWrap, { display: "block" }, "<")
  .set(RebmUsdCancel, { display: "flex" }, "<")
  .set(rebmUsdWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebmBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .set(".touch-print-open__wrap", { autoAlpha: 0 }, "-=0.4")
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebmUsdWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHoleMob, {display: "flex"}, "<")
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebmUsdOp.addEventListener('click', () => {   
    rebmusd_open.play(0);
  });
})

// CLOSE REB M USD
RebmUsdCancel.forEach((RebmUsdCancel) => {
  if (!RebmUsdCancel) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1, display: "none" })

  RebmUsdCancel.addEventListener("touchstart", (e) => {

   let touch = e.targetTouches[0]; 
   let xDist = touch.clientX - bookingContain.getBoundingClientRect().x
   let yDist = touch.clientY - bookingContain.getBoundingClientRect().y
   let rebmusd_cancel = gsap.timeline();

   gsap.set(bookHoleMob, { display: "flex", left: xDist, top: yDist, xPercent: -50, yPercent: -50 });
       
rebmusd_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".touch-print-open__wrap", { autoAlpha: 1 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebmUsdWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebmWrap, { display: "none" })
.set(rebmBtnsWrap, { display: "none" })
.set(RebmUsdCancel, { display: "none" })
.set(rebmUsdWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHoleMob, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN REB M GBP
rebmGbpOpen.forEach(rebmGbpOp => {

    let ctaMask = rebmGbpOp.querySelector(".book-cta__mask"),
        ctaTxt = rebmGbpOp.querySelector(".cta-txt"),
        ctaCover = rebmGbpOp.querySelector(".cta-redact-cover"),
    
 rebmgbp_open = gsap.timeline({ paused: true });

  rebmgbp_open
  .set(rebmBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebmWrap, { display: "flex"}, "<")
  .set(rebmBtnsWrap, { display: "block" }, "<")
  .set(RebmGbpCancel, { display: "flex" }, "<")
  .set(rebmGbpWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebmBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .set(".touch-print-open__wrap", { autoAlpha: 0 }, "-=0.4")
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebmGbpWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHoleMob, {display: "flex"}, "<")
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebmGbpOp.addEventListener('click', () => {   
    rebmgbp_open.play(0);
  });
})

// CLOSE REB M GBP
RebmGbpCancel.forEach((RebmGbpCancel) => {
  if (!RebmGbpCancel) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1, display: "none" })

  RebmGbpCancel.addEventListener("touchstart", (e) => {

   let touch = e.targetTouches[0]; 
   let xDist = touch.clientX - bookingContain.getBoundingClientRect().x
   let yDist = touch.clientY - bookingContain.getBoundingClientRect().y
   let rebmgbp_cancel = gsap.timeline();

   gsap.set(bookHoleMob, { display: "flex", left: xDist, top: yDist, xPercent: -50, yPercent: -50 });
       
rebmgbp_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".touch-print-open__wrap", { autoAlpha: 1 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebmGbpWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebmWrap, { display: "none" })
.set(rebmBtnsWrap, { display: "none" })
.set(RebmGbpCancel, { display: "none" })
.set(rebmGbpWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHoleMob, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN REB M SEK
rebmSekOpen.forEach(rebmSekOp => {

    let ctaMask = rebmSekOp.querySelector(".book-cta__mask"),
        ctaTxt = rebmSekOp.querySelector(".cta-txt"),
        ctaCover = rebmSekOp.querySelector(".cta-redact-cover"),
    
 rebmsek_open = gsap.timeline({ paused: true });

  rebmsek_open
  .set(rebmBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebmWrap, { display: "flex"}, "<")
  .set(rebmBtnsWrap, { display: "block" }, "<")
  .set(RebmSekCancel, { display: "flex" }, "<")
  .set(rebmSekWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebmBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .set(".touch-print-open__wrap", { autoAlpha: 0 }, "-=0.4")
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebmSekWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHoleMob, {display: "flex"}, "<")
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebmSekOp.addEventListener('click', () => {   
    rebmsek_open.play(0);
  });
})

// CLOSE REB M SEK
RebmSekCancel.forEach((RebmSekCancel) => {
  if (!RebmSekCancel) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1, display: "none" })

  RebmSekCancel.addEventListener("touchstart", (e) => {

   let touch = e.targetTouches[0]; 
   let xDist = touch.clientX - bookingContain.getBoundingClientRect().x
   let yDist = touch.clientY - bookingContain.getBoundingClientRect().y
   let rebmsek_cancel = gsap.timeline();

   gsap.set(bookHoleMob, { display: "flex", left: xDist, top: yDist, xPercent: -50, yPercent: -50 });
       
rebmsek_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".touch-print-open__wrap", { autoAlpha: 1 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebmSekWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebmWrap, { display: "none" })
.set(rebmBtnsWrap, { display: "none" })
.set(RebmSekCancel, { display: "none" })
.set(rebmSekWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHoleMob, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN REB M SGD
rebmSgdOpen.forEach(rebmSgdOp => {

    let ctaMask = rebmSgdOp.querySelector(".book-cta__mask"),
        ctaTxt = rebmSgdOp.querySelector(".cta-txt"),
        ctaCover = rebmSgdOp.querySelector(".cta-redact-cover"),
    
 rebmsgd_open = gsap.timeline({ paused: true });

  rebmsgd_open
  .set(rebmBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebmWrap, { display: "flex"}, "<")
  .set(rebmBtnsWrap, { display: "block" }, "<")
  .set(RebmSgdCancel, { display: "flex" }, "<")
  .set(rebmSgdWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebmBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .set(".touch-print-open__wrap", { autoAlpha: 0 }, "-=0.4")
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebmSgdWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHoleMob, {display: "flex"}, "<")
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebmSgdOp.addEventListener('click', () => {   
    rebmsgd_open.play(0);
  });
})

// CLOSE REB M SGD
RebmSgdCancel.forEach((RebmSgdCancel) => {
  if (!RebmSgdCancel) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1, display: "none" })

  RebmSgdCancel.addEventListener("touchstart", (e) => {

   let touch = e.targetTouches[0]; 
   let xDist = touch.clientX - bookingContain.getBoundingClientRect().x
   let yDist = touch.clientY - bookingContain.getBoundingClientRect().y
   let rebmsgd_cancel = gsap.timeline();

   gsap.set(bookHoleMob, { display: "flex", left: xDist, top: yDist, xPercent: -50, yPercent: -50 });
       
rebmsgd_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".touch-print-open__wrap", { autoAlpha: 1 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebmSgdWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebmWrap, { display: "none" })
.set(rebmBtnsWrap, { display: "none" })
.set(RebmSgdCancel, { display: "none" })
.set(rebmSgdWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHoleMob, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// CLOSE REB M SUCCESS - ALL CURRENCIES

rebMexitSuccess.forEach((rebMexitSuccess) => {
  if (!rebMexitSuccess) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1, display: "none" })

rebMexitSuccess.addEventListener("touchstart", (e) => {

   let touch = e.targetTouches[0]; 
   let xDist = touch.clientX - bookingContain.getBoundingClientRect().x
   let yDist = touch.clientY - bookingContain.getBoundingClientRect().y
   let rebm_cancel_success = gsap.timeline();

   gsap.set(bookHoleMob, { display: "flex", left: xDist, top: yDist, xPercent: -50, yPercent: -50 });
           
    rebm_cancel_success
             .set(".menu__btn", { display: "none", opacity: 0 })
              .set(".touch-print-open__wrap", { autoAlpha: 1 })
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
             .set(".rebm-booked__cover", { display: "block" }, "<")
             .set([".cb-btn__covered", ".rebs-btn__covered", ".rebxxl-btn__covered", ".spa-btn__covered"], { display: "flex" }, "<")
             .to([".reb-success-marquee__wrap", ".reb-success-img__wrap"], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .to([CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
             .to([rebmEurWrap, rebmUsdWrap, rebmGbpWrap, rebmSgdWrap, rebmSekWrap], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
             .fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)", onComplete() { sessionStorage.setItem("rebmSuccessPlayed", true) } }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryReb, { x: -30, opacity: 0, display: "none" })
             .set(bookCancelinner, { x: -30, opacity: 0 })
             .set(rebmWrap, { display: "none" })
             .set(rebmBtnsWrap, { display: "none" })
             .set([RebmEurCancel, RebmUsdCancel, RebmGbpCancel, RebmSgdCancel, RebmSekCancel], { display: "none" })
             .set([rebmEurWrap, rebmUsdWrap, rebmGbpWrap, rebmSgdWrap, rebmSekWrap], { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHoleMob, {display: "none", clearProps: "all"})
             .set([".ready-fini__wrap", ".reb-success-marquee__wrap", ".reb-success-img__wrap", ".cb-success-marquee__wrap", ".cb-success-img__wrap", ".home-mrebel__qa-pong-wrap"], { yPercent: 101, opacity: 0 })
             .set([".reb-success-items__contain", ".cb-success-items__contain", ".q-a-pong__mask", ".ready-fini__mask"], { display: "none" })
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

        });
     })
  });
  
}
