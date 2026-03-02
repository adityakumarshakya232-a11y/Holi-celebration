const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticles(x,y){
for(let i=0;i<30;i++){
particles.push({
x:x,
y:y,
size:Math.random()*10+5,
color:`hsl(${Math.random()*360},100%,50%)`,
speedX:(Math.random()-0.5)*5,
speedY:(Math.random()-0.5)*5,
life:100
});
}
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
particles.forEach((p,index)=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fillStyle=p.color;
ctx.fill();
p.x+=p.speedX;
p.y+=p.speedY;
p.life--;

if(p.life<=0){
particles.splice(index,1);
}
});
requestAnimationFrame(animate);
}
animate();

window.addEventListener("click",(e)=>{
createParticles(e.clientX,e.clientY);
});

function startHoli(){
let name=document.getElementById("nameInput").value;

if(name.trim()!=""){

// Hide input card
document.getElementById("inputCard").classList.add("hidden");

// Show wish card
document.getElementById("wishCard").classList.remove("hidden");

// Set wish text
document.getElementById("wishText").innerHTML=
`🌈 Happy Holi ${name}! 🎉 <br> Stay Colorful & Blessed 💜`;

// Play music automatically
document.getElementById("holiSong").play();
}
}