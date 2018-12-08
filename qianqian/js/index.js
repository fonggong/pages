var cheng = document.querySelector(".cheng");
var chengList = document.querySelector(".chengList");
var topContent = document.querySelector(".top-content")
var container = document.querySelector(".container")
var topList = document.querySelector(".topList")
var div = document.querySelector(".topList>div")
var line1 = document.querySelector(".line1");
var body = document.body;

var fg = 1;
topContent.onmouseleave = function() {
	fg = 0;
}
body.onclick = function() {
	if(fg == 0) {
		chengList.style.display = "none";
		cheng.style.display = "absolute";
		cheng.style.left = "0";
		cheng.style.top = "0";
		cheng.style.background = "#F5F5F5";
		cheng.style.borderTop = '1px solid #F5F5F5';
		cheng.style.borderLeft = '1px solid #F5F5F5';
		cheng.style.borderRight = '1px solid #F5F5F5';
		cheng.style.zIndex = "10";
		cheng.style.height = "29px";
		line1.style.display = "none";
	}

}
topContent.onmouseover = function() {
	fg = 1;
}
topContent.onclick = function() {
	if(fg == 1) {
		chengList.style.display = "block";
		cheng.style.display = "absolute";
		cheng.style.left = "0";
		cheng.style.top = "0";
		cheng.style.height = "100px"
		cheng.style.background = "#FFFFFF";
		cheng.style.borderTop = '1px solid #bbb';
		cheng.style.borderLeft = '1px solid #bbb';
		cheng.style.borderRight = '1px solid #bbb';
		cheng.style.zIndex = "20";
		line1.style.display = "block";
	}
}

var search = document.querySelector(".searchB");
var searchB = document.querySelector(".searchB>div");
var inp = document.querySelector(".searchB>input");
inp.onfocus = function() {
	searchB.style.display = "block";
	search.style.borderBottomLeftRadius = '0';
	search.style.borderBottomRightRadius = '0';
}

inp.onblur = function() {
	searchB.style.display = "none";
	search.style.borderBottomLeftRadius = '5px';
	search.style.borderBottomRightRadius = '5px';
}

var close = document.querySelector(".closed");
var loginw = document.querySelector(".loginw");
var loginq = document.querySelector(".loginq");


close.onclick = function() {
	loginw.style.width = "0px";
	loginw.style.border = "none";
}
loginq.onmouseenter = function() {
	loginw.style.width = "270px";
	loginw.style.border = "1px solid #ccc";
}
loginq.onmouseleave = function() {
	loginw.style.width = "0px";
	loginw.style.border = "none";
}



