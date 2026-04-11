import { useEffect, useRef } from 'react';

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    // Mouse/touch parallax offset (smoothly interpolated)
    const mouse = { x: 0, y: 0 };
    const offset = { x: 0, y: 0 };
    const PARALLAX_STRENGTH = 40; // max px shift

    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;  // -1 to 1
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.x = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
        mouse.y = (e.touches[0].clientY / window.innerHeight - 0.5) * 2;
      }
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.3 + 0.05,
      opacity: Math.random(),
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
      // depth layer 0.2–1.0: deeper stars move less
      depth: Math.random() * 0.8 + 0.2,
    }));

    const shootingStars = [];
    const addShootingStar = () => {
      if (Math.random() < 0.003) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          len: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 4,
          opacity: 1,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth lerp toward mouse position
      offset.x += (mouse.x * PARALLAX_STRENGTH - offset.x) * 0.05;
      offset.y += (mouse.y * PARALLAX_STRENGTH - offset.y) * 0.05;

      stars.forEach(s => {
        s.opacity += s.twinkleSpeed * s.twinkleDir;
        if (s.opacity >= 1 || s.opacity <= 0.1) s.twinkleDir *= -1;
        // Apply parallax: stars with higher depth move more
        const px = s.x + offset.x * s.depth;
        const py = s.y + offset.y * s.depth;
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,248,220,${s.opacity})`;
        ctx.fill();
      });

      addShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        const grad = ctx.createLinearGradient(ss.x, ss.y, ss.x - Math.cos(ss.angle) * ss.len, ss.y - Math.sin(ss.angle) * ss.len);
        grad.addColorStop(0, `rgba(255,248,220,${ss.opacity})`);
        grad.addColorStop(1, 'rgba(255,248,220,0)');
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - Math.cos(ss.angle) * ss.len, ss.y - Math.sin(ss.angle) * ss.len);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.02;
        if (ss.opacity <= 0) shootingStars.splice(i, 1);
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); window.removeEventListener('mousemove', onMouseMove); window.removeEventListener('touchmove', onTouchMove); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  );
}
