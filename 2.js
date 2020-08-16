function saveme() {
  let usr1 = document.querySelector("#usr").value;
  let newELement = document.createElement("div");
  //console.log(usr1);
  let usern = document.createElement("div");
  usern.innerHTML = usr1;
  let psw1 = document.querySelector("#psw").value;
  //console.log(psw1);
  let passw = document.createElement("div");
  paasw.innerHTML = psw1;
  let credentials = document.querySelector(".value1").cloneNode(true);
  newELement.appendChild(usern);
  newELement.appendChild(passw);
  //console.log(credentials);
  credentials.insertBefore(newELement, credentials.firstChild);
  usr1.value = "";
  psw1.value = "";
}
