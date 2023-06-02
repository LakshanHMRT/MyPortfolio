document.getElementById("addToCart").addEventListener("click", function () {

    let code = document.getElementById("itemCode").value;
    let productName = document.getElementById("item_Name").value;
    let price = document.getElementById("unitPrice").value;
    let qty = document.getElementById("orderedQty").value;
    let tot = document.getElementById("total").value;

    console.log(code,productName,price,qty,tot);

    let tBody=document.getElementById("tblPlaceOrder");

    let tr= document.createElement("tr");

    let col1= document.createElement("td");
    let col2= document.createElement("td");
    let col3= document.createElement("td");
    let col4= document.createElement("td");
    let col5= document.createElement("td");

    col1.textContent=code;
    col2.textContent=productName;
    col3.textContent=price;
    col4.textContent=qty;
    col5.textContent=tot;

    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    tr.appendChild(col4);
    tr.appendChild(col5);

    tBody.appendChild(tr);
});
