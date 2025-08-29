
var device_width = window.screen.width;

/////////////////////////////////////////////////////
let text_animation = gsap.utils.toArray(".has_text_move_anim");

if (text_animation) {
    text_animation.forEach(splitTextLine => {
        var delay_value = 0.1
        if (splitTextLine.getAttribute("data-delay")) {
            delay_value = splitTextLine.getAttribute("data-delay");
        }
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: 'top 85%',
                duration: 1,
                scrub: false,
                markers: false,
                toggleActions: 'play none none none'
            }
        });

        const itemSplitted = new SplitText(splitTextLine, {
            type: "lines"
        });
        gsap.set(splitTextLine, {
            perspective: 400
        });
        itemSplitted.split({
            type: "lines"
        })
        tl.from(itemSplitted.lines, {
            duration: 1,
            delay: delay_value,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1
        });
    });
}

// Full Character Setup 
var animation_char_come_items = document.querySelectorAll(".has_char_anim")
animation_char_come_items.forEach((item) => {

    var stagger_value = 0.05
    var translateX_value = 20
    var translateY_value = false
    var onscroll_value = 1
    var data_delay = 0.1
    var data_duration = 1
    var ease_value = "power2.out"

    if (item.getAttribute("data-stagger")) {
        stagger_value = item.getAttribute("data-stagger");
    }
    if (item.getAttribute("data-translateX")) {
        translateX_value = item.getAttribute("data-translateX");
    }
    if (item.getAttribute("data-translateY")) {
        translateY_value = item.getAttribute("data-translateY");
    }
    if (item.getAttribute("data-on-scroll")) {
        onscroll_value = item.getAttribute("data-on-scroll");
    }
    if (item.getAttribute("data-delay")) {
        data_delay = item.getAttribute("data-delay");
    }
    if (item.getAttribute("data-ease")) {
        ease_value = item.getAttribute("data-ease");
    }
    if (item.getAttribute("data-duration")) {
        data_duration = item.getAttribute("data-duration");
    }

    if (onscroll_value == 1) {
        if (translateX_value > 0 && !translateY_value) {
            let split_char = new SplitText(item, {
                type: "chars, words"
            });
            gsap.from(split_char.chars, {
                duration: data_duration,
                delay: data_delay,
                x: translateX_value,
                autoAlpha: 0,
                stagger: stagger_value,
                ease: ease_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            });
        }
        if (translateY_value > 0 && !translateX_value) {
            let split_char = new SplitText(item, {
                type: "chars, words"
            });
            gsap.from(split_char.chars, {
                duration: data_duration,
                delay: data_delay,
                y: translateY_value,
                autoAlpha: 0,
                ease: ease_value,
                stagger: stagger_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            });
        }
        if (translateX_value && translateY_value) {
            let split_char = new SplitText(item, {
                type: "chars, words"
            });
            gsap.from(split_char.chars, {
                duration: 2,
                delay: data_delay,
                y: translateY_value,
                x: translateX_value,
                autoAlpha: 0,
                ease: ease_value,
                stagger: stagger_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            });
        }
        if (!translateX_value && !translateY_value) {
            let split_char = new SplitText(item, {
                type: "chars, words"
            });
            gsap.from(split_char.chars, {
                duration: 1,
                delay: data_delay,
                x: 50,
                autoAlpha: 0,
                stagger: stagger_value,
                ease: ease_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            });
        }
    } else {
        if (translateX_value > 0 && !translateY_value) {
            let split_char = new SplitText(item, {
                type: "chars, words"
            });
            gsap.from(split_char.chars, {
                duration: 1,
                delay: data_delay,
                x: translateX_value,
                ease: ease_value,
                autoAlpha: 0,
                stagger: stagger_value
            });
        }
        if (translateY_value > 0 && !translateX_value) {
            let split_char = new SplitText(item, {
                type: "chars, words"
            });
            gsap.from(split_char.chars, {
                duration: 1,
                delay: data_delay,
                y: translateY_value,
                autoAlpha: 0,
                ease: ease_value,
                stagger: stagger_value
            });
        }
        if (translateX_value && translateY_value) {
            let split_char = new SplitText(item, {
                type: "chars, words"
            });
            gsap.from(split_char.chars, {
                duration: 1,
                delay: data_delay,
                y: translateY_value,
                x: translateX_value,
                ease: ease_value,
                autoAlpha: 0,
                stagger: stagger_value
            });
        }
        if (!translateX_value && !translateY_value) {
            let split_char = new SplitText(item, {
                type: "chars, words"
            });
            gsap.from(split_char.chars, {
                duration: 1,
                delay: data_delay,
                ease: ease_value,
                x: 50,
                autoAlpha: 0,
                stagger: stagger_value
            });
        }
    }

});

// Animation Word
let animation_word_anim_items = document.querySelectorAll(".has_word_anim");

animation_word_anim_items.forEach((word_anim_item) => {

    var stagger_value = 0.04
    var translateX_value = false
    var translateY_value = false
    var onscroll_value = 1
    var data_delay = 0.1
    var data_duration = 0.75

    if (word_anim_item.getAttribute("data-stagger")) {
        stagger_value = word_anim_item.getAttribute("data-stagger");
    }
    if (word_anim_item.getAttribute("data-translateX")) {
        translateX_value = word_anim_item.getAttribute("data-translateX");
    }

    if (word_anim_item.getAttribute("data-translateY")) {
        translateY_value = word_anim_item.getAttribute("data-translateY");
    }

    if (word_anim_item.getAttribute("data-on-scroll")) {
        onscroll_value = word_anim_item.getAttribute("data-on-scroll");
    }
    if (word_anim_item.getAttribute("data-delay")) {
        data_delay = word_anim_item.getAttribute("data-delay");
    }
    if (word_anim_item.getAttribute("data-duration")) {
        data_duration = word_anim_item.getAttribute("data-duration");
    }

    if (onscroll_value == 1) {
        if (translateX_value && !translateY_value) {
            let split_word = new SplitText(word_anim_item, {
                type: "chars, words"
            })
            gsap.from(split_word.words, {
                duration: data_duration,
                x: translateX_value,
                autoAlpha: 0,
                stagger: stagger_value,
                delay: data_delay,
                scrollTrigger: {
                    trigger: word_anim_item,
                    start: 'top 90%'
                }
            });
        }

        if (translateY_value && !translateX_value) {
            let split_word = new SplitText(word_anim_item, {
                type: "chars, words"
            })
            gsap.from(split_word.words, {
                duration: 1,
                delay: data_delay,
                y: translateY_value,
                autoAlpha: 0,
                stagger: stagger_value,
                scrollTrigger: {
                    trigger: word_anim_item,
                    start: 'top 90%'
                }
            });
        }

        if (translateY_value && translateX_value) {
            let split_word = new SplitText(word_anim_item, {
                type: "chars, words"
            })
            gsap.from(split_word.words, {
                duration: 1,
                delay: data_delay,
                x: translateX_value,
                y: translateY_value,
                autoAlpha: 0,
                stagger: stagger_value,
                scrollTrigger: {
                    trigger: word_anim_item,
                    start: 'top 90%'
                }
            });
        }

        if (!translateX_value && !translateY_value) {
            let split_word = new SplitText(word_anim_item, {
                type: "chars, words"
            })
            gsap.from(split_word.words, {
                duration: 1,
                delay: data_delay,
                x: 20,
                autoAlpha: 0,
                stagger: stagger_value,
                scrollTrigger: {
                    trigger: word_anim_item,
                    start: 'top 85%',
                }
            });
        }
    } else {
        if (translateX_value > 0 && !translateY_value) {
            let split_word = new SplitText(word_anim_item, {
                type: "chars, words"
            })
            gsap.from(split_word.words, {
                duration: 1,
                delay: data_delay,
                x: translateX_value,
                autoAlpha: 0,
                stagger: stagger_value
            });
        }

        if (translateY_value > 0 && !translateX_value) {
            let split_word = new SplitText(word_anim_item, {
                type: "chars, words"
            })
            gsap.from(split_word.words, {
                duration: 1,
                delay: data_delay,
                y: translateY_value,
                autoAlpha: 0,
                stagger: stagger_value
            });
        }

        if (translateY_value > 0 && translateX_value > 0) {
            let split_word = new SplitText(word_anim_item, {
                type: "chars, words"
            })
            gsap.from(split_word.words, {
                duration: 1,
                delay: data_delay,
                x: translateX_value,
                y: translateY_value,
                autoAlpha: 0,
                stagger: stagger_value
            });
        }

        if (!translateX_value && !translateY_value) {
            let split_word = new SplitText(word_anim_item, {
                type: "chars, words"
            })
            gsap.from(split_word.words, {
                duration: 1,
                delay: data_delay,
                x: 20,
                autoAlpha: 0,
                stagger: stagger_value
            });
        }

    }

});

////////////////////////////// ///////////////////////
// Has Fade Animation 
////////////////////////////// ///////////////////////
let fadeArray_items = document.querySelectorAll(".has_fade_anim");
if (fadeArray_items.length > 0) {
    const fadeArray = gsap.utils.toArray(".has_fade_anim")
    // gsap.set(fadeArray, {opacity:0})
    fadeArray.forEach((item, i) => {

        var fade_direction = "bottom"
        var onscroll_value = 1
        var duration_value = 1.15
        var fade_offset = 50
        var delay_value = 0.15
        var ease_value = "power2.out"

        if (item.getAttribute("data-fade-offset")) {
            fade_offset = item.getAttribute("data-fade-offset");
        }
        if (item.getAttribute("data-duration")) {
            duration_value = item.getAttribute("data-duration");
        }

        if (item.getAttribute("data-fade-from")) {
            fade_direction = item.getAttribute("data-fade-from");
        }
        if (item.getAttribute("data-on-scroll")) {
            onscroll_value = item.getAttribute("data-on-scroll");
        }
        if (item.getAttribute("data-delay")) {
            delay_value = item.getAttribute("data-delay");
        }
        if (item.getAttribute("data-ease")) {
            ease_value = item.getAttribute("data-ease");
        }

        let animation_settings = {
            opacity: 0,
            ease: ease_value,
            duration: duration_value,
            delay: delay_value,
        }

        if (fade_direction == "top") {
            animation_settings['y'] = -fade_offset
        }
        if (fade_direction == "left") {
            animation_settings['x'] = -fade_offset;
        }

        if (fade_direction == "bottom") {
            animation_settings['y'] = fade_offset;
        }

        if (fade_direction == "right") {
            animation_settings['x'] = fade_offset;
        }

        if (onscroll_value == 1) {
            animation_settings['scrollTrigger'] = {
                trigger: item,
                start: 'top 85%',
            }
        }
        gsap.from(item, animation_settings);
    })
}

let mm = gsap.matchMedia();
                
mm.add("(min-width: 1024px)", () => {

    var pin_list = document.querySelectorAll(".section-item")
    pin_list.forEach((item) => {
        console.log(item)
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                markers: false,
                pin: true,
                pinSpacing: false,
                start: "bottom bottom",
                end: "bottom -=500"
            },
        });
    })

});