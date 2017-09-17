$.ajax({
    type : "get",
    async:false,
    url : "http://127.0.0.1:8081/datacal/getUserName?id=1",
    dataType : "json",
    success : function(data){
        $("#user").html(data.value)
    },
    error:function(){
        alert('fail');
    }
});

$.ajax({
    type : "get",
    async:false,
    url : "http://127.0.0.1:8081/datacal/getAifProject",
    dataType : "json",
    success : function(data){
        $("#nonghu_project").html(
            "<h1 class=\"text_self4\">农户项目</h1>"+
            "<hr>"
        )
        for(var j=0;j<2;j++){
            $("#nonghu_project").append("<div class=\"row row2\" id=\"summary-container\">");
            for(var i=0;i<3;i++) {
                $("#nonghu_project").append(
                    "<div class=\"col-md-4 text3_self\">"+
                    "<a href=\"project_content.html\"><img class=\"img-circle img_self\" src=\"images/img4.jpg\" alt=\"firefox\"></a>"+
                    "<h2>"+data[j*3+i].projectName+"</h2>"+
                    "<p>"+data[j*3+i].projectIntroduce+"</p>"+
                    "</div>"
                )
            }
            $("#nonghu_project").append("</div>");
        }
        $("#nonghu_project").append(
            "<h3 class=\"text_self5\"><a href=\"\"><span class=\"glyphicon glyphicon-share-alt\"></span>more</a></h3>"+
            "<br />"
        )
    },
    error:function(){
        alert('fail');
    }
});

$.ajax({
    type : "get",
    async:false,
    url : "http://127.0.0.1:8081/datacal/getAifProject",
    dataType : "json",
    success : function(data){
        $("#move_project").html(
            "<h1 class=\"text_self4\">转手项目</h1>"+
            "<hr>"
        )
        for(var j=0;j<2;j++){
            $("#move_project").append("<div class=\"row row2\" id=\"summary-container\">");
            for(var i=0;i<3;i++) {
                $("#move_project").append(
                    "<div class=\"col-md-4 text3_self\">"+
                    "<a href=\"project_content.html\"><img class=\"img-circle img_self\" src=\"images/img4.jpg\" alt=\"firefox\"></a>"+
                    "<h2>"+data[j*3+i].projectName+"</h2>"+
                    "<p>"+data[j*3+i].projectIntroduce+"</p>"+
                    "</div>"
                )
            }
            $("#move_project").append("</div>");
        }
        $("#move_project").append(
            "<h3 class=\"text_self5\"><a href=\"\"><span class=\"glyphicon glyphicon-share-alt\"></span>more</a></h3>"+
            "<br />"
        )
    },
    error:function(){
        alert('fail');
    }
});

$.ajax({
    type : "get",
    async:false,
    url : "http://127.0.0.1:8081/datacal/getAifProject",
    dataType : "json",
    success : function(data){
        $("#good_brand").html(
            "<h1 class=\"text_self4\">优秀农户品牌</h1>"+
            "<hr>"
        )
        for(var j=0;j<2;j++){
            $("#good_brand").append("<div class=\"row row2\" id=\"summary-container\">");
            for(var i=0;i<3;i++) {
                $("#good_brand").append(
                    "<div class=\"col-md-4 text3_self\">"+
                    "<a href=\"project_content.html\"><img class=\"img-circle img_self\" src=\"images/img4.jpg\" alt=\"firefox\"></a>"+
                    "<h2>"+data[j*3+i].projectName+"</h2>"+
                    "<p>"+data[j*3+i].projectIntroduce+"</p>"+
                    "</div>"
                )
            }
            $("#good_brand").append("</div>");
        }
        $("#good_brand").append(
            "<h3 class=\"text_self5\"><a href=\"\"><span class=\"glyphicon glyphicon-share-alt\"></span>more</a></h3>"+
            "<br />"
        )
    },
    error:function(){
        alert('fail');
    }
});