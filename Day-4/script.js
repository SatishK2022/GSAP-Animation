let tl = gsap.timeline()

tl.from("nav", {
    opacity: 0,
    delay: 0.2
})

tl.from(".logo, .nav-links p, .nav-right", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1
})

tl.from(".left h1", {
    x: -600,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5
})

tl.from(".left span img", {
    x: -100,
    opacity: 0,
    scale: 0,
    stagger: 0.4
})

tl.from(".left-info", {
    opacity: 0,
})

tl.from(".left-info p", {
    y: 100,
    opacity: 0,
    stagger: 0.5
})

tl.from(".right img", {
    scale: 0.5,
    opacity: 0,
    duration: 0.5
})

tl.from(".right>p", {
    x: -50,
    opacity: 0
})

tl.from(".right div", {
    y: 100,
    opacity: 0
})

tl.from(".right div i", {
    x: 5,
    repeat: -1,
    yoyo: true
})


gsap.from(".page2 .box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        // markers: true,
        start: "top 70%",
    }
})