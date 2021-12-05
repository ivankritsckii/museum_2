let offset = 0;
let sliderLine = document.querySelector('.slider_line')
let sliderNum = document.querySelector('.slider_num')
let SliderItem1 = document.querySelector ('#Slider_item1');
let SliderItem2 = document.querySelector ('#Slider_item2');
let SliderItem3 = document.querySelector ('#Slider_item3');
let SliderItem4 = document.querySelector ('#Slider_item4');
let SliderItem5 = document.querySelector ('#Slider_item5');

document.querySelector('#Slider_item1').addEventListener('click', function(){
    offset = 0;
    sliderLine.style.left = -offset + 'rem';
    changeNum();
})
document.querySelector('#Slider_item2').addEventListener('click', function(){
    offset = 100;
    sliderLine.style.left = -offset + 'rem';
    changeNum();
})
document.querySelector('#Slider_item3').addEventListener('click', function(){
    offset = 200;
    sliderLine.style.left = -offset + 'rem';
    changeNum();
})
document.querySelector('#Slider_item4').addEventListener('click', function(){
    offset = 300;
    sliderLine.style.left = -offset + 'rem';
    changeNum();
})
document.querySelector('#Slider_item5').addEventListener('click', function(){
    offset = 400;
    sliderLine.style.left = -offset + 'rem';
    changeNum();
})

document.querySelector('.slider_next').addEventListener('click', function(){
    offset = offset + 100;
    if (offset>400) {offset = 0}
   sliderLine.style.left = -offset + 'rem';
   changeNum();
})

document.querySelector('.slider_prew').addEventListener('click', function(){
    offset = offset - 100;
    if (offset<0) {offset = 400}
   sliderLine.style.left = -offset + 'rem';
   changeNum();
})
let changeNum = () =>{
if(offset == 0) {
    sliderNum.innerHTML = `01/05`;
    SliderItem1.style.background = '#D2B183';
    SliderItem2.style.background = '#ffffff';
    SliderItem3.style.background = '#ffffff';
    SliderItem4.style.background = '#ffffff';
    SliderItem5.style.background = '#ffffff';
}
else if (offset == 100) {
    sliderNum.innerHTML = `02/05`;
    SliderItem1.style.background = '#ffffff';
    SliderItem3.style.background = '#ffffff';
    SliderItem4.style.background = '#ffffff';
    SliderItem5.style.background = '#ffffff';
    SliderItem2.style.background = '#D2B183';
}
else if (offset == 200) {
    sliderNum.innerHTML = `03/05`;
    SliderItem1.style.background = '#ffffff';
    SliderItem2.style.background = '#ffffff';
    SliderItem3.style.background = '#D2B183';
    SliderItem4.style.background = '#ffffff';
    SliderItem5.style.background = '#ffffff';
    
}
else if (offset == 300) {
    sliderNum.innerHTML = `04/05`;
    SliderItem1.style.background = '#ffffff';
    SliderItem2.style.background = '#ffffff';
    SliderItem3.style.background = '#ffffff';
    SliderItem4.style.background = '#D2B183';
    SliderItem5.style.background = '#ffffff';
}
else if (offset == 400) {
    sliderNum.innerHTML = `05/05`;
    SliderItem1.style.background = '#ffffff';
    SliderItem2.style.background = '#ffffff';
    SliderItem3.style.background = '#ffffff';
    SliderItem4.style.background = '#ffffff';
    SliderItem5.style.background = '#D2B183';
}
console.log(offset)}