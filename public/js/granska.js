(function(){
  var MAP={hero:["#hero","header",".hero"],om:["#om","#about",".about"],
    meny:["#meny","#menu",".menu"],bilder:["#bilder","#galleri","#gallery",".gallery"],
    kontakt:["#kontakt","#contact","footer"],stil:["body"],ovrigt:["body"]};
  window.addEventListener("message",function(e){
    var d=e.data||{}; if(d.type!=="granska-scroll") return;
    var sels=MAP[d.section]||[]; for(var i=0;i<sels.length;i++){
      var el=document.querySelector(sels[i]);
      if(el){el.scrollIntoView({behavior:"smooth",block:"start"}); break;}
    }
  },false);
})();
