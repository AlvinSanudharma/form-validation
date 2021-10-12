const id = (id) => document.getElementById(id);
const classes = (className) => document.getElementsByClassName(className);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  error = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username");
  engine(email, 1, "Email");
  engine(password, 2, "Password");
});

const engine = (id, index, message) => {
  if (id.value.trim() === "") {
    error[index].innerHTML = `${message} Cannot be blank`;
    failureIcon[index].style.opacity = "1";
    successIcon[index].style.opacity = "0";
  } else {
    error[index].innerHTML = "";
    failureIcon[index].style.opacity = "0";
    successIcon[index].style.opacity = "1";
  }
};
