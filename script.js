
const intro = document.getElementById("intro");
const website = document.getElementById("website");

const startButton = document.getElementById("startButton");

const music = document.getElementById("music");

const envelope = document.getElementById("envelope");

const cake = document.getElementById("cake");

const particlesCanvas = document.getElementById("particles");
const particleCtx = particlesCanvas.getContext("2d");

const fireworksCanvas = document.getElementById("fireworks");
const fireworksCtx = fireworksCanvas.getContext("2d");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("close");

const photos = document.querySelectorAll(".photo img");

const reasonTitle = document.getElementById("reasonTitle");
const reasonText = document.getElementById("reasonText");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const letterText = document.getElementById("letterText");
function resizeCanvas(){

    particlesCanvas.width = window.innerWidth;
    particlesCanvas.height = window.innerHeight;

    fireworksCanvas.width = window.innerWidth;
    fireworksCanvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);
startButton.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

        website.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },700);

    music.play();

});
const reasons = [

{
title:"Always There ❤️",
text:"You've always been there whenever I needed someone. Your kindness means more than you know."
},

{
title:"Amazing Memories 📸",
text:"Every laugh, every conversation, and every memory we've made together is something I'll always treasure."
},

{
title:"Your Smile 🌸",
text:"Your smile has a way of making even ordinary days feel brighter."
},

{
title:"Your Kindness 💖",
text:"You have one of the kindest hearts I've ever known, and that's one of the many reasons I'm grateful for you."
},

{
title:"Being You ❤️",
text:"Simply being yourself is enough to make the people around you happier."
},

{
title:"Thank You 🌷",
text:"Thank you for being such an amazing friend. Happy Birthday, Akriti!"
}

];

let currentReason = 0;

function updateCard(){

    reasonTitle.innerHTML = reasons[currentReason].title;

    reasonText.innerHTML = reasons[currentReason].text;

}

updateCard();

next.addEventListener("click",()=>{

    currentReason++;

    if(currentReason>=reasons.length){

        currentReason=0;

    }

    updateCard();

});

prev.addEventListener("click",()=>{

    currentReason--;

    if(currentReason<0){

        currentReason=reasons.length-1;

    }

    updateCard();

});
photos.forEach(photo=>{

    photo.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=photo.src;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});
const originalLetter = letterText.innerHTML;

letterText.innerHTML="";

let letterIndex=0;

function typeLetter(){

    if(letterIndex < originalLetter.length){

        letterText.innerHTML += originalLetter.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter,28);

    }

}
const particles=[];

for(let i=0;i<120;i++){

    particles.push({

        x:Math.random()*window.innerWidth,

        y:Math.random()*window.innerHeight,

        size:Math.random()*3+1,

        speed:Math.random()*0.6+0.2,

        dx:(Math.random()-0.5)*0.5,

        opacity:Math.random()

    });

}

function animateParticles(){

    particleCtx.clearRect(
        0,
        0,
        particlesCanvas.width,
        particlesCanvas.height
    );

    particles.forEach(p=>{

        particleCtx.beginPath();

        particleCtx.fillStyle=
        "rgba(255,255,255,"+p.opacity+")";

        particleCtx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI*2
        );

        particleCtx.fill();

        p.y-=p.speed;

        p.x+=p.dx;

        if(p.y<0){

            p.y=window.innerHeight;

        }

        if(p.x<0) p.x=window.innerWidth;

        if(p.x>window.innerWidth) p.x=0;

    });

    requestAnimationFrame(animateParticles);

}

animateParticles();
let letterOpened = false;

envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

    if(!letterOpened){

        letterOpened = true;

        setTimeout(() => {

            typeLetter();

        },700);

    }

    launchFireworks();

    createConfetti();

    heartBurst();

    createPetals();

});
function heartBurst(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML=Math.random()>0.5 ? "💖" : "💕";

        heart.style.left=(window.innerWidth/2 + (Math.random()-0.5)*220)+"px";

        heart.style.bottom="150px";

        heart.style.fontSize=(18+Math.random()*22)+"px";

        heart.style.animationDuration=(3+Math.random()*2)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },5000);

    }

}
function floatingHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💗";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(15+Math.random()*18)+"px";

    heart.style.animationDuration=(6+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(floatingHeart,3000);
function createPetals(){

    for(let i=0;i<8;i++){

        const petal=document.createElement("div");

        petal.className="petal";

        petal.innerHTML="🌸";

        petal.style.left=Math.random()*100+"vw";

        petal.style.animationDuration=(6+Math.random()*5)+"s";

        petal.style.fontSize=(20+Math.random()*18)+"px";

        document.body.appendChild(petal);

        setTimeout(()=>{

            petal.remove();

        },11000);

    }

}

setInterval(createPetals,12000);
function createConfetti(){

    for(let i=0;i<40;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.background=
        `hsl(${Math.random()*360},100%,70%)`;

        confetti.style.animationDuration=
        (3+Math.random()*3)+"s";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },6000);

    }

}
let touchStart=0;

const friendCard=document.querySelector(".friendCard");

friendCard.addEventListener("touchstart",(e)=>{

    touchStart=e.touches[0].clientX;

});

friendCard.addEventListener("touchend",(e)=>{

    const touchEnd=e.changedTouches[0].clientX;

    if(touchEnd-touchStart>40){

        prev.click();

    }

    if(touchStart-touchEnd>40){

        next.click();

    }

});
function balloon(){

    const b=document.createElement("div");

    b.className="balloon";

    b.innerHTML="🎈";

    b.style.left=Math.random()*100+"vw";

    b.style.animationDuration=(8+Math.random()*5)+"s";

    document.body.appendChild(b);

    setTimeout(()=>{

        b.remove();

    },10000);

}

setInterval(balloon,3500);
const fireworks = [];

class Firework {

    constructor(x, y) {

        this.x = x;
        this.y = y;

        this.particles = [];

        for (let i = 0; i < 120; i++) {

            this.particles.push({

                x: x,
                y: y,

                angle: Math.random() * Math.PI * 2,

                speed: Math.random() * 7 + 2,

                size: Math.random() * 3 + 1,

                life: 100,

                color:
                `hsl(${Math.random()*360},100%,65%)`

            });

        }

    }

}

function launchFireworks(){

    fireworks.push(

        new Firework(

            window.innerWidth/2,

            window.innerHeight/2

        )

    );

}

function animateFireworks(){

    fireworksCtx.clearRect(

        0,

        0,

        fireworksCanvas.width,

        fireworksCanvas.height

    );

    fireworks.forEach(firework=>{

        firework.particles.forEach(p=>{

            fireworksCtx.beginPath();

            fireworksCtx.fillStyle=p.color;

            fireworksCtx.arc(

                p.x,

                p.y,

                p.size,

                0,

                Math.PI*2

            );

            fireworksCtx.fill();

            p.x += Math.cos(p.angle) * p.speed;

            p.y += Math.sin(p.angle) * p.speed;

            p.speed *= 0.98;

            p.life--;

        });

        firework.particles = firework.particles.filter(

            p=>p.life>0

        );

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();
setInterval(()=>{

    if(letterOpened){

        launchFireworks();

    }

},7000);
let cakeClicks = 0;

cake.addEventListener("click",()=>{

    cakeClicks++;

    const flame=document.querySelector(".flame");

    if(cakeClicks===1){

        flame.style.opacity="0";

        launchFireworks();

        createConfetti();

        heartBurst();

    }

    if(cakeClicks===3){

        showFinalMessage();

    }

});
function showFinalMessage(){

    const message=document.createElement("div");

    message.style.position="fixed";

    message.style.left="50%";

    message.style.top="50%";

    message.style.transform="translate(-50%,-50%)";

    message.style.padding="40px";

    message.style.background="rgba(255,255,255,.2)";

    message.style.backdropFilter="blur(20px)";

    message.style.borderRadius="25px";

    message.style.color="white";

    message.style.textAlign="center";

    message.style.zIndex="999999";

   message.innerHTML = `

<div id="closeMessage">

✖

</div>

<h1 style="font-family:'Great Vibes',cursive;font-size:70px;">

🌸 Happy Birthday 🌸

</h1>

<h2>

Akriti ❤️

</h2>

<br>

<p style="font-size:20px;line-height:2;">

Thank you for being such an amazing friend.

<br><br>

I hope today brings you

as much happiness

as you've brought into my life.

<br><br>

Happy Birthday ❤️

</p>

`;

    document.body.appendChild(message);
    const closeBtn = document.getElementById("closeMessage");

closeBtn.onclick = () => {

    message.style.opacity = "0";

    message.style.transform = "translate(-50%,-50%) scale(.8)";

    setTimeout(() => {

        message.remove();

    },400);

};

    launchFireworks();

    createConfetti();

    heartBurst();

    createPetals();

}
const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate([

                {

                    opacity:0,

                    transform:"translateY(80px)"

                },

                {

                    opacity:1,

                    transform:"translateY(0)"

                }

            ],{

                duration:900,

                fill:"forwards"

            });

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    observer.observe(section);

});
music.volume = 0;

startButton.addEventListener("click", () => {

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.05;

        if (volume >= 1) {

            volume = 1;
            clearInterval(fade);

        }

        music.volume = volume;

    }, 120);

});
setInterval(() => {

    if (!letterOpened) return;

    fireworks.push(

        new Firework(

            Math.random() * window.innerWidth,

            Math.random() * window.innerHeight * 0.5 + 80

        )

    );

}, 3500);
function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left = Math.random()*100+"vw";

    sparkle.style.top = Math.random()*100+"vh";

    sparkle.style.fontSize = (10+Math.random()*15)+"px";

    sparkle.style.pointerEvents = "none";

    sparkle.style.opacity = "0.9";

    sparkle.style.transition = "all 3s linear";

    document.body.appendChild(sparkle);

    requestAnimationFrame(()=>{

        sparkle.style.transform = "translateY(-40px)";
        sparkle.style.opacity = "0";

    });

    setTimeout(()=>{

        sparkle.remove();

    },3000);

}

setInterval(createSparkle,500);
const cursor = document.createElement("span");

cursor.innerHTML = "|";

cursor.style.animation = "pulse 0.8s infinite";

letterText.after(cursor);

setInterval(()=>{

    cursor.style.visibility =
        cursor.style.visibility === "hidden"
        ? "visible"
        : "hidden";

},500);
const waitForTyping = setInterval(()=>{

    if(letterIndex >= originalLetter.length){

        cursor.remove();

        clearInterval(waitForTyping);

    }

},300);
document.querySelectorAll("button").forEach(btn=>{

    btn.style.scrollBehavior = "smooth";

});
function pulseEnding(){

    const ending = document.querySelector(".ending");

    if(!ending) return;

    ending.animate([
        {transform:"scale(1)"},
        {transform:"scale(1.02)"},
        {transform:"scale(1)"}
    ],{
        duration:2500,
        iterations:Infinity
    });

}

pulseEnding();
console.log("🌸 Happy Birthday, Akriti! 🌸");
console.log("Made with ❤️");    