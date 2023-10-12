let btn = document.getElementById("btn");

btn.style.cssText =
  "position:absolute; top : 50%; left:50%;transform:translate(-50%,-50%);min-width:200px;min-height:40px;font-size:25px;padding:15px;border:1px solid #ddd; border-radius:6px; cursor:pointer;";

btn.addEventListener("click", randomBG);

function randomBG() {

    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 10 ** 7)
    .toString(16)
    .slice()}`;
    
}
