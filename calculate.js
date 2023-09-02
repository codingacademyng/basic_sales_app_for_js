

// football items

let ckft  = document.querySelector('.ckft');
let ftqty = document.querySelector('.ftqty');
let ftprice = document.querySelector('.ftprice')
let ftcost = document.querySelector('.ftcost')


// baseball items

let ckbb  = document.querySelector('.ckbb');
let bbqty = document.querySelector('.bbqty');
let bbprice = document.querySelector('.bbprice');
let bbcost = document.querySelector('.bbcost');


// Soccer items

let cksc  = document.querySelector('.cksc');
let scqty = document.querySelector('.scqty');
let scprice = document.querySelector('.scprice');
let sccost = document.querySelector('.sccost');


//total item and cost

let titem = document.querySelector('.titem');
let tcost = document.querySelector('.tcost');

//btns
let btncalculate =  document.querySelector('.btncalculate');
let btnclear = document.querySelector('.btnclear');


//assign price to be visible

ckft.addEventListener('click', function(){
    if(ckft.checked){
        ftprice.value = 2500;
    }else{
        ftprice.value = ""
    }
})


cksc.addEventListener('click', function(){
    if(cksc.checked){
        scprice.value = 8000;
    }else{
        scprice.value = ""
    }
})


ckbb.addEventListener('click', function(){
    if(ckbb.checked){
        bbprice.value =19000;
    }else{
     bbprice.value = ""
    }
})


let subcosthandlerft = ()=>{
    if(ftprice==""){
      alert("Please select an Item");
    }else{
        ftcost.value = Number(ftqty.value) *  Number(ftprice.value);
    }
  
}


let subcosthandlersc = ()=>{
    if(ftprice==""){
      alert("Please select an Item");
    }else{
        sccost.value = Number(scqty.value)* Number(scprice.value);
    }
  
}


let calculate  = ()=>{
    titem.value = Number(ftqty) + Number(scqty) + Number(bbqty)
    tcost.value = Number(ftcost) + Number(sccost) + Number(bbcost)
}