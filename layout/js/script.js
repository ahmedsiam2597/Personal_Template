



// start toggle navbar
const navbar = document.getElementById("navbar");
const btnToggle = document.getElementById("btn-toggle");
btnToggle.onclick = menuToggle;

document.querySelectorAll("#navbar #menu a").forEach((a) => {
  a.addEventListener("click", menuToggle);
});

function menuToggle() {
  "use strict";

  navbar.classList.toggle("active");
}

// start modal gallery

let allImage = document.querySelectorAll("#gallery .content");

allImage.forEach((img) => {
  img.onclick = function () {
    craeteModalBox(
      img.parentElement.firstElementChild.src,
      img.parentElement.firstElementChild.alt
    );
    document.querySelectorAll(".modal .close").forEach((close) => {
      close.addEventListener("click", () => {
        close.parentElement.parentElement.parentElement.remove();
      });
    });
  };
});
function craeteModalBox(src, alt) {
  "use strict";

  let gallery = document.getElementById("gallery");
  let modal = document.createElement("div");
  modal.className = "modal";
  let modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  let modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  let info = document.createElement("span");
  info.className = "info";
  info.textContent = alt;
  let close = document.createElement("span");
  close.classList = "fa fa-times close";
  let image = document.createElement("img");
  image.src = src;
  modalHeader.appendChild(info);

  modalHeader.appendChild(close);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(image);
  modal.appendChild(modalContent);
  gallery.appendChild(modal);
}

// scroll top btn

window.onscroll =  ()=> {
  "use strict";


  let btnScrollTop = document.querySelector("#scrollTop");
  if (window.scrollY > 300) {
    btnScrollTop.classList.add("active");
  } else {
    btnScrollTop.classList.remove("active");
  }

  btnScrollTop.onclick =  ()=> {
    window.scrollTo(0, 0);
  };
};




  let links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let id = e.target.attributes.href.value;
      let section = document.querySelector(id);
      section.scrollIntoView({
        behavior : "smooth",
      })
    });
  });

document.getElementById("submit").onclick = function (e) {
  e.preventDefault();
};


