//const square=document.createElement('div');
const btn=document.querySelector('button');
const cont=document.querySelector('.container');
//square.style.cssText='width:50px;height:50px;border:1px solid red';
//square.classList.add('gri');


let no=prompt('Enter number of grids');
createGrid(no);

btn.addEventListener('click',()=>{
    cont.innerHTML="";
   let num=prompt('Enter number new grid\'s number'); 
    createGrid(num);
});

function createGrid(num){
for(let i=0;i<num;i++){
    for(let j=0;j<num;j++){
        
        const square=document.createElement('div');
        square.style.cssText='width:50px;height:50px;border:1px solid red;float:left';
square.classList.add('gri');
        cont.appendChild(square);
    }
    linebreak=document.createElement('br');
    linebreak.style.cssText="clear:left";
    cont.appendChild(linebreak);
}

const gris=document.querySelectorAll('.gri');
gris.forEach((gri)=>{
     gri.addEventListener('mouseover',()=>{
         gri.style.backgroundColor=rgbColor();
    //gri.classList.add("bg");
});
    gri.addEventListener('mouseout',()=>{
    gri.style.backgroundColor="";
});
});
}

function rgbColor(){
    let r=Math.floor(Math.random()*256);
    let g=100+Math.floor(Math.random()*256);
    let b=50+Math.floor(Math.random()*256);
    let bgcolor=`rgb(${r},${g},${b})`;
    return bgcolor;
}