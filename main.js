function searchPayments() {

    let input =
        document.getElementById("searchInput")
        .value
        .toUpperCase();

    let table =
        document.getElementById("paymentTable");

    let rows =
        table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {

        let text =
            rows[i].textContent ||
            rows[i].innerText;

        if (text.toUpperCase().indexOf(input) > -1) {

            rows[i].style.display = "";

        } else {

            rows[i].style.display = "none";
        }
    }
}

function filterPayments() {

    let filter =
        document.getElementById("statusFilter")
        .value;

    let rows =
        document.querySelectorAll(
            "#paymentTable tbody tr"
        );

    rows.forEach(function(row){

        let status =
            row.cells[4]
            .textContent
            .toLowerCase();

        if (
            filter === "all" ||
            status === filter
        ) {

            row.style.display = "";

        } else {

            row.style.display = "none";
        }
    });
}  
const ctx = document.getElementById("paymentChart");

if(ctx){

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Jan","Feb","Mar","Apr","May","Jun"],
        datasets: [{
            label: "Monthly Payments ($)",
            data: [1250,1800,2200,1950,2500,2800],
            backgroundColor: "#2563eb"
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

}