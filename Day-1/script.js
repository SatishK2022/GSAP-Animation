// # GSAP to

// gsap.to(".box", {
//     x: 800,
//     y: 200,
//     duration: 2,
//     delay: 1,
//     backgroundColor: "blue",
//     rotate: 360,
//     scale: 0.5
// })

// # GSAP from

// gsap.from(".box", {
//     x: 800,
//     y: 200,
//     duration: 2,
//     delay: 1,
//     backgroundColor: "green",
//     rotate: 360,
//     scale: 0.5
// })


// gsap.to("h1", {
//     x: 500,
//     color: "orange",
//     duration: 2,
//     delay: 1
// })

// gsap.to("h2", {
//     x: 500,
//     color: "cyan",
//     duration: 2,
//     delay: 2
// })

// gsap.to("h3", {
//     x: 500,
//     color: "red",
//     duration: 2,
//     delay: 3
// })


// gsap.to("h1", {
//     x: 500,
//     duration: 2,
//     delay: 0.4,
//     stagger: 1, // Used to make the difference between the same elements (Time Interval) 
//     repeat: 1, // Used to repeat the animation
//     yoyo: true, // The element will go back with the animation from where it has started
// })

// #GSAP Timeline

let tl = gsap.timeline()

tl.to("h1", {
    x: 500,
    duration: 1
})

tl.to("h2", {
    x: 500,
    duration: 1
})

tl.to("h3", {
    x: 500,
    duration: 1
})