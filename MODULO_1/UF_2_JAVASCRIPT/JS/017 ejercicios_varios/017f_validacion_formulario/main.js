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
  let validPhoneStyle;
  let validEmailStyle;

  if (!telefonoRegex.test(userPhone)) {
    isPhoneValid = " inválido";
    validPhoneStyle = 'style="color:red"';
  } else {
    isPhoneValid = "válido";
    validPhoneStyle = 'style="color:green"';
  }

  if (!emailRegex.test(userEmail)) {
    isEmailValid = "inválido";
    validEmailStyle = 'style="color:red"';
  } else {
    isEmailValid = "válido";
    validEmailStyle = 'style="color:green"';
  }

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
            <li>NOMBRE: ${userName.toUpperCase()}</li>
            <li>TELÉFONO: ${userPhone} - <span ${validPhoneStyle}>(Número ${isPhoneValid})<span></li>
            <li>EMAIL: ${userEmail.toUpperCase()} - <span ${validEmailStyle}>(Email ${isEmailValid})<span></li>
            <li>FECHA NAC: ${simplerUserBD} - (Usuario ${hasLegalAge} es mayor de edad)</li>
           
        </ul>
   `;
  button.disabled = true;
  button.style.backgroundColor = "gray";
  form.reset();
};
