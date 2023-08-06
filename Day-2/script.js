let tl = gsap.timeline()

tl.from("nav img, .nav-links li, .nav-right li, .nav-right .btn", {
    y: -100,
    duration: 1, 
    delay: 1,
    opacity: 0,
    stagger: 0.1
})

tl.from("main h1", {
    y: 100,
    opacity: 0,
    stagger: 0.3
})

tl.from(".images img", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})

tl.from(".social-media i", {
    opacity: 0,
    scale: 0,
    stagger: 0.2
})

tl.from(".scroll", {
    opacity: 0,
    scale: 0
})

tl.to(".scroll", {
    y: 15,
    repeat: -1,
    yoyo: true
})