let haohuo_box = $(".haohuo_box1");
let paihan = $(".banner li");
let now = 0;
let next = 0;
function pai() {
    next = now+1;
    if(next>=paihan.length){
        next =0;
    }
    $(paihan[next]).css({"left":"100%",});
    $(paihan[now]).animate({left:-369},200);
    $(paihan[next]).animate({left:0},200);
    now = next;
}
let n=setInterval(pai,2000);