import { useEffect, useRef } from 'react';
import { CreateScene } from '../../../game/CreateScene';

export function useGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);
  const jumpButtonRef = useRef<HTMLButtonElement>(null);
  const attackButtonRef = useRef<HTMLButtonElement>(null);

  const windowSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  useEffect(() => {
    if (
      !canvasRef.current ||
      !leftButtonRef.current ||
      !rightButtonRef.current ||
      !jumpButtonRef.current ||
      !attackButtonRef.current
    )
      return;

    const ctx = canvasRef.current.getContext('2d');

    if (!ctx) return;

    canvasRef.current.width = canvasRef.current.clientWidth;
    canvasRef.current.height = canvasRef.current.clientHeight;

    let animationId = 0;

    const createScene = new CreateScene({
      canvas: canvasRef.current,
      ctx,
      buttons: {
        player: {
          left: leftButtonRef.current,
          right: rightButtonRef.current,
          jump: jumpButtonRef.current,
          attack: attackButtonRef.current,
        },
      },
    });

    createScene.createKeyEvents();

    function animate() {
      animationId = requestAnimationFrame(animate);

      createScene.renderBackgrounds();
      createScene.renderMap({
        animationId,
      });
      createScene.renderPlayer({ animationId });
      createScene.renderEnemies(animationId);
      createScene.addGravity();
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      createScene.removeKeyEvents();
    };
  }, [
    canvasRef.current,
    leftButtonRef.current,
    rightButtonRef.current,
    jumpButtonRef.current,
    attackButtonRef.current,
    windowSize,
  ]);

  return {
    canvasRef,
    leftButtonRef,
    rightButtonRef,
    jumpButtonRef,
    attackButtonRef,
  };
}
