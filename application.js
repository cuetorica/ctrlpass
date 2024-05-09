document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form"),
          nextBtn = form.querySelector(".nextBtn"),
          backBtn = form.querySelector(".backBtn"),
          allInput = form.querySelectorAll(".first input"),
          messagePopup = document.getElementById("messagePopup");

    nextBtn.addEventListener("click", () => {
        allInput.forEach(input => {
            if (input.value !== "") {
                form.classList.add('secActive');
            } else {
                form.classList.remove('secActive');
            }
        });
    });

    backBtn.addEventListener("click", () => {
        form.classList.remove('secActive');
    });

    form.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Perform any actions you want when the form is submitted
        // For example, show a message popup
        showPopup();
    });

    // Add event listener for the close button
    document.querySelector(".closeBtn").addEventListener("click", hidePopup);

    // Function to show the popup
    function showPopup() {
        messagePopup.style.display = 'block';
    }

    // Function to hide the popup and reset the form
    function hidePopup() {
        messagePopup.style.display = 'none';
        form.reset(); // Reset the form
        form.classList.remove('secActive'); // Go back to the first form section
    }

});