let projects = JSON.parse(localStorage.getItem("projects")) || [];

function save() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  projects.forEach((p, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${p.name} - ${p.status}
      <button onclick="removeProject(${index})">X</button>
    `;
    list.appendChild(li);
  });
}

function addProject() {
  const name = document.getElementById("name").value;
  const status = document.getElementById("status").value;

  if (!name) return;

  projects.push({ name, status });
  save();
  render();
}
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
function removeProject(index) {
  projects.splice(index, 1);
  save();
  render();
}

render();
