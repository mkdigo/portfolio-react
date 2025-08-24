import { TPosition, TPositionAndSize } from './types';
import config from './config';

type TEmblem = {
  ctx: CanvasRenderingContext2D;
  position: TPosition;
  image: HTMLImageElement;
  scale?: number;
  fixedPositionY?: number;
};

export class Emblem {
  ctx: CanvasRenderingContext2D;
  position: TPosition;
  isFixed: boolean;
  fixedPosition: TPosition;
  image: HTMLImageElement;
  width: number;
  height: number;
  hitBox: TPositionAndSize;

  constructor({ ctx, position, image, scale, fixedPositionY }: TEmblem) {
    this.ctx = ctx;

    if (!scale) scale = 1;

    this.position = position;
    this.isFixed = false;
    this.fixedPosition = {
      x: 0,
      y: fixedPositionY ? fixedPositionY : 20,
    };
    this.image = image;
    this.width = 56 * scale;
    this.height = 56 * scale;
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
      y: this.position.y,
      w: this.width,
      h: this.height,
    };
  }

  get(positionX: number): void {
    this.isFixed = true;
    this.fixedPosition.x = positionX;
  }

  draw(): void {
    this.ctx.drawImage(
      this.image,
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
    if (mapMovingRight && !this.isFixed) {
      // Player moving to right
      this.position.x -= config.player.velocity.x;
    } else if (mapMovingLeft && !this.isFixed) {
      // Player moving to left
      this.position.x += config.player.velocity.x;
    }

    if (this.isFixed) {
      if (this.position.y > this.fixedPosition.y) this.position.y -= 8;
      else this.position.y = this.fixedPosition.y;

      if (this.position.x > this.fixedPosition.x) this.position.x -= 8;
      else if (this.position.x < this.fixedPosition.x - 8) this.position.x += 8;
      else this.position.x = this.fixedPosition.x;
    }

    this.setHitBox();
    this.draw();
  }
}
