

gsap.from("header", {
    y: -200,
    opacity: 0,
    duration: 2,
    delay: 1
});

gsap.from("h1", {
    y: 60,
    opacity: 0,
    duration: 2,
    delay: 1,
    stagger: true
});

gsap.from(".for_rent_header h2, .for_rent_header p", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".for_rent_header",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});


gsap.from("#image-div", {
    x: 500,
    duration: 2,
    delay: 0.5
})

