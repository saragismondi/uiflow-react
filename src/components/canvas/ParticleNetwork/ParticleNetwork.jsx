import { useEffect, useRef } from 'react'
import useParticles from './useParticles'
import styles from './ParticleNetwork.module.css'

/**
 * ParticleNetwork Component
 *
 * Interactive particle network animation with canvas
 * Features:
 * - 100+ particles with random motion
 * - Dynamic connection lines between nearby particles
 * - Mouse interaction (cyan connections to cursor)
 * - Smooth animations with requestAnimationFrame
 */
const ParticleNetwork = ({
  particleCount = 100,
  maxDistance = 150,
  particleSpeed = 0.5,
  particleSize = 2,
  lineColor = 'rgba(139, 92, 246, 0.3)',
  mouseLineColor = 'rgba(0, 255, 255, 0.6)',
  particleColor = 'rgba(255, 255, 255, 0.8)'
}) => {
  const canvasRef = useRef(null)
  const { particles, mousePos, initParticles, updateParticles, handleMouseMove, handleMouseLeave } = useParticles(
    particleCount,
    maxDistance,
    particleSpeed
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles(canvas.width, canvas.height)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      updateParticles(canvas.width, canvas.height)

      // Draw connections
      particles.forEach((particle, i) => {
        // Draw connections to other particles
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3
            ctx.strokeStyle = lineColor.replace('0.3', opacity.toString())
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }

        // Draw connections to mouse
        if (mousePos.x !== null && mousePos.y !== null) {
          const dx = particle.x - mousePos.x
          const dy = particle.y - mousePos.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance * 1.5) {
            const opacity = 1 - distance / (maxDistance * 1.5)
            ctx.strokeStyle = mouseLineColor.replace('0.6', (opacity * 0.6).toString())
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(mousePos.x, mousePos.y)
            ctx.stroke()
          }
        }

        // Draw particle
        ctx.fillStyle = particleColor
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [particles, mousePos, particleCount, maxDistance, particleSpeed, particleSize, lineColor, mouseLineColor, particleColor, initParticles, updateParticles])

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  )
}

export default ParticleNetwork
