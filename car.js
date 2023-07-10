document.getElementById("carForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var carMake = document.getElementById("carMake").value;
    var carModel = document.getElementById("carModel").value;
    var repairType = document.getElementById("repairType").value;
    var tireBrand = document.getElementById("tireBrand").value;
    var tireSize = document.getElementById("tireSize").value;

    var result = "Car Make: " + carMake + "<br>" +
                 "Car Model: " + carModel + "<br>" +
                 "Repair Type: " + repairType + "<br>" +
                 "Tire Brand: " + tireBrand + "<br>" +
                 "Tire Size: " + tireSize;

    document.getElementById("result").innerHTML = result;
});
