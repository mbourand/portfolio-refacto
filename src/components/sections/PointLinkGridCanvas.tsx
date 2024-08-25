import { useEffect, useRef } from "react";

class Circle {
  x: number;
  y: number;
  radius: number;
  speedAngle: number;
  speed: number;
  strongestLinkOpacity: number;

  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedAngle = Math.random() * Math.PI * 2;
    this.speed = Math.random() * 20 + 25;
    this.strongestLinkOpacity = 0;
  }

  move(deltaTime: number) {
    this.x += Math.cos(this.speedAngle) * this.speed * deltaTime;
    this.y += Math.sin(this.speedAngle) * this.speed * deltaTime;
  }

  distanceSquared(circle: Circle) {
    const dx = this.x - circle.x;
    const dy = this.y - circle.y;
    return dx * dx + dy * dy;
  }
}

export const PointLinkGridCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  let mouse = { x: 0, y: 0 };
  let lastUpdate = Date.now();
  let circles: Circle[] = [];

  const update = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    deltaTime: number
  ) => {
    for (let circle of circles) {
      circle.move(deltaTime);
      if (
        circle.y < 0 ||
        circle.y >= canvas.height ||
        circle.x < 0 ||
        circle.x >= canvas.width
      ) {
        circle.move(-deltaTime);
        circle.speedAngle = Math.random() * Math.PI * 2;
      }
    }

    draw(canvas, context);
  };

  const drawLink = (
    circle1: Circle,
    circle2: Circle,
    referenceDistance: number,
    context: CanvasRenderingContext2D
  ) => {
    let distance = circle1.distanceSquared(circle2);
    if (distance < referenceDistance * referenceDistance) {
      distance = Math.sqrt(distance);
      const linkOpacity = 1 - distance / referenceDistance;
      circle1.strongestLinkOpacity = Math.max(
        circle1.strongestLinkOpacity,
        linkOpacity
      );
      circle2.strongestLinkOpacity = Math.max(
        circle2.strongestLinkOpacity,
        linkOpacity
      );
      context.lineWidth = 2 * linkOpacity;
      context.beginPath();
      context.moveTo(circle1.x, circle1.y);
      context.lineTo(circle2.x, circle2.y);
      // context.strokeStyle = `#444`
      context.strokeStyle = `rgba(76, 201, 240, ${linkOpacity})`;
      context.stroke();
    }
  };

  const draw = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
  ) => {
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circles.length; i++) {
      let circle1 = circles[i];
      for (let j = 0; j < circles.length; j++) {
        if (i === j) continue;
        let circle2 = circles[j];
        drawLink(circle1, circle2, 110, context);
      }
      let circle2 = new Circle(mouse.x, mouse.y, 5);
      drawLink(circle1, circle2, 150, context);
    }

    for (let circle of circles) {
      context.beginPath();
      context.fillStyle = `#ddd`;
      context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
      context.fill();

      if (circle.strongestLinkOpacity > 0) {
        context.beginPath();
        context.fillStyle = `rgba(29, 188, 237, ${circle.strongestLinkOpacity})`;
        context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        context.fill();
      }

      circle.strongestLinkOpacity = 0;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const circleAmount = Math.min(
      (window.innerWidth * window.innerHeight) / 23000,
      120
    );

    circles = [];

    for (let i = 0; i < circleAmount; i++)
      circles.push(
        new Circle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 2 + 1
        )
      );

    let frameId: number | undefined;
    const render = () => {
      // Prevent lag but never step more than 0.5s at a time because it causes a disgraceful jump on tab change
      const deltaTime = Math.min(0.5, (Date.now() - lastUpdate) / 1000);
      update(canvas, context, deltaTime);
      frameId = requestAnimationFrame(render);
      lastUpdate = Date.now();
    };

    const updateMousePosition = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      mouse.x = (e.clientX - rect.left) * scaleX;
      mouse.y = (e.clientY - rect.top) * scaleY;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    render();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(frameId!);
    };
  }, [draw]);

  return (
    <div className="fixed top-0 left-0 w-full h-full blur-[2px]">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
