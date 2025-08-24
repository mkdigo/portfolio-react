import { TPosition } from './types';

type TBG = {
  position: TPosition;
};

export class Background {
  velocity: TPosition;
  width: number;
  height: number;
  bg1: TBG;
  bg2: TBG;
  bg3: TBG;
  image: HTMLImageElement;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor({
    velocity,
    image,
    canvas,
    ctx,
  }: {
    velocity: TPosition;
    image: HTMLImageElement;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
  }) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.velocity = velocity;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.bg1 = {
      position: {
        x: -this.width,
        y: 0,
      },
    };
    this.bg2 = {
      position: {
        x: 0,
        y: 0,
      },
    };
    this.bg3 = {
      position: {
        x: this.width,
        y: 0,
      },
    };
    this.image = image;
  }

  draw(): void {
    this.ctx.drawImage(
      this.image,
      this.bg1.position.x,
      this.bg1.position.y,
      this.width,
      this.height
    );
    this.ctx.drawImage(
      this.image,
      this.bg2.position.x,
      this.bg2.position.y,
      this.width,
      this.height
    );
    this.ctx.drawImage(
      this.image,
      this.bg3.position.x,
      this.bg3.position.y,
      this.width,
      this.height
    );
  }

  update({
    mapMovingRight,
    mapMovingLeft,
  }: {
    mapMovingRight: boolean;
    mapMovingLeft: boolean;
  }): void {
    // 3 for remove the gap
    const gap = 3;
    if (this.bg1.position.x < -this.width * 2)
      this.bg1.position.x = this.width - gap;
    if (this.bg2.position.x < -this.width * 2)
      this.bg2.position.x = this.width - gap;
    if (this.bg3.position.x < -this.width * 2)
      this.bg3.position.x = this.width - gap;

    if (this.bg1.position.x > this.width * 2)
      this.bg1.position.x = -this.width + gap;
    if (this.bg2.position.x > this.width * 2)
      this.bg2.position.x = -this.width + gap;
    if (this.bg3.position.x > this.width * 2)
      this.bg3.position.x = -this.width + gap;

    if (mapMovingRight) {
      // Player moving to right
      this.bg1.position.x -= this.velocity.x;
      this.bg2.position.x -= this.velocity.x;
      this.bg3.position.x -= this.velocity.x;
    } else if (mapMovingLeft) {
      // Player moving to left
      this.bg1.position.x += this.velocity.x;
      this.bg2.position.x += this.velocity.x;
      this.bg3.position.x += this.velocity.x;
    }

    this.draw();
  }
}
