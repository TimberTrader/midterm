
// renders a menu item for shopping cart
function createOrderItem(name, counter, price) {
return `<li class='cart-item' data-name='${name}' data-count='${counter}'  data-price='${price}' >
          <div>${name}</div><div>x ${counter}</div><div>$${price}</div>
          <a class='delete' href='#'>delete</a>
        </li>`
}

//  adds rendered menu item to shopping cart
function appendToCart(name, counter, price) {
    $('#cart').append(createOrderItem(name, counter, price))
}


$(() => {
  $(".item").on("click", function (event) {
    // sets variables for shopping cart including formating price
    event.preventDefault();
      let mItem = $(this).text();
      let price = parseFloat(($(this).next().text().slice(1)));
      let cItem = $(`#cart li[data-name='${mItem}']`);
      let counter = 1;
      let $totalElement = $('#total');
      let tPrice = price + parseFloat($totalElement.text().slice(1));
      $totalElement.text('$' + tPrice.toFixed(2));

      // checks to see if item exists in cart, if so increase counter and adjust row price, else 
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
    // sets string message for SMS (to twilio)
    let resSMS = $('#smsStr').val();
    $('#smsStr').val(resSMS +': ' + mItem + ' x ' + counter)
  
  })
  // provide functionality to delete row item (entire) from shopping cart -- adjust to total price
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


