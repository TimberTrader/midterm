
// function createOrderItem(string) {
//   return `<li>${string}</li>`
// };

function createOrderItem(name, counter, price) {
return `<li class='cart-item' data-name='${name}' data-count='${counter}'  data-price='${price}' >
          <div>${name}</div><div>x ${counter}</div><div>$${price}</div>
          <a class='delete' href='#'>delete</a>
        </li>`
}

// function appendToCart(string) {
//   $('#cart').append(createOrderItem(name, counter, price))
// }

function appendToCart(name, counter, price) {
    $('#cart').append(createOrderItem(name, counter, price))
}


$(() => {
  $(".item").on("click", function (event) {
    event.preventDefault();
      let mItem = $(this).text();
      let price = parseFloat(($(this).next().text().slice(1)));
      let cItem = $(`#cart li[data-name='${mItem}']`);
      let counter = 1;
      let $totalElement = $('#total');
      let tPrice = price + parseFloat($totalElement.text().slice(1));
      $totalElement.text('$' + tPrice.toFixed(2));
      
      if (cItem.length) {
        counter = Number(cItem.attr('data-count')) + 1;
        price = counter * price;
        cItem.attr('data-count', counter)
        .attr('data-price', price)
        .html(`<div>${mItem}</div><div>x ${counter}</div><div>$${price.toFixed(2)}</div>
        <a class='delete' href='#'>delete</a>`)
      } else {
        appendToCart(mItem, 1, price)
      }
    
    let resSMS = $('#smsStr').val();
    $('#smsStr').val(resSMS +': ' + mItem + ' x ' + counter)
    //console.log(resSMS)
  })

  $("#cart").on("click", '.delete', function (event) {
    event.preventDefault();
    let cartItem = $(this).closest('.cart-item'); 
    let price = parseFloat(cartItem.attr('data-price'));
    let $totalElement = $('#total');
    let tPrice = parseFloat($totalElement.text().slice(1)) - price;
    $totalElement.text('$' + tPrice.toFixed(2));
    cartItem.remove();
  })
});
