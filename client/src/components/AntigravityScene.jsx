import { useEffect, useRef } from 'react';

export default function AntigravityScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Static background stars ──────────────────────────────
    const bgStars = Array.from({ length: 280 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.2,
      opacity: Math.random() * 0.6 + 0.3,
      twinkleSpeed: Math.random() * 0.015 + 0.004,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
    }));

    // ── Falling stars (continuous) ───────────────────────────
    const fallingStars = [];
    const spawnFallingStar = () => {
      fallingStars.push({
        x: Math.random() * W,
        y: -10,
        len: Math.random() * 120 + 60,
        speed: Math.random() * 5 + 3,
        angle: Math.PI / 2 + (Math.random() - 0.5) * 0.6,
        opacity: 1,
        width: Math.random() * 1.5 + 0.5,
        color: Math.random() > 0.5 ? '255,248,220' : '201,168,76',
      });
    };

    // ── Click burst shooting stars ───────────────────────────
    const clickBursts = [];
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const count = Math.floor(Math.random() * 6) + 6;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
        clickBursts.push({
          x: cx, y: cy,
          vx: Math.cos(angle) * (Math.random() * 6 + 3),
          vy: Math.sin(angle) * (Math.random() * 6 + 3),
          len: Math.random() * 80 + 40,
          opacity: 1,
          width: Math.random() * 2 + 0.5,
          color: Math.random() > 0.4 ? '201,168,76' : '255,255,255',
        });
      }
    };
    canvas.addEventListener('click', handleClick);

    // ── Sun ──────────────────────────────────────────────────
    const sun = {
      x: W * 0.5,
      y: H * 0.62,
      r: 38,
      glowR: 90,
      pulseT: 0,
    };

    // ── Planets ──────────────────────────────────────────────
    const planets = [
      { name: 'Mercury', orbitR: 80,  r: 5,  color: '#b5b5b5', speed: 0.022, angle: 0.3,  tilt: 0.18, moons: 0 },
      { name: 'Venus',   orbitR: 120, r: 9,  color: '#e8cda0', speed: 0.015, angle: 1.2,  tilt: 0.12, moons: 0 },
      { name: 'Earth',   orbitR: 168, r: 10, color: '#4fa3e0', speed: 0.011, angle: 2.5,  tilt: 0.10, moons: 1, moonR: 3, moonOrbit: 18, moonSpeed: 0.08, moonAngle: 0 },
      { name: 'Mars',    orbitR: 215, r: 7,  color: '#c1440e', speed: 0.008, angle: 0.8,  tilt: 0.14, moons: 0 },
      { name: 'Jupiter', orbitR: 285, r: 20, color: '#c88b3a', speed: 0.004, angle: 4.1,  tilt: 0.06, moons: 2, moonR: 2.5, moonOrbit: 30, moonSpeed: 0.05, moonAngle: 1 },
      { name: 'Saturn',  orbitR: 360, r: 17, color: '#e4d191', speed: 0.003, angle: 2.0,  tilt: 0.08, moons: 1, moonR: 2, moonOrbit: 28, moonSpeed: 0.04, moonAngle: 2, rings: true },
      { name: 'Uranus',  orbitR: 430, r: 12, color: '#7de8e8', speed: 0.002, angle: 5.5,  tilt: 0.05, moons: 0 },
      { name: 'Neptune', orbitR: 495, r: 11, color: '#3f54ba', speed: 0.0015,angle: 3.3,  tilt: 0.04, moons: 0 },
    ];

    // ── Asteroid belt ────────────────────────────────────────
    const asteroids = Array.from({ length: 120 }, () => ({
      angle: Math.random() * Math.PI * 2,
      r: Math.random() * 8 - 4 + 248,
      speed: Math.random() * 0.003 + 0.002,
      size: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    // ── Comet ────────────────────────────────────────────────
    let comet = null;
    const spawnComet = () => {
      comet = {
        x: -50, y: Math.random() * H * 0.4,
        vx: Math.random() * 4 + 3,
        vy: Math.random() * 2 + 0.5,
        len: Math.random() * 160 + 80,
        opacity: 1,
        r: Math.random() * 3 + 2,
      };
    };

    let fallTimer = 0;
    let cometTimer = 0;

    // ── Draw helpers ─────────────────────────────────────────
    const drawGlow = (x, y, r, color, alpha) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${color},${alpha})`);
      g.addColorStop(1, `rgba(${color},0)`);
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    };

    const drawOrbitEllipse = (cx, cy, rx, ry, tilt) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(tilt);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.07)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.restore();
    };

    const drawSaturnRings = (x, y, r, tilt) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(tilt * 0.5);
      ctx.scale(1, 0.35);
      for (let i = 0; i < 3; i++) {
        const rr = r * (1.4 + i * 0.22);
        ctx.beginPath();
        ctx.arc(0, 0, rr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(228,209,145,${0.35 - i * 0.08})`;
        ctx.lineWidth = r * 0.18;
        ctx.stroke();
      }
      ctx.restore();
    };

    // ── Main draw loop ───────────────────────────────────────
    const draw = (ts) => {
      ctx.clearRect(0, 0, W, H);

      // Update sun position to center
      sun.x = W * 0.5;
      sun.y = H * 0.62;
      sun.pulseT += 0.02;

      // Background stars
      bgStars.forEach(s => {
        s.opacity += s.twinkleSpeed * s.twinkleDir;
        if (s.opacity >= 0.95 || s.opacity <= 0.15) s.twinkleDir *= -1;
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,248,220,${s.opacity})`;
        ctx.fill();
      });

      // Spawn falling stars
      fallTimer++;
      if (fallTimer % 28 === 0) spawnFallingStar();

      // Draw & update falling stars
      for (let i = fallingStars.length - 1; i >= 0; i--) {
        const fs = fallingStars[i];
        const tx = fs.x - Math.cos(fs.angle) * fs.len;
        const ty = fs.y - Math.sin(fs.angle) * fs.len;
        const g = ctx.createLinearGradient(fs.x, fs.y, tx, ty);
        g.addColorStop(0, `rgba(${fs.color},${fs.opacity})`);
        g.addColorStop(1, `rgba(${fs.color},0)`);
        ctx.beginPath();
        ctx.moveTo(fs.x, fs.y);
        ctx.lineTo(tx, ty);
        ctx.strokeStyle = g;
        ctx.lineWidth = fs.width;
        ctx.stroke();
        // Small bright head
        ctx.beginPath();
        ctx.arc(fs.x, fs.y, fs.width * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${fs.opacity})`;
        ctx.fill();

        fs.x += Math.cos(fs.angle) * fs.speed;
        fs.y += Math.sin(fs.angle) * fs.speed;
        fs.opacity -= 0.012;
        if (fs.opacity <= 0 || fs.y > H + 20) fallingStars.splice(i, 1);
      }

      // Comet
      cometTimer++;
      if (cometTimer % 420 === 0) spawnComet();
      if (comet) {
        const cx2 = comet.x - comet.vx * (comet.len / comet.vx);
        const cy2 = comet.y - comet.vy * (comet.len / comet.vx);
        const cg = ctx.createLinearGradient(comet.x, comet.y, cx2, cy2);
        cg.addColorStop(0, `rgba(255,255,255,${comet.opacity})`);
        cg.addColorStop(0.3, `rgba(201,168,76,${comet.opacity * 0.6})`);
        cg.addColorStop(1, 'rgba(201,168,76,0)');
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(cx2, cy2);
        ctx.strokeStyle = cg;
        ctx.lineWidth = comet.r;
        ctx.stroke();
        drawGlow(comet.x, comet.y, comet.r * 4, '255,255,255', comet.opacity * 0.8);
        comet.x += comet.vx;
        comet.y += comet.vy;
        comet.opacity -= 0.004;
        if (comet.x > W + 100 || comet.opacity <= 0) comet = null;
      }

      // Orbit ellipses
      planets.forEach(p => {
        const ry = p.orbitR * 0.38;
        drawOrbitEllipse(sun.x, sun.y, p.orbitR, ry, p.tilt);
      });

      // Asteroid belt
      asteroids.forEach(a => {
        a.angle += a.speed;
        const ry = a.r * 0.38;
        const ax = sun.x + Math.cos(a.angle) * a.r;
        const ay = sun.y + Math.sin(a.angle) * ry;
        ctx.beginPath();
        ctx.arc(ax, ay, a.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,160,120,${a.opacity})`;
        ctx.fill();
      });

      // Sun
      const pulse = 1 + Math.sin(sun.pulseT) * 0.06;
      drawGlow(sun.x, sun.y, sun.glowR * pulse * 1.8, '255,200,50', 0.12);
      drawGlow(sun.x, sun.y, sun.glowR * pulse, '255,200,50', 0.22);
      drawGlow(sun.x, sun.y, sun.r * pulse * 1.3, '255,230,100', 0.5);
      const sunG = ctx.createRadialGradient(sun.x - sun.r * 0.3, sun.y - sun.r * 0.3, 0, sun.x, sun.y, sun.r * pulse);
      sunG.addColorStop(0, '#fff7c0');
      sunG.addColorStop(0.4, '#ffcc00');
      sunG.addColorStop(0.8, '#ff8800');
      sunG.addColorStop(1, '#cc4400');
      ctx.beginPath();
      ctx.arc(sun.x, sun.y, sun.r * pulse, 0, Math.PI * 2);
      ctx.fillStyle = sunG;
      ctx.fill();

      // Planets
      planets.forEach(p => {
        p.angle += p.speed;
        if (p.moonAngle !== undefined) p.moonAngle += p.moonSpeed || 0;

        const ry = p.orbitR * 0.38;
        const px = sun.x + Math.cos(p.angle) * p.orbitR;
        const py = sun.y + Math.sin(p.angle) * ry;

        // Saturn rings (behind planet)
        if (p.rings) drawSaturnRings(px, py, p.r, p.angle);

        // Planet glow
        drawGlow(px, py, p.r * 2.5, hexToRgb(p.color), 0.25);

        // Planet body
        const pg = ctx.createRadialGradient(px - p.r * 0.3, py - p.r * 0.3, 0, px, py, p.r);
        pg.addColorStop(0, lighten(p.color, 60));
        pg.addColorStop(0.6, p.color);
        pg.addColorStop(1, darken(p.color, 50));
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = pg;
        ctx.fill();

        // Jupiter bands
        if (p.name === 'Jupiter') {
          ctx.save();
          ctx.beginPath();
          ctx.arc(px, py, p.r, 0, Math.PI * 2);
          ctx.clip();
          for (let b = 0; b < 4; b++) {
            ctx.beginPath();
            ctx.rect(px - p.r, py - p.r + b * (p.r * 0.5), p.r * 2, p.r * 0.18);
            ctx.fillStyle = `rgba(160,100,40,0.25)`;
            ctx.fill();
          }
          ctx.restore();
        }

        // Earth continents hint
        if (p.name === 'Earth') {
          ctx.save();
          ctx.beginPath();
          ctx.arc(px, py, p.r, 0, Math.PI * 2);
          ctx.clip();
          ctx.fillStyle = 'rgba(60,160,60,0.45)';
          ctx.beginPath();
          ctx.ellipse(px - 2, py - 1, p.r * 0.45, p.r * 0.3, 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(px + 2, py + 2, p.r * 0.3, p.r * 0.2, -0.3, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // Moons
        if (p.moons && p.moonAngle !== undefined) {
          const mx = px + Math.cos(p.moonAngle) * p.moonOrbit;
          const my = py + Math.sin(p.moonAngle) * (p.moonOrbit * 0.4);
          ctx.beginPath();
          ctx.arc(mx, my, p.moonR, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(220,220,220,0.85)';
          ctx.fill();
          if (p.moons === 2) {
            const mx2 = px + Math.cos(p.moonAngle + Math.PI) * (p.moonOrbit * 0.7);
            const my2 = py + Math.sin(p.moonAngle + Math.PI) * (p.moonOrbit * 0.28);
            ctx.beginPath();
            ctx.arc(mx2, my2, p.moonR * 0.7, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(200,200,200,0.7)';
            ctx.fill();
          }
        }

        // Planet label
        ctx.fillStyle = 'rgba(240,230,208,0.55)';
        ctx.font = `${Math.max(9, p.r * 0.7)}px Cinzel, serif`;
        ctx.textAlign = 'center';
        ctx.fillText(p.name, px, py + p.r + 12);
      });

      // Click burst shooting stars
      for (let i = clickBursts.length - 1; i >= 0; i--) {
        const b = clickBursts[i];
        const tx = b.x - Math.cos(Math.atan2(b.vy, b.vx)) * b.len * b.opacity;
        const ty = b.y - Math.sin(Math.atan2(b.vy, b.vx)) * b.len * b.opacity;
        const bg = ctx.createLinearGradient(b.x, b.y, tx, ty);
        bg.addColorStop(0, `rgba(${b.color},${b.opacity})`);
        bg.addColorStop(1, `rgba(${b.color},0)`);
        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(tx, ty);
        ctx.strokeStyle = bg;
        ctx.lineWidth = b.width;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.width * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${b.opacity})`;
        ctx.fill();
        b.x += b.vx;
        b.y += b.vy;
        b.vy += 0.08;
        b.opacity -= 0.022;
        if (b.opacity <= 0) clickBursts.splice(i, 1);
      }

      animId = requestAnimationFrame(draw);
    };

    draw(0);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', cursor: 'crosshair' }}
    />
  );
}

// ── Color helpers ────────────────────────────────────────────
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

function lighten(hex, amount) {
  const r = Math.min(255, parseInt(hex.slice(1, 3), 16) + amount);
  const g = Math.min(255, parseInt(hex.slice(3, 5), 16) + amount);
  const b = Math.min(255, parseInt(hex.slice(5, 7), 16) + amount);
  return `rgb(${r},${g},${b})`;
}

function darken(hex, amount) {
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amount);
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amount);
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amount);
  return `rgb(${r},${g},${b})`;
}
