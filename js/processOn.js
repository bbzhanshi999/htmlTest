/**
 * 用于切换轮播
 * @param flag
 */

var offset;
var foot;
var scrollTop;
function bannerLoop(flag){
    var banners = document.querySelectorAll('.banner');
    var act = document.querySelector('.banner.active');
    (function(){
        var j;
        for(var i=0;i<banners.length;i++){
            if(banners[i]==act){
                banners[i].setAttribute('class','banner');
                switch (flag){
                    case "left":
                        j=i==0?banners.length-1:i-1;
                        break;
                    case "right":
                        j=i==banners.length-1?0:i+1;
                        break;
                }
                banners[j].setAttribute("class","banner active");

                return;
            }
        }
    })();
}

EventUtils.addHandler(window,'load',function(){
    var btnLeft = document.querySelector('.banner-btn.left');
    var btnRight = document.querySelector('.banner-btn.right');
    foot =document.querySelector('div.foot')?document.querySelector('div.foot'):document.querySelector('div.foot-fix');
    offset=foot.offsetTop;
    EventUtils.addHandler(btnLeft,'click',bannerBtnClick);
    EventUtils.addHandler(btnRight,'click',bannerBtnClick);

})

function bannerBtnClick(){
    var flag = this.getAttribute('class').indexOf('left')!=-1?"left":"right";
    bannerLoop(flag);
}


EventUtils.addHandler(window,'scroll',function(){
    scrollTop =document.body.scrollTop;
    if(scrollTop>=offset){
        foot.setAttribute('class','foot-fix');
    }else if(scrollTop<offset){
        foot.setAttribute('class','foot');
    }
})