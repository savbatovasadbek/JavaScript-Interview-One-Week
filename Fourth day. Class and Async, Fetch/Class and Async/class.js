// =============== Object ===============>>>>>>>>>

const animals = {
  name: "Animal",
  afe: 5,
  hasTail: true,
};

// =============== Create Class ===============>>>>>>>>>

class Animal {
  static type = "ANIMAL"; // -< Static is for only Animal class

  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }

  voice() {
    console.log("I am animal ...");
  }
}

const animal = new Animal({
  name: "Animal",
  afe: 5,
  hasTail: true,
});

// ============= Inheritance(ectends) =========>>>>>>>>

class Cat extends Animal {
  static type = "CAT";

  constructor(options) {
    super(options);
    this.color = options.color;
  }

  // ============= Polimorfizm(voice) =========>>>>>>>>

  voice() {
    // super.voice();
    console.log("I am cat ...");
  }

  // =============== getter and setter ===============>>>>>>>>>

  get ageInfo() {
    return this.age * 7;
  }

  set ageInfo(newAge) {
    this.age = newAge;
  }
}

const cat = new Cat({
  name: "Cat",
  age: 7,
  hasTail: true,
  color: "black",
});

// ============= Abstruction(#price) -< private =========>>>>>>>>

class Phone {
  #price = "";
  constructor(_name, _price) {
    this.name = _name;
    this.#price = _price;
  }
}

const redmi = new Phone("Redmi", "500$");

// ==============================>>>>>>>>>

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }
  hide() {
    this.$el.style.display = "none";
  }

  show() {
    this.$el.style.display = "block";
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);

    this.$el.style.width = this.$el.style.height = options.size + "px";
    this.$el.style.backgroundColor = options.color;
  }
}

const box1 = new Box({
  selector: "#box1",
  size: 100,
  color: "red",
});

const box2 = new Box({
  selector: "#box2",
  size: 120,
  color: "green",
});

const box3 = new Box({
  selector: "#box3",
  size: 140,
  color: "blue",
});

class Circle extends Box {
  constructor(options) {
    super(options);

    this.$el.style.borderRadius = "50%";
  }
}

const circle1 = new Circle({
  selector: "#circle1",
  size: 100,
  color: "darkBlue",
});

const circle2 = new Circle({
  selector: "#circle2",
  size: 120,
  color: "green",
});

const circle3 = new Circle({
  selector: "#circle3",
  size: 140,
  color: "rgb(150,0,200)",
});

// =============== Amaliy tajriba ===============>>>>>>>>>

class ListBinding {
  constructor(element) {
    this.listElement = element;
    this.textList = ["Home", "Blog", "About"];
  }

  // Makes an <li>text</li> tag
  static createListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }

  update() {
    //   Remove all existing <li> elements/tags ...
    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }

    //   Fill <li> to <ul>/<ol>
    for (let text of this.textList) {
      this.listElement.appendChild(ListBinding.createListItem(text));
    }
    return `Uptade is done successfel ...`;
  }

  // add <li> element
  add(text) {
    this.textList.push(text);
    this.update();
    return `<li> element is added successful ...`;
  }

  // Remove <li> element by index
  remove(idx) {
    this.textList.splice(idx, 1);
    this.update();
    return `<li> element is removed successful ...`;
  }
}
