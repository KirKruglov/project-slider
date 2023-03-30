const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgSlider = document.querySelector(".img-slider");
const cityShow = document.getElementById("city");
const adressShow = document.getElementById("adress");
const timeShow = document.getElementById("time");
const areaShow = document.getElementById("area");
const dots = document.querySelectorAll(".dots");
const menuList = document.querySelectorAll(".menu-item")

let indexSlider = 0;

const sliderData = [
    {
        city:'Rostov-on-Don',
        adress:'LCD admiral',
        time:'3.5 months',
        area:'81 m2',
        img:'images/sliderImg1.jpg'
    },

    {
        city:'Sochi',
        adress:'Thieves',
        time:'4 months',
        area:'105 m2',
        img:'images/sliderImg2.jpg'
    },

    {
        city:'Rostov-on-Don',
        adress:'Patriotic',
        time:'3 months',
        area:'93 m2',
        img:'images/sliderImg3.jpg'
    },
];

window.onload = function () {
    dots[0].classList.add('dots-active');
    menuList[0].classList.add('menu-item-active');
    eventSlider();
}

function sliderDisplay (index) {

    dots.forEach(function (item, i) {
        dots[i].classList.remove('dots-active')
    });

    menuList.forEach(function (item, i) {
        menuList[i].classList.remove('menu-item-active');
    });

    cityShow.innerHTML = sliderData[index].city;
    adressShow.innerHTML = sliderData[index].adress;
    timeShow.innerHTML = sliderData[index].time;
    areaShow.innerHTML = sliderData[index].area;
    imgSlider.style.backgroundImage = `url(${sliderData[index].img})`;
    dots[index].classList.add('dots-active');
    menuList[index].classList.add('menu-item-active');
}

function eventSlider() {
    

    leftArrow.addEventListener('click', () => {
        indexSlider -= 1;
    
        if (indexSlider < 0) {
            indexSlider = sliderData.length - 1;
        };
    
        if (indexSlider <= sliderData.length - 1) {
            sliderDisplay(indexSlider);
        };
    });

    rightArrow.addEventListener('click', () => {
        indexSlider += 1;    
  
        if (indexSlider >= sliderData.length) {
            indexSlider = 0;
        };
    
        if (indexSlider <= sliderData.length) {
            sliderDisplay(indexSlider);
        };
    });

    dots.forEach(function (item, i) {
        dots[i].addEventListener('click', ()=>{
            sliderDisplay(i);
            indexSlider = i;
        })
    });

    menuList.forEach(function (item, i) {
        menuList[i].addEventListener('click', ()=>{
            sliderDisplay(i);
            indexSlider = i;
        })
    });

}
