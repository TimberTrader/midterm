
function createOrderItem(string) {
  return `<li>${string}</li>`
};

function appendToCart(string) {
  $('#cart').append(createOrderItem(string))
}

$(() => {
  $(".item").on("click", function (event) {
    event.preventDefault();
    let mItem = $(this).text();
    appendToCart(mItem);
    
    let resSMS = $('#smsStr').val();
    $('#smsStr').val(resSMS +': '+mItem)
  })
});
