document.getElementById("saveItem").addEventListener("click", function () {

    let code = document.getElementById("item-ID").value;
    let productName = document.getElementById("item-Name").value;
    let price = document.getElementById("item-Price").value;
    let qty = document.getElementById("item-Quantity").value;

    console.log(code,productName,price,qty);

    let tBody=document.getElementById("tblItem");

    let tr= document.createElement("tr");

    let col1= document.createElement("td");
    let col2= document.createElement("td");
    let col3= document.createElement("td");
    let col4= document.createElement("td");

    col1.textContent=code;
    col2.textContent=productName;
    col3.textContent=price;
    col4.textContent=qty;

    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    tr.appendChild(col4);

    tBody.appendChild(tr);
});
