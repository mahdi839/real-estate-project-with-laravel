 gsap.from("header", {
        y: -200,
        opacity: 0,
        duration: 2,
        delay:1
    });

    gsap.from("h1", {
        y: 60,
        opacity: 0,
        duration: 2,
        delay: 1,
        stagger:true
    });

    gsap.from("p", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power2.out"
    });

    gsap.from("main button", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.9,
        ease: "back.out(1.7)"
    });
    gsap.from("#image-div",{
        x:500,
        duration:2,
        delay:0.5
    })

