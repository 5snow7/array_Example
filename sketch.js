let can;
let a=[];b=[];num=[];
function setup() {
can=createCanvas(1000,400);
can.position(100,100);
can.class("bdd");textSize(18);
rectMode(CENTER);//noFill();
for(let j=0;j<10;j++){
	b[j]=[];
for(let k=0;k<10;k++){
	//b[j].push(load(a));
if(j==0||k==0){b[j][k]=0;}
else{b[j][k]=floor(random(20));}
}
}
}

function draw() {
  background(250,250,0);//noFill();
  //ar(load(a));
  //text(b.length,20,20);
for(let j=0;j<10;j++){
	for(let k=0;k<10;k++){
//text(b[j][k],60+30*k,50+30*j);		
noFill();
rect(60+30*k,50+30*j,60,60);
fill(250,0,0);
text(b[j][k],60+30*k,20+30*j);		
}}
}

function load(a){
for(let j=0;j<10;j++){a.push(floor(random(50)));}

return a;
}

function ar(a){
for(let j=0;j<a.length;j++){text(a[j],60+30,50+30*j);}
}

function run(b){
for(let j=0;j<10;j++){
	//b[j]=[];
for(let k=0;k<10;k++){
	//b[j].push(load(a));
if(j==0||k==0){b[j][k]=0;}
else{b[j][k]=(b[j-1][k-1]+b[j][k-1]+b[j+1][k-1])%4;
}
}}
}

function keyPressed(){
//if(key=='a'){run(b);key='b';}
run(b);return false;
}	
	
	
	


