const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const num = document.querySelector(".value");
const price = document.querySelector(".price");

let init = 1;
num.innerHTML = init

let pricenum = 1600;

price.innerHTML = "$" + pricenum 

increase.addEventListener("click", function () {
 
   

    init++;

    num.innerHTML = init

    pricenum = pricenum * init

    price.innerHTML = "$" + pricenum 
})

decrease.addEventListener("click", function () {
 

   
    init--;
    if(init < 1){
        init = 1

    }

    num.innerHTML = init

    
    
    
})

