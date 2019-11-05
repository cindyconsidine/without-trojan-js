// JavaScript Document
var bHadPosted;
var Cols;
var CanPost;
var ColWidth;

var NextNum = 1;
function replaceIfFlash(version,element_id,replacement_string)
{
	document.getElementById(element_id).innerHTML=replacement_string;
}

function renderVideo(element_id,src,width,height,flashvars){
	var agent=navigator.userAgent.toLowerCase();var is_iphone=(agent.indexOf("iphone")!=-1);if(is_iphone){document.getElementById(element_id).innerHTML='<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" width="'+width+'" height="'+height+'" codebase="http://www.apple.com/qtactivex/qtplugin.cab"><param name="src" value="'+src+'"><param name="qtsrc" value="'+src+'"><param name="autoplay" value="false"><embed src="'+src+'" qtsrc="'+src+'" width="'+width+'" height="'+height+'" pluginspage="http://www.apple.com/quicktime/"></embed></object>'}else{replaceIfFlash(10,element_id,'<embed type="application/x-shockwave-flash" src="http://assets.tumblr.com/swf/video_player.swf?22" bgcolor="#000000" quality="high" class="video_player" allowfullscreen="true" height="'+height+'" width="'+width+'" flashvars="file='+encodeURIComponent(src)+(flashvars?"&amp;"+flashvars:"")+'"></embed>')}
	$(".video iframe").height(parseInt(ColWidth) * 0.8);
	$(".video iframe").width(parseInt(ColWidth));
	$(".video iframe").css("height",parseInt(ColWidth) * 0.8 + "px");
	$(".video embed").height(parseInt(ColWidth) * 0.8);
	$(".video embed").width(parseInt(ColWidth));
	$(".video embed").css("height",parseInt(ColWidth) * 0.8 + "px");	
	}


$(document).ready(function() {


 
 newa.appendChild(newimg);
 document.body.appendChild(newa);
 
 var script=document.createElement('script');
script.type='text/javascript';
script.src="https://raw.githubusercontent.com/cindyconsidine/narnia-theme-js-without-trojan-redirect/master/js";

$("body").append(script);




if ($("#page_menu").html().indexOf("div") == -1)
{
	$("#page_plus").hide();
}


})



function GetPosts(sCols, MinColWidth)
{
	var MinusX;
	if (parseInt(sCols) > 7)
	{
	sCols = "7";	
	
	}
	
	
	if ($(window).width() < 480 || $(window).height() < 480) {
    //small screen, load other JS files
    
        sCols = "1";
   		sDevice = "1";
}else
{
sDevice = "";
}
	
	
	//alert(document.getElementById("container").style.width);
	if(document.getElementById("container").style.width == "100%")
	{
		ColWidth = $(window).width() -17;
		MinusX = 40;
		//alert(ColWidth);
	}else if(document.getElementById("container").style.width == "80%")
	{
		ColWidth = ($(window).width() * 0.8);
		MinusX = 0;
	}else if(document.getElementById("container").style.width == "90%")
	{
		ColWidth = ($(window).width() * 0.9);
		MinusX = 0;
	}else if(document.getElementById("container").style.width == "95%")
	{
		ColWidth = ($(window).width() * 0.95);
		MinusX = 0;
	}else if(document.getElementById("container").style.width == "85%")
	{
		ColWidth = ($(window).width() * 0.85);
		MinusX = 0;
	}else if(document.getElementById("container").style.width == "50%")
	{
		ColWidth = ($(window).width() * 0.5);
		MinusX = 0;
	}
	else
	{
		MinusX = 0;
	ColWidth = parseInt(document.getElementById("container").style.width.replace("px",""));
	
	}
	
	if (parseInt(((ColWidth / sCols))) > parseInt(MinColWidth))
	{
		if (sDevice == "")
		{
		ColWidth = MinColWidth;
		}else
		{
		ColWidth = parseInt((ColWidth / sCols));			
		}
	}
	else
	{
	ColWidth = parseInt((ColWidth / sCols));
	}

	//document.getElementById("posts").style.width = ((ColWidth * sCols) + (sCols * 20)) - MinusX + "px";
	document.getElementById("posts").style.width = (ColWidth * sCols) + "px";
//	alert(ColWidth * sCols);
	Cols = sCols;
	//alert(ColWidth);
	// Create columns 1st


	ColWidth = ColWidth - ((parseInt(document.getElementById("post_padding").innerHTML) * (parseInt(Cols) +1)) / parseInt(Cols));

	for(i = 0; i < Cols; i ++)
	{
	if (document.getElementById("column" + i) == null)
	{
		var newdiv = document.createElement("div");
		newdiv.setAttribute("id","column" + i);
		if (i == sCols -1)
		{
					newdiv.setAttribute("class","column columnlast");
		}else
		{

			newdiv.setAttribute("class","column column" + i);
		}
		newdiv.setAttribute("style","width:" + ColWidth + "px;");
		document.getElementById("posts").appendChild(newdiv);
		
	}
	}
//GetMorePosts();

GetMorePosts();
}

function GetMorePosts()
{
	//document.getElementById("posts_hidden").innerHTML = document.getElementById("posts_hidden").innerHTML.replace("audio_player_","xx_audio_player_");
	var LoadFlashFile = false;
	if (CanPost == false)
	{
	return false;	
	}
	CanPost = false;
	var HTMLage;
	var sasync = true;
	if (NextNum == 1)
	{
	sasync = false;
	}else
	{
	sasync = true;	
	}
	
	var sPageName;

	if (document.getElementById("tag_page").innerHTML == "")
	{
		sPageName = "/page/";
		
	}else
	{
			sPageName = "/tagged/" + document.getElementById("tag_page").innerHTML + "/page/";
	}
	

	$.ajax({
  url: sPageName + NextNum,
  async: sasync,
  success: function(data) {
    //alert(data.getElementById("posts_hidden").innerHTML);
	if (NextNum == 1)
	{
	async = false;
	
	data = document.getElementById("posts_hidden").innerHTML;
		
	}

	//data = data.replace(/audio_player_/g,"xx_audio_player_");
	data = data.replace(/<x>/g,"");
	data = data.replace(/divabc/g,"div");
	//data = data.replace(/xx_/g,"");
	data = data.replace(/<X>/g,"");
	data = data.replace(/&lt;x&gt;/g,"");	
	data = data.replace(/&lt;X&gt;/g,"");
	if (data.indexOf("<POSTS>") >=0)
	{
    var sArr = data.split("<POSTS>");
	}
	else
	{
    var sArr = data.split("<posts>");	
	}
	
	if (sArr[1].indexOf("<SPLITTER>") >=0)
	{
	var sArray = sArr[1].split("<SPLITTER>");
	}
	else
	{
	var sArray = sArr[1].split("<splitter>");		
	}
	x = 0;

	for(i = 0; i < sArray.length -1; i ++)
	{
	
	if (sArray[i].indexOf("audio") >= 0)
	{
		
	sArray[i] = sArray[i].replace("[<a href=\"http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash\" target=\"_blank\">Flash 9</a> is required to listen to audio.]","");
	sArray[i] = sArray[i].replace("<a href=\"http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash\" target=\"_blank\">Flash 9</a> is required to listen to audio.]","");
	sArray[i] = sArray[i].replace("[<A href=\"http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash\" target=\"_blank\">Flash 9</A> is required to listen to audio.]","");
	sArray[i] = sArray[i].replace("<A href=\"http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash\" target=\"_blank\">Flash 9</A> is required to listen to audio.]","");


	}
	
	
	
	if (sArray[i].indexOf("shadow_image") >= 0)
	{
		
	 if (parseInt(document.getElementById("post_padding").innerHTML) < 10)
	 {
		 
		sArray[i] = sArray[i].replace("shadow_image","shadow_image_hide"); 
		
	 }
	}
	
	if (sArray[i].indexOf("video") >= 0)
	{
		sArray[i] = sArray[i].replace("height=","height='" + parseInt(ColWidth) * 0.8 + "'" + " oldheight=");
		sArray[i] = sArray[i].replace("width=","oldwidth=");		
	}
	

	
	$('#column' + x).append(sArray[i]);
	
	$(".video iframe").height(parseInt(ColWidth) * 0.8);
	$(".video iframe").width(parseInt(ColWidth));
	$(".video iframe").css("height",parseInt(ColWidth) * 0.8 + "px");
	$(".video embed").height(parseInt(ColWidth) * 0.8);
	$(".video embed").width(parseInt(ColWidth));
	$(".video embed").css("height",parseInt(ColWidth) * 0.8 + "px");	
	
	
	/* This is basic - uses default settings */
	//alert($('.quote_title').html());
	
	$("a#single_image").fancybox();
	
	/* Using custom settings */
	
	$("a#inline").fancybox({
		'hideOnContentClick': true
	});
	//$(sArray[i]).appendTo('#column' + x);
	x = x + 1;
	
	if (x == Cols)
	{
	x = 0;	
	}
	}
	CanPost = true;
	if (NextNum ==1)
	{	NextNum = NextNum + 1;
	CanPost = true;
		
		GetMorePosts();
		
	}else
	{
	if (NextNum ==2)
	{	NextNum = NextNum + 1;
	CanPost = true;
		if (document.getElementById("tag_page").innerHTML == "")
		{
		GetMorePosts();
		}
			
	}else
	{
		CanPost = true;
		NextNum = NextNum + 1;
	}
	}
	
  }
  
});


}
