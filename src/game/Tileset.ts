import config from './config';
import { TPosition, TPositionAndSize } from './types';
import { createImage } from './helpers';

import tilesetImg from './assets/tileset.png';

export class Tileset {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  position: TPosition;
  image: HTMLImageElement;
  block: {
    amount: number;
    x: number;
    y: number;
  };
  width: number;
  height: number;
  hitBox: TPositionAndSize;

  constructor({
    canvas,
    ctx,
    position,
    element,
  }: {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    position: TPosition;
    element: string;
  }) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.position = position;
    this.image = createImage(tilesetImg);

    let amount = 0;
    let x = 0;
    let y = 0;

    if (element === 'ground') {
      amount = 3;
      x = 5;
      y = 7;
    }

    this.block = {
      amount,
      x,
      y,
    };

    this.width = 50 * this.block.amount;
    this.height = 50;
    this.position.y -= this.height;
    this.hitBox = {
      x: this.position.x,
      y: this.position.y,
      w: this.width,
      h: this.height,
    };
  }

  setHitBox() {
    this.hitBox = {
      x: this.position.x,
      y: this.position.y - this.height,
      w: this.width,
      h: this.height,
    };
  }

  draw(): void {
    this.ctx.drawImage(
      this.image,
      24 * this.block.x,
      24 * this.block.y,
      24 * this.block.amount,
      24,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update({
    mapMovingLeft,
    mapMovingRight,
  }: {
    mapMovingLeft: boolean;
    mapMovingRight: boolean;
  }): void {
    if (mapMovingRight) {
      // Player moving to right
      this.position.x -= config.player.velocity.x;
    } else if (mapMovingLeft) {
      // Player moving to left
      this.position.x += config.player.velocity.x;
    }

    this.draw();
  }
}
