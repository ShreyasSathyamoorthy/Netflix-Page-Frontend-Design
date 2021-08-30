var box =document.getElementById('cont');
var wo = document.getElementById('ab1');
var won = document.getElementById('wonn');
var too =document.getElementById('too');
var three = document.getElementById('three');
var tab2 =document.getElementById('tab2');
var tab3 =document.getElementById('tab3');
var t1 =document.getElementById('t1');
var t2 =document.getElementById('t2');
var t3 =document.getElementById('t3');
wo.addEventListener("click", function(){
    if(wo.clicked =  true){
        won.style.display = "flex"
        too.style.display = "none"
        three.style.display = "none"
        t1.style.display = "initial"
        t2.style.background = "none"
        t3.style.background = "none"
        t1.style.background = "red"
    }
});
tab2.addEventListener("click", function(){
    if(tab2.clicked =  true){
        won.style.display = "none"
        too.style.display = "flex"
        three.style.display = "none"
        t1.style.background = "none"
        t3.style.background = "none"
        t2.style.background = "red"
    }
});
tab3.addEventListener("click", function(){
    if(tab3.clicked =  true){
        won.style.display = "none"
        too.style.display = "none"
        three.style.display = "initial"
        t1.style.background = "none"
        t2.style.background = "none"
        t3.style.background = "red"
    }
});