export const aboutStX = () => {

gsap.registerPlugin(ScrollTrigger, SplitText);

  let mm = gsap.matchMedia();

  const corpScrub = document.getElementById("corporate-scrub");
  const corpScrubData = corpScrub.getAttribute("lottie-data");
  corpScrub.load(corpScrubData);
  
  ScrollTrigger.create({
    trigger: ".sub-hero__items",
    start: "top 75%",
    onEnter: () => corpScrub.play(),
  });

  const underlineLG = document.getElementById("reb-escape__underline");
  const underlineLGdata = underlineLG.getAttribute("lottie-data");
  underlineLG.load(underlineLGdata);
  
  ScrollTrigger.create({
      trigger: ".escape-underline__wrap",
      start: "top 94%",
      onEnter: () => underlineLG.play()
  });

var rotate = gsap.timeline({
    scrollTrigger:{
      trigger: ".about-x__track",
      pin: true,
      scrub: true,
      start: 'top top',
      end:'bottom bottom',
    }
  })
  rotate.to('.about-x__wrap', {
    rotation:360*2,
    ease:'none',
  });

  // REVEAL CTA BTN
  gsap.set(".cta-txt", { autoAlpha: 0 });

  gsap.utils.toArray(".lg-cta__btn").forEach(ctaBtn => {
  
   const ctaTxt = ctaBtn.querySelectorAll(".cta-txt");
   const ctaCover = ctaBtn.querySelectorAll(".cta-redact-cover");
  
    const ctaReveal =  gsap.timeline({ paused:true })
  
    ctaReveal
    .from(ctaCover, { duration: 0.4, scaleX: 0, transformOrigin: "0% 100%", ease: "linear" }) 
    .to(ctaTxt, { autoAlpha: 1, duration: 0.001 })
    .to(ctaCover, { duration: 0.4, scaleX: 0, transformOrigin: "100% 0%", ease: "linear" });
    
    ScrollTrigger.create({
      trigger: ctaBtn,
      start: "top 82%",
      onEnter: () => ctaReveal.play(),
      onLeaveBack: () => ctaReveal.reverse(),
    })
  })

// Headline scroll reveal from Right
const childSplitR = new SplitText(".chars-right", {
  type: "chars",
  linesClass: "split-h-child-r"
});
const parentSplitR = new SplitText(".chars-right", {
  // type: "lines",
  linesClass: "split-h-parent-r"
});

gsap.from(childSplitR.chars, {
  duration: 0.5,
  yPercent: -100,
  //rotationY: 90,
  //transformOrigin: "right",
  ease: "power1.inOut",
  stagger: -0.08,
        scrollTrigger: {
        trigger: ".rebel-me-h__contain",
        toggleActions: "restart none none reverse",
        start: "top 82%"
      }
});

  // Headline scroll reveal from Left
const childSplitL = new SplitText(".chars-left", {
  type: "chars",
  linesClass: "split-h-child-l"
});
const parentSplitL = new SplitText(".chars-left", {
  // type: "lines",
  linesClass: "split-h-parent-l"
});

gsap.from(childSplitL.chars, {
  duration: 0.5,
  yPercent: -100,
  //rotationY: -90,
  //transformOrigin: "right",
  ease: "power1.inOut",
  stagger: 0.08,
        scrollTrigger: {
        trigger: ".rebel-you-h__contain",
        toggleActions: "restart none none reverse",
        start: "top 82%"
      }
});

  //Desktop
mm.add("(min-width: 990px)", () => {

gsap.utils.toArray('.spacer-line__from-left').forEach(function(elem) {

const spacerTimelineL = gsap.timeline(
      {
        scrollTrigger: {
          trigger: elem,
          start: "top 92%",
          end: "bottom 0%",
          toggleActions:"play none none none",
        } 
      });
  
spacerTimelineL.from(elem, {
      duration: 1,
      scaleX: 0,
      transformOrigin: "0% 100%",
      ease: "power4"
    })
  });

gsap.utils.toArray(".what-the-faq__q-l-wrap").forEach(function(elem) {

const questionTimeline = gsap.timeline(
      {
        scrollTrigger: {
          trigger: elem,
          start: "top 92%",
          end: "bottom 0%",
          toggleActions:"play none none none",
        } 
      });
  
questionTimeline.from(elem, {
    duration: 1,
    x: -30,
    opacity: 0,
    ease: "power4"
  })
});

  gsap.utils.toArray(".what-the-faq__a-l-wrap").forEach(function(elem) {

    const questionTimeline = gsap.timeline(
          {
            scrollTrigger: {
              trigger: elem,
              start: "top 92%",
              end: "bottom 0%",
              toggleActions:"play none none none",
            } 
          });
      
    questionTimeline.from(elem, {
        duration: 1,
        x: -30,
        opacity: 0,
        ease: "power4"
      })
   });  
});

//iPAD
mm.add("(max-width: 991px) and (min-width: 429px)", () => {

  gsap.utils.toArray('.what-the-faq__group').forEach(function(elem) {

    const spacerTimelineL = gsap.timeline(
          {
            scrollTrigger: {
              trigger: elem,
              start: "top 92%",
              end: "bottom 0%",
              toggleActions:"play none none none",
            } 
          });
      
    spacerTimelineL.from(elem, {
          duration: 1,
          x: -30,
          opacity: 0,
          ease: "power4"
        })
    });
});

//Mobile
mm.add("(max-width: 428px)", () => {

  gsap.utils.toArray('.what-the-faq__group').forEach(function(elem) {

    const spacerTimelineL = gsap.timeline(
          {
            scrollTrigger: {
              trigger: elem,
              start: "top 92%",
              end: "bottom 0%",
              toggleActions:"play none none none",
            } 
          });
      
    spacerTimelineL.from(elem, {
          duration: 1,
          x: -20,
          opacity: 0,
          ease: "power4"
        })
    });
});
  
}
