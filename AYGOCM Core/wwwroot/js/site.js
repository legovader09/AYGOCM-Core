// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.getElementById("cardimage");
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }

            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
});

var slider = document.getElementById("lvlSliderInput");
var output = document.getElementById("sliderLbl");
var LVLType = "Level";
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
    updateSlider();
}

/**
 * Updates the level on the template to show correctly.
 */
function updateSlider() {
    document.getElementById("LVLBar").src = "/res/Current/Levels/" + LVLType + slider.value + ".png";
}

/**
 * Change the LVL type on the card template.
 * @param {number} type
 */
function changeLVLType(type) {
    switch (type) {
        case 0:
            LVLType = "Level";
            break;
        case 1:
            LVLType = "Rank";
            break;
        case 2:
            LVLType = "Neg";
            break;
        default:
            LVLType = "Level";
    }
    updateSlider();
}