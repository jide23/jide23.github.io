var bdime_option = {
    ch : true,
    bc : true,
    pt : true,
    on : false,
    domain : "",
    username : "",
    targets : []

var is_closed=true;
function qqim(q){
	!!q?q.toggle():(function(d,j)
		{
		j=d.createElement('script');
		j.src='http://ime.qq.com/fcgi-bin/getjs';
		j.setAttribute('ime-cfg','lt=2');
		d.getElementsByTagName('head')[0].appendChild(j)
		}
		)(document)
	}
	
function im(e){
	var evt = e || window.event;	
		if(evt.ctrlKey && evt.shiftKey && evt.keyCode==32 && is_closed){
    		qqim(window.QQWebIME);
			is_closed=false;
		}
}

document.onkeydown=im;

