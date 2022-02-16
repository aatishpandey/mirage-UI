let ham = document.querySelector("#ham-icon");
let ham_link = document.querySelector("#ham-link");

ham.addEventListener('click',()=>{
    // console.log("hii")
    ham_link.style.display === "block" ? ham_link.style.display = "none" : ham_link.style.display = "block"
})