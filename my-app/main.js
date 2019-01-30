//Assignment 1: Callback Function
function delayedResult(n1, n2, delayTime, callback){
  setTimeout(function(){
    return callback(n1+n2)
  },delayTime)
}

delayedResult(4, 5, 3000, function(result){
  console.log(result)
}) 

delayedResult(-5, 10, 2000, function(result){
  window.alert(result)
}) 


//Assignment 2: Callback Function and Advanced HTML DOM
const url = 'https://cwpeng.github.io/live-records-samples/data/products.json'

function ajax(src, callback){
  fetch(src)
  .then(res=>res.json())
  .then(res=>{
    const data = res
    callback(data)
  })
  .catch(err=>console.log('err'))
}

function render(data){
  const product = document.querySelector('.product')
  data.forEach(el=>{
    let formatDesc = el.description.split('')
    formatDesc = formatDesc.slice(0,formatDesc.length-1).join('')
    let markup=`
    <li>
      <div class="name">${el.name}</div>
      <div class="description">${formatDesc}</div>
      <div class="price">${formatPrice(el.price)}<span>元</span></div>
    </li>` 
    product.insertAdjacentHTML('beforeend',markup) 
  }) 
}

ajax(url,function(response){
render(response)
}) 

//價格處理
function formatPrice(price) {
  let format = price.toString()
  if (format.length > 3) {
    format= `${format.substr(0, format.length - 3)},${format.substr(format.length - 3)}`
  }
  else {
    format = format
  }
  return format
}
