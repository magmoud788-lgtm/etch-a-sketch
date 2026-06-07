const container = document.querySelector('#container');
for(let i = 0; i <256; i++) {
const div = document.createElement('div');
let count = 0;
container.appendChild(div)
div.addEventListener('mouseover', () => { count++; 
    div.style.backgroundColor = `rgb(${255 - count * 10}, ${255 - count * 10}, ${255 - count * 10})`;})
}

const btn = document.querySelector('#userinput');
 btn.addEventListener('click',() => {
 const bttn = prompt('insert a number pls');
 if(bttn <= 100 && bttn > 0) {
      container.innerHTML = '';
    for(let i = 1; i <= bttn * bttn; i++) {
    const create = document.createElement('div');
    container.appendChild(create);
    create.addEventListener('mouseover', () => {
        create.classList.add('hovering')
    })
    }
 } else {
    alert('im sorry try again with number between 1 and 100') ;
 }})
