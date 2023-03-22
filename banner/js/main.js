"use strict";
var Premium = Premium || {};

Premium.creative = {
    init: function() {
        /* START OF CUSTOM JS */

        switch (document.body.id) {
            case "body_top":
                // top panel code here
                gsap.from(["h1", "#cta-top"], .6, {opacity:0, y:10, stagger:0.25, delay:1},"+=2")

                document.getElementById("cta-top").addEventListener("mouseenter",function(){
                    gsap.to("#cta-top",{scale:1.05,duration:.3})
                })
        
                document.getElementById("cta-top").addEventListener("mouseleave",function(){
                    gsap.to("#cta-top",{scale:1,duration:.3})
                })
                break;

            case "body_left":
                // left panel code here
                gsap.from("#app", 1.5, {opacity:0})
                gsap.from(["#copy", "#cta"], .6, {opacity:0, y:10, stagger:0.25, delay:1},"+=2")
                

                document.getElementById("cta").addEventListener("mouseenter",function(){
                        gsap.to("#cta",{scale:1.05,duration:.3})
                    })
            
                document.getElementById("cta").addEventListener("mouseleave",function(){
                        gsap.to("#cta",{scale:1,duration:.3})
                })
           

                break;

            case "body_right":
                Premium.communicator.init(2)
            
            const helder = document.getElementById("scene-1")
            const lente = document.getElementById("scene-2")
            const savanne = document.getElementById("scene-3")
            const samara = document.getElementById("scene-4")

            const Tones = ["helder", "lente", "savanne", "samara"];
            const Buttons = [helder, lente, savanne, samara];

            var timeRef;
            var index = 0;

                helder.addEventListener("mouseover", function (){
                    var tone = "helder";
                    removeHover();
                    helder.classList.add("hover");
                    Premium.communicator.api.sendMessage({tone: tone});
                    clearInterval(timeRef)
                })
                helder.addEventListener("mouseleave", function (){
                    removeHover();
                    timeRef = setInterval(updateScene, 5000);

                })


                lente.addEventListener("mouseover", function (){
                    var tone = "lente";
                    removeHover();
                    lente.classList.add("hover");
                    Premium.communicator.api.sendMessage({tone: tone});
                    clearInterval(timeRef)
                })
                lente.addEventListener("mouseleave", function (){
                    removeHover();
                    timeRef = setInterval(updateScene, 5000);

                })


                savanne.addEventListener("mouseover", function (){
                    var tone = "savanne";
                    removeHover();
                    savanne.classList.add("hover");
                    Premium.communicator.api.sendMessage({ tone: tone});
                    clearInterval(timeRef)
                })
                savanne.addEventListener("mouseleave", function (){
                    removeHover();
                    timeRef = setInterval(updateScene, 5000);
                })


                samara.addEventListener("mouseover", function (){
                    var tone = "samara";
                    removeHover();
                    samara.classList.add("hover");
                    Premium.communicator.api.sendMessage({tone: tone});
                    clearInterval(timeRef)
                })
                samara.addEventListener("mouseleave", function (){
                    removeHover();
                    timeRef = setInterval(updateScene, 5000);
                })

                function removeHover(){
                    Buttons.forEach(function(el, i){
                        el.classList.remove("hover")
                    });
                }

                
                function updateScene(){
                    Premium.communicator.api.sendMessage({tone: Tones[index%Tones.length]});
                    Buttons.forEach(function(el, i){
                        if (i%Tones.length === index%Tones.length){
                            el.classList.add("hover")
                        } else {
                            el.classList.remove("hover")
                        }
                    });
                    index ++;
                }

                timeRef = setInterval(updateScene, 5000);
                updateScene();
           
                break;

            case "body_back":
                Premium.communicator.init(2)
                Premium.communicator.api.receiveMessage(function(mess) {
					switch(mess.tone) {
                        case "lente":
                            let lenteOne = "linear-gradient(81deg, rgba(237,132,48,0.8519782913165266) 0%, rgba(244,198,250,0.8463760504201681) 100%)"
                            let lenteFive = "linear-gradient(58deg, rgba(232,220,233,0.5) 0%, rgba(245,175,254,0.9948354341736695) 100%)"
                            let lenteSeven = "linear-gradient(58deg, rgba(253,240,254,0.5) 0%, rgba(245,175,254,0.9948354341736695) 100%)"
                            // let gradientTwo = "linear-gradient(58deg, rgba(253,240,254,0.6502976190476191) 0%, rgba(175,254,249,0.5354516806722689) 100%);"

                            gsap.to(".shape-1", 1, {background: lenteOne, ease: "back"})
                            gsap.to(".shape-2", 1, {background: '#fdf0fe', opacity:0.3, ease: "back"})
                            gsap.to(".shape-4", 1, {background: '#7340b5', opacity: 1, ease: "back"})
                            gsap.to(".shape-5", 1, {background: lenteFive})
                            gsap.to(".shape-6", 1, {background: '#fdf0fe', opacity:0.5, ease: "back"})
                            gsap.to(".shape-7", 1, {background: lenteSeven, ease: "back"})
                        break;
                        case "helder":
                            let helderOne = 'linear-gradient(36deg, rgba(250,245,223,0.7077205882352942) 19%, rgba(255,204,105,0.6713060224089635) 100%)'
                            let helderFour = 'linear-gradient(36deg, rgba(250,245,223,0.7077205882352942) 19%, rgba(255,204,105,0.6713060224089635) 100%)'   
                            let helderFive = 'linear-gradient(36deg, rgba(250, 218, 76, 0.708) 19%, rgba(255,204,105,0.6713060224089635) 100%)'
                            let helderSeven = ' linear-gradient(36deg, rgba(250,245,223,0.7077205882352942) 19%, rgba(255,204,105,0.6713060224089635) 100%)'
                            gsap.to(".shape-1", 1, {background: helderOne, ease: "back"})
                            gsap.to(".shape-2", 1, {background: '#fbaf23', opacity:0.3, ease: "back"})
                            gsap.to(".shape-4", 1, {background: helderFour, opacity:1, ease: "back"})
                            gsap.to(".shape-5", 1, {background: helderFive})
                            gsap.to(".shape-6", 1, {background: helderFive, ease: "back"})
                            gsap.to(".shape-7", 1, {background: helderSeven, ease: "back"})
                        break;
                        case "savanne": 
                            let savanneFour = 'linear-gradient(58deg, rgba(238,217,100,1) 0%, rgba(207,72,7,1) 100%)' 
                            let savanneOne = 'linear-gradient(58deg, rgba(238,217,100,1) 0%, rgba(246,73,2,1) 100%)'
                            let savanneFive = 'linear-gradient(58deg, rgba(238,191,100,0.22872899159663862) 0%, rgba(162,0,21,1) 100%)'
                            let savanneSeven = ' linear-gradient(58deg, rgba(105,33,145,0.22872899159663862) 0%, rgba(221,177,23,1) 100%)'

                            gsap.to(".shape-1", 1, {background: savanneFour, ease: "back"})
                            gsap.to(".shape-2", 1, {background: '#ffd44a', opacity:0.3, ease: "back"})
                            gsap.to(".shape-4", 1, {background: savanneOne, opacity:1, ease: "back"})
                            gsap.to(".shape-5", 1, {background: savanneFive})
                            gsap.to(".shape-6", 1, {background: '#dd7817', ease: "back"})
                            gsap.to(".shape-7", 1, {background: savanneSeven, ease: "back"})

                            break;
                        case "samara":
                            let samaraOne = 'linear-gradient(58deg, rgba(186,236,202,1) 0%, rgba(236,237,162,1) 100%)'
                            let samaraFour = 'linear-gradient(58deg, rgba(134,223,249,0.6721463585434174) 0%, rgba(0,200,94,0.8281687675070029) 100%)'   
                            let samaraFive = 'linear-gradient(36deg, rgba(250, 218, 76, 0.708) 19%, rgba(255,204,105,0.6713060224089635) 100%)'
                            let samaraSix= 'linear-gradient(58deg, rgba(116,188,229,1) 0%, rgba(178,221,173,1) 100%)'
                                gsap.to(".shape-1", 1, {background: samaraOne, ease: "back"})
                                gsap.to(".shape-2", 1, {background: '#a2ede0', opacity:0.3, ease: "back"})
                                gsap.to(".shape-4", 1, {background: samaraFour, opacity:1, ease: "back", x: "-10%"})
                                gsap.to(".shape-5", 1, {background: samaraFive})
                                gsap.to(".shape-6", 1, {background: samaraSix, opacity:0.6, ease: "back", width: "30vw"})
                                gsap.to(".shape-3", 1, {background: samaraFive, ease: "back"})
                        break;
                    }
                })

                gsap.from(["#copy", "#cta"], .6, {opacity:0, y:10, stagger:0.25},"+=1")
                gsap.from("#app", 1.5, {opacity:0})
                gsap.from([".shape-1", ".shape-2",".shape-3",".shape-4",".shape-5",".shape-6",".shape-7",".shape-8"], 3, {opacity:0})

                break;
        }

        /* END OF CUSTOM JS */
    }
}