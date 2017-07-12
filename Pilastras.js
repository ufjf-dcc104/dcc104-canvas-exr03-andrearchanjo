function Pilastra(){
  this.g = 0;

  this.xTop  = 0;
  this.yTop  = 0;
  this.vxTop = 0;
  this.vyTop = 0;
  this.axTop = 0;
  this.ayTop = 0;
  this.amTop = 0;
  this.widthTop = 100;
  this.heightTop = 500;
  this.angleTop = 270;


  this.xBot  = 0;
  this.yBot  = 0;
  this.vxBot = 0;
  this.vyBot = 0;
  this.axBot = 0;
  this.ayBot = 0;
  this.amBot = 0;
  this.widthBot = 100;
  this.heightBot = 500;
  this.angleBot = 270;


  this.xCenter = 0;
  this.yCenter = 0;
  this.heightCenter = 200;
  this.widthCenter = 100;
  this.vxCenter = 0;
  this.vyCenter = 0;
  this.axCenter = 0;
  this.ayCenter = 0;

  this.debug = true;
  this.color = "black";
  this.imgKey;

}
 
Pilastra.prototype.desenhar = function (ctx) {
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.rotate(this.angle*2*Math.PI/360);
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.moveTo(-this.width/2, -this.height/2);
  ctx.lineTo(-this.width/2, +this.height/2);
  ctx.lineTo(+this.width/2, 0);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.stroke();
  /*ctx.strokeStyle = "grey";
  ctx.strokeRect(-this.width/2, -this.height/2, this.width, this.height);*/
  ctx.restore();
};

Pilastra.prototype.desenharColisaoComPonto = function (ctx) {
  ctx.save();
  ctx.translate(this.xCenter, this.yCenter);
  ctx.rotate(this.angle*2*Math.PI/360);
  ctx.fillStyle = "red";
  //ctx.fillRect(-this.widthCenter/2, -this.heightCenter/2, this.widthCenter, this.heightCenter);
  /*if(this.debug){
  ctx.strokeStyle = "black";
  ctx.strokeRect(-this.widthCenter/2, -this.heightCenter/2, this.widthCenter, this.heightCenter);
  }*/
  ctx.restore();
};

Pilastra.prototype.desenharImg = function (ctx, img) {
  ctx.save();

  ctx.translate(this.xTop, this.yTop);
  ctx.rotate(this.angleTop*2*Math.PI/360);
  ctx.rotate(Math.PI/2);
  ctx.fillStyle = this.color;
  ctx.drawImage(img, -this.widthTop/ 2, -this.heightTop/ 2, this.widthTop, this.heightTop);
  if(this.debug){
    ctx.strokeStyle = "black";
    ctx.strokeRect(-this.widthTop/ 2, -this.heightTop/ 2, this.widthTop, this.heightTop);
  }
  ctx.restore();

  ctx.save();
  ctx.translate(this.xBot, this.yBot);
  ctx.rotate(this.angleBot*2*Math.PI/360);
  ctx.rotate(Math.PI/2);
  ctx.fillStyle = this.color;
  ctx.drawImage(img, -this.widthBot/2, -this.heightBot/2, this.widthBot, this.heightBot);
  if(this.debug){
    ctx.strokeStyle = "black";
    ctx.strokeRect(-this.widthBot/2, -this.heightBot/2, this.widthBot, this.heightBot);
    //ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
  }

  ctx.restore();

};

Pilastra.prototype.mover = function (dt) {
  this.vyTop = this.vyTop +  this.ayTop*dt;
  this.yTop = this.yTop + this.vyTop*dt;
  this.vxTop = -200 + this.axTop*dt;
  this.xTop = this.xTop + this.vxTop*dt;

  this.vyCenter = this.vyCenter +  this.ayCenter*dt;
  this.yCenter = this.yCenter + this.vyCenter*dt;
  this.vxCenter = -200 + this.axCenter*dt;
  this.xCenter = this.xCenter + this.vxCenter*dt;

  this.vyBot = this.vyBot +  this.ayBot*dt;
  this.yBot = this.yBot + this.vyBot*dt;
  this.vxBot = -200 + this.axBot*dt;
  this.xBot = this.xBot + this.vxBot*dt;
};


Pilastra.prototype.colidiuComPonto = function (alvo) {
  if(this.xCenter + this.widthCenter/2  < alvo.x - alvo.width/2 )  return false;  // colisão pela esquerda
  if(this.xCenter - this.widthCenter/2  > alvo.x + alvo.width/2 )  return false;  // colisão pela direita
  if(this.yCenter - this.heightCenter/2 > alvo.y + alvo.height/2)  return false;  // colisão por  cima
  if(this.yCenter + this.heightCenter/2 < alvo.y - alvo.height/2)  return false;  // colisão por  baixo
  return true;
};

Pilastra.prototype.colidiuComPilastra = function (alvo) {
 return this.colideTop(alvo) + this.colideBot(alvo);
};

Pilastra.prototype.colideTop = function (alvo) {
  if(this.xTop + this.widthTop/2  < alvo.x - alvo.width/2 )  return false;  // colisão pela esquerda
  if(this.xTop - this.widthTop/2  > alvo.x + alvo.width/2 )  return false;  // colisão pela direita
  if(this.yTop - this.heightTop/2 > alvo.y + alvo.height/2)  return false;  // colisão por  cima
  if(this.yTop + this.heightTop/2 < alvo.y - alvo.height/2)  return false;  // colisão por  baixo
  return true;
};
Pilastra.prototype.colideBot = function (alvo) {
  if(this.xBot + this.widthBot/2  < alvo.x - alvo.width/2 )  return false;  // colisão pela esquerda
  if(this.xBot - this.widthBot/2  > alvo.x + alvo.width/2 )  return false;  // colisão pela direita
  if(this.yBot - this.heightBot/2 > alvo.y + alvo.height/2)  return false;  // colisão por  cima
  if(this.yBot + this.heightBot/2 < alvo.y - alvo.height/2)  return false;  // colisão por  baixo
  return true;
};







