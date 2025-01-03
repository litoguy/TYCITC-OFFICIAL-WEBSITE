const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener("submit", payWithPaystack, false);


function payWithPaystack(e) {

  e.preventDefault();


  let handler = PaystackPop.setup({

    key: 'pk_live_28595cdc6d3b12ae522d8eaf589bf7f1eb039369', 

    email: document.getElementById("email-address").value,

    amount: document.getElementById("amount").value*100,

    currency: 'GHS',

    ref: document.getElementById("reference").value + Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference.
    //Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you

    // label: "Optional string that replaces customer email"

    onClose: function(){
      window.location.replace("https://kisaacnana.github.io/TYCITC-OFFICIAL-WEBSITE/unsuccessful.html");

    },

    callback: function(response){

      let message = 'Payment complete! Reference: ' + response.reference;

      window.location.replace("https://kisaacnana.github.io/TYCITC-OFFICIAL-WEBSITE/successful.html");

    }

  });


  handler.openIframe();

}
