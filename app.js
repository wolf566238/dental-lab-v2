const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzixrIVdi6i-gEPxe5riN23IrkrP0S-6CviLOfWE3DGhM-T-WK-_mFUmabErw3y6xMz/exec";

document.getElementById("orderForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const data = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    doctor: doctor.value,
    patient: patient.value,
    type: type.value,
    priority: priority.value,
    date: date.value,
    notes: notes.value
  };

  document.getElementById("status").innerText = "جارٍ الإرسال...";

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data)
    });

    document.getElementById("status").innerText = "تم الإرسال بنجاح ✅";
    document.getElementById("orderForm").reset();

  } catch (err) {
    document.getElementById("status").innerText = "خطأ في الإرسال ❌";
  }
});

// الوضع الداكن
function toggleTheme(){
  document.body.classList.toggle("dark");
}

// اللغة (بسيطة)
let lang = "ar";
function toggleLang(){
  lang = lang === "ar" ? "en" : "ar";

  document.getElementById("title").innerText =
    lang === "ar" ? "مختبر الأسنان السحري" : "Dental Magic Lab";
}
