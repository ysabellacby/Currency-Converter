function convert() {
    var amount = document.getElementById("amount").value;
    var selectedTo = document.getElementById("onhand").value;
    var selectedFrom = document.getElementById("converted").value;
    

    if (selectedTo == "euro" && selectedFrom == "usd2") {
        total = amount * 0.99;
        document.getElementById("total").innerHTML = "$" + parseFloat(total).toFixed(2) + " USD " + "1:0.99"
    } else if (selectedTo == "euro" && selectedFrom == "cad2") {
        total = amount * 1.35;
        document.getElementById("total").innerHTML = "$" + parseFloat(total).toFixed(2) + " CAD " + "1:1.35"
    } else if (selectedTo == "euro" && selectedFrom == "btc2") {
        total = amount * 0.000048;
        document.getElementById("total").innerHTML = parseFloat(total).toFixed(2) + " BTC " + "1:0.000048"
    } else if (selectedTo == "euro" && selectedFrom == "eth2") {
        total = amount * 0.00063;
        document.getElementById("total").innerHTML = parseFloat(total).toFixed(2) + " ETH " + "1:0.00063"
    }

    if (selectedTo == "usd" && selectedFrom == "euro2") {
        total = amount * 1.01;
        document.getElementById("total").innerHTML = "€" + parseFloat(total).toFixed(2) + " EURO " + "1:1.01"
    } else if (selectedTo == "usd" && selectedFrom == "cad2") {
        total = amount * 1.36;
        document.getElementById("total").innerHTML = "$" + parseFloat(total).toFixed(2) + " CAD " + "1:1.36"
    } else if (selectedTo == "usd" && selectedFrom == "btc2") {
        total = amount * 0.000049;
        document.getElementById("total").innerHTML = parseFloat(total).toFixed(2) + " BTC " + "1:0.000049"
    } else if (selectedTo == "usd" && selectedFrom == "eth2") {
        total = amount * 0.00064;
        document.getElementById("total").innerHTML = parseFloat(total).toFixed(2) + " ETH " + "1:0.00064"
    }

    if (selectedTo == "cad" && selectedFrom == "euro2") {
        total = amount * 0.74;
        document.getElementById("total").innerHTML = "€" + parseFloat(total).toFixed(2) + " EURO " + "1:0.74"
    } else if (selectedTo == "cad" && selectedFrom == "usd2") {
        total = amount * 0.73;
        document.getElementById("total").innerHTML = "$" + parseFloat(total).toFixed(2) + " USD " + "1:0.73"
    } else if (selectedTo == "cad" && selectedFrom == "btc2") {
        total = amount * 0.000036;
        document.getElementById("total").innerHTML = parseFloat(total).toFixed(2) + " BTC " + "1:0.000036"
    } else if (selectedTo == "cad" && selectedFrom == "eth2") {
        total = amount * 0.00047;
        document.getElementById("total").innerHTML = parseFloat(total).toFixed(2) + " ETH " + "1:0.000047"
    }

    if (selectedTo == "btc" && selectedFrom == "euro2") {
        total = amount * 20699.57;
        document.getElementById("total").innerHTML = "€" + parseFloat(total).toFixed(2) + " EURO " + "1:20699.57"
    } else if (selectedTo == "btc" && selectedFrom == "usd2") {
        total = amount * 20461.50;
        document.getElementById("total").innerHTML = "$" + parseFloat(total).toFixed(2) + " USD " + "1:20461.50"
    } else if (selectedTo == "btc" && selectedFrom == "cad") {
        total = amount * 27863.35;
        document.getElementById("total").innerHTML = "$" + parseFloat(total).toFixed(2) + " CAD " + "1:27863.35"
    } else if (selectedTo == "btc" && selectedFrom == "eth2") {
        total = amount * 13.09;
        document.getElementById("total").innerHTML = parseFloat(total).toFixed(2) + " ETH " + "1:13.09"
    }

    if (selectedTo == "eth" && selectedFrom == "euro2") {
        total = amount * 1582.85;
        document.getElementById("total").innerHTML = "€" + parseFloat(total).toFixed(2) + " EURO " + "1:1582.85"
    } else if (selectedTo == "eth" && selectedFrom == "usd2") {
        total = amount * 1565.45;
        document.getElementById("total").innerHTML = "$" + parseFloat(total).toFixed(2) + " USD " + "1:1565.45"
    } else if (selectedTo == "eth" && selectedFrom == "cad") {
        total = amount * 2131.79;
        document.getElementById("total").innerHTML = "$" + parseFloat(total).toFixed(2) + " CAD " + "1:2131.79"
    } else if (selectedTo == "eth" && selectedFrom == "btc2") {
        total = amount * 0.076;
        document.getElementById("total").innerHTML = parseFloat(total).toFixed(2) + " BTC " + "1:0.076"
    }
    
   
}