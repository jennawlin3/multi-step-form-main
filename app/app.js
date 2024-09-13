const $errorMessage = document.querySelectorAll(".error");
const $nextBtn = document.querySelectorAll(".next-btn");
const $container = document.querySelectorAll(".container");
const $mobilePagination = document.querySelectorAll(".step");
const $desktopPagination = document.querySelectorAll(".circle-step");

// First Section
//Inputs
const $nameInput = document.querySelector("#name");
const $emailInput = document.querySelector("#email");
const $phoneInput = document.querySelector("#phone");
// Patterns
const namePattern = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;
const emailPattern = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
const phonePattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
// Values
let nameVal;
let validName = false;
let emailVal;
let validEmail = false;
let phoneVal;
let validPhone = false;

const user = {}

// Second section
const $optionContainer = document.querySelectorAll(".option-container");
const $inputOptionContainer = document.querySelectorAll(".option-container input");
const $planPrice = document.querySelectorAll(".plan-price");
const $togglePlan = document.querySelector(".circle");
const $montlyLabel = document.querySelector(".monthly-label");
const $yearlyLabel = document.querySelector(".yearly-label");
const $timePlan = document.querySelectorAll(".time");
const $discountInfo = document.querySelectorAll(".active-yearly");
let toggleActive = false;

let planChoice = {};

// Third section 
const $checkboxContainer = document.querySelectorAll(".checkbox-container");
const $inputCheckboxContainer = document.querySelectorAll(".checkbox-container input");
const $addonPrice = document.querySelectorAll(".addon-price");

let addOns = {};

// Four section 
const $checkOut = document.querySelector("#four");
const $planChoice = document.querySelector(".plan-choice");
const $planMeasureTime = document.querySelector(".plan-measure_time");
const $totalMeasureTime = document.querySelector(".total-time_measure");
const $changeBtn = document.querySelector(".change-plan");
const $planChoicePrice = document.querySelector(".price-plan");
const $addOnsContainer = document.querySelector(".add-ons_choice__container");
const $totalBill = document.querySelector(".total-price");

// Section 1 validation
$nameInput.addEventListener("input", e => {
    if(e) {
        nameVal = e.target.value;
        
        if(nameVal.length === 0) {
            $errorMessage[0].classList.remove("hide");
            $nameInput.classList.add("invalid");
        } else {
            $errorMessage[0].classList.add("hide");
            $nameInput.classList.remove("invalid");
        }

        if(namePattern.test(nameVal)) {
            validName = true;            $errorMessage[0].classList.add("hide");
            $nameInput.classList.remove("invalid");
        } else {
            $errorMessage[0].classList.remove("hide");
            $nameInput.classList.add("invalid");
            console.log("no valido");            
        }
    }
});

$emailInput.addEventListener("input", e => {
    if(e) {
        emailVal = e.target.value;
        
        if(emailVal.length === 0) {
            $errorMessage[1].classList.remove("hide");
            $emailInput.classList.add("invalid");
        } else {
            $errorMessage[1].classList.add("hide");
            $emailInput.classList.remove("invalid");
        }

        if(emailPattern.test(emailVal)) {
            validEmail = true;            $errorMessage[1].classList.add("hide");
            $emailInput.classList.remove("invalid");
        } else {
            $errorMessage[1].classList.remove("hide");
            $emailInput.classList.add("invalid");            
        }
    }
});

$phoneInput.addEventListener("input", e => {
    if(e) {
        phoneVal = e.target.value;
        
        if(phoneVal.length === 0) {
            $errorMessage[2].classList.remove("hide");
            $phoneInput.classList.add("invalid");
        } else {
            $errorMessage[2].classList.add("hide");
            $phoneInput.classList.remove("invalid");
        }

        if(phonePattern.test(phoneVal)) {
            validPhone = true;            $errorMessage[2].classList.add("hide");
            $phoneInput.classList.remove("invalid");
        } else {
            $errorMessage[2].classList.remove("hide");
            $phoneInput.classList.add("invalid");            
        }
    }
});

// Section 2 Validation

$optionContainer.forEach((cont, index) => {
    cont.addEventListener("click", e => {
        if(e) {
            planChoice = {};

            for(let i = 0; i < $optionContainer.length; i++) {
                if(i === index) {       $optionContainer[i].classList.add("active");
                $inputOptionContainer[i].checked = true;

                planChoice.name = $inputOptionContainer[i].value;
                planChoice.price = $planPrice[i].textContent;
                planChoice.id = index+1;
                /*planChoice.push(, $planPrice[i].textContent);*/
                console.log(planChoice);
                } else {
                    $optionContainer[i].classList.remove("active");
                }
            }
        }
    })
});

$togglePlan.addEventListener("click", e => {
    if(e) {
        if($togglePlan.classList.contains("yearly")) {
            for(let i = 0; i < $planPrice.length; i++) {
                $planPrice[i].textContent = Number($planPrice[i].textContent) / 10;
                $timePlan[i].textContent = "mo";
                $optionContainer[i].classList.remove("active");
                $discountInfo[i].classList.add("hide");
                $addonPrice[i].textContent = Number($addonPrice[i].textContent) / 10; 
            }

            $timePlan.forEach(span => {
                span.textContent = "mo";
            });
                $togglePlan.classList.remove("yearly");
                $planMeasureTime.textContent = "Monthly";
                $totalMeasureTime.textContent = "month";
                toggleActive = false;
                planChoice = {};

                addOns = {};
                $inputCheckboxContainer.forEach((checkbox, index) => {
                        checkbox.checked = false;
                        $checkboxContainer[index].classList.remove("active");
                }) 
                return;         
        }
        planChoice = {};
        addOns = {};
        $inputCheckboxContainer.forEach((checkbox, index) => {
                checkbox.checked = false;
                $checkboxContainer[index].classList.remove("active");
        });

        $montlyLabel.classList.toggle("active");
        $yearlyLabel.classList.toggle("active");
        $togglePlan.classList.toggle("yearly");
        $planMeasureTime.textContent = "Yearly";
        $totalMeasureTime.textContent = "year";
        $planPrice.forEach((price, i) => {
                price.textContent =
                Number(price.textContent) * 10;
                $discountInfo[i].classList.remove("hide");
                $addonPrice[i].textContent = Number($addonPrice[i].textContent) * 10;
                toggleActive = true;                $optionContainer[i].classList.remove("active");
        })

        $timePlan.forEach(span => {
            span.textContent = "yr";
        })
    }
});

// Section 3 Validation

$checkboxContainer.forEach((checkbox,index) => {


    checkbox.addEventListener("click", e => {

        if(e) {
            checkbox.classList.toggle("active");

            if(checkbox.classList.contains("active")) {
            $inputCheckboxContainer[index].checked = true;

                if($inputCheckboxContainer[index].value !== undefined) {
                if(!addOns[index]) {
                    addOns[index] = {
                        name: $inputCheckboxContainer[index].value,
                        price: $addonPrice[index].textContent,
                    }
                    console.log(addOns)
                } else {
                    return;
                }
                }              
            } else {
                $inputCheckboxContainer[index].checked = false;
                
                let objInfo = Object.entries(addOns);

                if(objInfo.length > 0) {
                    objInfo.forEach(info => {
                        delete addOns[index];
                    })
                }
            }
        }
    })
})

$nextBtn.forEach(btn => {
    btn.addEventListener("click", e => {
        if(e) {
            let actualId;

            if(btn.getAttribute("data-id") === "one") {
                if(validName === true && validEmail === true && validPhone === true) {
                    actualId = 1;

                    $container[actualId-1].classList.add("hide");
                    $mobilePagination[actualId-1].classList.remove("active");
                    $desktopPagination[actualId-1].classList.remove("active");
                    $container[actualId].classList.remove("hide");
                    $mobilePagination[actualId].classList.add("active");
                    $desktopPagination[actualId].classList.add("active");
                    user.name = nameVal;
                    user.email = emailVal;
                    user.phone = phoneVal;
                }
            }

            if(btn.getAttribute("data-id") === "two") {
                actualId = 2;
                let values = Object.keys(planChoice);

                if(values.length > 0) {
                $container[actualId-1].classList.add("hide");
                $mobilePagination[actualId-1].classList.remove("active");
                $desktopPagination[actualId-1].classList.remove("active");
                $container[actualId].classList.remove("hide");
                $mobilePagination[actualId].classList.add("active");
                $desktopPagination[actualId].classList.add("active");
                user.planChoice = planChoice;
                 
                }
            }

            if(btn.getAttribute("data-id") === "three") {
                let values = Object.keys(addOns);
                actualId = 3;
                if(values.length > 0) {
                $container[actualId-1].classList.add("hide");
                $mobilePagination[actualId-1].classList.remove("active");
                $desktopPagination[actualId-1].classList.remove("active");
                $container[actualId].classList.remove("hide");
                $mobilePagination[actualId].classList.add("active");
                $desktopPagination[actualId].classList.add("active");
                user.addOns = addOns;
                createcheckOut(user) 
                }
            }
        }
    })
});

// Section 4 
function createcheckOut(user) {
    let addOns = Object.entries(user.addOns);
    let addOnsPrices = [];
    $addOnsContainer.textContent = "";

    addOns.forEach(aO => {
        console.log(aO[1]);
        const addOnsContainer = document.createElement("div");
        addOnsContainer.classList.add("add-ons_container");
        const addOnsChoice = document.createElement("h4");
        addOnsChoice.classList.add("add-ons-choice");
        addOnsChoice.textContent = aO[1].name.replace("-", " ");
        const addOnsChoicePrice = document.createElement("p");
        addOnsChoicePrice.classList.add("add-ons_choice__price");
        addOnsChoicePrice.textContent = "+$";
        const priceAddOn = document.createElement("span");
        priceAddOn.classList.add("price-add_On");
        priceAddOn.textContent = aO[1].price;
        const time = document.createElement("span");
        time.classList.add("time");
        
        if(toggleActive === true) {
            time.textContent = "yr";
        } else {
            time.textContent = "mo";
        }

        addOnsChoicePrice.appendChild(priceAddOn);
        addOnsChoicePrice.appendChild(time);
        addOnsContainer.appendChild(addOnsChoice);
        addOnsContainer.appendChild(addOnsChoicePrice);
        $addOnsContainer.appendChild(addOnsContainer);

        addOnsPrices.push(Number(aO[1].price));
    })
    
    let totalAddOns = addOnsPrices.reduce((accum, curr) => Number(accum) + Number(curr));

    console.log(user);
    $planChoice.textContent = user.planChoice.name;
    $planChoicePrice.textContent = user.planChoice.price;

    $totalBill.textContent = totalAddOns + Number(user.planChoice.price);
}

$changeBtn.addEventListener("click", e => {
    if(e) {
        $container[1].classList.remove("hide");
        $container[3].classList.add("hide");
        $mobilePagination[3].classList.remove("active");
        $mobilePagination[1].classList.add("active");

        for(let i = 0; i < $optionContainer.length; i++) {
                $optionContainer[i].classList.remove("active");
                planChoice = {};
            }
        
        addOns = {};
        $inputCheckboxContainer.forEach((checkbox, index) => {
                checkbox.checked = false;
                $checkboxContainer[index].classList.remove("active");
        })    
    }
});

$mobilePagination.forEach((step,index) => {
    step.addEventListener("click", e => {
        let stepNumber;
        if(e) {
            stepNumber = e.target.getAttribute("data-id");

            for(let i = 0; i < $mobilePagination.length; i++) {
                if(i === index) {
                    $mobilePagination[i].classList.add("active");
                    $container[i].classList.remove("hide");
                } else {
                    $mobilePagination[i].classList.remove("active");
                    $container[i].classList.add("hide");
                }
            }
        }
    })
});

$desktopPagination.forEach((s,index) => {
    s.addEventListener("click", e => {
        let stepNumber;
        if(e) {
            stepNumber = e.target.getAttribute("data-id");
            console.log(stepNumber);
            for(let i = 0; i < $desktopPagination.length; i++) {
                console.log(i);
                if($desktopPagination[i].getAttribute("data-id") === stepNumber) {
                    $desktopPagination[i].classList.add("active");
                } else {
                    $desktopPagination[i].classList.remove("active");      
                }
            }

            $container.forEach(cont => {
                console.log(cont.getAttribute("data-id"));
                if(cont.getAttribute("id") === stepNumber) {
                    cont.classList.remove("hide");
                } else {
                    cont.classList.add("hide");
                }
            })
        }
    })
});





