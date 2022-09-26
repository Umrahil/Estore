$(document).ready(function () {
  if (document.querySelector(".Ctgry-boxs")) {
    $(".Ctgry-boxs").owlCarousel({
      loop: true,
      items: 3,
      autoplay: true,
      autoplayTimeout: 2000,
    });
  }
});

// PRODUCTS START

const buttonsay = document.getElementById("buttonsay");
let products = [
  {
    id: 1,
    name: "Green Shorts with details",
    image:
      "https://preview.colorlib.com/theme/estore/assets/img/categori/xproduct1.png.pagespeed.ic.1xDh2tYQRf.webp",
    price: 19.9,
    category: 3,
    total: 19.9,
    count: 0,
  },
  {
    id: 2,
    name: "Green DSweatshirt",
    image:
      "https://preview.colorlib.com/theme/estore/assets/img/categori/xproduct2.png.pagespeed.ic.eUEI6NamxP.webp",
    price: 79.9,
    category: 2,
    total: 79.9,
    count: 0,
  },
  {
    id: 3,
    name: "Yellow Jacket with details",
    image:
      "https://preview.colorlib.com/theme/estore/assets/img/categori/xproduct3.png.pagespeed.ic.7lSBCQxjjP.webp",
    price: 19.9,
    total: 19.9,
    category: 2,
    count: 0,
  },
  {
    id: 4,
    name: "Grey T-shirt ",
    image:
      "https://preview.colorlib.com/theme/estore/assets/img/categori/xproduct4.png.pagespeed.ic.E_ANc_dSPj.webp",
    price: 105.9,
    total: 105.9,
    category: 1,
    count: 0,
  },
  {
    id: 5,
    name: "Black Jogger with details",
    image:
      "https://preview.colorlib.com/theme/estore/assets/img/categori/xproduct5.png.pagespeed.ic.izexkyESWy.webp",
    price: 39.9,
    total: 39.9,
    category: 1,
    count: 0,
  },
  {
    id: 6,
    name: "Blue Suit with details",
    image:
      "https://preview.colorlib.com/theme/estore/assets/img/categori/xproduct6.png.pagespeed.ic.kDamUyhwF-.webp",
    price: 49.9,
    total: 49.9,
    category: 3,
    count: 0,
  },
];
let categories = [
  {
    id: 1,
    name: "New",
  },
  {
    id: 2,
    name: "Featured",
  },
  {
    id: 3,
    name: "Offer",
  },
];
if (document.querySelector("#show_all")) {
  document.querySelector("#show_all").addEventListener("click", (e) => {
    document.querySelector(".active2")?.classList.remove("active2");
    e.target.classList.add("active2");
    let divs = document.querySelectorAll("#hero3>div");
    [...divs].map((div) => {
      div.classList.remove("hide1");
    });
  });
}

const hero3 = document.getElementById("hero3");

const category_ul = document.getElementById("categories");
categories.map((t) => {
  let li = document.createElement("li");
  li.addEventListener("click", () => {
    document.querySelector(".active2")?.classList.remove("active2");
    li.classList.add("active2");
    let divs = document.querySelectorAll("#hero3>div");
    [...divs].map((div) => {
      div.classList.remove("hide1");
      if (div.getAttribute("category") != t.id) {
        div.classList.add("hide1");
      }
    });
  });
  li.textContent = t.name;
  category_ul?.append(li);
});
const container1 = document?.getElementById("container1");

//  BASKET CARD START
const handlePlus = (product) => {
  product.count += 1;
};
const handleMinus = (product) => {
  product.count > 0 ? (product.count -= 1) : 1;
};
const cardBasket = (product) => {
  let cardStorage = JSON.parse(localStorage.getItem("basket"));

  console.log(cardStorage);
  if (cardStorage) {
    if (cardStorage.find((a) => a.id == product.id)) {
      let card = document.createElement("div");
      let card1 = document.createElement("div");
      let card2 = document.createElement("div");

      card.append(card1, card2);
      container1?.append(card);
      let image = document.createElement("img");
      document.createElement("img");
      image.setAttribute("src", product.image);
      let cardName = document.createElement("h1");
      cardName.textContent = product.name;
      card1.append(image, cardName);
      let cardPrice = document.createElement("p");
      cardPrice.textContent = `$${product.price}`;
      let cardPlus = document.createElement("button");
      cardPlus.textContent = "+";
      cardPlus.classList.add("elave");
      // cardPlus.addEventListener("click",()=>{
      //            handlePlus(product);
      //            cardInput.setAttribute("value",product.count)
      // })
      let cardInput = document.createElement("input");
      cardInput.setAttribute("type", "number");
      cardInput.setAttribute("value", product.count);
      cardInput.classList.add("count");
      cardInput.textContent = product.count;
      let cardMinus = document.createElement("button");
      cardMinus.textContent = "-";
      cardMinus.classList.add("elave");
      // cardMinus.addEventListener("click",()=>{
      //   handleMinus(product)
      //   cardInput.setAttribute("value",product.count)
      // })+
      let cardTotal = document.createElement("p");
      cardTotal.textContent = `$${product.total}`;
      card2.append(cardPrice, cardMinus, cardInput, cardPlus, cardTotal);
    }
  }
};

products.map((product) => {
  let div = document.createElement("div");
  div.classList.add("product");
  div.setAttribute("category", product.category);
  let img = document.createElement("img");
  img.setAttribute("src", product.image);
  let name = document.createElement("h3");
  name.textContent = product.name;
  let price = document.createElement("h1");
  price.textContent = `$${product.price}`;
  let add = document.createElement("button");
  add.classList.add("add");
  add.textContent = "Add Cart";
  add.addEventListener("click", () => buyitem(product.id));
  div.append(img, name, price, add);
  hero3?.append(div);
  cardBasket(product);
});

// BASKET DIV
let total = 0;
const baskett = document.getElementById("basket2");
let basket = [];
const buyitem = (id) => {
  let alreadyExist = basket.find((t) => t.id == id);
  if (!alreadyExist) {
    basket.push({
      id: id,
      count: 1,
    });
  } else {
    alreadyExist.count++;
  }
  refreshBasket();
  localStorage.setItem("basket", JSON.stringify(basket));
};

const basketDiv = document.getElementById("basketDiv");
const refreshBasket = () => {
  basketDiv.innerHTML = "";
  basket.map((a) => {
    let item = products.find((product) => a.id == product.id);
    let itemDiv = document.createElement("li");
    itemDiv.classList.add("itemDiv");
    let img = document.createElement("img");
    img.setAttribute("src", item.image);
    let detailsDiv = document.createElement("div");
    detailsDiv.classList.add("detailsDiv");
    let name = document.createElement("p");
    name.textContent = item.name;
    let price = document.createElement("h3");
    price.textContent = `$ ${item.price}`;
    let say = document.createElement("h4");
    say.classList.add("say");
    say.textContent = a.count;
    let plus = document.createElement("button");
    plus.textContent = "+";
    plus.classList.add("plus");
    plus.addEventListener("click", () => {
      say.textContent = ++a.count;
    });
    let minus = document.createElement("button");
    minus.textContent = "-";
    minus.addEventListener("click", () => {
      say.textContent = --a.count;
    });
    let remove = document.createElement("button");
    remove.textContent = "x";
    remove.classList.add("remove");
    remove.addEventListener("click", () => {
      basket = basket.filter((t) => t.id != a.id);
      refreshBasket();
      total = "";
      buttonsay.textContent = basket.length ? basket.length : "";
    });
    buttonsay.textContent = basket.length;
    detailsDiv.append(name, price, say, plus, minus, remove);
    itemDiv.append(img, detailsDiv);
    basketDiv.append(itemDiv);
  });
};
basketDiv.classList.add("hide");
baskett.addEventListener("click", () => {
  basketDiv.classList.toggle("hide");
});

document.addEventListener("click", (e) => {
  if (
    e.composedPath().includes(basketDiv) ||
    e.composedPath().includes(baskett) ||
    e.target.classList.contains("add") ||
    e.target.classList.contains("remove")
  ) {
    return;
  }
  basketDiv.classList.add("hide");
});

// SIGN IN START
const openBtn = document.querySelector("#open1");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector("#close");
const name_input = document.querySelector("#name_input");
const surname_input = document.querySelector("#surname_input");
const number_input = document.querySelector("#number");
const submit = document.querySelector("#submit");
openBtn.addEventListener("click", () => {
  document.body.classList.add("modal-open");
  modal.classList.add("transform");
});
// submit.addEventListener("click",()=>{
//   Swal.fire(
//   'Good job!',
//   'You clicked the button!',
//   'success'
// )
// })

closeBtn.addEventListener("click", () => {
  document.body.classList.remove("modal-open");
  modal.classList.remove("transform");
});
name_input.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^a-z]/gi, "");
});
surname_input.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^a-z]/gi, "");
});
number_input.addEventListener("input", (e) => {
  if (e.target.value.length > 7) {
    e.target.value = e.target.value.slice(0, -1);
  }
});

// SEARCH START
let suggestions = [
  "Green Shorts with details",
  "Green Sweatshirt",
  "Yellow Jacket with details",
  "Grey T-shirt ",
  "Yellow Jacket",
  "Black Jogger ",
  "Blue Suit with details",
  "Black Jogger with details",
  " Dress with details",
  " Dress with details",
];
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

inputBox.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    icon.onclick = () => {
      webLink = `https://www.google.com/search?q=${userData}`;
      linkTag.setAttribute("href", webLink);
      linkTag.click();
    };
    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = `<li>${data}</li>`);
    });
    searchWrapper.classList.add("active");
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active");
  }
};

function select(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = () => {
    webLink = `https://www.google.com/search?q=${selectData}`;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
  };
  searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}
// IMAGES START

$(document).ready(function () {
  if (document.querySelector(".images")) {
    $(".images").owlCarousel({
      loop: true,
      items: 5,
      autoplay: true,
      autoplayTimeout: 2000,
    });
  }
});
