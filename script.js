
// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if(toggle){
  toggle.addEventListener('click',()=>{
    if(menu.style.display==='flex'){ menu.style.display='none'; }
    else{ menu.style.display='flex'; }
  });
}
