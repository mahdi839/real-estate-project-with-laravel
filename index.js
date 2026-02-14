
gsap.registerPlugin(ScrollTrigger);
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
    x: -400,
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

// Feature 1 - from left
gsap.from('#feature_1', {
    x: -200,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '#why_choos_section',
        start: "top 70%",
        toggleActions: "play reverse play reverse"
    }
});

// Feature 2 - from top
gsap.from('#feature_2', {
    y: -200,
    opacity: 0,
    duration: 2,
    delay: 0.2,  // Slight delay for stagger effect
    ease: "power2.out",
    scrollTrigger: {
        trigger: '#why_choos_section',
        start: "top 70%",
        toggleActions: "play reverse play reverse"
    }
});

// Feature 3 - from right
gsap.from('#feature_3', {
    x: 200,
    opacity: 0,
    duration: 2,
    delay: 0.4,  // More delay for third card
    ease: "power2.out",
    scrollTrigger: {
        trigger: '#why_choos_section',
        start: "top 70%",
        toggleActions: "play reverse play reverse"
    }
});
gsap.from("#image-div", {
    x: 500,
    duration: 2,
    delay: 0.5
})

