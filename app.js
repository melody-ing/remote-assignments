/***** Assignment 1: Function and Array *****/

function max(array) {
  array.sort((a, b) => b - a);
  return array[0];
}
console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));

/***** Assignment 2: Function and Object *****/

function calculate2({ n1, n2, op }) {
  if (op === "+") {
    return n1 + n2;
  } else if (op === "-") {
    return n1 - n2;
  } else {
    return "Not supported";
  }
}
console.log(calculate2({ n1: 2, n2: 3, op: "+" }));
console.log(calculate2({ n1: 5, n2: 2, op: "-" }));
console.log(calculate2({ n1: 1, n2: 6, op: "x" }));

/***** Assignment 3: Function, Array, and Object *****/

function calculate3({ discount, products }) {
  const prices = products.map((product) => product.price * discount);
  const total = prices.reduce((total, acc) => (total += acc));
  return total;
}

const discountedPrice = calculate3({
  discount: 0.9,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});
console.log(discountedPrice);

/***** Assignment 4: HTML DOM and Event Handling *****/
// Request 1: Click to Change Text.
const header = document.querySelector("#header");

header.addEventListener("click", (e) => {
  const text = e.currentTarget.children[0];
  text.textContent = "Have a Good Time!";
});

// Request 2: Click to Show/Close Menu.
const navIconMenu = document.querySelector("#nav-icon-menu");
const navIconClose = document.querySelector("#nav-icon-close");
const list = document.querySelector("#list");
navIconMenu.addEventListener("click", (e) => {
  if (!navIconMenu.classList.contains("none")) {
    navIconMenu.classList.add("none");
    navIconClose.classList.remove("none");
    list.classList.remove("none");
  }
});
navIconClose.addEventListener("click", (e) => {
  if (!navIconClose.classList.contains("none")) {
    navIconClose.classList.add("none");
    navIconMenu.classList.remove("none");
    list.classList.add("none");
  }
});

// Request 3: Click to Show More Content Boxes.
const boxBtn = document.querySelector("#box-btn");
const extraBox = document.querySelector("#extra-box");

boxBtn.addEventListener("click", () => extraBox.classList.remove("hide"));

/***** Assignment 5: Algorithm *****/
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const total = nums[i] + nums[j];
      if (total == target) {
        console.log(i, j);
      }
    }
  }
}

twoSum([2, 7, 11, 15], 9);
