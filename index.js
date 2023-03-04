const loanAmountInput = document.getElementById('loan-amount');
const interestRateInput = document.getElementById('interest-rate');
const loanTenureInput = document.getElementById('loan-tenure');
const calculateButton = document.getElementById('calculate-button');
const emiInput = document.getElementById('emi');
// console.log(emiInput);



const month = document.querySelector(".month")
const loan = document.querySelector(".principle")
const loan_i = document.querySelector(".loan-i")
const total_amount = document.querySelector(".total")

const calen = document.querySelectorAll("button")
const mbtn = document.querySelector("#btmn")
const ybtn = document.querySelector("#mtyr");

// ybtn.style.backgroundColor = "darkgreen"
// ybtn.style.color = "white"

for (let i = 0; i < calen.length; i++) {
  calen[i].addEventListener("click", (e) => {
    e.preventDefault()

    if (e.target.matches("#mtyr")) {
      // alert()
      let dee=loanTenureInput.value
      if (dee > 1) {
        let dee = loanTenureInput.value /12;
        loanTenureInput.value= dee

      }

    }
    else if (e.target.matches("#btmn")) {
      // alert("hi")
      loanTenureInput.value = loanTenureInput.value * 12;

    }
  })
}


mbtn.addEventListener("click", () => {
  mbtn.classList.add("new")
  ybtn.classList.remove("new")
  mbtn.style.backgroundColor= "#064a0e";
  ybtn.style.backgroundColor= "#4CAF50";
  // if (loanTenureInput !== "") {
  //   alert("please select the period");
  // }




})
ybtn.addEventListener("click", () => {
  ybtn.classList.add("new")
  mbtn.classList.remove("new")
  ybtn.style.backgroundColor= "#064a0e";
  mbtn.style.backgroundColor= "#4CAF50";

  // if (loanTenureInput !== "") {
  //   alert("please select the period");
  // }

})



const select = document.querySelector("select")



function calculateEMI() {

  if (loanAmountInput.value !== "" && interestRateInput.value !== "" && loanTenureInput.value !== "") {
    if (ybtn.classList.contains("new")) {

      const loanAmount = loanAmountInput.value;
      const interestRate = interestRateInput.value / 1200; // Monthly Interest Rate
      const loanTenure = loanTenureInput.value * 12;
      const emi = (loanAmount * interestRate * (Math.pow(1 + interestRate, loanTenure))) / (Math.pow(1 + interestRate, loanTenure) - 1);
      // console.log(emi);
      emiInput.value = Math.round(emi);

      
      // month.innerText = emiInput.value
      loan.innerText = loanAmountInput.value

      let total = emi * loanTenure.toLocaleString()
      total_amount.innerText = Math.round(total).toLocaleString();

      loan_i.innerText = Math.round(total - loanAmount).toLocaleString();

    }
    else {
      const loanAmount = loanAmountInput.value;
      const interestRate = interestRateInput.value / 1200; // Monthly Interest Rate
      const loanTenure = loanTenureInput.value;
      const emi = (loanAmount * interestRate * (Math.pow(1 + interestRate, loanTenure))) / (Math.pow(1 + interestRate, loanTenure) - 1);
      emiInput.value = Math.round(emi);
      // month.innerText = emiInput.value
      loan.innerText = loanAmountInput.value

      let total = emi * loanTenureInput.value
      total_amount.innerText = Math.round(total).toLocaleString()

      loan_i.innerText = Math.round(total - loanAmount).toLocaleString();

    }
  }
  else {
    alert("please enter all the values")

  }

}



calculateButton.addEventListener('click', calculateEMI);



