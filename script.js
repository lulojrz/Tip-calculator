const tipButtons = document.querySelectorAll(".tip-button");
const custom = document.getElementById("custom");
const bill = document.getElementById("Bill");
const person = document.getElementById("person");
const price_person = document.getElementById("price-person");
const price_total = document.getElementById("price-total");
const resetButton = document.getElementById("reset-button");



tipButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
     
        tipButtons.forEach(btn => btn.classList.remove("active"));
        
        
        button.classList.add("active");
        const value = parseFloat(button.value);
        const custom_value = parseFloat(custom.value);

        const tipAmount = custom_value ? custom_value : value;
        
        calculator(tipAmount);
    });
});


bill.addEventListener("input", () => {
    calculator(parseFloat(custom.value) || parseFloat(tipButtons.value));
});

person.addEventListener("input", () => {
    calculator(parseFloat(custom.value) || parseFloat(tipButtons.value));
});

custom.addEventListener("input", () => {
    calculator(parseFloat(custom.value) || parseFloat(tipButtons.value));
});

function calculator(tip) {
    const valueBill = parseFloat(bill.value);
    const persons = parseFloat(person.value)||1 ; 
    
    if (!isNaN(valueBill) && !isNaN(persons) && persons > 0) {
        const tipAmount = valueBill * (tip / 100);
        const totalAmount = tipAmount + valueBill;
        
        price_person.textContent = `$${(tipAmount / persons).toFixed(2)}`;
        price_total.textContent = `$${(totalAmount / persons).toFixed(2)} `;

    } else {
        price_person.textContent = "$00.00";
        price_total.textContent = "$00.00";
    }
}


resetButton.addEventListener("click", () => {
    bill.value = "";
    person.value = "";
    custom.value = "";
    
    tipButtons.forEach(btn => btn.classList.remove("active"));
    
    price_person.textContent = "$00.00";
    price_total.textContent = "$00.00";
});