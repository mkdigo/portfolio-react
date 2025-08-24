import { Background } from './Background';
import { createImage, isCollided } from './helpers';

import { Tileset } from './Tileset';
import { Decoration, TImageIndex } from './Decoration';
import { Emblem } from './Emblem';
import { Char, TCharButtons } from './Char';
import { Enemy } from './Enemy';
import config from './config';

import bg1Img from './assets/background/1.png';
import bg2Img from './assets/background/2.png';
import bg3Img from './assets/background/3.png';

import htmlImg from './assets/emblems/html.png';
import cssImg from './assets/emblems/css.png';
import jsImg from './assets/emblems/js.png';
import tsImg from './assets/emblems/ts.png';
import reactImg from './assets/emblems/react.png';
import phpImg from './assets/emblems/php.png';
import mysqlImg from './assets/emblems/mysql.png';
import laravelImg from './assets/emblems/laravel.png';
import githubImg from './assets/emblems/github.png';

type TButtons = {
  player: TCharButtons;
};

type TContructor = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  buttons: TButtons;
};

export class CreateScene {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private mapSize: number = 0;
  private mapPosition: number = 0;
  private mapMovingRight: boolean = false;
  private mapMovingLeft: boolean = false;

  private backgrounds: Background[] = [];
  private decorations: Decoration[] = [];
  private tilesets: Tileset[] = [];
  private emblems: Emblem[] = [];
  private emblemPosition: number = 10;
  private player: Char;
  private enemies: Enemy[] = [];

  constructor({ canvas, ctx, buttons }: TContructor) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.player = new Char({
      canvas: this.canvas,
      ctx: this.ctx,
      position: {
        x: 50,
        y: 50,
      },
      buttons: buttons.player,
    });

    this.createBackground();
    this.createMap();
    this.createEnemies();
  }

  public renderPlayer({ animationId }: { animationId: number }) {
    if (this.mapPosition >= 4428) this.player.win = true;
    this.player.update({ animationId });
  }

  private createEnemies() {
    this.enemies = [
      new Enemy({
        ctx: this.ctx,
        position: {
          x: 1800,
          y: 50,
        },
        width: 210,
        height: 210,
        image: 'goblin',
        emblem: new Emblem({
          ctx: this.ctx,
          position: {
            x: 330,
            y: this.canvas.height - 150,
          },
          image: createImage(jsImg),
          scale: 1,
          fixedPositionY: 0,
        }),
      }),
      new Enemy({
        ctx: this.ctx,
        position: {
          x: 2550,
          y: 50,
        },
        width: 95,
        height: 95,
        image: 'flyingEye',
        emblem: new Emblem({
          ctx: this.ctx,
          position: {
            x: 550,
            y: this.canvas.height - 150,
          },
          image: createImage(tsImg),
          scale: 1,
          fixedPositionY: 0,
        }),
      }),
      new Enemy({
        ctx: this.ctx,
        position: {
          x: 3000,
          y: 50,
        },
        width: 300,
        height: 300,
        image: 'mushroom',
        emblem: new Emblem({
          ctx: this.ctx,
          position: {
            x: 650,
            y: this.canvas.height - 150,
          },
          image: createImage(mysqlImg),
          scale: 1,
          fixedPositionY: 0,
        }),
      }),
      new Enemy({
        ctx: this.ctx,
        position: {
          x: 4300,
          y: 50,
        },
        width: 300,
        height: 300,
        image: 'skeleton',
        emblem: new Emblem({
          ctx: this.ctx,
          position: {
            x: 750,
            y: this.canvas.height - 150,
          },
          image: createImage(laravelImg),
          scale: 1,
          fixedPositionY: 0,
        }),
      }),
    ];
  }

  public renderEnemies(animationId: number) {
    this.enemies.forEach((enemy) => {
      let damageDash = -5;

      if (!enemy.isDeath) {
        if (
          this.player.position.x + this.player.width / 2 >
          enemy.position.x + enemy.width / 2
        ) {
          enemy.flipImage = false;
          damageDash = 5;
        } else enemy.flipImage = true;
      }

      // Enemy attack collison
      if (
        enemy.isAttacking &&
        enemy.frame.current === enemy.frame.amount / 2 + 1 &&
        !this.player.isInvulnerable &&
        isCollided({
          a: enemy.attackHitBox,
          b: this.player.hitBox,
        })
      ) {
        this.player.damage({ damageDash, hp: 25 });
      }

      // Player collison
      if (
        !this.player.isInvulnerable &&
        !enemy.isDeath &&
        isCollided({
          a: enemy.hitBox,
          b: this.player.hitBox,
        })
      ) {
        this.player.damage({ damageDash, hp: 25 });
      }

      // Player attack collision
      if (
        this.player.isAttacking &&
        !enemy.isInvulnerable &&
        isCollided({
          a: this.player.attackHitBox,
          b: enemy.hitBox,
        })
      ) {
        enemy.damage(25);
      }

      if (enemy.isDeath) {
        if (!enemy.emblem.isFixed) {
          enemy.emblem.get(this.emblemPosition);
          this.emblemPosition += enemy.emblem.width + 10;
        }
        enemy.emblem.update({ mapMovingLeft: false, mapMovingRight: false });
      }

      enemy.update({
        animationId,
        mapMovingLeft: this.mapMovingLeft,
        mapMovingRight: this.mapMovingRight,
      });
    });
  }

  private createBackground() {
    this.backgrounds = [
      new Background({
        canvas: this.canvas,
        ctx: this.ctx,
        velocity: {
          x: 1,
          y: 0,
        },
        image: createImage(bg1Img),
      }),
      new Background({
        canvas: this.canvas,
        ctx: this.ctx,
        velocity: {
          x: 2,
          y: 0,
        },
        image: createImage(bg2Img),
      }),
      new Background({
        canvas: this.canvas,
        ctx: this.ctx,
        velocity: {
          x: 3,
          y: 0,
        },
        image: createImage(bg3Img),
      }),
    ];
  }

  public renderBackgrounds() {
    this.backgrounds.forEach((background) => {
      background.update({
        mapMovingLeft: this.mapMovingLeft,
        mapMovingRight: this.mapMovingRight,
      });
    });
  }

  private addDecoration({
    image,
    size,
    gap,
  }: {
    image: TImageIndex;
    size: number;
    gap?: number;
  }) {
    if (!gap) gap = 0;

    this.decorations.push(
      new Decoration({
        canvas: this.canvas,
        ctx: this.ctx,
        position: {
          x: this.mapSize + gap,
          y: this.canvas.height - size - 50,
        },
        image,
        size,
      })
    );
  }

  private addGround({ gap, up }: { gap?: number; up?: number }) {
    // max gap: 180
    if (!gap) gap = 0;
    if (!up) up = 0;

    this.tilesets.push(
      new Tileset({
        canvas: this.canvas,
        ctx: this.ctx,
        element: 'ground',
        position: {
          x: this.mapSize + gap,
          y: this.canvas.height - up,
        },
      })
    );
    this.mapSize += 50 * 3 - 2 + gap;
  }

  private addEmblem({
    gap,
    up,
    imageUrl,
    scale,
    fixedPositionY,
  }: {
    gap?: number;
    up?: number;
    imageUrl: string;
    scale?: number;
    fixedPositionY?: number;
  }) {
    if (!gap) gap = 0;
    if (!up) up = 150;
    else up = up + 150;
    if (!scale) scale = 1;

    this.emblems.push(
      new Emblem({
        ctx: this.ctx,
        position: {
          x: this.mapSize + gap,
          y: this.canvas.height - up,
        },
        image: createImage(imageUrl),
        scale,
        fixedPositionY,
      })
    );
  }

  public createMap() {
    // // Create Map
    this.addDecoration({ image: 'shop', size: 300, gap: 20 });
    this.addGround({});
    this.addGround({});
    this.addDecoration({ image: 'sign', size: 70, gap: 60 });
    this.addGround({});
    this.addDecoration({ image: 'rock3', size: 80, gap: 110 });
    this.addGround({ gap: 100 });
    this.addDecoration({ image: 'lamp', size: 120, gap: 50 });
    this.addEmblem({
      imageUrl: htmlImg,
      gap: -35,
      fixedPositionY: 7,
      scale: 1.25,
    });
    this.addGround({});
    this.addGround({ gap: 100, up: 50 });
    this.addGround({ gap: 100, up: 150 });
    this.addEmblem({
      imageUrl: cssImg,
      gap: 80,
      up: 260,
      fixedPositionY: 7,
      scale: 1.25,
    });
    this.addGround({ gap: 180 });
    this.addDecoration({ image: 'rock1', size: 40, gap: -100 });
    this.addDecoration({ image: 'rock2', size: 50, gap: -50 });
    this.addDecoration({ image: 'lamp', size: 120, gap: 50 });
    this.addGround({});
    this.addGround({});
    this.addGround({});
    this.addGround({});
    this.addGround({});
    this.addDecoration({ image: 'rock1', size: 40, gap: 0 });
    this.addDecoration({ image: 'rock2', size: 50, gap: 60 });
    this.addGround({ gap: -150, up: 150 });
    this.addGround({});
    this.addGround({ gap: -150, up: 150 });
    this.addEmblem({ imageUrl: reactImg, up: -30, gap: 80 });
    this.addGround({});
    this.addGround({ gap: -150, up: 150 });
    this.addDecoration({ image: 'rock3', size: 80, gap: 200 });
    this.addGround({ gap: 180 });
    this.addGround({});
    this.addDecoration({ image: 'lamp', size: 120, gap: 50 });
    this.addGround({});
    this.addGround({ gap: 100, up: 100 });
    this.addGround({ gap: 100, up: 200 });
    this.addEmblem({ imageUrl: phpImg, gap: 80, up: 260 });
    this.addGround({ gap: 180 });
    this.addDecoration({ image: 'rock1', size: 40, gap: 0 });
    this.addDecoration({ image: 'rock2', size: 50, gap: 50 });
    this.addGround({});
    this.addGround({});
    this.addGround({});
    this.addEmblem({ imageUrl: githubImg });
    this.addDecoration({ image: 'rock3', size: 80, gap: 0 });
    this.addGround({});
    this.addDecoration({ image: 'lamp', size: 120, gap: 50 });
    this.addGround({});
    this.addDecoration({ image: 'shop', size: 300 });
    this.addGround({});
    this.addGround({});
    this.addDecoration({ image: 'lamp', size: 120, gap: 50 });
    this.addGround({});
  }

  public renderMap({ animationId }: { animationId: number }) {
    // Map moviment
    this.mapMovingLeft = false;
    this.mapMovingRight = false;
    if (
      this.mapPosition < this.mapSize - this.canvas.width &&
      this.player.keys.moveToRight.pressed &&
      this.player.position.x >= this.canvas.width / 2 - this.player.width &&
      !this.player.isAttacking
    ) {
      // Player moving to right
      this.mapPosition += config.player.velocity.x;
      this.mapMovingRight = true;
    } else if (
      this.mapPosition > 0 &&
      this.player.keys.moveToLeft.pressed &&
      this.player.position.x <= 20 &&
      !this.player.isAttacking
    ) {
      // Player moving to left
      this.mapPosition -= config.player.velocity.x;
      this.mapMovingLeft = true;
    }

    this.decorations.forEach((decoration) => {
      decoration.update({
        mapMovingLeft: this.mapMovingLeft,
        mapMovingRight: this.mapMovingRight,
        animationId,
      });
    });

    // Tilesets
    this.tilesets.forEach((tileset) => {
      tileset.update({
        mapMovingLeft: this.mapMovingLeft,
        mapMovingRight: this.mapMovingRight,
      });

      // Player collision
      if (
        this.player.position.y + this.player.height + this.player.velocity.y >=
          tileset.position.y + 2 &&
        this.player.position.y + this.player.height + this.player.velocity.y <=
          tileset.position.y + 30 &&
        this.player.hitBox.x + this.player.hitBox.w >= tileset.position.x &&
        this.player.hitBox.x <= tileset.position.x + tileset.width
      ) {
        this.player.velocity.y = 0;
        this.player.position.y = tileset.position.y - this.player.height + 3;
        this.player.isJumping = false;
      }

      if (
        this.player.isJumping &&
        this.player.hitBox.y < tileset.position.y + tileset.height &&
        this.player.hitBox.y > tileset.position.y &&
        this.player.hitBox.x + this.player.hitBox.w >= tileset.position.x &&
        this.player.hitBox.x <= tileset.position.x + tileset.width
      )
        this.player.velocity.y = 3;

      // Enemy collision
      this.enemies.forEach((enemy) => {
        if (
          enemy.position.y + enemy.height + enemy.velocity.y >=
            tileset.position.y &&
          enemy.hitBox.x + enemy.hitBox.w >= tileset.position.x &&
          enemy.hitBox.x <= tileset.position.x + tileset.width
        ) {
          enemy.velocity.y = 0;
        }
      });
    });

    this.emblems.forEach((emblem) => {
      emblem.update({
        mapMovingLeft: this.mapMovingLeft,
        mapMovingRight: this.mapMovingRight,
      });

      // Player collision
      if (
        isCollided({
          a: this.player.hitBox,
          b: emblem.hitBox,
        }) &&
        !emblem.isFixed
      ) {
        emblem.get(this.emblemPosition);
        this.emblemPosition += emblem.width + 10;
      }
    });
  }

  public addGravity() {
    // Gravity
    this.player.position.y += this.player.velocity.y;
    this.player.velocity.y += config.gravity;

    this.enemies.forEach((enemy) => {
      enemy.position.y += enemy.velocity.y;
      enemy.velocity.y += config.gravity;
    });
  }

  public createKeyEvents() {
    this.player.createKeyEvents();
  }

  public removeKeyEvents() {
    this.player.removeKeyEvents();
  }
}
