    
function showPic(whichpic){
    if(!document.getElementById("placeholder")) return false;
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);  
    if(document.getElementById("description")){
    var text=whichpic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=text; 
    } 
    return true;
 }



function  prepareGallery(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document .getElementById("imagegallery")) return false;
    
    var gallery=document.getElementById("imagegallery");
    var lists=gallery.getElementsByTagName("a");
    for(var i=0;i<lists.length;i++){
        lists[i].onclick=function(){
            return showPic(this)? false:true; 
        }
     
       
    }
}



function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!="function"){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);

