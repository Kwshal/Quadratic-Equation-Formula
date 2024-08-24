function findRoots() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var c = Number(document.getElementById("c").value);

  var d = Math.sqrt(b ** 2 - 4 * a * c);
  var root1 = (-b + d) / (2 * a);
  var root2 = (-b - d) / (2 * a);


  if (d < 0) {
    document.getElementById("root1").innerHTML = "No real roots.";
    document.getElementById("root2").innerHTML = "No real roots.";
    return;
  } else if (a != "" && b != "" && c != "") {
    document.getElementById("root1").innerHTML = root1;
    document.getElementById("root2").innerHTML = root2;
    
  }
}
