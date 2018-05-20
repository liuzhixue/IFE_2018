var odiv=document.getElementsByClassName('div_mainbody');
var oli=document.getElementsByClassName('li');
var oli_p=document.getElementsByClassName('li_p');
for(var i=0;i<oli.length;i++){
    oli[i].index=i;
    oli[i].onclick=function (){
        for(var i=0;i<oli.length;i++){
            oli[i].className='li';
            odiv[i].style.display='none'
        }
        this.className='li active';
        odiv[this.index].style.display='block'
    }
    oli[i].onmouseover=function (){
        for(var i=0;i<oli.length;i++){
            oli_p[i].style.display='none'
        }
        oli_p[this.index].style.display='block'
    }
}
// var obodr=document.getElementById('obody');
// var odiv_skill=document.getElementById('div_skill')
// var odiv_job=document.getElementById('div_job')
// var odiv_mainbody=document.getElementById('div_mainbody')
// var odiv_contact=document.getElementById('div_contact')
// obody.onmousewheel=function(){
//     if(obody.wheelDelta=-1){
//         odiv_skill.style.display='block';
//     }
  
