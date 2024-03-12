window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})




document.getElementById("view-more").addEventListener("click", function() {
document.getElementById("row1").style.display = "none";
document.getElementById("row2").style.display = "flex";
document.getElementById("row3").style.display = "flex";
document.getElementById("row4").style.display = "flex";
document.getElementById("row5").style.display = "flex";
document.getElementById("view-more").style.display = "none";
document.getElementById("view-less").style.display = "block";
});

document.getElementById("view-less").addEventListener("click", function() {
document.getElementById("row1").style.display = "flex";
document.getElementById("row2").style.display = "none";
document.getElementById("row3").style.display = "none";
document.getElementById("row4").style.display = "none";
document.getElementById("row5").style.display = "none";
document.getElementById("view-more").style.display = "block";
document.getElementById("view-less").style.display = "none";
}); 