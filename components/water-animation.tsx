"use client"

import { useEffect, useRef } from "react"

export default function WaterAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Water ripple effect
    const waves = {
      count: 7,
      y: canvas.height * 0.5,
      length: 100,
      amplitude: 15,
      frequency: 0.02,
    }

    // Animation variables
    let time = 0
    const speed = 0.1

    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.7)") // blue-500 with opacity
      gradient.addColorStop(1, "rgba(37, 99, 235, 0.7)") // blue-600 with opacity
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw multiple wave layers
      for (let i = 0; i < waves.count; i++) {
        ctx.beginPath()

        // Adjust wave properties based on layer
        const adjustedAmplitude = waves.amplitude * (1 - (i / waves.count) * 0.5)
        const adjustedFrequency = waves.frequency * (1 + (i / waves.count) * 0.3)
        const layerSpeed = speed * (1 + (i / waves.count) * 0.2)
        const layerTime = time * layerSpeed
        const layerY = waves.y + i * 20 - 50

        // Set wave style
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + i * 0.03})`
        ctx.lineWidth = 2

        // Draw wave path
        for (let x = 0; x <= canvas.width; x += 5) {
          const y = layerY + Math.sin(x * adjustedFrequency + layerTime) * adjustedAmplitude
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      }

      // Update time
      time += speed

      // Continue animation
      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
