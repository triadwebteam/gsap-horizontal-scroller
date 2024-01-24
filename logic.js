// Preexisting code from https://bradleyjohnson.com/

// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector("#sideScroll .container");
//     const sections = gsap.utils.toArray("#sideScroll .container section");
    
//     gsap.to(sections, {
//         xPercent: -100 * (sections.length - 1),
//         ease: "none",
//         scrollTrigger: {
//             trigger: "#sideScroll .wrapper",
//             pin: true,
//             scrub: 1,
//             end: "+=3000",
//             markers: true
//         }
//     });
// });


// Modified code for this example
document.addEventListener("DOMContentLoaded", function () {
    const sections = gsap.utils.toArray("#sideScroll .container section");
    
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#sideScroll",
            start: "center center", // Start when the center of #sideScroll hits the center of the viewport
            pin: true,
            scrub: 1,
            end: "+=3000",
            // markers: true
        }
    });
});
