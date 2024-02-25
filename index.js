document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item, index) => {
        const container = document.querySelector(".grid");
        const card = document.createElement("div");
        card.classList.add("card");
        index == 0 ? card.classList.add("first") : "";
        const img = document.createElement("img");
        img.classList.add("img");
        img.src = item.image;
        img.alt = "doctor-img";
        card.appendChild(img);
        const h2 = document.createElement("h2");
        h2.innerHTML = item.name;

        const p = document.createElement("p");
        p.innerHTML = item.post;
        const details = document.createElement("div");
        details.classList.add("details")
        details.appendChild(h2);
        details.appendChild(p);
        card.appendChild(details);
        container.appendChild(card);
      });
    });
});
