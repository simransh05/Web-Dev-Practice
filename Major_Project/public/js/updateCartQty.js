let cartItem = document.querySelector('.cartItem')
let quantityNumber = document.querySelector('.quantityNumber');
cartItem.addEventListener('click',(ev)=>{
    let item = ev.target;
    let productId = item.getAttribute('productId');
    let sign = item.innerText;
    let priceValue = document.querySelector('.priceValue')
    if(sign==='+'){
        let quantityNumber = ev.target.parentElement.previousElementSibling;
        axios.get(`/shop/increaseQty?productId=${productId}`)
        .then((user)=>{
            quantityNumber.innerText = Number(quantityNumber.innerText)+1;
            priceValue.innerText =`$ ${user.data.totalPrice}`
            console.log(result);
        })
        .catch((err)=>{
            console.log(err)
        })
    }else if(sign === '-'){
        let quantityNumber = ev.target.parentElement.previousElementSibling.previousElementSibling;
        axios.get(`/shop/decreaseQty?productId=${productId}`)
        .then((user)=>{
            quantityNumber.innerText = Number(quantityNumber.innerText)-1;
            priceValue.innerText =`$ ${user.data.totalPrice}`
            console.log(result);
        })
        .catch((err)=>{
            console.log(err)
        })
    }else if(ev.target.classList.contains('deletebtn')){
        axios.get(`/shop/deletecartitem?productId=${productId}`)
        .then((user)=>{
            ev.target.parentElement.parentElement.innerText='';
            priceValue.innerText =`$ ${user.data.totalPrice}`
            let cartCount = document.querySelector('.cartCount')
            cartCount.innerText = Number(cartCount.innerText)-1;
        })
        .catch((err)=>{
            console.log(err)
        })
    }
})