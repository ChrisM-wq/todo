import React, { useEffect, useRef } from 'react';

const Gradient = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const col = function(x, y, r, g, b) {
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, y, 1, 1);
    };

    const R = function(x, y, t) {
      return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    };

    const G = function(x, y, t) {
      return Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300));
    };

    const B = function(x, y, t) {
      return Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100));
    };

    let t = 0;

    const run = function() {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.005;
      window.requestAnimationFrame(run);
    };

    run();
  }, []);

  return <canvas ref={canvasRef} width={36} height={36} />;
  
};

export default Gradient;