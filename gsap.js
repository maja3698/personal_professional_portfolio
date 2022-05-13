gsap.registerPlugin(ScrollTrigger);



gsap.to(".free-fridges-w", {
  x:700,
  duration: 1,
  scrollTrigger: {
      trigger: ".free-fridges-w",
      start: "top 70%",
      end: "center 95%",
      scrub:4,
      toggleActions: "restart none none none",
    //   markers: {
    //       startColor: "purple",
    //       endColor: "black",
    //       fontSize: "1rem",
    //       indent: 200
    //   }
  }
})

gsap.to(".louisiana-w", {
    x:-700,
    duration: 1,
    scrollTrigger: {
        trigger: ".free-fridges-w",
        start: "top 70%",
        end: "center 95%",
        scrub: 4,
        toggleActions: "restart none none none",
        // markers: {
        //     startColor: "purple",
        //     endColor: "black",
        //     fontSize: "1rem",
        //     indent: 200
        // }
    }
  })

  gsap.to(".quickit-w", {
    x:700,
    duration: 1,
    scrollTrigger: {
        trigger: ".quickit-w",
        start: "top 70%",
        end: "center 95%",
        scrub:4,
        toggleActions: "restart none none none",
      //   markers: {
      //       startColor: "purple",
      //       endColor: "black",
      //       fontSize: "1rem",
      //       indent: 200
      //   }
    }
  })
  
  gsap.to(".hogwarts-w", {
      x:-700,
      duration: 1,
      scrollTrigger: {
          trigger: ".quickit-w",
          start: "top 70%",
          end: "center 95%",
          scrub: 4,
          toggleActions: "restart none none none",
        //   markers: {
        //       startColor: "purple",
        //       endColor: "black",
        //       fontSize: "1rem",
        //       indent: 200
        //   }
      }
    })