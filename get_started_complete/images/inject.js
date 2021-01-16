var niuyifan=function()
{
	
	function sleep(millisecond) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, millisecond)
        })
    };
	
	async function go(t) {
		 sleep(1000);
		 document.body.removeChild(t);
		
	}

function ClickBtn()

{
if(document.URL.search("pinlite")!=-1)
{
a=decodeURIComponent(document.getElementsByClassName("_2Lgol")[0].src.split("url=")[1]).split("/"),
b=decodeURIComponent(document.getElementsByClassName("_2Lgol")[0].src.split("url=")[1]).split(a[3]),
c=b[0]+"originals"+b[1]//url地址
}
else{

a=document.getElementsByClassName("_2w6RE")[0].children[3].src
aa=a.split("/")
b=a.split(aa[3])[1]
c=b.split("?")[0]
d="https://i.pinimg.com"+c;
c=d
}
s = function(t) {
                if (t.length < 2)
                    return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? a(192 | e >>> 6) + a(128 | 63 & e) : a(224 | e >>> 12 & 15) + a(128 | e >>> 6 & 63) + a(128 | 63 & e);
                var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
                return a(240 | e >>> 18 & 7) + a(128 | e >>> 12 & 63) + a(128 | e >>> 6 & 63) + a(128 | 63 & e)
            };

r=c
	
pp = function(t) { 
                f = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
                return window.btoa((String(t)).replace(f, s));
            };
hhh=pp(encodeURIComponent(r));



var t = document.createElement("iframe");
t.className="cc"
t.style.display = "none";
t.src ="//ccddsd.bigbigwork.com/download/img?jhk-d=1&base64Url="+hhh+"&dashisousuo=OTAxMjE2OTQsLSzmnKrlkb3lkI3jgIEsMTYwOTUwNzU5MzMxMiwx";
document.body.appendChild(t)
//go(t);
//document.body.removeChild(t)


}



    var  _tr = document.createElement("tr");

 

    var td1=document.createElement("td");

	td1.innerHTML= '<input type="button" style="background-color: #7ED321;width: 76px;height: 36px;color: #FFFFFF" value="原图解析下载";" />';

    

    _tr.appendChild(td1);

    var o=0;
	
	
	if(document.URL.search("pinlite")!=-1)
{
	
    o=document.getElementsByClassName("_2du3X")[0];
	}
	else
	{
	
	o=document.getElementsByClassName("_3FGB2")[0];
	
	}

    o.appendChild(_tr);
	
_tr.addEventListener("click",ClickBtn,false)
	
}

var  abcd=function(){
if(window.document.readyState=='complete'){
      console.log("hello1");
      efg();
       }else{
      console.log("hello2");
           setTimeout(abcd,5);
       }   
};

var  abcde=function(){
	
if(document.getElementsByClassName("_2du3X")[0]==undefined&&document.getElementsByClassName("masonry")[0].children[0]==undefined){
	console.log("hello2");
           setTimeout(abcd,5);
      
       }else{
      console.log("hello1");
      niuyifan();
       }   
};


var  abcd=function()
{
	if(document.URL.search("pinlite")!=-1)
 {
  if(document.getElementsByClassName("_2du3X")[0]==undefined)
    {
	console.log("hello2");
           setTimeout(abcd,5);
      
    }
 else
    {
      console.log("hello1");
      niuyifan();
    }   
 }
else
 {
	
   if(document.getElementsByClassName("masonry")[0].children[0]==undefined)
  {
	console.log("hello2");
           setTimeout(abcd,5);
      
  }
   else
  {
      console.log("hello1");
      niuyifan();
  }   	
	
	
	
 }
}


abcd();

