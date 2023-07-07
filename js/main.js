// Show Dynamic List Link After Click btn Icon(bars)

// Toggle btn
let toggleBtn = document.querySelector(".icon");

// List Items (Links) navbar
let links = document.querySelector(".links");

// Action On Toggle Btn
toggleBtn.addEventListener("click", function (e) {

    // Stop Propagation
    e.stopPropagation();

    // Add Class Show On The Toggle Btn
    toggleBtn.classList.toggle("show");

    // Add Class Show On The Links
    links.classList.toggle("show");

})
// Stop Propagation On Links
links.addEventListener("click", function (e) {
    e.stopPropagation();
})

// Click Any Where Close List Items (Links)
document.addEventListener("click", function (e) {

    if (toggleBtn.classList.contains("show")) {

        if (e.target !== toggleBtn && e.target !== links) {

            // Add Class Show On The Toggle Btn
            toggleBtn.classList.toggle("show");

            // Add Class Show On The Links
            links.classList.toggle("show");

        }
    }
}) // End Header
// ==========================================================================================

// Start Slider

// Get Slide Show
let slides = Array.from(document.querySelectorAll(".slider .slider-content"));

// Get Slide Number
let slidesNum = slides.length;

// Set Slide Current
let slideCurrent = 1;

// Get btn Next
let next = document.querySelector(".next");

// Get btn Previous
let prev = document.querySelector(".prev");

// Get Bullets
let bullets = Array.from(document.querySelectorAll(".bullets li"));

// Get Current Slide Dynamic
for (let i = 0; i < bullets.length; i++) {

    bullets[i].addEventListener("click", function () {

        // Current Slide
        slideCurrent = parseInt(this.getAttribute("data-index"));

        // Function Checker
        theChecker();

    })

}

// Function Remove All Class Active On All Slide And All Bullets
function removeAllActive() {

    // Remove All Class Active On All Slide
    slides.forEach(function (slide) {
        slide.classList.remove("active");
    })

    // Remove All Class Active On All Bullets
    bullets.forEach(function (bullet) {
        bullet.classList.remove("active");
    })
}

// Check On All Slide And All Bullets
function theChecker() {

    // Function Remove All Class Active On All Slide And All Bullets
    removeAllActive();

    // Current Slide
    slides[slideCurrent - 1].classList.add("active");

    // Current bullets
    bullets[slideCurrent - 1].classList.add("active");

}
theChecker();
// Action On Next Btn
next.addEventListener("click", nextAction);

// Action On Next Btn
prev.addEventListener("click", prevAction);

// Function Next
function nextAction() {
    if (slideCurrent == slidesNum) {
        slideCurrent = 1;
        theChecker();
    } else {
        slideCurrent++;
        theChecker();
    }
}

// Function Previous
function prevAction() {
    if (slideCurrent == 1) {
        slideCurrent = slidesNum;
        theChecker();
    } else {
        slideCurrent--;
        theChecker();
    }
}

// Repeat Operation
setInterval(nextAction, 10000);

// ====================================================================================
// Start Scrolling Btn

// Get Scrooling btn
let btn = document.querySelector(".scrolling");

// Action When window Scroll
window.addEventListener("scroll", function () {

    // Show The Btn When Scroll Window
    if (this.window.scrollY > innerHeight - 500) {
        btn.style.opacity = 1;

    } else {
        // Hidden When The User Scroll Top
        btn.style.opacity = 0;
    }
})

// Action When Click On btn
btn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
// End Scrolling Btn
// ==================================================================================

// Start Portfolio Section

// Get Btn Show More
let btnShow = document.querySelector(".portfolio button.show");

// Get Content Which will Show
let contentShow = document.querySelectorAll(".portfolio .hidden");

// Action On Btn Show
btnShow.addEventListener("click", function () {

    if (btnShow.textContent === "Show More") {

        // Add Class Show On Content Show
        contentShow.forEach(function (content) {
            content.classList.remove("hidden");
        })

        // Change InnterHTML ON Btn
        this.textContent = "Show Less";

    } else {

        // Remove Class Show On Content Show
        contentShow.forEach(function (content) {
            content.classList.add("hidden");
        })

        // Change InnterHTML ON Btn
        this.textContent = "Show More";
    }

})
//  End Portfolio Section
// ====================================================================================

// Start Valid Form

// Get UserName & Email & Password & Phone & Message
let inputUser = document.querySelector('[name="user-name"]');
let inputEmail = document.querySelector('[name="email"]');
let inputPass = document.querySelector('[name="pass"]');
let inputPhone = document.querySelector('[name="phone"]');
let msg = document.querySelector(".contact .msg");


document.forms[0].onsubmit = function (e) {

    vUser = false;
    vEmail = false;
    vPass = false;
    vPhone = false;

    //  Phone
    if (inputPhone.value !== "" && inputPhone.value.length >= 10) {
        vPhone = true;
    } else {
        msg.textContent = "Plz Enter Your Phone";
        msg.style.opacity = 1;
    }

    // Password
    if (inputPass.value !== "" && inputPass.value.length > 10) {
        vPass = true;

    } else {
        msg.textContent = "Plz Enter Your Strong Password";
        msg.style.opacity = 1;
    }

    // Email
    if (inputEmail.value !== "") {
        vEmail = true;

    } else {
        msg.textContent = "Plz Enter Your Email";
        msg.style.opacity = 1;
    }

    // UserName
    if (inputUser.value !== "" && inputUser.value.length < 15) {
        vUser = true;
    } else {
        msg.textContent = "Plz Enter Your Username";
        msg.style.opacity = 1;
    }

    if (vUser === false || vEmail === false || vPass === false || vPhone === false) {
        e.preventDefault();
    }

}
// End Valid Form