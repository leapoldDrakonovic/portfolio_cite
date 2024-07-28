const text = document.getElementById('logo-text');
const tl = gsap.timeline({ repeat: 0, yoyo: true });




tl.fromTo(text, {
    opacity: 0,
    skewX: -20,
    x: -200,
    fontSize: 30,
}, {
    opacity: 1,
    x: -50,
    rotation: 0,
    duration: 0.3,
    fontSize: 30,
    fontWeight: "bold",
    ease: "power1.out"
}) ;



gsap.fromTo('.first-section-content-text-p', {
    x: -200,
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power1.out"

})

