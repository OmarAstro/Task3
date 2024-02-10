function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (password === "22" && username === "Astro") {
    window.location.href = "movies/index.html";
  } else {
    alert("كلمة المرور غير صحيحة");
  }
}
