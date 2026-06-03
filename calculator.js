function calculateEMI() {

    let principal =
        parseFloat(document.getElementById("loan").value);

    let annualRate =
        parseFloat(document.getElementById("rate").value);

    let years =
        parseFloat(document.getElementById("years").value);

    if (
        isNaN(principal) ||
        isNaN(annualRate) ||
        isNaN(years)
    ) {
        alert("Please enter all values.");
        return;
    }

    let monthlyRate = annualRate / 12 / 100;

    let months = years * 12;

    let emi =
        principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months) /
        (Math.pow(1 + monthlyRate, months) - 1);

    let totalPayment = emi * months;

    let totalInterest = totalPayment - principal;

    document.getElementById("monthlyEmi").innerHTML =
        `Monthly EMI: \$${emi.toFixed(2)}`;

    document.getElementById("totalPayment").innerHTML =
        "Total Payment: $" + totalPayment.toFixed(2);

    document.getElementById("totalInterest").innerHTML =
        "Total Interest: $" + totalInterest.toFixed(2);
}