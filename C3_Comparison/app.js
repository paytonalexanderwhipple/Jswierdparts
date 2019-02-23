let b = () => {
  console.log("b", this, m);
};

function a() {
  var m = "m";
  console.log("a", this, m);
  b();
}

console.log("global", this);
var m = "n";
a();
