var scrollFunc = function() {
    var y = window.scrollY;
    var scroll = document.getElementsByClassName('scroll')[0];
    
    if(y > 200){
        scroll.className = 'scroll active';
    }
    else{
        scroll.className = scroll.className.replace(' active', '');
    }
}

window.addEventListener('scroll', scrollFunc);

var btn = document.getElementsByClassName('scroll')[0];
btn.addEventListener('click',function(){
    window.scrollTo(0,0);
});