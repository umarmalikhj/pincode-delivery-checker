let inputContent = document.querySelector(".inputContent");

document.getElementById("checkPinCode").addEventListener("click", function () {
    let pinCode = Number(document.getElementById("pincode").value);
    let deliveryWithCOD = document.querySelector(".deliveryWithCOD");
    let deliveryWithoutCOD = document.querySelector(".deliveryWithoutCOD");
    let noDelivery = document.querySelector(".noDelivery");
    let error = document.querySelector(".error");

    if (!/^\d{6}$/.test(pinCode)) {
        inputContent.style.display = "none";
        error.style.display = "block";
    }

    else if (pinCode <= 560500) {
        inputContent.style.display = "none";
        deliveryWithCOD.style.display = "block";
    }

    else if (pinCode <= 560900) {
        inputContent.style.display = "none";
        deliveryWithoutCOD.style.display = "block";
    }

    else {
        inputContent.style.display = "none";
        noDelivery.style.display = "block";
    }
});

document.querySelectorAll(".checkAgain").forEach(btn => {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".del").forEach(el => el.style.display = "none");
        inputContent.style.display = "flex";
        document.getElementById("pincode").value = "";
    })
});