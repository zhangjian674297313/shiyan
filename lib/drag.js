define([],function(){
	var Mouse={x:0,y:0},boxMouse={x:0,y:0},ttt;
	var drag=function(ele){
		this.ele= document.querySelector(ele);
		this.init();
		
	}
	drag.prototype={
		init:function(){
			this.down();
			
		},
		down:function(){
			var that = this;
			this.ele.addEventListener("mousedown",function(e){
				Mouse.x = e.pageX;
				Mouse.y = e.pageY;
				boxMouse.x = Mouse.x-that.ele.offsetLeft;
				boxMouse.y = Mouse.y-that.ele.offsetTop;
				that.move();
				that.up();
				ttt=that;
			})
		},
		move:function(){
			var that = this;
			/*document.addEventListener("mousemove", function(){
				that.mousemove();
			} );*/
			document.addEventListener( "mousemove" , this.mousemoves ,false);
		},
		up:function(){
			var that = this;
			ttt=null;
			document.addEventListener("mouseup",function(){
				document.removeEventListener("mousemove", that.mousemoves ,false);
			})
		},
		mousemoves:function(e){
			var xx = e.pageX-boxMouse.x,
				yy = e.pageY-boxMouse.y;
				ttt.ele.style.left=xx+"px";
				ttt.ele.style.top=yy+"px";
		}
	}
	
	return drag;
});
