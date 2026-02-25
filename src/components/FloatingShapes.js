import { useEffect, useRef, useCallback } from 'react';

const FloatingShapes = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const particlesRef = useRef([]);
    const animFrameRef = useRef(null);

    const COLORS = [
        { r: 108, g: 99, b: 255 },   // purple
        { r: 0, g: 212, b: 255 },     // cyan
        { r: 255, g: 107, b: 157 },   // pink
    ];

    const createParticles = useCallback((width, height) => {
        const count = Math.min(Math.floor((width * height) / 12000), 120);
        const particles = [];
        for (let i = 0; i < count; i++) {
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: 1.2 + Math.random() * 1.8,
                color,
                alpha: 0.3 + Math.random() * 0.5,
                pulseSpeed: 0.005 + Math.random() * 0.015,
                pulseOffset: Math.random() * Math.PI * 2,
            });
        }
        return particles;
    }, [COLORS]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

            if (particlesRef.current.length === 0) {
                particlesRef.current = createParticles(width, height);
            }
        };

        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseRef.current.x = -1000;
            mouseRef.current.y = -1000;
        };

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        const CONNECTION_DIST = 150;
        const MOUSE_DIST = 180;
        let time = 0;

        const draw = () => {
            time += 1;
            ctx.clearRect(0, 0, width, height);

            // --- Gradient nebula backdrop ---
            const grd1 = ctx.createRadialGradient(
                width * 0.15, height * 0.2, 0,
                width * 0.15, height * 0.2, width * 0.45
            );
            grd1.addColorStop(0, 'rgba(108, 99, 255, 0.06)');
            grd1.addColorStop(1, 'transparent');
            ctx.fillStyle = grd1;
            ctx.fillRect(0, 0, width, height);

            const grd2 = ctx.createRadialGradient(
                width * 0.8, height * 0.7, 0,
                width * 0.8, height * 0.7, width * 0.4
            );
            grd2.addColorStop(0, 'rgba(0, 212, 255, 0.04)');
            grd2.addColorStop(1, 'transparent');
            ctx.fillStyle = grd2;
            ctx.fillRect(0, 0, width, height);

            const grd3 = ctx.createRadialGradient(
                width * 0.5, height * 0.9, 0,
                width * 0.5, height * 0.9, width * 0.35
            );
            grd3.addColorStop(0, 'rgba(255, 107, 157, 0.03)');
            grd3.addColorStop(1, 'transparent');
            ctx.fillStyle = grd3;
            ctx.fillRect(0, 0, width, height);

            const particles = particlesRef.current;
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            // --- Update & draw particles ---
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Pulse alpha
                p.alpha = 0.3 + 0.35 * Math.sin(time * p.pulseSpeed + p.pulseOffset);

                // Mouse repulsion
                const dmx = p.x - mx;
                const dmy = p.y - my;
                const distMouse = Math.sqrt(dmx * dmx + dmy * dmy);
                if (distMouse < MOUSE_DIST && distMouse > 0) {
                    const force = (MOUSE_DIST - distMouse) / MOUSE_DIST * 0.8;
                    p.vx += (dmx / distMouse) * force * 0.3;
                    p.vy += (dmy / distMouse) * force * 0.3;
                }

                // Apply velocity with damping
                p.vx *= 0.98;
                p.vy *= 0.98;
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around edges
                if (p.x < -10) p.x = width + 10;
                if (p.x > width + 10) p.x = -10;
                if (p.y < -10) p.y = height + 10;
                if (p.y > height + 10) p.y = -10;

                // Draw particle with glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
                ctx.fill();

                // Soft glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.08})`;
                ctx.fill();
            }

            // --- Draw connections ---
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DIST) {
                        const opacity = (1 - dist / CONNECTION_DIST) * 0.15;
                        const c1 = particles[i].color;
                        const c2 = particles[j].color;
                        const mr = (c1.r + c2.r) >> 1;
                        const mg = (c1.g + c2.g) >> 1;
                        const mb = (c1.b + c2.b) >> 1;

                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(${mr}, ${mg}, ${mb}, ${opacity})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            // --- Mouse glow ---
            if (mx > 0 && my > 0) {
                const mouseGlow = ctx.createRadialGradient(mx, my, 0, mx, my, 120);
                mouseGlow.addColorStop(0, 'rgba(108, 99, 255, 0.06)');
                mouseGlow.addColorStop(1, 'transparent');
                ctx.fillStyle = mouseGlow;
                ctx.fillRect(mx - 120, my - 120, 240, 240);
            }

            animFrameRef.current = requestAnimationFrame(draw);
        };

        animFrameRef.current = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [createParticles]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

export default FloatingShapes;
