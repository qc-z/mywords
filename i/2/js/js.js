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
    var w = $boxs.eq(0).outerWidth();//�õ�һ�����ӵĴ�С
    //console.log(w);
    var cols = Math.floor($(window).width()/w);//�õ�����
    //console.log(cols)
    //��main��ֵ���
    $("#main").width(cols*w).css("margin","0 auto");//�ú��Ӿ���
    //������һ�к���
    var hArr =[];
    $boxs.each(function(index,value){
        var h = $boxs.eq(index).outerHeight();
        if(index < cols){  //��һ�еĸ߶ȴ��������
            hArr[index] = h;
        }else{
            var minH =  Math.min.apply(null,hArr);  //�ӵڶ��п�ʼ �����һ�е���С�߶��Լ���������ֵ
            //console.log(minH);
            var minIndex = $.inArray(minH,hArr)
            //console.log(minIndex)
            $(value).css({                  //�������Ԫ�ؼӶ�λ  ������������top left
                "position":"absolute",
                "top":minH + "px",
                "left":w*minIndex + "px"
            })
            hArr[minIndex]  += $boxs.eq(index).outerHeight();
        }

    })
}
function checkScollSlide(){
    var $lastBoxs = $("#main > div").last();//�õ����һ��div
    var lastBoxH = $lastBoxs.offset().top + Math.floor($lastBoxs.outerHeight()/2);//�õ����һ����������һ���������븸����֮��
    var scroll = $(window).scrollTop() + $(window).height();
    return (lastBoxH < scroll)?true:false;
}