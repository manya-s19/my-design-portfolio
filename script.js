
document.querySelectorAll('.menu-toggle').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const menu=btn.parentElement.querySelector('.menu');
    if(menu.style.display==='flex'){menu.style.display='none';}else{menu.style.display='flex';}
  });
});
