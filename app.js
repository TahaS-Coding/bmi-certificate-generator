document.addEventListener("DOMContentLoaded", function () {
    let certForm = document.getElementById("cert-form");
    certForm.addEventListener("submit", generate);

    let printButton = document.getElementById("printButton")
    printButton.addEventListener("click", function(){
        window.print();
    });
});

function generate(e) {
    e.preventDefault();
    let name = document.getElementById("name").value
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);
    let bmi = Math.round((weight / (height ** 2) * 703) * 10) / 10;

    let certificate = document.getElementById("certificate");
    let backgroundImg = document.getElementById("background-image");
    let nameOutput = document.getElementById("nameOutput");
    let status = document.getElementById("status");
    let bmiOutput = document.getElementById("bmiOutput");
    let catOutput = document.getElementById("catOutput");
    let catDesc = document.getElementById("catDesc");
    let sigOne = document.getElementById("sigOne");
    let nameOne = document.getElementById("nameOne");
    let titleOne = document.getElementById("titleOne");
    let sigTwo = document.getElementById("sigTwo");
    let nameTwo = document.getElementById("nameTwo");
    let titleTwo = document.getElementById("titleTwo");
    let date = document.getElementById("date");
    let dateData = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"numeric", day:"numeric"})

    let bmiCat;
    switch (true) {
        case (bmi < 18.5):
            bmiCat = "underweight";
            break;
        case (bmi <= 24.9):
            bmiCat = "healthy";
            break;
        case (bmi <= 29.9):
            bmiCat = "overweight";
            break;
        case (bmi > 29.9):
            bmiCat = "obese"
            break;
    }

    switch (bmiCat) {
        case "underweight":
            certificate.setAttribute("class", "universal underweight");
            backgroundImg.setAttribute("src", "images/underweight-bg.png");
            nameOutput.innerText = name;
            status.innerText = "minecraft skeleton";
            bmiOutput.innerText = String(bmi);
            catOutput.innerText = "underweight";
            catDesc.innerText = 
            "Your bones can be heard clattering when you walk, but fear not! eat a diet rich \
             of proteins such as beef and chicken in a caloric surplus, and sleep at night instead of harassing players.";
            sigOne.innerText = "Hahh";
            nameOne.innerText = "Haah Hrmm";
            titleOne.innerText = "Head Villager";
            sigTwo.innerText = "Taha";
            nameTwo.innerText = "Taha Shahid";
            titleTwo.innerText = "CEO";
            date.innerText = dateData;
            break;
        case "healthy":
            certificate.setAttribute("class", "universal healthy");
            backgroundImg.setAttribute("src", "images/healthy-bg.png");
            nameOutput.innerText = name;
            status.innerText = "vitality";
            bmiOutput.innerText = String(bmi);
            catOutput.innerText = "healthy";
            catDesc.innerText = 
            "Viruses and bacteria are scared to infected by you, you take all the groceries inside in one trip, \
             and you are thriving as a human. Congratulations - keep doing what it is you are doing.";
             sigOne.innerText = "Popeye";
             nameOne.innerText = "Popeye the Sailor";
             titleOne.innerText = "Spinach Producer";
             sigTwo.innerText = "Taha";
             nameTwo.innerText = "Taha Shahid";
             titleTwo.innerText = "CEO";
             date.innerText = dateData;
            break;
        case "overweight":
            certificate.setAttribute("class", "universal overweight");
            backgroundImg.setAttribute("src", "images/overweight-bg.png");
            nameOutput.innerText = name;
            status.innerText = "average american";
            bmiOutput.innerText = String(bmi);
            catOutput.innerText = "overweight";
            catDesc.innerText = 
            "Way to show national pride! you've joined the average American by being in the overweight category. \
             Consider a caloric deficit paired with exercise for improved health, or continue downing food like a true patriot! ";
             sigOne.innerText = "Sam";
             nameOne.innerText = "Uncle Sam";
             titleOne.innerText = "Patriot Advisor";
             sigTwo.innerText = "Taha";
             nameTwo.innerText = "Taha Shahid";
             titleTwo.innerText = "CEO";
             date.innerText = dateData;
            break;
        case "obese":
            certificate.setAttribute("class", "universal obese");
            backgroundImg.setAttribute("src", "images/obese-bg.png");
            nameOutput.innerText = name;
            status.innerText = "touch grass";
            bmiOutput.innerText = String(bmi);
            catOutput.innerText = "obese";
            catDesc.innerText = 
            "You must be allergic to going outside, but that changes today. Forget all the weight loss advice \
             you've followed, a simple whole foods diet and exercise will change your life. Healthcare ain't cheap.";
             sigOne.innerText = "Jonathan";
             nameOne.innerText = "Jonathan Nowzaradan";
             titleOne.innerText = "Show Producer";
             sigTwo.innerText = "Taha";
             nameTwo.innerText = "Taha Shahid";
             titleTwo.innerText = "CEO";
             date.innerText = dateData;
            break;
    }

}