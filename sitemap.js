<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Sitemap</title>
<meta content='width=device-width, initial-scale=1' name='viewport'>
<style>
tr{border:1px solid#000}
#table-outer{padding:7px 10px;margin:0 auto;border:1px solid #ddd;background:#eee}
#table-outer p {color:#555;border-bottom:1px solid #ccc;margin-bottom:20px;padding:0 0 10px 0;font-family: Droid Sans,Arial,sans-serif;font-size:12px;}
#table-outer table{width:auto;margin:0 auto;}
#table-outer form{font:inherit}
#table-outer label{display:block;text-align:right;margin:0 10px 0 0;padding:4px 0 0;font-family: Droid Sans,Arial,sans-serif;font-size:14px;}
#table-outer select[disabled]{opacity:.4}
#post-searcher{display:block;margin:0;padding:0}
#table-outer input,#table-outer select{width:100%;border:1px solid #dedede;border-radius:5px;margin:5px;padding:5px;font-family: Droid Sans,Arial,sans-serif;font-size:14px;font-weight:500;text-transform:capitalize;outline:0;color:#333;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}
#table-outer select option{min-height:1.4em;}
#table-outer input#feed-q{padding:5px 10px;}
#feed-container{background:#fff;display:block;clear:both;border:1px solid#ddd;margin:0;padding:0 5px;list-style:none;overflow:hidden;position:relative;border-top:none}
/*discripsinya*/
#feed-container li{list-style:none;margin:0;padding:0;border-top:1px solid #eee;color:#555;width:100%;float:left;display:inline}
#feed-container li .inner{margin:15px 0;height:auto;overflow:hidden;word-wrap:break-word;text-overflow:ellipsis}
/*judul post*/
#feed-container li a{text-decoration:none;color:#2C2C2C;font-weight:500;font-family: Droid Sans,Arial,sans-serif;font-size:20px;}
#feed-container li a:hover{text-decoration:none;color:#E94141}
#feed-container li .news-text{margin-top:5px;line-height:1.3em;font-family: Droid Sans,Arial,sans-serif;font-size:13px}
#feed-container li img{margin:0 15px 5px 0;padding:7px 7px 7px 0;float:left;display:block;}
#result-desc{margin:0;padding:0;}
#result-desc div,#result-desc span{display:block;background:#ddd;border:1px solid#ddd;margin:0;padding:5px 0 7px 5px;color:#D64D52;font-family: Droid Sans,Arial,sans-serif;font-size:11px;}
#result-desc div{color:inherit}
#feed-nav{background:#ddd;margin:0px 0 30px;text-align:center;font-weight:500;font-family: Droid Sans,Arial,sans-serif;font-size:14px;}
#feed-nav a,#feed-nav span{border:1px solid #dedede;border-radius:0px;padding:0;color:#757575;text-decoration:none;display:block;height:30px;line-height:32px}
#feed-nav a,#feed-nav span:hover{color:#1B1B1B}
#feed-nav a:active,#feed-nav a:hover{color:#555}
#feed-nav span{cursor:wait}
@media screen and (max-width:600px){#table-outer table{margin:0 auto;width:100%}
#feed-container,#table-outer{margin:0 auto}
#feed-container li .inner{margin:5px auto;height:auto}
#feedContainer li{float:none;display:block;width:auto;height:auto}
#feed-container li .news-text, #feedContainer:after,#feed-container li img{display:none}
#feed-container li a{font-size:14px}
}
</style>
</head>
<body>
<div id="table-outer">
<p><b>Sitemap</b></p>

<table><tbody>
<tr><td><label for="feed-order">Sort articles by:</label></td> <td><select id="feed-order"> <option selected="" value="published">Latest article</option> <option value="updated">The last article was updated</option> </select></td></tr>
<tr><td><label for="label-sorter">Filter articles by category:</label></td> <td><select disabled="" id="label-sorter"> <option selected="">Loading....</option> </select></td></tr>
<tr><td><label for="feed-q">Search articles with keywords:</label></td> <td><form id="post-searcher"> <input id="feed-q" type="text" placeholder="Type and press ENTER"/>
</form>
</td></tr>
</tbody></table>
</div>
<header id="result-desc"></header>
<ul id="feed-container"></ul>
<div id="feed-nav">
</div>
<script type='text/javaScript'>
document.write;var loadToc,loadCategories,_toc={init:function(){var cfg={homePage:"https://androidjatiyoso.blogspot.com",maxResults:10,numChars:270,thumbWidth:140,thumbHeight:95,navText:"Show the next article &#9660;",resetToc:"Back to the beginning",noImage:"http://2.bp.blogspot.com/-11FkySHGB5Y/TpZ6SSbsF2I/AAAAAAAAA94/zK10UaL7jgo/s1600/images.jpeg",loading:"<span>Load...</span>",counting:"<div>Loading articles...</div>",searching:"<span>Searching...</span>"},w=window,d=document,el=function(id){return d.getElementById(id);},o={a:el('feed-order'),b:el('label-sorter').parentNode,c:el('post-searcher'),d:el('feed-q'),e:el('result-desc'),f:el('feed-container'),g:el('feed-nav'),h:d.getElementsByTagName('head')[0],i:0,j:null,k:'published',l:0,m:""},fn={a:function(){old=el('temporer-script');old.parentNode.removeChild(old);},b:function(param){var script=d.createElement('script');script.type="text/javascript";script.id="temporer-script";script.src=param;if(el('temporer-script'))fn.a();o.h.appendChild(script);},c:function(mode,tag,order){o.i++;o.e.innerHTML=cfg.counting;o.g.innerHTML=cfg[mode==1?"searching":"loading"];if(mode===0){fn.b(tag!==null?cfg.homePage+'/feeds/posts/summary/-/'+ tag+'?alt=json-in-script&start-index='+((o.i*cfg.maxResults)+ 1)+'&max-results='+ cfg.maxResults+'&orderby='+ order+'&callback=loadToc':cfg.homePage+'/feeds/posts/summary?alt=json-in-script&start-index='+((o.i*cfg.maxResults)+ 1)+'&max-results='+ cfg.maxResults+'&orderby='+ order+'&callback=loadToc');}else if(mode==1){fn.b(cfg.homePage+'/feeds/posts/summary?alt=json-in-script&start-index='+((o.i*cfg.maxResults)+ 1)+'&max-results='+ cfg.maxResults+'&q='+ tag+'&orderby='+ order+'&callback=loadToc');} o.j=(tag!==null)?tag:null;o.l=mode;o.a.disabled=true;o.b.children[0].disabled=true;},d:function(json){var _h;o.g.innerHTML="";o.e.innerHTML=o.l==1?'<span>Hasil penelusuran untuk kata kunci <b>&#8220;'+ o.m+'&#8221;</b> ('+ json.feed.openSearch$totalResults.$t+' Hasil)</span>':'<div>Total: '+ json.feed.openSearch$totalResults.$t+' Artikel</div>';if("entry"in json.feed){var a=json.feed.entry,b,c,_d,e="0 Komentar",f="",g;for(var i=0;i<cfg.maxResults;i++){if(i==a.length)break;b=a[i].title.$t;_d=("summary"in a[i])?a[i].summary.$t.replace(/<br ?\/?>/ig," ").replace(/<(.*?)>/g,"").replace(/<iframe/ig,"").substring(0,cfg.numChars):"";g=("media$thumbnail"in a[i])?a[i].media$thumbnail.url.replace(/\/s[0-9]+\-c/,"\/s"+ cfg.thumbWidth+""):cfg.noImage.replace(/\/s[0-9]+\-c/,"\/s"+ cfg.thumbWidth+"");for(var j=0,jen=a[i].link.length;j<jen;j++){c=(a[i].link[j].rel=="alternate")?a[i].link[j].href:"#";} for(var k=0,ken=a[i].link.length;k<ken;k++){if(a[i].link[k].rel=="replies"&&a[i].link[k].type=="text/html"){e=a[i].link[k].title;break;}} _h=d.createElement('li');_h.innerHTML='<div class="inner"><img style="width:'+ cfg.thumbWidth+'px;height:'+ cfg.thumbHeight+'px;" src="'+ g+'" alt="'+ b+'"><a class="toc-title" href="'+ c+'" target="_blank" title="'+ b+'">'+ b+'</a><div class="news-text">'+ _d+'&hellip;<br style="clear:both;"></div></div>';o.f.appendChild(_h);} _h=d.createElement('a');_h.href='#load-more';_h.innerHTML=cfg.navText;_h.onclick=function(){fn.c(o.l,o.j,o.k);return false;};}else{_h=d.createElement('a');_h.href='#reset-content';_h.innerHTML=cfg.resetToc;_h.onclick=function(){o.i=-1;o.e.innerHTML=cfg.counting;o.f.innerHTML="";fn.c(0,null,'published');o.a.innerHTML=o.a.innerHTML;o.b.children[0].innerHTML=o.b.children[0].innerHTML;return false;};}
o.g.appendChild(_h);o.a.disabled=false;o.b.children[0].disabled=false;},e:function(json){var a=json.feed.category,b='<select id="label-sorter"><option value="" selected disabled>Select Category...</option>';for(var i=0,len=a.length;i<len;i++){b+='<option value="'+ encodeURIComponent(a[i].term)+'">'+ encodeURIComponent(a[i].term)+'</option>';}
b+='</select>';o.b.innerHTML=b;o.b.children[0].onchange=function(){o.i=-1;o.f.innerHTML="";o.g.innerHTML=cfg.loading;fn.c(0,this.value,o.k);};}};loadToc=fn.d;loadCategories=fn.e;fn.b(cfg.homePage+'/feeds/posts/summary?alt=json-in-script&start-index='+(o.i+ 1)+'&max-results='+ cfg.maxResults+'&orderby=published&callback=loadToc');fn.b(cfg.homePage+'/feeds/posts/summary?alt=json-in-script&max-results=0&orderby=published&callback=loadCategories');o.a.onchange=function(){o.i=-1;o.f.innerHTML="";o.g.innerHTML=cfg.counting;o.b.children[0].innerHTML=o.b.children[0].innerHTML;fn.c(0,null,this.value);o.k=this.value;};o.c.onsubmit=function(){o.i=-1;o.f.innerHTML="";o.m=o.d.value;fn.c(1,o.d.value,o.k);return false;};}};_toc.init();
</script>
</body>
</html>
