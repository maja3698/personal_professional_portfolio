window.addEventListener("load", runGsap);
function runGsap() {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    "(min-width: 1065px)": function () {
      console.log("Desktop");
      gsap.to(".free-fridges-w", {
        x: 1219,
        duration: 3,
        scrollTrigger: {
          trigger: ".free-fridges-w",
          start: "top 95%",
          end: "center 95%",
          scrub: 4,
          toggleActions: "restart none none none",
          // markers: {
          //     startColor: "purple",
          //     endColor: "black",
          //     fontSize: "1rem",
          //     indent: 200
          // }
        },
      });

      gsap.to(".louisiana-w", {
        x: -1219,
        duration: 3,
        scrollTrigger: {
          trigger: ".free-fridges-w",
          start: "top 95%",
          end: "center 95%",
          scrub: 4,
          toggleActions: "restart none none none",
          // markers: {
          //     startColor: "purple",
          //     endColor: "black",
          //     fontSize: "1rem",
          //     indent: 200
          // }
        },
      });

      gsap.to(".quickit-w", {
        x: 1219,
        duration: 3,
        scrollTrigger: {
          trigger: ".quickit-w",
          start: "top 95%",
          end: "center 95%",
          scrub: 4,
          toggleActions: "restart none none none",
          // markers: {
          //     startColor: "purple",
          //     endColor: "black",
          //     fontSize: "1rem",
          //     indent: 200
          // }
        },
      });

      gsap.to(".hogwarts-w", {
        x: -1219,
        duration: 3,
        scrollTrigger: {
          trigger: ".quickit-w",
          start: "top 95%",
          end: "center 90%",
          scrub: 4,
          toggleActions: "restart none none none",
          //   markers: {
          //       startColor: "purple",
          //       endColor: "black",
          //       fontSize: "1rem",
          //       indent: 200
          //   }
        },
      });

      gsap.to(".quick2it-w", {
        x: 1219,
        duration: 3,
        scrollTrigger: {
          trigger: ".quick2it-w",
          start: "top 95%",
          end: "center 95%",
          scrub: 4,
          toggleActions: "restart none none none",
          // markers: {
          //     startColor: "purple",
          //     endColor: "black",
          //     fontSize: "1rem",
          //     indent: 200
          // }
        },
      });

      gsap.to(".silfen-w", {
        x: -1219,
        duration: 3,
        scrollTrigger: {
          trigger: ".quick2it-w",
          start: "top 95%",
          end: "center 90%",
          scrub: 4,
          toggleActions: "restart none none none",
          //   markers: {
          //       startColor: "purple",
          //       endColor: "black",
          //       fontSize: "1rem",
          //       indent: 200
          //   }
        },
      });
    },
  });
}
