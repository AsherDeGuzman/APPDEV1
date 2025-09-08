import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-background-canvas',
  template: '<canvas id="bg-canvas"></canvas>',
  styles: [`
    canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
      display: block;
      background: #23272a;
    }
  `],
  standalone: true
})
export class BackgroundCanvasComponent implements OnInit {
  private ctx: CanvasRenderingContext2D | null = null;
  private dots: {x: number, y: number, vx: number, vy: number}[] = [];
  private mouse = {x: -1000, y: -1000};
  private dotCount = 180;
  private radius = 80;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const canvas = this.el.nativeElement.querySelector('canvas');
    this.ctx = canvas.getContext('2d');
    this.resizeCanvas();
    this.createDots();
    this.animate();
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    this.mouse.x = -1000;
    this.mouse.y = -1000;
  }

  resizeCanvas() {
    const canvas = this.el.nativeElement.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  createDots() {
    this.dots = [];
    for (let i = 0; i < this.dotCount; i++) {
      this.dots.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let dot of this.dots) {
      // Attraction to mouse
      const dx = this.mouse.x - dot.x;
      const dy = this.mouse.y - dot.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < this.radius) {
        dot.vx += dx * 0.002;
        dot.vy += dy * 0.002;
      }
      dot.x += dot.vx;
      dot.y += dot.vy;
      dot.vx *= 0.98;
      dot.vy *= 0.98;
      // Bounce off edges
      if (dot.x < 0 || dot.x > window.innerWidth) dot.vx *= -1;
      if (dot.y < 0 || dot.y > window.innerHeight) dot.vy *= -1;
      // Draw dot
      this.ctx.beginPath();
      this.ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
      this.ctx.fillStyle = '#fff'; // white dots
      this.ctx.fill();
    }
  }
}
