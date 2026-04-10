function calc(){
let storage=parseFloat(document.getElementById('a').value)||0;
let requests=parseFloat(document.getElementById('b').value)||0;
let transfer=parseFloat(document.getElementById('c').value)||0;

// simplified cost model
let storageCost = storage * 0.023;
let requestCost = requests * 0.0000004;
let transferCost = transfer * 0.09;

let total = storageCost + requestCost + transferCost;

let level = total < 10 ? "Low cost ✅" :
            total < 100 ? "Moderate cost ⚖️" :
            "High cost ⚠️";

let insights = "";
if(storage > 1000) insights += "Large storage. Consider cheaper storage class.<br>";
if(requests > 1000000) insights += "High requests. Optimize access patterns.<br>";
if(transfer > 500) insights += "High transfer cost. Use CDN (CloudFront).<br>";

document.getElementById('result').innerHTML =
"Total Cost: $" + total.toFixed(2) + "<br><br>" +
"Storage Cost: $" + storageCost.toFixed(2) + "<br>" +
"Request Cost: $" + requestCost.toFixed(2) + "<br>" +
"Transfer Cost: $" + transferCost.toFixed(2) + "<br><br>" +
level + "<br><br>" + insights;
}
