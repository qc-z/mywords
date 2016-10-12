/**
 * Created by Administrator on 2016/9/27.
 */
$(window).on("load",function () {
    waterFloat();
    var dataInt = {"data":[{"src":'0.jpg'},{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'},{"src":'6.jpg'},{"src":'7.jpg'},{"src":'8.jpg'},{"src":'9.jpg'},{"src":'10.jpg'}]}
    $(window).on("scroll",function(){
        if(checkScollSlide){
            $.each(dataInt.data,function(key,value){
                var oBox = $("<div>").addClass("box").appendTo($("#main"));
                var oPic = $("<div>").addClass("pic").appendTo($(oBox));
                $("<img>").attr("src","images/"+$(value).attr("src")).appendTo(oPic);
            })
            waterFloat();
        }

    })
})
function waterFloat(){
    var $boxs = $("#main > div");
    var w = $boxs.eq(0).outerWidth();//得到一个盒子的大小
    //console.log(w);
    var cols = Math.floor($(window).width()/w);//得到列数
    //console.log(cols)
    //给main赋值宽度
    $("#main").width(cols*w).css("margin","0 auto");//让盒子居中
    //遍历第一列盒子
    var hArr =[];
    $boxs.each(function(index,value){
        var h = $boxs.eq(index).outerHeight();
        if(index < cols){  //第一行的高度存进数组里
            hArr[index] = h;
        }else{
            var minH =  Math.min.apply(null,hArr);  //从第二行开始 求出第一行的最小高度以及他的索引值
            //console.log(minH);
            var minIndex = $.inArray(minH,hArr)
            //console.log(minIndex)
            $(value).css({                  //给后面的元素加定位  并且设置属性top left
                "position":"absolute",
                "top":minH + "px",
                "left":w*minIndex + "px"
            })
            hArr[minIndex]  += $boxs.eq(index).outerHeight();
        }

    })
}
function checkScollSlide(){
    var $lastBoxs = $("#main > div").last();//得到最后一个div
    var lastBoxH = $lastBoxs.offset().top + Math.floor($lastBoxs.outerHeight()/2);//得到最后一个盒子自身一半距离与距离父盒子之和
    var scroll = $(window).scrollTop() + $(window).height();
    return (lastBoxH < scroll)?true:false;
}