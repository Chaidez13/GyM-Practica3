class Button {
  constructor(coords, type, filter) {
    //Coordenadas
    this.x = coords.x;
    this.y = coords.y;

    this.type = type;
    this.filter = filter;

    this.width = 150;
    this.height = 40;
  }

  draw() {
    push();
    fill("#abffb0");
    rect(this.x, this.y, (this.width = 150), this.height, 10);
    pop();
    push();
    textSize(18);
    textAlign(CENTER);
    text(this.type.text, this.x + 75, this.y + 25);
    pop();
  }

  clicked() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    ) {
      return this.type;
    }
  }
}

const ButtonFactory = {
  coords: (x, y) => {
    return { x, y };
  },
  types: () => {
    return [
      { text: "Thresold", action: THRESHOLD, range: 0 },
      { text: "Gray", action: GRAY },
      { text: "Opaque", action: OPAQUE },
      { text: "Invert", action: INVERT },
      { text: "Posterize", action: POSTERIZE, range: 1 },
      { text: "Blur", action: BLUR, range: 2 },
      { text: "Erode", action: ERODE },
      { text: "Dilate", action: DILATE },
    ];
  },
  sliders: () => {
    return [
      { i: 0, f: 1 },
      { i: 2, f: 255 },
      { i: 0, f: 3 },
    ];
  },
};
