"use strict";


com.ng.lexng = (function()
{
return {
    onpic : function(a)
    {
        var width = 400;
        var win = window.open('','pic',"height="+((width*2)*1.1)+",width="+(width*1.1)+",scrollbars=1,resizable=1");
        var html = "<img src='"+$(a).attr('href')+"' style='width:"+width+"px'>";
        win.document.open();
        win.document.write(html);
        win.document.close();
        return false;
    },
	openSmartphoneWin:function(url)
	{
        var width = 400;
        var win = window.open(url,'pic',"height="+((width*2)*1.1)+",width="+(width*1.1)+",scrollbars=1,resizable=1");
        return false;
	}
}
})();
