define(["./drag"],function(aa){
	var qiu1 = new aa("#dom");
	var n = 0;
	var qiu = function(w,h,x,y,color,speed){
		this.w = w;
		this.h = h;
		this.x = x;
		this.y = y;
		this.color = color;
		this.speed=  speed;
		this.init();
		this.reque();
	}
	qiu.prototype={
		init:function(){
			this.ele = document.createElement("div");
			this.ele.style.cssText="width:"+this.w+"px;height:"+this.h+"px;left:"+this.x+"px;top:"+this.y+"px;background:"+this.color+";";
			this.ele.className="pos";
			document.body.appendChild(this.ele);
		},
		reque:function(){
			var that = this;
			var xx = radom(-5,5);
			var yy = radom(-5,5);
			setInterval(function(){
				that.y += yy;
				that.x += xx;
				if(that.x<=0){
					xx = -xx;
				}else if(that.x>=window.innerWidth-that.w){
					xx = -xx;
				}
				if(that.y<=0){
					yy = -yy;
				}else if(that.y>=window.innerHeight-that.h){
					yy = -yy;
				}
				that.fuzhi();
				var oxx = (that.ele.offsetLeft+that.ele.offsetHeight/2) - (qiu1.ele.offsetLeft+qiu1.ele.offsetHeight/2);
				var oyy = (that.ele.offsetTop+that.ele.offsetHeight/2) - (qiu1.ele.offsetTop+qiu1.ele.offsetHeight/2);
				var ozz = that.ele.offsetHeight/2 + qiu1.ele.offsetHeight/2;
				if(Math.pow(oxx,2)+Math.pow(oyy,2)<=Math.pow(ozz,2)){
					alert("您的得分是"+n);
					location.reload()
				}
				//console.log( (that.ele.offsetLeft+that.ele.offsetHeight/2) - (qiu1.ele.offsetLeft+qiu1.ele.offsetHeight/2) )  
				//console.log((qiu1.ele.offsetLeft+qiu1.ele.offsetHeight/2)+"."+(qiu1.ele.offsetTop+qiu1.ele.offsetHeight/2))
			},20);
		},
		fuzhi:function(){
			this.ele.style.cssText="width:"+this.w+"px;height:"+this.h+"px;left:"+this.x+"px;top:"+this.y+"px;background:"+this.color+";";
		}
	}
	function radom(max,min){
		var num = Math.floor(Math.random()*(max-min))+min;
		if(num == 0){
			num = radom(max,min);
		}
			return num;
		
	}
	var fen = document.querySelector("#fen");
		setInterval(function(){
			n++;
			fen.innerHTML=n;
		},1000);
	return qiu;
});
