alert("payment.js loaded");
function searchPayments() {

    let input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    let rows =
        document.querySelectorAll(
            "#paymentTable tbody tr"
        );

    rows.forEach(function(row){

        let text =
            row.textContent.toLowerCase();

        if(text.includes(input)){
            row.style.display = "";
        }
        else{
            row.style.display = "none";
        }

    });

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

        if(
            filter === "all" ||
            status === filter
        ){
            row.style.display = "";
        }
        else{
            row.style.display = "none";
        }

    });

}