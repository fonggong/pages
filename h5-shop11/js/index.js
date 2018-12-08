$(function() {
	$("#top_img>div>span").on("click", function() {
		if($("#top_img>div>span").text().trim() == "展开") {
			$("#top_img").css({
				"height": "180px"
			});
			$("#top_img>div").css({
				"height": "180px"
			});
			$("#top_img>div>img").css({
				"height": "180px"
			});
			$("#top_img>div>span").text("收起");
		} else if($("#top_img>div>span").text().trim() == "收起") {
			$("#top_img").css({
				"height": "80px"
			});
			$("#top_img>div").css({
				"height": "80px"
			});
			$("#top_img>div>img").css({
				"height": "80px"
			});
			$("#top_img>div>span").text("展开");
		}

	});

	$(".rote").mouseenter(function() {
		$(".rote>.roteSon>span").eq(1).css({
			"transform": "rotate(-180deg)",
			"-moz-transform": "rotate(-180deg)",
			"-ms-transform": "rotate(-180deg)",
			"-webkit-transform": "rotate(-180deg)"
		});
	})
	$(".rote").mouseleave(function() {
		$(".rote>.roteSon>span").eq(1).css({
			"transform": "rotate(0deg)",
			"-moz-transform": "rotate(0deg)",
			"-ms-transform": "rotate(0deg)",
			"-webkit-transform": "rotate(0deg)"
		});
	})

	//轮播
	var fg = 0;
	$(".lunbo button").eq(0).css({
		"background": "red"
	})

	function lunbo() {
		fg--;
		if(fg == -6) {
			fg = 0;
			$(".lunbo>div>div").eq(0).animate({
				"left": fg * 1200 + "px"
			}, 0)
			fg--;
			$(".lunbo>div>div").eq(0).animate({
				"left": fg * 1200 + "px"
			}, 1000)
		} else {
			$(".lunbo>div>div").eq(0).animate({
				"left": fg * 1200 + "px"
			}, 1000)
		}
		rain(-fg)
	}

	function rain(x) {
		if(x == 5) {
			x = 0
		}
		$(".lunbo button").css({
			"background": "white"
		})
		$(".lunbo button").eq(x).css({
			"background": "red"
		})

	}
	setInterval(lunbo, 4000);

	//手动轮播
	var times = 0;
	$(".leftBtn").click(function() {
		times--;
		if(times < -1) {
			times = -2;
		}
		$(".menul").animate({
			"left": times * 1000 + "px"
		}, 1500)
		moveLine(-times);
	})

	$(".rightBtn").click(function() {
		times++;
		if(times > -1) {
			times = 0;
		}
		$(".menul").animate({
			"left": times * 1000 + "px"
		}, 1500)
	  moveLine(-times);
	})
	
	function moveLine(index) {
		$(".moveLine").animate({"left":index*400+"px"},1500)
	}
})