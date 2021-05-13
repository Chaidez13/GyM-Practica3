let img, w, h, filterA, filterModes;
let actions = [];
let sliders = [],
  range;

function preload() {
  img = loadImage("assets/images/image.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  h = height * 0.75;
  w = width * 0.75;
  filterA = { action: BLUR };
  range = 2;

  ButtonFactory.sliders().forEach((e, index) => {
    sliders[index] = createSlider(
      e.i,
      e.f,
      e.i,
      e.f < 5 ? (e.f - e.i) / 10 : 1
    );
    sliders[index].position(w + 30, 470);
  });

  ButtonFactory.types().forEach((element, index) => {
    actions.push(
      new Button(
        ButtonFactory.coords(w + 20, index * 55 + 30),
        element,
        filterA
      )
    );
  });
}

function draw() {
  clear();
  for (s of sliders) {
    s.hide();
  }

  if (filterA.range !== undefined) {
    sliders[filterA.range].show();
    range = sliders[filterA.range].value();
  } else {
    range = null;
  }

  for (a of actions) a.draw();
  image(img, 0, 0, w, h);
  if (range) filter(filterA.action, range);
  else filter(filterA.action);
}

function mousePressed() {
  for (a of actions) {
    const b = a.clicked();
    if (b !== undefined) filterA = b;
  }
}

function windowResized() {}
