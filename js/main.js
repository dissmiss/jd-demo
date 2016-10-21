//12个小格子
window.onload = function () {
   var lifeImgs = document.getElementsByClassName('life-img');
   console.log(lifeImgs.length);
   for (var index = 0; index < lifeImgs.length; index++) {
       var element = lifeImgs[index];
       element.style.backgroundPositionX = '0px';
       element.style.backgroundPositionY = -(index * 25)+'px';
   }
}