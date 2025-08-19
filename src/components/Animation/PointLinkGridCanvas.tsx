'use client'

import { useCallback, useEffect, useRef } from 'react'

class Circle {
  x: number
  y: number
  radius: number
  speedAngle: number
  speed: number
  strongestLinkOpacity: number

  constructor(x: number, y: number, radius: number) {
    this.x = x
    this.y = y
    this.radius = radius
    this.speedAngle = Math.random() * Math.PI * 2
    this.speed = Math.random() * 20 + 25
    this.strongestLinkOpacity = 0
  }

  move(deltaTime: number) {
    this.x += Math.cos(this.speedAngle) * this.speed * deltaTime
    this.y += Math.sin(this.speedAngle) * this.speed * deltaTime
  }

  distanceSquared(circle: Circle) {
    const dx = this.x - circle.x
    const dy = this.y - circle.y
    return dx * dx + dy * dy
  }
}

export const PointLinkGridCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const mouseRef = useRef({ x: 0, y: 0 })
  const lastUpdateRef = useRef(Date.now())
  const circlesRef = useRef<Circle[]>([])

  const drawLink = (circle1: Circle, circle2: Circle, referenceDistance: number, context: CanvasRenderingContext2D) => {
    let distance = circle1.distanceSquared(circle2)
    if (distance < referenceDistance * referenceDistance) {
      distance = Math.sqrt(distance)
      const linkOpacity = 1 - distance / referenceDistance
      circle1.strongestLinkOpacity = Math.max(circle1.strongestLinkOpacity, linkOpacity)
      circle2.strongestLinkOpacity = Math.max(circle2.strongestLinkOpacity, linkOpacity)
      context.lineWidth = 2 * linkOpacity
      context.beginPath()
      context.moveTo(circle1.x, circle1.y)
      context.lineTo(circle2.x, circle2.y)
      context.strokeStyle = `rgba(76, 201, 240, ${linkOpacity})`
      context.stroke()
    }
  }

  const draw = useCallback((canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
    if (!context) return

    context.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < circlesRef.current.length; i++) {
      let circle1 = circlesRef.current[i]
      for (let j = 0; j < circlesRef.current.length; j++) {
        if (i === j) continue
        let circle2 = circlesRef.current[j]
        drawLink(circle1, circle2, 110, context)
      }
      let circle2 = new Circle(mouseRef.current.x, mouseRef.current.y, 5)
      drawLink(circle1, circle2, 150, context)
    }

    for (let circle of circlesRef.current) {
      context.beginPath()
      context.fillStyle = `#ddd`
      context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
      context.fill()

      if (circle.strongestLinkOpacity > 0) {
        context.beginPath()
        context.fillStyle = `rgba(29, 188, 237, ${circle.strongestLinkOpacity})`
        context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        context.fill()
      }

      circle.strongestLinkOpacity = 0
    }
  }, [])

  const update = useCallback(
    (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, deltaTime: number) => {
      for (let circle of circlesRef.current) {
        circle.move(deltaTime)
        if (circle.y < 0 || circle.y >= canvas.height || circle.x < 0 || circle.x >= canvas.width) {
          circle.move(-deltaTime)
          circle.speedAngle = Math.random() * Math.PI * 2
        }
      }

      draw(canvas, context)
    },
    [draw]
  )

  const init = useCallback(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) return

    const circleAmount = Math.min((window.innerWidth * window.innerHeight) / 23000, 120)

    circlesRef.current = []

    for (let i = 0; i < circleAmount; i++)
      circlesRef.current.push(
        new Circle(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 2 + 1)
      )
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) return

    init()

    let frameId: number | undefined
    const render = () => {
      // Prevent lag but never step more than 0.5s at a time because it causes a disgraceful jump on tab change
      const now = Date.now()
      const deltaTime = Math.min(0.5, (now - lastUpdateRef.current) / 1000)

      update(canvas, context, deltaTime)
      frameId = window.requestAnimationFrame(render)
      lastUpdateRef.current = now
    }

    const updateMousePosition = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const scaleX = canvas.width / rect.width
      const scaleY = canvas.height / rect.height
      mouseRef.current.x = (e.clientX - rect.left) * scaleX
      mouseRef.current.y = (e.clientY - rect.top) * scaleY
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('resize', resizeCanvas)

    resizeCanvas()
    render()

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('resize', resizeCanvas)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update])

  return (
    <div className="fixed top-0 left-0 w-full h-full blur-[2px] -z-50">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
