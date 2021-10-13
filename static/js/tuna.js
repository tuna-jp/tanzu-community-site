
// document.getElementById("tuna").style.display ="none";

var tunacanImg = "/logos/tunacan.png"

cheet('t u n a c a n', function () {
    console.log("Calling");
    var logo = document.querySelector('#tuna img');
    logo.src = tunacanImg
    logo.outerHTML = `<a href="/tkg/">${logo.outerHTML}</a>`;
    // document.querySelector('#tuna img').src = tunacanImg
    // const tuna = document.getElementById("tuna");
    // if(tuna.style.display=="block"){
    //     tuna.style.display = "none";
    // }else{
    //     tuna.style.display = "block";
    // }
    console.log("Called");
});