function gId(id){
   return document.getElementById(id);
}
let firstClassText = gId('firstClass');
let EconomyText = gId('Economy');
firstClassText.addEventListener('input', updateClass);
EconomyText.addEventListener('input', updateClass);
function updateClass () {
    let firstClass = gId("firstClass").value*150;
    let Economy = gId("Economy").value*100; 
    updateTotal(firstClass,Economy);
}
function updateTotal(firstClass,Economy) {
    let subTotal = gId("subtotal");
    let total = gId("total");
    let vat = gId("vat");
    subTotal.textContent = Economy+firstClass;
    vat.textContent = (firstClass+Economy)*.10;
    total.textContent = firstClass+Economy+parseFloat(vat.textContent);
}
const fPlus = gId("firstPlus");
fPlus.addEventListener("click", function() {
    increment("firstClass");
});
const fMinus = gId("firstMinus");
fMinus.addEventListener("click", function() {
    decrement("firstClass");
    });
const ePlus = gId("economyPlus");
ePlus.addEventListener("click", function() {
    increment("Economy");
    });
const eMinus = gId("economyMinus");
eMinus.addEventListener("click", function() {
    decrement("Economy");
    });
function increment(id){
   let x = gId(id).value++;
   updateClass();
}
function decrement(id){
    let x = gId(id).value;
    if( x > 0){
    let x = gId(id).value--;
    }
    updateClass();
 }
const loginBtn = gId("book-now");
loginBtn.addEventListener("click",function(){
    gId("from").innerHTML = gId("fromInput").value;
    gId("to").innerHTML = gId("toInput").value;
    gId("departure").innerHTML = gId("departureInput").value;
    gId("return").innerHTML = gId("returnInput").value;
    gId("FCS").innerHTML = gId("firstClass").value;
    gId("ES").innerHTML = gId("Economy").value;
    gId("TA").innerText = gId("total").innerHTML;
    
    
const loginArea = gId("Book-Now-main");
loginArea.style.display = "none";
const transactionArea = gId("Booking-Details");
transactionArea.style.display = "block";
});
