// Spread syntax
const menuPrincipal = ["fish", "ice cream", "salad"]
const menu = [...menuPrincipal, "pizza", "soupe", "fruits"]

const render = (menu) => {
 let div = document.getElementById('menu')

 let h3 = document.createElement('h3')
 div.appendChild(h3)
 h3.appendChild(document.createTextNode("Spread syntax"))

 let ol = document.createElement('ol')
 div.appendChild(ol)

 menu.sort().forEach(item => {
   
   let li = document.createElement('li')
   
   ol.appendChild(li) 
   
   
   li.appendChild(document.createTextNode(item)) 
   
 });

}

render(menu)



///Destructuring assignment
const [m1, ,,, m2, m3] = menu
const renderSort = () => {
  let div = document.getElementById('sort')

 let h3 = document.createElement('h3')
 div.appendChild(h3)
 h3.appendChild(document.createTextNode("Destructuring assignment"))
 let p1 = document.createElement('p')
 let p2 = document.createElement('p')
 div.appendChild(p1)
 div.appendChild(p2)
 p1.appendChild(document.createTextNode(m1))
 p2.appendChild(document.createTextNode(m2))
}

renderSort()


//////////////

const priceList = {
  "name": "Fish",
  "price": "25"
}
const quantity = {
  ...priceList,
  "quantyti": "2"
}

console.log(quantity)

///////////////