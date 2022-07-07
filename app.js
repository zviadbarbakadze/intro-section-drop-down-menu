let menu=document.querySelector('.menu');
let nav=document.querySelector('.navigate');
let leftUl=document.querySelector('.left-ul');
let rightUl=document.querySelector('.right-ul');
let closed=document.querySelector('.close');
let drop=document.querySelector('.drop');
let droped=document.querySelector('.droped');
menu.addEventListener('click',()=>{
    nav.style.display="block";
    
    nav.style.position="absolute"
    closed.style.display="block";
    closed.style.top="2%";
    closed.style.right="2%";
   
    drop.style.position='relative';
    drop.style.height="200px";
    droped.style.height="200px"
     droped.style.position="relative";
    nav.style.right="0";
    nav.style.backgroundColor="white"
    nav.style.display="flex";
    nav.style.flexDirection="column";
    leftUl.style.flexDirection="column";
    leftUl.style.alignItems="center";
    leftUl.style.position="relative"
    rightUl.style.flexDirection='column';
    nav.style.width="50%";
    
    
    nav.style.height="100vh";

});
closed.addEventListener('click',()=>{
    nav.style.display="none";
})