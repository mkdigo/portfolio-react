import { TPositionAndSize } from './types';

export function createImage(src: string): HTMLImageElement {
  const image = new Image();
  image.src = String(src);
  return image;
}

type TCollisionProps = {
  a: TPositionAndSize;
  b: TPositionAndSize;
};

export function isCollided({ a, b }: TCollisionProps): boolean {
  return (
    a.x + a.w >= b.x && a.x <= b.x + b.w && a.y + a.h >= b.y && a.y <= b.y + b.h
  );
}
