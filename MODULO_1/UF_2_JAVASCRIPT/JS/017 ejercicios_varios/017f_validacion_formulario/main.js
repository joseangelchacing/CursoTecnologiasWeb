const form = document.querySelector("#form-card");
const button = document.querySelector("button");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telefonoRegex = /^\+?[0-9]{7,15}$/;

const resultsDiv = document.createElement("div");
resultsDiv.classList.add("results-div");
document.body.appendChild(resultsDiv);
resultsDiv.style.display = "none";

//Función submit para formulario.
form.onsubmit = function (event) {
  event.preventDefault();

  //Obtenemos valores del form.
  let userName = document.querySelector("#name").value;
  let userPhone = document.querySelector("#phone").value;
  let userEmail = document.querySelector("#email").value;
  let userBD = new Date(document.querySelector("#birth-date").value);
  let isEmailValid;
  let isPhoneValid;

  if (!telefonoRegex.test(userPhone)) {
    isPhoneValid = "no";
  } else isPhoneValid = "";
  if (!emailRegex.test(userEmail)) {
    isEmailValid = "no";
  } else isEmailValid = "";

  let actualDate = new Date();
  let actualYear = actualDate.getFullYear();
  let actualMonth = actualDate.getMonth();
  let actualDay = actualDate.getDate();

  let userBdYear = userBD.getFullYear();
  let userBdMonth = userBD.getMonth();
  let userBdDay = userBD.getDate();

  const options = { month: "short", day: "numeric", year: "numeric" };
  let simplerUserBD = userBD.toLocaleDateString("en-US", options);

  let userAge = actualYear - userBdYear;
  let hasLegalAge;
  if (
    userAge > 18 ||
    (userAge === 18 && userBdMonth === actualMonth && userBdDay >= actualDay)
  ) {
    hasLegalAge = "sí";
  } else hasLegalAge = "no";

  resultsDiv.style.display = "block";
  resultsDiv.innerHTML = `
        <h2>Datos del usuario</h2>
        <ul>
            <li>${userName}</li>
            <li>${userPhone} - Nùmero ${isPhoneValid} es válido</li>
            <li>${userEmail} - Email ${isEmailValid} es válido</li>
            <li>${simplerUserBD} - El usuario ${hasLegalAge} es mayor de edad</li>
           
        </ul>
   `;
  button.disabled = true;
  button.style.backgroundColor = "gray";
  form.reset();
};
