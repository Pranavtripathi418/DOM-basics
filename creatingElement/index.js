// //create element
// const para= document.createElement('p');


// //create textnode
// const paraText = document.createTextNode('Total fruits - 4');


// //append child
// para.appendChild(paraText);

// const divs= document.getElementsByTagName('div');
// const total= divs[1];
// // total.appendChild(para);


// //inser before
// const ul= document.querySelector('.fruits');
// total.insertBefore(para, ul);

// //add className , attribute, id

// para.id= 'fruits-total';
// para.className='fruitPara';
// para.setAttribute('title','total');
// console.log(para);


// these are the procedure

// now we have to deliver the desired output . Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".

// 3. On this paragraph tag set an id of "fruits-total".

const subHeading = document.createElement('h3');
const subHeadingText= document.createTextNode('Buy high quality organic fruits online');
subHeading.appendChild(subHeadingText);

const divs= document.getElementsByTagName('div');
divs[0].appendChild(subHeading);
subHeading.style.fontStyle='italic';

const para= document.createElement('p');
const paraText = document.createTextNode('Total fruits: 4');
para.appendChild(paraText);
const ul= document.querySelector('.fruits');
const secondDiv= divs[1];
secondDiv.insertBefore(para,ul);

para.id='fruits-total';
console.log(para);







