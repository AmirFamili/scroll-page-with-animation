const boxes=document.querySelectorAll('.box'); 
  

window.addEventListener('scroll',() =>{
    const windowBottom = window.innerHeight /1.3;

    boxes.forEach(box=>{
        const boxTop =box.getBoundingClientRect().top; 
        
        if(boxTop<windowBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
   
})