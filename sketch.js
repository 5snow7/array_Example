let can;
let a=[];
function setup() {
can=createCanvas(500,400);
can.position(100,100);
can.class("bdd");
//for(let j=0;j<10;j++){a.push(random(50));}
}

function draw() {
  background(250,250,0);
  ar(load(a));
}

function load(a){
	for(let j=0;j<10;j++){
a.push(random(50));
}
return a;
}

function ar(a){
	for(let j=0;j<a.length;j++){
		text(a[j],60,50+30*j);
	}
	
}