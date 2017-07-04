$(document).ready(function() {
   console.log("ready!");
   console.log("ready!");
	
	document.getElementById("start").addEventListener("click", function() {
		console.log("working");
		
		var res = document.getElementById("resume");
		var cont = document.getElementById("contact");
		var work = document.getElementById("works");
		var txt = document.getElementById("textDiv");
		
		txt.style.marginLeft = "-100vw";
		res.style.marginLeft = "0";
		cont.style.marginLeft = "0";
		work.style.marginLeft = "0";
		
		setTimeout(function() {
//			console.log("work");
			res.style.transitionDuration = "0.5s";
			cont.style.transitionDuration = "0.5s";
			work.style.transitionDuration = "0.5s";
		}, 1500);
		
		document.getElementById("titleDisp").style.backgroundPosition = "top right";
//		res.addEventListener("click", function() {
//			console.log("working");
//		});
		
		cont.addEventListener("click", function() {
//			console.log("working");
			document.getElementById("titleDisp").style.marginTop = "-100vh";
		});
		
		document.getElementById("return").addEventListener("click", function() {
			document.getElementById("titleDisp").style.marginTop = "0";
		});
	});
	
	
});