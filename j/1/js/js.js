/**
 * Created by Administrator on 2016/9/28.
 */
window.onload =function() {


    slider("footsliderbox","-800");
    slider("sliderbox","-500");
    scrollPic();
    showMenu();
    display();

}





function slider(id,num) {   //ͼƬ�ֲ�ͼ
    var scroll = document.getElementById(id);
    var timer = null;
    var ul = scroll.children[0];
    var number = 0;
    timer = setInterval(autoPlay, 20);
    function autoPlay() {
        number--;
        number <= num ? number = 0 : number;
        ul.style.left = number + "px";
    }

    scroll.onmouseout = function () {
        timer = setInterval(autoPlay, 20);
    }
    scroll.onmouseover = function () {
        clearInterval(timer);
    }
}





//轮播图开始

var scrollPic = function () {

    var banner = document.getElementsByClassName("jd_banner")[0];
    //得到一张图片的宽度
    var width = banner.offsetWidth;
    //console.log(width);
    //得到图片盒子
    var left = banner.style;
    var imgBox = banner.getElementsByTagName("ul")[0];
    //得到小圈圈盒子
    var pointBox = banner.getElementsByTagName("ul")[1];
    //所有的小圈圈下的li
    var pointlists = pointBox.getElementsByTagName("li");

    var timer;
    var index = 1;//控制轮播图
    var square = 0;//控制小圈圈




    //开启定时器
    timer = setInterval(autoPlay,3000);

    function autoPlay(){
//图片
        index++;
        //console.log(121212);
        if(index >=4){
            animate(-width);
            index =1;
        }
        animate(-index*width)

        //console.log(index);
//圈圈
        square++;
        if(square > pointlists.length -1)
        {
            square = 0;
        }
        for(var i=0;i<pointlists.length;i++)   // 先清除所有的
        {
            pointlists[i].className = "";
        }
        pointlists[square].className = "now";  // 留下当前的

    }




    //动画函数
    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        //var newLeft = parseInt(imgBox.style.left) + offset;
        imgBox.style.left = offset + "px";

    }







    //小圈圈鼠标经过事件
    for (var i = 0, len = pointlists.length; i < len; i++) {
        pointlists[i].index = i;
        pointlists[i].onmouseover = function () {
            clearInterval(timer);
            for (var j = 0; j < len; j++) {
                pointlists[j].className ="";
            }
            this.className = "now";
            //console.log(this.index+1);
            //imgBox.style.left = (-（this.index+1))* width + "px";
            //setTransform((-(this.index+1)) * width);
            imgBox.style.left = -(this.index+1)*width + "px";
            console.log(this.index);
            square = this.index;

        }
    }


//鼠标经过停止定时器
    banner.onmouseover = function() {
        clearInterval(timer);
    }
    // 鼠标离开开始轮播图定时器
    banner.onmouseout = function() {
        timer = setInterval(autoPlay,2000);
    }
};


var showMenu = function () {
    var ulOut = document.getElementById("bigul");
    var spans    = ulOut.getElementsByClassName("li");
    var ulIn = ulOut.getElementsByTagName("ul");


    for (var i = 0, len = spans.length; i < len; i++) {
        spans[i].index = i;
        spans[i].addEventListener("mouseover", function () {
            for (var j = 0; j < len; j++) {
                ulIn[j].style.display = "none";
            }
            ulIn[this.index].style.display = "block";

        });


        spans[i].addEventListener("mouseleave", function () {
            ulIn[this.index].style.display = "none";
            //console.log(this.index);
        });
    }

};


var display = function (){
    var hover = document.getElementsByClassName("hover");
    console.log(hover);
    var box1 = document.querySelectorAll(".box1");
    console.log(box1);
    for (var i = 0, len = box1.length; i < len; i++) {
        box1[i].index = i;
        box1[i].addEventListener("mouseover", function () {
            for (var j = 0; j < len; j++) {
                hover[j].style.display = "none";
            }
            hover[this.index].style.display = "block";
            //console.log(this.index);
        });

        box1[i].addEventListener("mouseleave", function () {
            hover[this.index].style.display = "none";
            //console.log(this.index);
        });

    }
};
