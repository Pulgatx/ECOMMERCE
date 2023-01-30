const price = document.querySelector('#price')
const output = document.querySelector('.price-output')

output.textContent = price.value

price.addEventListener('input', function() {
  output.textContent = price.value
})

const stock = document.querySelector('#stock')
const Output = document.querySelector('.stock-output')

Output.textContent = stock.value

stock.addEventListener('input', function() {
  Output.textContent = stock.value
})