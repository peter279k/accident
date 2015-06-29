$(function () {
	var str = "";
	get_hurt();

	$("#contact-hospital").click(function() {
		str = "";
		$("#hurt-table").html("");
		$.mobile.loading( "show", {
			text: "載入中...",
			textVisible: true,
			theme: "b",
			html: ""
    		});

		$.getJSON("https://gist.githubusercontent.com/tony1223/695a3c4c2d1ccb8eae85/raw", function(response) {
			$("#filter-hurt-input").attr("placeholder", "ex: 醫院名稱,辦公室電話等");
			$("#updateTime").text("最後更新時間: "+response["lastmodify"]);
			response = response["data"];
			var response_count = 0;
			str += " <thead><tr><th>醫院</th><th>社福中心</th><th>辦公室電話</th><th>主任</th></tr></thead>";
			str += "<tbody>";

			for(;response_count<response.length;response_count++) {
				str += "<tr>";
				str += "<td>"+response[response_count]["醫院"]+"</td>";
				str += "<td>"+response[response_count]["社福中心"]+"</td>";
				str += "<td>"+response[response_count]["辦公室電話"]+"</td>";
				str += "<td>"+response[response_count]["主任"]+"</td>";
				str += "</tr>";
			}
			$("#hurt-table").append(str+"</tbody>");
			$("#hurt-table").table("refresh");
			$.mobile.loading("hide");
		});
	});

	$("#hurt-people-data").on("click", function() {
		get_hurt();
	});
});

function get_hurt() {
	$("#hurt-table").html("");
	str = "";
	$.mobile.loading( "show", {
		text: "載入中...",
		textVisible: true,
		theme: "b",
		html: ""
    	});

	$.getJSON("https://gist.githubusercontent.com/tony1223/098e45623c73274f7ae3/raw", function(response) {
		$.mobile.loading( "show", {
			text: "載入中...",
			textVisible: true,
			theme: "b",
			html: ""
    		});
		$("#filter-hurt-input").attr("placeholder", "ex: 姓名,編號等");
		$("#updateTime").text("最後更新時間: "+response["lastmodify"]);
		var str = "";
		response = response["data"];
		var response_count = 0;
		str += " <thead><tr><th>編號</th><th>縣市別</th><th>收治單位</th><th>檢傷編號</th><th>姓名</th><th>性別</th><th>國籍</th><th>年齡</th><th>醫療檢傷</th><th>救護檢傷</th><th>即時動向</th><th>轉診要求</th><th>刪除註記</th></tr></thead>";
		str += "<tbody>";

		for(;response_count<response.length;response_count++) {
			str += "<tr>";
			str += "<td>"+response[response_count]["編號"]+"</td>";
			str += "<td>"+response[response_count]["縣市別"]+"</td>";
			str += "<td>"+response[response_count]["收治單位"]+"</td>";
			str += "<td>"+response[response_count]["檢傷編號"]+"</td>";
			str += "<td>"+response[response_count]["姓名"]+"</td>";
			str += "<td>"+response[response_count]["性別"]+"</td>";
			str += "<td>"+response[response_count]["國籍"]+"</td>";
			if(response[response_count]["年齡"] === null)
				response[response_count]["年齡"] = "";
			str += "<td>"+response[response_count]["年齡"]+"</td>";
			str += "<td>"+response[response_count]["醫療檢傷"]+"</td>";
			str += "<td>"+response[response_count]["救護檢傷"]+"</td>";
			str += "<td>"+response[response_count]["即時動向"]+"</td>";
			str += "<td>"+response[response_count]["轉診要求"]+"</td>";
			str += "<td>"+response[response_count]["刪除註記"]+"</td>";
			str += "</tr>";
		}
		$("#hurt-table").append(str+"</tbody>");
		$("#hurt-table").table("refresh");
		$.mobile.loading("hide");
	});
}