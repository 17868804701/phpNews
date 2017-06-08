var adminWeb = {
    init: function() {
        this.webDemo_nav();
        this.ajaxNewsList();
        this.eleBind();
    },
    data: {
        $newsTable: $("#newsTible tbody"),
        $addNewsList: {
            $title: $("#newstitle"),
            $type: $("#newstype"),
            $address: $("#newsaddress"),
            $time: $("#newstime"),
            $src: $("#newssrc")
        },
        $updataNewsList: {
            $title: $("#u_newstitle"),
            $type: $("#u_newstype"),
            $address: $("#u_newsaddress"),
            $time: $("#u_newstime"),
            $src: $("#u_newssrc")
        },
        deleteId: null,
        updateId: null
    },
    eleBind: function() {
        $("#btnsubmit").on('click', function(e) {
            e.preventDefault();
            adminWeb.addNews();
        });
        // 删除新闻
        $("#newsTible").on('click', '.btn-danger', function(e) {
            adminWeb.data.deleteId = $(this).parent().siblings('.idTh').text();
            $('#deleteModal').modal('show');
        });
        $("#confirmDelete").click(function() {
                adminWeb.delNews(adminWeb.data.deleteId)
            })
            // 修改新闻
        $("#newsTible").on('click', '.btn-info', function(e) {
            adminWeb.data.updateId = $(this).parent().siblings('.idTh').text();
            $('#updateModal').modal('show');
            adminWeb.updateNews(adminWeb.data.updateId);
        });
        $("#confirmUpdate").click(function() {
            adminWeb.sumupdata();
        })
    },
    webDemo_nav: function() {
        $('.dropdown-toggle').dropdown()
    },
    ajaxNewsList: function() {
        adminWeb.data.$newsTable.empty();
        $.ajax({
            url: "../server/getnews.php",
            type: "get",
            datatype: "json",
            success: function(data) {
                adminWeb.refreshNews(data);
            }
        })
    },
    refreshNews: function(data) {
        data.forEach(function(item, index, array) {
            var $tdid = $('<td>').addClass("idTh").html(item.id);
            var $tdtype = $('<td>').html(item.newstype);
            var $tdtitle = $('<td>').html(item.newstitle);
            var $tdsrc = $('<td>').html(item.newssrc);
            var $tdtime = $('<td>').html(item.newstime);
            var $tdctrl = $('<td>');
            var $btnupdate = $('<button>').addClass('btn btn-info btn-xs').html('编辑');
            var $btndelete = $('<button>').addClass('btn btn-danger btn-xs newsDelBtn').html('删除');
            $tdctrl.append($btnupdate, $btndelete);
            var $tRow = $('<tr>');
            $tRow.append($tdid, $tdtype, $tdtitle, $tdtime, $tdctrl);
            adminWeb.data.$newsTable.append($tRow)
        })
    },
    addNews: function() {
        var newsList = adminWeb.data.$addNewsList;
        if (newsList.$title.val() === '' || newsList.$time.val() === '' || newsList.$address.val() === '' || newsList.$src.val() === '') {
            if (newsList.$title.val() === '') {
                newsList.$title.parent().addClass('has-error');
            } else {
                newsList.$title.parent().removeClass('has-error');
            }
            if (newsList.$time.val() === '') {
                newsList.$time.parent().addClass('has-error');
            } else {
                newsList.$time.parent().removeClass('has-error');
            }

            if (newsList.$address.val() === '') {
                newsList.$address.parent().addClass('has-error');
            } else {
                newsList.$address.parent().removeClass('has-error');
            }

            if (newsList.$src.val() === '') {
                newsList.$src.parent().addClass('has-error');
            } else {
                newsList.$src.parent().removeClass('has-error');
            }
        } else {
            $("form").children().removeClass('has-error');
            var data = {
                newstype: newsList.$type.val(),
                newstitle: newsList.$title.val(),
                newstime: newsList.$time.val(),
                newsimg: newsList.$address.val(),
                newssrc: newsList.$src.val(),
            }
            $.ajax({
                url: '../server/insert.php',
                type: 'post',
                data: data,
                datatype: 'json',
                success: function(data) {
                    newsList.$type.val(''),
                        newsList.$title.val(''),
                        newsList.$time.val(''),
                        newsList.$address.val(''),
                        newsList.$src.val(''),
                        adminWeb.ajaxNewsList()
                }
            })
        }
    },
    delNews: function(newsId) {
        $.ajax({
            url: '../server/delete.php',
            type: 'post',
            data: { newsid: newsId },
            success: function(data) {
                console.log('删除成功');
                $("#deleteModal").modal('hide');
                adminWeb.ajaxNewsList();
            }
        })
    },
    updateNews: function(newsid) {
        $.ajax({
            url: '../server/curnews.php',
            type: 'get',
            datatype: 'json',
            data: { newsid: newsid },
            success: function(data) {
                // 拆解数组并赋值
                $('#u_newstitle').val(data[0].newstitle);
                $('#u_newstype').val(data[0].newstype);
                $('#u_newssrc').val(data[0].newssrc);
                $('#u_newsaddress').val(data[0].newsimg);
                // time返回来是一个数组类型的字符串，用空格分开后去左半边的部分即可
                var utime = data[0].newstime.split(' ')[0];
                // console.log(data);
                $('#u_newstime').val(utime);
            }
        });
    },
    sumupdata: function() {
        var newsList = adminWeb.data.$updataNewsList;
        if (newsList.$title.val() === '' || newsList.$time.val() === '' || newsList.$address.val() === '' || newsList.$src.val() === '') {
            if (newsList.$title.val() === '') {
                newsList.$title.parent().addClass('has-error');
            } else {
                newsList.$title.parent().removeClass('has-error');
            }
            if (newsList.$time.val() === '') {
                newsList.$time.parent().addClass('has-error');
            } else {
                newsList.$time.parent().removeClass('has-error');
            }

            if (newsList.$address.val() === '') {
                newsList.$address.parent().addClass('has-error');
            } else {
                newsList.$address.parent().removeClass('has-error');
            }

            if (newsList.$src.val() === '') {
                newsList.$src.parent().addClass('has-error');
            } else {
                newsList.$src.parent().removeClass('has-error');
            }
        } else {
            $("form").children().removeClass('has-error');
            $.ajax({
                url: '../server/update.php',
                type: 'post',
                data: {
                    newstitle: $('#u_newstitle').val(),
                    newstime: $('#u_newstime').val(),
                    newsimg: $('#u_newsaddress').val(),
                    newssrc: $('#u_newssrc').val(),
                    newstype: $('#u_newstype').val(),
                    id: adminWeb.data.updateId
                },
                success: function(data) {
                    $('#updateModal').modal('hide');
                    adminWeb.ajaxNewsList();
                }
            })
        }
    }
    
    // isMobile: function(text) {
    //     return /^[A-Za-z0-9_()（）\-\u4e00-\u9fa5]+$/.test(text);
    // }
}
$(document).ready(function() {
    adminWeb.init();
})
