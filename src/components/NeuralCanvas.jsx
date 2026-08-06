import React, { useEffect, useRef } from 'react';

const NeuralCanvas = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particlesArray = [];
    const maxParticles = window.innerWidth < 768 ? 40 : 90;
    const connectionDistance = 120;
    
    const mouse = {
      x: null,
      y: null,
      radius: 150,
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', resizeCanvas);

    // Particle Class
    class Particle {
      constructor(x, y, directionX, directionY, size, colorIndex) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.colorIndex = colorIndex; // 0 for Purple, 1 for Cyan
      }

      getColor() {
        const colors = document.body.classList.contains('light-mode')
          ? ['rgba(139, 92, 246, 0.65)', 'rgba(6, 182, 212, 0.65)']
          : ['rgba(139, 92, 246, 0.45)', 'rgba(6, 182, 212, 0.45)'];
        return colors[this.colorIndex];
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.getColor();
        ctx.fill();
      }

      update() {
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            this.x += dx * 0.02;
            this.y += dy * 0.02;
          }
        }

        // Normal movement
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const initParticles = () => {
      particlesArray = [];
      for (let i = 0; i < maxParticles; i++) {
        let size = Math.random() * 2 + 1;
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let directionX = (Math.random() * 0.8) - 0.4;
        let directionY = (Math.random() * 0.8) - 0.4;
        let colorIndex = Math.floor(Math.random() * 2);

        particlesArray.push(new Particle(x, y, directionX, directionY, size, colorIndex));
      }
    };

    // Draw lines between close particles
    const connectParticles = () => {
      let opacityValue = 1;
      const isLightMode = document.body.classList.contains('light-mode');
      
      for (let a = 0; a < particlesArray.length; a++) {
        // Connect to mouse
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - particlesArray[a].x;
          let dy = mouse.y - particlesArray[a].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            opacityValue = 1 - (distance / mouse.radius);
            const mouseLineColor = isLightMode 
              ? `rgba(6, 182, 212, ${opacityValue * 0.35})`
              : `rgba(6, 182, 212, ${opacityValue * 0.25})`;
              
            ctx.strokeStyle = mouseLineColor;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        for (let b = a + 1; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            opacityValue = 1 - (distance / connectionDistance);
            
            const grad = ctx.createLinearGradient(
              particlesArray[a].x, particlesArray[a].y,
              particlesArray[b].x, particlesArray[b].y
            );
            grad.addColorStop(0, particlesArray[a].getColor());
            grad.addColorStop(1, particlesArray[b].getColor());
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = opacityValue * 0.8;
            
            // Slightly higher transparency line in light mode for readability
            const alphaMultiplier = isLightMode ? 0.45 : 0.3;
            ctx.globalAlpha = opacityValue * alphaMultiplier;
            
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
            ctx.globalAlpha = 1.0; // Reset
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
    animate();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Re-run canvas configuration when theme updates

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.65,
      }}
    />
  );
};

export default NeuralCanvas;
