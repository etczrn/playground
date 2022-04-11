const model = {
  currentCat: null,
  cats: [
    {
      clickCount: 0,
      name: "Tabby",
      imgSrc: "img/434164568_fea0ad4013_z.jpg",
      imgAttribution:
        "https://live.staticflickr.com/2899/33137139534_afe6e64069_h.jpg",
    },
    {
      clickCount: 0,
      name: "Tiger",
      imgSrc: "img/4154543904_6e2428c421_z.jpg",
      imgAttribution:
        "https://live.staticflickr.com/4077/4850850826_1e17a881ab_h.jpg",
    },
    {
      clickCount: 0,
      name: "Scaredy",
      imgSrc: "img/22252709_010df3379e_z.jpg",
      imgAttribution:
        "https://live.staticflickr.com/7563/15653602205_e739e682f6_z.jpg",
    },
    {
      clickCount: 0,
      name: "Shadow",
      imgSrc: "img/1413379559_412a540d29_z.jpg",
      imgAttribution: "https://live.staticflickr.com/1/609739_dbb8897e78_b.jpg",
    },
    {
      clickCount: 0,
      name: "Sleepy",
      imgSrc: "img/9648464288_2516b35537_z.jpg",
      imgAttribution:
        "https://live.staticflickr.com/4438/36678114972_92480b10c8_h.jpg",
    },
  ],
};

const octopus = {
  init: function () {
    // set our current cat to the first one in the list
    model.currentCat = model.cats[0];

    // tell our views to initialize
    catListView.init();
    catView.init();
  },

  getCurrentCat: function () {
    return model.currentCat;
  },

  getCats: function () {
    return model.cats;
  },

  // set the currently-selected cat to the object passed in
  setCurrentCat: function (cat) {
    model.currentCat = cat;
  },

  // increments the counter for the currently-selected cat
  incrementCounter: function () {
    model.currentCat.clickCount++;
    catView.render();
  },
};

const catView = {
  init: function () {
    // store pointers to our DOM elements for easy access later
    this.catElem = document.getElementById("cat");
    this.catNameElem = document.getElementById("cat-name");
    this.catImageElem = document.getElementById("cat-img");
    this.countElem = document.getElementById("cat-count");

    // on click, increment the current cat's counter
    this.catImageElem.addEventListener("click", () =>
      octopus.incrementCounter()
    );

    // render this view (update the DOM elements with the right values)
    this.render();
  },

  render: function () {
    // update the DOM elements with values from the current cat
    const currentCat = octopus.getCurrentCat();
    this.countElem.textContent = currentCat.clickCount;
    this.catNameElem.textContent = currentCat.name;
    this.catImageElem.src = currentCat.imgSrc;
  },
};

const catListView = {
  init: function () {
    // store the DOM element for easy access later
    this.catListElem = document.getElementById("cat-list");

    // render this view (update the DOM elements with the right values)
    this.render();
  },

  render: function () {
    let cat, elem, i;
    // get the cats we'll be rendering from the octopus
    const cats = octopus.getCats();

    // empty the cat list
    this.catListElem.innerHTML = "";

    // loop over the cats
    for (i = 0; i < cats.length; i++) {
      // this is the cat we're currently looping over
      cat = cats[i];

      // make a new cat list item and set its text
      elem = document.createElement("li");
      elem.textContent = cat.name;

      // on click, setCurrentCat and render the catView
      // (this uses our closure-in-a-loop trick to connect the value
      //  of the cat constiable to the click event function)
      elem.addEventListener(
        "click",
        (function (catCopy) {
          return function () {
            octopus.setCurrentCat(catCopy);
            catView.render();
          };
        })(cat)
      );

      // finally, add the element to the list
      this.catListElem.appendChild(elem);
    }
  },
};

// make it go!
octopus.init();
