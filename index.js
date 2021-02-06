const openNav = document.querySelector(".hamburger");
const closeNav = document.querySelector(".close");
const menu = document.querySelector(".menu");

const leftPosition = menu.getBoundingClientRect().left;
openNav.addEventListener("click", () => {
  if (leftPosition < 0) {
    menu.classList.add("show");
  }
});

closeNav.addEventListener("click", () => {
  if (leftPosition < 0) {
    menu.classList.remove("show");
  }
});

//  When the user clicks the edit button, show the modal
document
  .getElementsByClassName("button2")
  .addEventListener("click", function () {
    showModal();
  });

function showModal() {
  document.getElementById("AddMember").style.display = "block";
}
