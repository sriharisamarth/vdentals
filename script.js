// INTRO ANIMATION CONTROL
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("logo-layer").style.display = "none";
        document.getElementById("main-site").style.display = "block";
    }, 2500);
});


// TOGGLE "OTHERS" TREATMENT FIELD
function toggleOther() {
    const treatment = document.getElementById("treatment").value;
    const otherInput = document.getElementById("otherTreatment");

    if (treatment === "Others") {
        otherInput.style.display = "block";
        otherInput.required = true;
    } else {
        otherInput.style.display = "none";
        otherInput.required = false;
    }
}


// SEND WHATSAPP MESSAGE
function sendWhatsApp() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const treatmentSelect = document.getElementById("treatment").value;
    const otherTreatment = document.getElementById("otherTreatment").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!name || !age || !treatmentSelect || !date || !time) {
        alert("Please fill all required fields.");
        return;
    }

    const treatment =
        treatmentSelect === "Others" ? otherTreatment : treatmentSelect;

    const message =
        `Appointment Request:%0A` +
        `Name: ${name}%0A` +
        `Age: ${age}%0A` +
        `Treatment: ${treatment}%0A` +
        `Date: ${date}%0A` +
        `Time: ${time}`;

    window.open(
        `https://wa.me/916363995196?text=${message}`,
        "_blank"
    );
}


// SEND EMAIL
function sendEmail() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const treatmentSelect = document.getElementById("treatment").value;
    const otherTreatment = document.getElementById("otherTreatment").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!name || !age || !treatmentSelect || !date || !time) {
        alert("Please fill all required fields.");
        return;
    }

    const treatment =
        treatmentSelect === "Others" ? otherTreatment : treatmentSelect;

    const subject = "Appointment Request - Vaibhava Dentals";
    const body =
        `Name: ${name}%0D%0A` +
        `Age: ${age}%0D%0A` +
        `Treatment: ${treatment}%0D%0A` +
        `Preferred Date: ${date}%0D%0A` +
        `Preferred Time: ${time}`;

    window.location.href =
        `mailto:shilpasris@gmail.com?subject=${subject}&body=${body}`;
}