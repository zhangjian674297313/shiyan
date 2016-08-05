  require(["./lib/drag","./lib/qiu"],function(drag,qiu){
  	 var qiu1 = new drag("#dom");
  	 var obj = ["red","blue","pink","yellow","green","#c00","#0c0","#00c","#cc0","#c0c","#0cc","#CC9933","#9900CC","#99FFCC","#0099FF","#FFCCFF","#FF00FF","#CC0000","#cccccc","#CC66FF","#666699"];
	
	 document.addEventListener("keydown",function(e){
		
		if(e.keyCode==13||e.keyCode==32){
			for(var i=0;i<40;i++){
				var ww = radom(200,40);
				var x = radom(window.innerWidth-ww,0);
				var y = radom(window.innerHeight-ww,0);
				var color = obj[radom(obj.length,0)-1];
				new qiu(ww,ww,x,y,color);
			}
		}
		
	},false);
	
	function radom(max,min){
		var num = Math.floor(Math.random()*(max-min))+min;
		if(num == 0){
			num = radom(max,min);
		}
			return num;
		
	}
  });