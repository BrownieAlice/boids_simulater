function set(){
 canvas=document.getElementById('loop');
 ctx=canvas.getContext('2d');
 width=canvas.width;
 height=canvas.height;
 setarr=document.getElementById("settings");
 
 flag=0;
 rad=20;
//円の半径
 kr1=2.5;
//反発距離係数
 kr2=7.5;
//中心視認距離計数
 kr3=4;
//周辺視認距離
 k1=0.01;
//反発離脱加速度係数
 k2=20;
//中心進行加速度係数
 k3=0.1;
//周辺速度加速度係数
 dt=1;
//微小時間
 cirnum=50;
//円の数
 kv=0.001;
//目標速度加速度係数
 ve=5;
//目標速度
 vmax=30;
//最高速度

 for(i=0;i<setarr.length;i++){
  switch(i){
   case 0:
    setarr[i].value=rad;
    break;
   case 1:
    setarr[i].value=kr1;
    break;
   case 2:
    setarr[i].value=kr2;
    break;
   case 3:
    setarr[i].value=kr3;
    break;
   case 4:
    setarr[i].value=k1;
    break;
   case 5:
    setarr[i].value=k2;
    break;
   case 6:
    setarr[i].value=k3;
    break;
   case 7:
    setarr[i].value=dt;
    break;
   case 8:
    setarr[i].value=cirnum;
    break;
   case 9:
    setarr[i].value=kv;
    break;
   case 10:
    setarr[i].value=ve;
    break;
   case 11:
    setarr[i].value=vmax;
    break;
  }
 }
 
 var Ele=function(){
 };
 
 Ele.prototype.reset=function(){
  this.x=Math.random()*(width-4*rad)+2*rad;
  this.y=Math.random()*(height-4*rad)+2*rad;
  this.vx=Math.random()*20-10;
  this.vy=Math.random()*20-10;
  this.ax1=this.ay1=this.ax2=this.ay2=this.ax3=this.ay3=this.ax4=this.ay4=0;
 };

 circle=new Array(cirnum);
 for(i=cirnum;i--;){
  circle[i]=new Ele();
  circle[i].reset();
 }
 window.requestAnimationFrame(anime);
}

function start(){
 resetting();
 while(circle.length<cirnum){
  circle.push({
   x:Math.random()*(width-4*rad)+2*rad,
   y:Math.random()*(height-4*rad)+2*rad,
   vx:Math.random()*20-10,
   vy:Math.random()*20-10,
   ax1:0,
   ay1:0,
   ax2:0,
   ay2:0,
   ax3:0,
   ay3:0,
   ax4:0,
   ay4:0
   });
 }
 while(cirnum<circle.length){
  circle.pop();
 }
 if(flag==2){
  window.requestAnimationFrame(anime);
 }
 flag=0;
}

function resetting(){
 setarr=document.getElementById("settings");
 for(i=0;i<setarr.length;i++){
  if(!isNaN(Number(setarr[i].value))){
   switch(i){
    case 0:
     rad=Number(setarr[i].value);
     break;
    case 1:
     kr1=Number(setarr[i].value);
     break;
    case 2:
     kr2=Number(setarr[i].value);
     break;
    case 3:
     kr3=Number(setarr[i].value);
     break;
    case 4:
     k1=Number(setarr[i].value);
     break;
    case 5:
     k2=Number(setarr[i].value);
     break;
    case 6:
     k3=Number(setarr[i].value);
     break;
    case 7:
     dt=Number(setarr[i].value);
     break;
    case 8:
     cirnum=Number(setarr[i].value);
     break;
    case 9:
     kv=Number(setarr[i].value);
     break;
    case 10:
     ve=Number(setarr[i].value);
     break;
    case 11:
     vmax=Number(setarr[i].value);
     break;
   }
  }
  switch(i){
   case 0:
    setarr[i].value=rad;
    break;
   case 1:
    setarr[i].value=kr1;
    break;
   case 2:
    setarr[i].value=kr2;
    break;
   case 3:
    setarr[i].value=kr3;
    break;
   case 4:
    setarr[i].value=k1;
    break;
   case 5:
    setarr[i].value=k2;
    break;
   case 6:
    setarr[i].value=k3;
    break;
   case 7:
    setarr[i].value=dt;
    break;
   case 8:
    setarr[i].value=cirnum;
    break;
   case 9:
    setarr[i].value=kv;
    break;
   case 10:
    setarr[i].value=ve;
    break;
   case 11:
    setarr[i].value=vmax;
    break;
  }
 }
}

function restart(){
 if(flag==0){
  flag=1;
 }
 resetting();
 circle=new Array(cirnum);
 for(i=0;i<cirnum;i++){
  circle[i]={
   x:Math.random()*(width-4*rad)+2*rad,
   y:Math.random()*(height-4*rad)+2*rad,
   vx:Math.random()*20-10,
   vy:Math.random()*20-10,
   ax1:0,
   ay1:0,
   ax2:0,
   ay2:0,
   ax3:0,
   ay3:0,
   ax4:0,
   ay4:0
   }
 }
 if(flag==2){
  window.requestAnimationFrame(anime);
 }
 flag=0;
}

function loc(){
//速度情報から位置を計算し描画する
 ctx.clearRect(0,0,width,height)
 var col_lis=["rgb(192, 80, 77)","rgb(155, 187, 89)","rgb(128, 100, 162)","rgb(67, 135, 233)","rgb(248, 220, 133)"]
 for(i=0;i<cirnum;i++){
  circle[i].x+=circle[i].vx*dt
  if(circle[i].x>=width-rad){
   circle[i].x=(width-rad);
   circle[i].vx=-1*circle[i].vx;
  }else if(circle[i].x<=rad){
   circle[i].x=rad;
   circle[i].vx=-1*circle[i].vx;
  }
  circle[i].y+=circle[i].vy*dt
  if(circle[i].y>=height-rad){
   circle[i].y=(height-rad);
   circle[i].vy=-1*circle[i].vy;
  }else if(circle[i].y<=rad){
   circle[i].y=rad;
   circle[i].vy=-1*circle[i].vy;
  }
 ctx.beginPath();
 ctx.fillStyle = col_lis[i%col_lis.length]; // 赤
 ctx.arc(circle[i].x,circle[i].y,rad,0,Math.PI*2,true);
 ctx.fill();
 }
}

function vel(){
//加速度情報から速度を計算する
 for(i=0;i<cirnum;i++){
  circle[i].vx+=dt*(circle[i].ax1+circle[i].ax2+circle[i].ax3+circle[i].ax4);
  circle[i].vy+=dt*(circle[i].ay1+circle[i].ay2+circle[i].ay3+circle[i].ay4);
  var v=Math.sqrt(Math.pow(circle[i].vx,2)+Math.pow(circle[i].vy,2));
  if(v>vmax){
   circle[i].vx*=vmax/v;
   circle[i].vy*=vmax/v;
  }
 }
}

function eq(){
//速度を一定にしようとする加速度を計算
 for(i=0;i<cirnum;i++){
  var v=Math.sqrt(Math.pow(circle[i].vx,2)+Math.pow(circle[i].vy,2));
  if(circle[i].vx<0){
   var sgnx=-1;
  }else{
   var sgnx=1;
  }
  if(circle[i].vy<0){
   var sgny=-1;
  }else{
   var sgny=1;
  }
  circle[i].ax4=sgnx*(ve-v)*Math.pow(Math.abs(ve-v),1)*kv
  circle[i].ay4=sgny*(ve-v)*Math.pow(Math.abs(ve-v),1)*kv
 }
}

function lev(){
//近くにいる個体とは離れる方向に行く加速度を計算
 for(i=0;i<cirnum;i++){
  var sumx=0;
  var sumy=0;
  var count=0;
  var num=0;
  var near=0;
  for(j=0;j<cirnum;j++){
   var dis=Math.sqrt(Math.pow(circle[i].x-circle[j].x,2)+Math.pow(circle[i].y-circle[j].y,2));
   if(dis<rad*kr1&&i!=j){
    sumx+=(rad*kr1&-dis)*(circle[j].x-circle[i].x);
    sumy+=(rad*kr1&-dis)*(circle[j].y-circle[i].y);
    count+=rad*kr1&-dis;
    num+=1;
    if(dis<rad){
     near+=1
    }
   }
  }
  circle[i].ax1=0;
  circle[i].ay1=0;
  if(count!=0&&(num<5||near!=0)){
   var avex=sumx/count;
   var avey=sumy/count;
   if(avex!=0&&avey!=0){
    var d=Math.sqrt(Math.pow(avex,2)+Math.pow(avey,2));
    var vecx=-1*avex/d;
    var vecy=-1*avey/d;
    circle[i].ax1=vecx*k1*(rad*kr1-d);
    circle[i].ay1=vecy*k1*(rad*kr1-d);
   }
  }
 }
}

function apr(){
//近くの集団に近づこうとする加速度を計算
 for(i=0;i<cirnum;i++){
  var sumx=0;
  var sumy=0;
  var count=0;
  for(j=0;j<cirnum;j++){
   var dis=Math.sqrt(Math.pow(circle[i].x-circle[j].x,2)+Math.pow(circle[i].y-circle[j].y,2));
   if(dis<rad*kr2&&i!=j){
    sumx+=(circle[j].x-circle[i].x);
    sumy+=(circle[j].y-circle[i].y);
    count++;
   }
   circle[i].ax2=0;
   circle[i].ay2=0;
   if(count!=0){
    var avex=sumx/count;
    var avey=sumy/count;
    var d=Math.sqrt(Math.pow(avex,2)+Math.pow(avey,2));
    var vecx=avex/d;
    var vecy=avey/d;
    circle[i].ax2=vecx*k2/d;
    circle[i].ay2=vecy*k2/d;
   }
  }
 }
}

function fit(){
//近くの集団と速度を合わせようとする加速度を計算
 for(i=0;i<cirnum;i++){
  var sumx=0;
  var sumy=0;
  var count=0;
  for(j=0;j<cirnum;j++){
   var dis=Math.sqrt(Math.pow(circle[i].x-circle[j].x,2)+Math.pow(circle[i].y-circle[j].y,2));
   if(dis<rad*kr3&&i!=j){
    sumx+=circle[j].vx;
    sumy+=circle[j].vy;
    count++;
   }
   circle[i].ax3=0;
   circle[i].ay3=0;
   if(count!=0){
    var avex=sumx/count;
    var avey=sumy/count;
    circle[i].ax3=k3*(avex-circle[i].vx);
    circle[i].ay3=k3*(avey-circle[i].vy);
   }
  }
 }
}

function anime(){
 eq();
 fit();
 apr();
 lev();
 vel();
 loc();
 if(flag==0){
  window.requestAnimationFrame(anime);
 }else{
  window.cancelAnimationFrame(anime);
 }
}
