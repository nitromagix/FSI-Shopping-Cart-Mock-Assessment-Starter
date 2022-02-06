const price1 = 15.00
const price2 = 17.50

let quantity1 = 1 
let quantity2 = 1 

const btnQuantityDown1 = document.querySelector('#quantity-down1');
const btnQuantityUp1 = document.querySelector('#quantity-up1');
const divQuantityTotal1 = document.querySelector('#totalQuantity1');
const btnRemove1 = document.querySelector('#remove1');

const btnQuantityDown2 = document.querySelector('#quantity-down2');
const btnQuantityUp2 = document.querySelector('#quantity-up2');
const divQuantityTotal2 = document.querySelector('#totalQuantity2');
const btnRemove2 = document.querySelector('#remove2');

const h2TotalItems = document.querySelector('#total-items');
const h2TotalPrice = document.querySelector('#total-price');

btnQuantityDown1.addEventListener('click', function(e)
{
    if (quantity1 > 0) {
        quantity1 -= 1;
        updateQuantity1();
    }
    updateTotal();
});

btnQuantityUp1.addEventListener('click', function(e)
{
    quantity1 += 1;
    updateQuantity1();
    updateTotal();
});

btnRemove1.addEventListener('click', function(e){
   const cartItem1 = document.querySelector('#cartItem1');
   if (cartItem1 != null)
   {
      quantity1 = 0;
      cartItem1.remove();
      updateTotal();
   }
});

btnQuantityDown2.addEventListener('click', function(e)
{
    if (quantity2 > 0) {
      quantity2 -= 1;
        updateQuantity2();
    }
    updateTotal();
});

btnQuantityUp2.addEventListener('click', function(e)
{
    quantity2 += 1;
    updateQuantity2();
    updateTotal();
});

btnRemove2.addEventListener('click', function(e){
   const cartItem2 = document.querySelector('#cartItem2');
   if (cartItem2 != null)
   {
      quantity2 = 0;
      cartItem2.remove();
      updateTotal();
   }
});

function updateQuantity1 (){
   divQuantityTotal1.textContent = `Quantity: ${quantity1}`;
};
function updateQuantity2 (){
   divQuantityTotal2.textContent = `Quantity: ${quantity2}`;
};

function updateTotal()
{
   h2TotalItems.textContent = `Total items: ${quantity1 + quantity2}`
   h2TotalPrice.textContent = `Total: $${((quantity1 * price1) + (quantity2 * price2)).toLocaleString(
      'en-US',
      {  minimumFractionDigits: 2 }
      )}`
   
}
