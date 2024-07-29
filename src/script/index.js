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






gsap.fromTo("#title-name", 
    { 
        textContent: "" // Starting with an empty text
    },
    { 
        textContent: "Egor Lapshin", // Ending with the full text
        duration: 1, // Duration of typing animation
        ease: "none", // No easing
        onUpdate: function () {
            // Update the text content with each frame
            let text = this.targets()[0];
            text.innerHTML = text.innerHTML.split('').map((char, i) => {
                return i < this.progress() * text.textContent.length ? char : '<span aria-hidden="true"> </span>';
            }).join('');
        },
        onComplete: function () {

            tappingText()
        }
    });



    function tappingText (container, text, fn){

        gsap.fromTo("#title-position", 
    { 
        textContent: "" 
    },
    { 
        textContent: "{Frontend Developer}", 
        duration: 1, 
        ease: "none",
        onUpdate: function () {
            let text = this.targets()[0];
            text.innerHTML = text.innerHTML.split('').map((char, i) => {
                return i < this.progress() * text.textContent.length ? char : '<span aria-hidden="true"> </span>';
            }).join('');
        },
        onComplete: function () {                        
            showDesc()
        }
    });
    }




    function showDesc() {  

        gsap.fromTo('.first-section-content-text-p', {
            x: 1000,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power1.out",
            onComplete: function() {

                gsap.fromTo('#citizen', {
                    x: 1000,
                    opacity: 0,
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power1.out",
                })

                gsap.fromTo('#current', {
                    x: 2000,
                    opacity: 0,
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power1.out",
                })


            }
        })
    }