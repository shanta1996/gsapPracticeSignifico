const homePageAnimation = () => {
  gsap.set(".backLayer", {
    scale: 5,
  });
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      ease: Power2,
      scrub: 1,
      start: "top top",
      end: "bottom bottom",
      // markers:true,
      // pin:true,
    },
  });
  tl.to(
    ".imageDiv",
    {
      "--clip": "0%",
    },
    "a"
  );

  tl.to(
    ".backLayer",
    {
      scale: 1,
    },
    "a"
  );

  tl.to(
    ".lft",
    {
      xPercent: -10,
      stagger: 0.1,
    },
    "b"
  );
  tl.to(
    ".rgt",
    {
      xPercent: 10,
      stagger: 0.1,
    },
    "b"
  );
};
const realPageAnimation = () => {
  gsap.to(".slide", {
    xPercent: -300,
    ease: Power4,
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",

      scrub: 2,
      pin: true,
    },
  });
};

const pictureDragAnimation = () => {
  document.querySelectorAll(".listElem").forEach(function (e) {
    e.addEventListener("mousemove", function (details) {
      gsap.to(this.querySelectorAll(".picture"), {
        opacity: 1,
        duration: 0.5,
        ease: Power4,
        x: gsap.utils.mapRange(
          0,
          window.innerWidth,
          -500,
          500,
          details.clientX
        ),
      });
    });
    e.addEventListener("mouseleave", function (details) {
      gsap.to(this.querySelectorAll(".picture"), {
        opacity: 0,
        duration: 0.5,
        ease: Power4,
      });
    });
  });
};

var clutter = "";
document
  .querySelector(".paragraph")
  .textContent.split("")
  .forEach(function (e) {
    if (e == " ") clutter += `<span>&nbsp;</span>`;
    clutter += `<span>${e}</span>`;
  });
document.querySelector(".paragraph").innerHTML = clutter;
gsap.set(".paragraph span", {
  opacity: 0.1,
});
gsap.to(".paragraph span", {
  opacity: 1,
  stagger:0.03,
  ease: Power4,
  scrollTrigger: {
    trigger: ".main",
    start:'top 50%',
    scrub:true,
    markers: true,
  },
});
homePageAnimation();
realPageAnimation();
pictureDragAnimation();
