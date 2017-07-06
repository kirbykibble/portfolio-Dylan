//data structure is as follows:
// 0 = string, title
// 1 = string, description or subtitle
// 2 = string, background image
// 3 = string, link for hosted website (if applicable)
// 4 = string, link for download (if applicable)
// 5 = string, link for github (if applicable)
works = [
	["Elite Dangerous Chatroom", "A room & session based chatsite", "one.jpg", "https://midterm-ed.herokuapp.com/", null, "https://github.com/kirbykibble/ed-midterm"],
	["Java Blacklister Application", "A java based application that generates data from pcap files", "two.png", null, "https://github.com/kirbykibble/blacklister/archive/master.zip", "https://github.com/kirbykibble/blacklister"],
	["This Website", "Built in less than 24 hours", "four.png", null, null, "https://github.com/kirbykibble/portfolio-Dylan"],
	["Dagobah Diner", "A fictitious fast food ordering application", "five.png", "http://dagobahtech.herokuapp.com/", null, "https://github.com/kirbykibble/acit2910"]
]

$(document).ready(function() {
	generate();
	document.getElementById("titleDisp").style.marginTop = 0;
	
	document.getElementById("start").addEventListener("click", function() {
		console.log("working");
		
		var res = document.getElementById("resume");
		var cont = document.getElementById("contact");
		var work = document.getElementById("works");
		var txt = document.getElementById("startDiv");
		
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
			document.getElementById("titleDisp").style.backgroundPosition = "right bottom";
		});
		
		document.getElementById("return").addEventListener("click", function() {
			document.getElementById("titleDisp").style.marginTop = "0";
			document.getElementById("titleDisp").style.backgroundPosition = "right top";
		});
		document.getElementById("worksReturn").addEventListener("click", function() {
			document.getElementById("titleDisp").style.marginTop = "0";
			document.getElementById("titleDisp").style.backgroundPosition = "right top";
			document.body.style.overflowY = "hidden";
			document.getElementById("worksReturn").style.opacity = 0;
			setTimeout(function() {
				document.getElementById("worksReturn").style.display = "none"
			}, 500);
		});
		work.addEventListener("click", function(){
			document.getElementById("titleDisp").style.marginTop = "-200vh";
			document.getElementById("titleDisp").style.backgroundPosition = "right bottom";
			setTimeout(function() {
				document.body.style.overflowY = "scroll";
				document.getElementById("worksReturn").style.display = "inherit"
				setTimeout(function() {
					document.getElementById("worksReturn").style.opacity = 1;
				}, 100);
			}, 1500);
		});
	});
	
	function generate() {
		for (i = 0; i < works.length; i++) {
			var item = document.createElement("div");
			item.setAttribute("ID", "item");
			item.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url('/img/" + works[i][2] + "')";
			
			var itemOuter = document.createElement("div");
			itemOuter.setAttribute("ID", "itemOuter");
			
			
			var head = document.createElement("div");
			head.setAttribute("ID", "head");
			head.innerHTML = works[i][0];
			
			var subHead = document.createElement("div");
			subHead.setAttribute("ID", "subHead");
			subHead.innerHTML = works[i][1]

			var links = document.createElement("div");
			links.setAttribute("ID", "links");
			
			if(works[i][3] != null) {
				var hosted = document.createElement("a");
				hosted.href = works[i][3];
				hosted.target = "_blank";
				hosted.innerHTML = "Check it out";
				links.appendChild(hosted);
				
				if((works[i][4] != null) || (works[i][5] != null)) {
					links.innerHTML = links.innerHTML + " • ";
				}
				
			}
			if(works[i][4] != null) {
				var download = document.createElement("a");
				download.href = works[i][4];
				download.target = "_blank";
				download.innerHTML = "Download";
				links.appendChild(download);

				if(works[i][5] != null) {
					links.innerHTML = links.innerHTML + " • ";
				}
			}
			if(works[i][5] != null) {
				var github = document.createElement("a");
				github.href = works[i][5];
				github.target = "_blank";
				github.innerHTML = "Source Code";
				links.appendChild(github);
			}
			
			itemOuter.appendChild(head);
			itemOuter.appendChild(subHead);
			itemOuter.appendChild(links);
			
			item.appendChild(itemOuter);
			
			document.getElementById("worksDiv").appendChild(item);
		}
	}
});