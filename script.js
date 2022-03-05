const addressbtn = document.querySelector('#address-form')
const addressClose = document.querySelector('#address-close')
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
let index=0;
const imgNuber = document.querySelectorAll('.slider-content-left-top img')


addressbtn.addEventListener("click", function(){
    document.querySelector('.address-form').style.display="flex"
})

addressClose.addEventListener("click", function(){
    document.querySelector('.address-form').style.display="none"
})
rightbtn.addEventListener("click", function(){
    index=index+1
    if(index>imgNuber.length-1){
        index=0
    }
     document.querySelector(".slider-content-left-top").style.right = index*100+ "%"
})
leftbtn.addEventListener("click", function(){
    
    index=index-1
    if(index<=0){
        index=imgNuber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index*100+"%"
})

// ======= slider 1----------
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNumberLi.forEach(function(image, index){
    image.addEventListener("click", function(){
        removeactive()
        document.querySelector(".slider-content-left-top").style.right = index*100+"%"
        image.classList.add("active")    
    })
})
function removeactive(){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
// ----slider2-------
function imgAuto(){
    index=index+1
    if(index>imgNuber.length-1){
        index=0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right=index*100+"%"
    imgNumberLi[index].classList.add("active")
}
setInterval(imgAuto, 5000)

// slider product
const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const leftbtntwo = document.querySelector('.fa-chevron-left-two')
const imgNubertwo = document.querySelectorAll('.slider-product-one-content-items')

rightbtntwo.addEventListener("click", function(){
    index=index+1
    if(index>imgNubertwo.length-1){
        index=0
    }
     document.querySelector(".slider-product-one-content-items-content").style.right = index*100+ "%"
})
leftbtntwo.addEventListener("click", function(){
    
    index=index-1
    if(index<=0){
        index=imgNubertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index*100+"%"
})