function Level (){
  this.pilastras = [];
  this.score = 0;
}

Level.prototype.spawn = function(){
  var eixoX = 1100;
  var eixoY = Math.floor(Math.random() * 300 -200);
  var pilastra = new Pilastra;
            

    pilastra.xTop = eixoX;
    pilastra.yTop = eixoY;
     
    pilastra.angleTop = 90;
          
    pilastra.xCenter = eixoX;
    pilastra.yCenter = eixoY + 350;
      
    pilastra.xBot = eixoX;
    pilastra.yBot = eixoY + 200 + 500 ;  
     
    pilastra.imgkey = "pilastras";

  this.pilastras.push(pilastra);  
};

Level.prototype.dispose = function(){
   this.pilastras.dispose; 
};

Level.prototype.mover = function (dt) {
    for (var i = 0; i < this.pilastras.length; i++) {
         this.pilastras[i].mover(dt);
    }
    this.deletaPilastras();
};

Level.prototype.desenharImg = function (ctx,imageLib) {
    for (var i = 0; i < this.pilastras.length; i++) {
      this.pilastras[i].desenharImg(ctx,imageLib.images[this.pilastras[i].imgkey]);
      this.pilastras[i].desenharColisaoComPonto(ctx);
    }
};

Level.prototype.desenharImg = function (ctx,imageLib) {
    for (var i = 0; i < this.pilastras.length; i++) {
      this.pilastras[i].desenharImg(ctx,imageLib.images[this.pilastras[i].imgkey]);
      this.pilastras[i].desenharColisaoComPonto(ctx);
    }
};

Level.prototype.deletaPilastras = function(){
  for (var i = 0; i < this.pilastras.length; i++) {
    if(this.pilastras[i].x1 < -200 ){
         this.pilastras.splice(i, 1);
    }
  }
};

Level.prototype.perseguirAng = function (alvo, dt) {
   for (var i = 0; i < this.pilastras.length; i++) {
     this.pilastras[i].perseguirAng(alvo,dt);
   }
 };

Level.prototype.colidiuComPonto = function (alvo, al, key, vol, resolveColisao) {
    for (var i = 0; i < this.pilastras.length; i++) {
      if(this.pilastras[i].colidiuComPonto(alvo)){
        resolveColisao(this.pilastras[i], alvo);
        if(al && key){
          al.play(key);
        }
      }
    }
};

Level.prototype.colidiuComPilastras = function (alvo, al, key, vol, resolveColisao) {
    for (var i = 0; i < this.pilastras.length; i++) {
      if(this.pilastras[i].colidiuComPilastra(alvo)){
        resolveColisao(this.pilastras[i], alvo);
        if(al && key){
          al.play(key);
        }
      }
    }
};



