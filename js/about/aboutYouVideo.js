
export const aboutYouVideo = () => {
 
  if (
    !"mediaDevices" in navigator ||
    !"getUserMedia" in navigator.mediaDevices
  ) {
    alert("Camera API is not available in your browser");
    return;
  }

 const video = document.querySelector("#video");
 const selfieContainer = document.querySelector("#selfieContain");
 const canvas = document.querySelector("#canvas");
 let vidBtn = gsap.utils.toArray(".vid-start__btn");
 let vidCover = gsap.utils.toArray(".vid-start__backdrop");
 let cursor = gsap.utils.toArray(".cursor-dot");

video.setAttribute('autoplay', '');
video.setAttribute('muted', '');
video.setAttribute('playsinline', '');

gsap.set(vidCover, {autoAlpha: 0, scale: 1});

  const constraints = {
    audio: false,
    video: {
      width: {
        min: 1280,
        ideal: 1920,
        max: 2560,
      },
      height: {
        min: 720,
        ideal: 1080,
        max: 1440,
      },
    },
  };

  let useFrontCamera = true;

  let videoStream;

function takepic() {
    const selfie = document.createElement("img");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;  canvas.getContext("2d").drawImage(video, 0, 0);
    selfie.src = canvas.toDataURL("image/png");
    selfieContainer.prepend(selfie);
  }

  function stopVideoStream() {
    if (videoStream) {
      videoStream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  }
 
  async function initializeCamera() {
    stopVideoStream();
    constraints.video.facingMode = useFrontCamera ? "user" : "environment";
    try {
      videoStream = await navigator.mediaDevices.getUserMedia(constraints);
      video.srcObject = videoStream;
    } catch (err) {
      alert("Could not access the camera");
    }
  }


 let showVid = gsap.timeline({ paused: true });

 showVid
        .to(vidCover, { autoAlpha: 1, duration: 0.001 })
        .to(cursor, { autoAlpha: 0, duration: 0.001 }, "<")
        .to(".cta-vid__wrap", {filter:"invert(100%)", duration: 0.001}, "<")
        .to(vidCover, { scale: 5, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.25 })
        //.to(".skill-stack__txt-item.is--you", {filter:"invert(100%)", duration: 0.001}, "-=0.61")
        .to(".cta-vid__contain", { delay: 0.35, x: 15, opacity: 0, ease: "expo.out", duration: 0.77}, "<")
        .fromTo(".vid-container", { clipPath: "circle(0% at center)" },
          { clipPath: "circle(140.9% at center)", delay: 0.65, duration: 1.9, ease: "power2.inOut", clearProps: "clipPath"})
        .to('.script-xl', { autoAlpha: 0, duration: 0.01 }, "<")
        .set(".cta-vid__wrap", {filter:"invert(0%)"}) 
        .set(vidBtn, {display: "none"})
        .set([".cta-vid__wrap", ".cta-vid__contain"], { yPercent: 0 })
        .set(cursor, {delay: 1, autoAlpha: 1 });


vidBtn.forEach(vidBtn => {
  
vidBtn.addEventListener("click", () => {
    initializeCamera();
    video.play();
    getPermission();
   })
 });

function getPermission() {
navigator.permissions.query({ name: "camera" }).then((result) => {
  if (result.state === "granted") { 
    showVid.play(0);
    setTimeout(takepic, 1700);
    setTimeout(stopVideoStream, 3400);
  } else if (result.state === "denied") {
    gsap.to(".no-footage", {display: "flex"});
  }
 });
} 



}
