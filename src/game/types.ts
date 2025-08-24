export type TPosition = {
  x: number;
  y: number;
};

export type TSize = {
  w: number;
  h: number;
};

export type TPositionAndSize = TPosition & TSize;

export type TKeys = {
  moveToLeft: {
    pressed: boolean;
  };
  moveToRight: {
    pressed: boolean;
  };
  attack: {
    pressed: boolean;
  };
  jump: {
    pressed: boolean;
  };
};
