const forma = document.querySelector("#form-card");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telefonoRegex = /^[0-9]{9}$/;

forma.onsubmit = function (event) {
  event.preventDefault();
  console.log(forma);
  let userEmail = document.querySelector("#email").value;
  let userPhone = document.querySelector("#phone").value;

  if (!telefonoRegex.test(userPhone)) {
    console.log("error en tlf");
  }
  if (!emailRegex.test(userEmail)) {
    console.log("error en mail");
  }
};
