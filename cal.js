const btnn = document.getElementById("btn");
const birth = document.getElementById("date");
const result = document.getElementById("result");

function calculateage() {
  const birthvalue = birth.value;

  if (birthvalue === "") {
    alert("Please enter the birthday date");
  } else {
    const age = getage(birthvalue);
    result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getage(birthvalue) {
  const current = new Date();
  const birthdate = new Date(birthvalue);
  let age = current.getFullYear() - birthdate.getFullYear();
  const month = current.getMonth() - birthdate.getMonth();

  if (month < 0 || (month === 0 && current.getDate() < birthdate.getDate())) {
    age--;
  }

  return age;
}

btnn.addEventListener("click", calculateage);
