function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },countDown:function(){
  var timer='';
  var today=new Date();
  var day=Math.floor((this.tl-today)/(24*60*60*1000));
  var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  var me=this;

  if( ( this.tl - today ) > 0 ){
   timer += '<span class="number-wrapper"><span class="number day">'+this.addZero(day)+'</span><div class="caption-t">дней</div><div class="line">:</div></span>';
   timer += '<span class="number-wrapper"><span class="number hour">'+this.addZero(hour)+'</span><div class="caption-t">часов</div><div class="line">:</div></span>';
   timer += '<span class="number-wrapper"><span class="number min">'+this.addZero(min)+'</span><div class="caption-t">минут</div><div class="line">:</div></span><span class="number-wrapper"><span class="number sec">'+this.addZero(sec)+'</span><div class="caption-t">секунд</div></span>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
function CDT(){

 // Set countdown limit
 var tl = new Date('2016/11/01 15:56:25');

 // You can add time's up message here
 var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
 timer.countDown();
}
function CDT2(){

 // Set countdown limit
 var tl = new Date('2016/11/01 15:56:25');

 // You can add time's up message here
 var timer = new CountdownTimer('CDT2',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
 timer.countDown();
}
window.onload=function(){
 CDT();
 CDT2();
}
