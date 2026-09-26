let main = document.querySelector("#main");
let inputs = document.querySelectorAll(".inputs input");
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let card = document.createElement("div");
    card.classList.add("card");
    let profile = document.createElement("div");
    profile.classList.add("profile");
    let img = document.createElement("img");
    img.classList.add("productImage");
    img.setAttribute("src", inputs[1].value);
    profile.appendChild(img);

    let name = document.createElement("h2");
    name.classList.add("productName");
    name.textContent = inputs[0].value;
    let price = document.createElement("p");
    price.classList.add("productPrice");
    price.textContent = inputs[2].value;
    let description = document.createElement("p");
    description.classList.add("productDescription");
    description.textContent = inputs[3].value;
    let btn1 = document.createElement("button");
    btn1.classList.add("buyNowButton");
    btn1.setAttribute("type", "button");
    btn1.textContent = "Buy Now ➔";
    btn1.addEventListener("click", () => {
        btn1.textContent = "Purchased ✓";
        btn1.disabled = true;
    });
    let btn2 = document.createElement("button");
    btn2.classList.add("addToCartButton");
    btn2.setAttribute("type", "button");
    btn2.textContent = "Add to Cart  🛒";
    btn2.addEventListener("click", () => {
        btn2.classList.add("btn2-afterEff");
        btn2.textContent = "Added to Cart";
        btn2.disabled = true;
    });
    card.appendChild(profile);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(description);
    card.appendChild(btn1);
    card.appendChild(btn2);
main.appendChild(card);
form.style.display = "none";
form.reset();

});



