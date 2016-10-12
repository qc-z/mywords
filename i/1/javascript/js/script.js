/**
 * Created by Administrator on 2016/9/26.
 */
window.onload = function () {
    waterFloat("main","box");
    var dataInt = {"data":[{"src":'0.jpg'},{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'},{"src":'6.jpg'},{"src":'7.jpg'},{"src":'8.jpg'},{"src":'9.jpg'},{"src":'10.jpg'}]}
    //���ڹ����¼�
    window.onscroll = function(){
        var oParent = document.getElementById("main");
        if(checkScollSlide){
            for(var i=0;i<dataInt.data.length;i++){
                var oBox = document.createElement("div");
                oBox.className = "box";
                oParent.appendChild(oBox);
                var oPic = document.createElement("div");
                oPic.className = "pic";
                oBox.appendChild(oPic);
                var oImg = document.createElement("img");
                oImg.src = "images/"+dataInt.data[i].src;
                oPic.appendChild(oImg);
            }
            waterFloat("main","box");

        }
    }
}
function waterFloat(parent,box){
    var oParrent = document.getElementById(parent);  //�õ�id
    var oBox = getClass(oParrent,box);
    //console.log(oBox.length);

    //��������
    var oBoxW = document.documentElement.clientWidth;//�����ҳ����
    //console.log(oBoxW);
    var cols = Math.floor(oBoxW/oBox[0].offsetWidth);
    //console.log(cols)
    var h =cols*oBox[0].offsetWidth;
    //oParrent.setAttribute("width","h");
    //oParrent.setAttribute("margin","0 auto");
    oParrent.style.cssText = 'width:'+h+'px;margin:0 auto';
    //console.log(cols*oBox[0].offsetWidth)

    //�����һ�е��и߶���С��
    var hArr = [];
    for (var  i=0;i<oBox.length;i++){

        if(i<cols){
            hArr.push(oBox[i].offsetHeight);
        }else {
            var minH = Math.min.apply(null,hArr);//hArr�����и߶���С���Ǹ�
            var mIndex = getMinhIndex(hArr,minH);  //�õ���С������ֵ
            oBox[i].style.position = "absolute";
            oBox[i].style.top = minH + "px";
            oBox[i].style.left = oBox[mIndex].offsetLeft + "px";
            hArr[mIndex]+= oBox[i].offsetHeight;
        }
        document.getElementsByTagName()
    }
    //console.log(minH);
    //console.log(hArr);
}
function getClass(parents,clasname){
    var arr = [];
    var classNames = parents.getElementsByTagName("*");
    var len = classNames.length;
    for (var i=0;i<len;i++){
        if(classNames[i].className == clasname){
            arr.push(classNames[i]);
        }
    }
    return arr;
}
function getMinhIndex(arr,val){         //����߶���С���Ǹ�����ֵ
    for(var i in arr){
        if(arr[i] == val){
            var index = i;
        }
    }
    return index;
}


//����һ��checkScollSlide�����ж��Ƿ�Ҫ����ͼƬ

function checkScollSlide(){
    var oParent = document.getElementById("main");
    var oBoxs = getClass(oParent,"box");
    var lastBoxH = oBoxs[oBoxs.length-1].offsetTop + Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
    //���һ�����븸Ԫ�صĸ߶ȼ�������߶ȵ�һ��
    var scrollH = document.body.scrollTop || document.documentElement.scrollTop;//�����ߵ�ͷ��
    var clientH = document.body.clientHeight || document.documentElement.clientHeight;//���ڸ߶�
    return (lastBoxH < (scrollH+clientH)?true:false);
}