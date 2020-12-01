const iconEl = document.querySelector(".icon");
//console.log(iconEl);


/*Toggle between adding and removing the "responsive" class
to topnav when click the icon */
function myFunction() {
  iconEl.addEventListener("click", function() {
    const navEl = document.getElementById("myTopnav");
    //console.log(x);
    if (navEl.className === "topnav") {
      navEl.className += " responsive";//一定要空格+responsive
    } else {
      navEl.className = "topnav";
    }

  });

}
myFunction();







// function myFunction() {
//   const x = document.getElementById("myTopnav");
//   console.log(x);
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }