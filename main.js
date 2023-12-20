"use strict"

//Getting all elements from the document

var form=document.forms.feed
var input=form.pro
var amount=form.amo
var button=form.add
var alert1=document.getElementById("alert1")
var alert2=document.getElementById("alert2")
var container1=document.querySelector(".container6")
var container2=document.querySelector('.container5')
var total=document.querySelector('.tot')
var totaldiv=document.querySelector('.emp2')
var trash1=document.querySelector('.trash2')
var hr=document.querySelector('#hid')
var desending=document.querySelector('#top')

// Making the total box as display none
hr.classList.add('ale2')
totaldiv.classList.add('ale2')

//Giving one variable to store the amount
var totalamount=0

//Every time it will update and show the total box
//If the total amount is zero it will not show
function update () {
    if(totalamount==0){
        hr.classList.remove('ale1')
        hr.classList.add('ale2')
        totaldiv.classList.remove('fle')
        totaldiv.classList.add('ale2')
       }
  else if(totalamount>0) {
    hr.classList.remove('ale2')
    hr.classList.add('ale1')
    totaldiv.classList.remove('ale2')
    totaldiv.classList.add('fle');
   }
    total.innerHTML=totalamount
}

//Form submit 
form.addEventListener('submit',(event)=>{

 //checking weather the product list box and Amount box are are valid if it was invalid alert box will display 
 //using preventdefault for not refreshing  
if (input.value.trim() == ""||amount.value.trim() == "") {
    if (input.value.trim() == "" && amount.value.trim() == "") {
        event.preventDefault();
        alert1.style.display='block'
        alert2.style.display='block'
    }
    else if (input.value.trim() == "") {
        event.preventDefault();
        alert1.style.display='block'
        alert2.style.display='none'
    }
    else if (amount.value.trim() == "") {
        event.preventDefault();
        alert1.style.display='none'
        alert2.style.display='block'
    }
    event.preventDefault();
}

//Creating Empty div and some Elements to store the values and to append
else{
    event.preventDefault();
//Creating tags
    var empdiv=document.createElement('div')
    empdiv.setAttribute("class",'emp')

    var h31=document.createElement('h3')
    h31.setAttribute('class','pname')

    var h32=document.createElement('h3')
    h32.setAttribute('class','aname')

    var trash=document.createElement('div')
    trash.setAttribute('class','trash')

    var del=document.createElement('button')
    del.setAttribute('class','delete')
    del.innerHTML=`<i class="fa-solid fa-trash"></i>`

    var container=document.createElement("div")
    container.setAttribute('class','container4')

//Using Math.abs to know the exact value ,It will also work on parseInt
    totalamount+=Math.abs(amount.value)
    

    h31.innerText=input.value
    h32.innerText=amount.value

//Appending Elements to body
    empdiv.append(h31,h32)
    trash.append(del)
    trash1.appendChild(trash)
    container.append(empdiv)
    container1.append(container)

//Making trash icon display none and writing function 
    del.classList.add('ale2')
    del.addEventListener('click',clear)

   update()

//Making input box and amount box empty
   input.value=""
   amount.value=""

//Making the trash icon to show on mouse over 
container.firstChild.addEventListener('mouseover',()=>{
    del.classList.remove('ale2')
    del.classList.add('ale1')
})
trash.addEventListener('mouseover',()=>{
    del.classList.remove('ale2')
    del.classList.add('ale1')
})

//Making the trash icon not to show on mouse out
container.firstChild.addEventListener('mouseout',()=>{
    del.classList.remove('ale1')
    del.classList.add('ale2')
})
trash.addEventListener('mouseout',()=>{
    del.classList.remove('ale1')
    del.classList.add('ale2')
})

//Writing a function for trash icon to delete
function clear() {

 //Using if to check only if OK click it will work
    if (confirm("Do you want to delete the "+container.firstChild.firstChild.innerText)) {

 //Storing the amount of the deleting value and subracting to Total amount  
        var rem= container.firstChild.lastChild.innerText
        totalamount=totalamount-rem
        container.remove()
        trash.remove()

//Again updating the total amount
         update()   
    }
}

//Writing a function for sort in desending order
desending.addEventListener('click',()=>{
    var get1=[(container.firstChild.lastChild.innerText)]
 for(var i=0;i<get1.length;i++){
      console.log(get1[i]);
 }  
})
}

//Making A time for Alert box to show
setTimeout(() => {
    alert1.style.display='none'
    alert2.style.display='none'

}, 1000)
})