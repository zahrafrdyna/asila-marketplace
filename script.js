//alert("hello world")

const qtyPlus = document.querySelector(".qty-plus")
const qtyValue = document.querySelector(".qty-value")
const qtyMin = document.querySelector(".qty-min")
const btnBuy = document.querySelector(".button-beli")
const cartValue = document.querySelector("#cart")

const btnBuys = document.querySelectorAll(".button-beli")
const qtyValues = document.querySelectorAll(".qty-value")
const qtyPluses = document.querySelectorAll(".qty-plus")
const qtyMinutes = document.querySelectorAll(".qty-min")

qtyPluses.forEach((btn,i) => {
btn.addEventListener("click",function () {
  let jumlahBarang = parseInt(qtyValues[i].value);
  jumlahBarang = jumlahBarang + 1;

  qtyValues[i].value = jumlahBarang;
  });
});
qtyMinutes.forEach((btn,i) => {
btn.addEventListener("click",function () {
  let jumlahBarang = parseInt(qtyValues[i].value);
  jumlahBarang = jumlahBarang - 1;

  qtyValues[i].value = jumlahBarang;
  });
});
btnBuys.forEach((btn,i) => {
btn.addEventListener("click",function(){
    let jumlahBeli = parseInt(cartValue.textContent)
    jumlahBeli = jumlahBeli + parseInt(qtyValues[i].value)

    cartValue.textContent = jumlahBeli
  })
});


