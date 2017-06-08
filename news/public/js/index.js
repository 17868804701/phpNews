var webNews = {
    init: function() {
        var that = this;
        $("nav>ul>li>a").click(function() {
            var newstype = this.innerHTML;
            webNews.ajax(newstype);
        })
        this.ajax('推荐');
    },
    eleBind: function() {},
    documentNav: function() {},
    newsUpdate: function(data) {
        var $lists = $(".news_lists");
        $lists.empty();
        data.forEach(function(data, index, array) {
            var $list = $("<li></li>").addClass("news_list").prependTo($lists); //插入到UL最前端
            var $newsImg = $("<div></div>").addClass("newsImg").appendTo($list);
            var $img = $("<img>").attr("src", data.newsimg).appendTo($newsImg);
            var $newsContent = $("<div></div>").addClass("newsContent").appendTo($list);
            var $h1 = $("<h1></h1>").html(data.newstitle).appendTo($newsContent);
            var $p = $("<p></p>").appendTo($newsContent);
            var $newsTime = $("<span></span>").addClass("newsTime").html(data.newstime).appendTo($p);
            var $newsSrc = $("<span></span>").addClass("newsSrc").html(data.newssrc).appendTo($p);
        })
    },
    ajax: function(newstype) {
        $.ajax({
            url: "server/getnews.php",
            data: { 'newstype': newstype },
            type: "get",
            datatype: "json",
            success: function(data) {
                webNews.newsUpdate(data);
            }
        })
    }
}

$(document).ready(function() {
    webNews.init()
})
