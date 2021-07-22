const price = document.getElementById("price");
const submit = document.getElementById("submit");
const value = document.getElementById("value");
const p = document.querySelector('p');

submit.addEventListener("click", () => {
    value.innerHTML = price.value;
    p.innerHTML = p.innerHTML.replace('Price', 'Value')
})




