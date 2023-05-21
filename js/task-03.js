const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulEl= document.querySelector('.gallery');
let arr=[];
images.forEach(image =>{
  arr.push(`<li style="list-style-type: none;"><img with=80 height=80 src=${image.url} alt=${image.alt}></li>`)
})
let a = [...arr].join('')
ulEl.insertAdjacentHTML("beforeend", a)
ulEl.style.display = 'flex';
ulEl.style.gap = '30px'