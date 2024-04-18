const roles = ["Développeur", "Apprenti", "Designer"];
let currentRole = 0;
const roleElement = document.getElementById("role");

function changeRole() {
  roleElement.textContent = roles[currentRole];
  currentRole = (currentRole + 1) % roles.length;
}

setInterval(changeRole, 2000); 


