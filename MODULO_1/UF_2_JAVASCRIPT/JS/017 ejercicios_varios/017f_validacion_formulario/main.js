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
  let isLegalStyle;

  //Si el teléfono es válido
  if (!telefonoRegex.test(userPhone)) {
    isPhoneValid = " inválido";
    validPhoneStyle = 'style="color:red"';
  } else {
    //Si el teléfono es inválido
    isPhoneValid = "válido";
    validPhoneStyle = 'style="color: rgb(6, 189, 6)"';
  }

  //Si el email es válido
  if (!emailRegex.test(userEmail)) {
    isEmailValid = "inválido";
    validEmailStyle = 'style="color:red"';
  } else {
    //Si el email es inválido
    isEmailValid = "válido";
    validEmailStyle = 'style="color: rgb(6, 189, 6)"';
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
    hasLegalAge = "Mayor de edad";
    isLegalStyle = 'style="color: rgb(6, 189, 6)"';
  } else {
    hasLegalAge = "Menor de edad";
    isLegalStyle = 'style="color:red"';
  }

  resultsDiv.style.display = "block";
  resultsDiv.innerHTML = `
        <h1 style="text-align:center">DATOS DEL USUARIO</h1>
        <ul>
            <li>NOMBRE: ${userName.toUpperCase()}</li>
            <li>TELÉFONO: ${userPhone} - <span ${validPhoneStyle}>(Número ${isPhoneValid})<span></li>
            <li>EMAIL: ${userEmail.toUpperCase()} - <span ${validEmailStyle}>(Email ${isEmailValid})<span></li>
            <li>FECHA NAC: ${simplerUserBD} - <span ${isLegalStyle}>(${hasLegalAge})</span></li>
           
        </ul>
   `;
  button.disabled = true;
  button.style.backgroundColor = "gray";
  form.reset();
};
