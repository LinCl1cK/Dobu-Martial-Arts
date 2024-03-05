var prevScrollpos = window.scrollY;

window.onscroll = function() {
  // Function 1
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".custom-navbar").style.top = "0";
  } else {
    // Adjust the top property based on the viewport height
    document.querySelector(".custom-navbar").style.top = "-" + window.innerHeight * 0.1 + "px"; // Adjust the multiplier (0.1) as needed
  }
  prevScrollpos = currentScrollPos;

  // Function 2
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


// Form validation
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })

// submission handling !!not yet fixed!!
// $("form").on("submit", function(event) {
//   event.preventDefault();

//   $.ajax({
//     url: 'http://localhost:8080/',
//     type: 'POST',
//     data: $('#your-form').serialize(),
//     success: function(response) {
//       console.log(response);
//     }
//   });  
// });
