document.addEventListener("DOMContentLoaded", function () {
    let certForm = document.getElementById("cert-form");
    certForm.addEventListener("submit", generate);


});

function generate(e){
    e.preventDefault();
    
    let height = Number(document.getElementById("height").value);
    console.log(height);
    let weight = Number(document.getElementById("weight").value);
    let bmi = Math.round((weight / (height ** 2) * 703) * 10) / 10;
    alert(bmi);
}