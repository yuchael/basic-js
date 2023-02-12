$('h1').css('font-size', '1px');
var links = {
    setColor:function(color){
        //var alist = document.querySelectorAll('a');
        //var i = 0;
        //while(i < alist.length){
        //    alist[i].style.color = color;
        //    i = i + 1;
        //}
        $('a').css('color', color);
    }
}
 /*function LinksSetColor(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
    }
 }*/
 var body = {
    setColor:function(color){
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor:function(color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
 }
 /*function bodySetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor = color;
 }
 function bodySetColor(color){
    document.querySelector('body').style.color = color;
 }*/
 function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        body.setBackgroundColor('black');
        body.setColor('white');
        self.value = 'day';

        links.setColor('powderblue');
    }
    else{
        body.setBackgroundColor('white'); // = bodyBackgroundSetColor('white');
        body.setColor('black'); // = bodySetColor('black');
        self.value = 'night';

        links.setColor('blue'); // = LinksSetColor('blue');
    }        
 }