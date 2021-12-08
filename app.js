const products = [{
    id: 1,
    name: 'Mint Brownie',
    price: 3.33,
    imgUrl: 'https://www.c4creamery.com/uploads/1/2/5/7/125765161/s908460682842106148_p96_i3_w1280.jpeg'
},
{
    id: 2,
    name: 'Glorious Mess',
    price: 3.33,
    imgUrl: 'https://www.c4creamery.com/uploads/1/2/5/7/125765161/s908460682842106148_p93_i2_w1280.jpeg'
},
{
    id: 3,
    name: 'Nutella Dreamin',
    price: 3.33,
    imgUrl: 'https://www.c4creamery.com/uploads/1/2/5/7/125765161/s908460682842106148_p85_i1_w1280.jpeg'
},
{
    id: 4,
    name: 'Caramel Macchiato',
    price: 3.33,
    imgUrl: 'https://www.c4creamery.com/uploads/1/2/5/7/125765161/s908460682842106148_p102_i1_w1280.jpeg'
},
{
    id: 5,
    name: 'Smores on Fire',
    price: 3.33,
    imgUrl: 'https://www.c4creamery.com/uploads/1/2/5/7/125765161/s908460682842106148_p81_i1_w1000.jpeg'
},
{
    id: 6,
    name: 'Lemonade Roll',
    price: 3.33,
    imgUrl: 'https://www.c4creamery.com/uploads/1/2/5/7/125765161/s908460682842106148_p87_i1_w1000.jpeg'
}]

let GloriousMess = 0
const cart = []

function drawMenu() {
    let template = ''
    products.forEach(prod => {
        template += `
       
        <div class="col-md-6 p-2 product user-select-none" oncontextmenu="disableContextClick() >
        <div class="bg-white p-3 shadow rounded" onclick="addToCart(${prod.id})">
            <img class="product-img img-fluid rounded-top" src="${prod.imgUrl}"
                alt="${prod.name}">
            <div class="d-flex justify-content-between p-3">
                <p><b>${prod.name}</b><p>
                <p>$${prod.price.toFixed(2)}</p>
            </div>
        </div>
    </div>
             `
    })
    document.getElementById('menu').innerHTML = template
}


function drawCart() {
    let template = ''
    let total = 0
    cart.forEach((prod, i) => {
        total += prod.price
        template += `
      <div class="d-flex justify-content-between border-bottom my-1 user-select-none">
        <p>${prod.name}</p>
        <p>$${prod.price.toFixed(2)} <i class="mdi mdi-close-circle text-danger action" onclick="removeItem(${i})"></i></p>
      </div>
      `
    })

    document.getElementById('cart').innerHTML = template

    document.getElementById('total').innerHTML = total.toFixed(2)
}

function addToCart(id) {

    const order = products.find(prod => prod.id === id)
    if (order.name === 'GloriousMess') {
        GloriousMess++
        if (GloriousMess > 2) {

        }
    }
    // add to cart
    cart.push(order)
    drawCart()

    document.getElementById('checkout-button').disabled = false
}

function checkout() {
    cart.length = 0
    drawCart()
    document.getElementById('checkout-button').disabled = true
}

function removeItem(i) {
    cart.splice(i, 1)
    drawCart()
    if (cart.length === 0) {
        document.getElementById('checkout-button').disabled = true
    }
}


function disableContextClick() {
    window.event.preventDefault()
}




drawCart()

drawMenu()