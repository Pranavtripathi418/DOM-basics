//create element
const para= document.createElement('p');


//create textnode
const paraText = document.createTextNode('Total fruits - 4');


//append child
para.appendChild(paraText);

const divs= document.getElementsByTagName('div');
const total= divs[1];
// total.appendChild(para);


//inser before
const ul= document.querySelector('.fruits');
total.insertBefore(para, ul);

//add className , attribute, id

para.id= 'fruits-total';
para.className='fruitPara';
para.setAttribute('title','total');
console.log(para);
