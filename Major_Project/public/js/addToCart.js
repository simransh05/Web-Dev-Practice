let addtocartBTN = document.querySelector('.addtocartBTN');

addtocartBTN.addEventListener('click', (ev) => {
    let productId = addtocartBTN.getAttribute('productId');
    axios.get(`/shop/addtocart?productId=${productId}`)
        .then((res) => {
            console.log(res);
            let cartCount= document.querySelector('.cartCount');
            let x = Number(cartCount.innerText);
            x++;
            cartCount.innerText =x;
        })
        .catch((err)=>{
            console.log(err);
        })
})
