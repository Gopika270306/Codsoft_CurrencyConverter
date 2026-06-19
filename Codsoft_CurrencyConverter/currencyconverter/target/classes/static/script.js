async function convertCurrency(){

    let amount =
    document.getElementById("amount").value;

    let base =
    document.getElementById("baseCurrency").value;

    let target =
    document.getElementById("targetCurrency").value;

    let response =
    await fetch("/currency/convert",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            amount:amount,
            baseCurrency:base,
            targetCurrency:target

        })
    });

    let data =
    await response.json();

    document.getElementById("result")
    .innerHTML =
    "Converted Amount : " +
    data.convertedAmount;

    loadHistory();
}

async function loadHistory(){

    let response =
    await fetch("/currency/history");

    let data =
    await response.json();

    let output = "";

    data.forEach(item=>{

        output += `
        <tr>
            <td>${item.baseCurrency}</td>
            <td>${item.targetCurrency}</td>
            <td>${item.amount}</td>
            <td>${item.convertedAmount}</td>
        </tr>
        `;
    });

    document.getElementById("history")
    .innerHTML = output;
}

loadHistory();
