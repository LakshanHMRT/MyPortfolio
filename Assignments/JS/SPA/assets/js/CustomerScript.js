document.getElementById("saveCustomer").addEventListener("click", function () {

    let id = document.getElementById("customer-id").value;
    let name = document.getElementById("customer-name").value;
    let address = document.getElementById("customer-address").value;
    let salary = document.getElementById("customer-salary").value;

    console.log(id,name,address,salary);

    let tBody=document.getElementById("tblCustomer");

    let tr= document.createElement("tr");

    let col1= document.createElement("td");
    let col2= document.createElement("td");
    let col3= document.createElement("td");
    let col4= document.createElement("td");

    col1.textContent=id;
    col2.textContent=name;
    col3.textContent=address;
    col4.textContent=salary;

    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    tr.appendChild(col4);

    tBody.appendChild(tr);
});
