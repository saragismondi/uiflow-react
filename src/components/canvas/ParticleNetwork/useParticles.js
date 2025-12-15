import { useState, useCallback } from 'react'

/**
 * useParticles Hook
 *
 * Custom hook for managing particle network state and logic
 * Handles particle creation, movement, and mouse interaction
 */
const useParticles = (particleCount, maxDistance, speed) => {
  const [particles, setParticles] = useState([])
  const [mousePos, setMousePos] = useState({ x: null, y: null })

  // Initialize particles with random positions and velocities
  const initParticles = useCallback((width, height) => {
    const newParticles = []

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed
      })
    }

    setParticles(newParticles)
  }, [particleCount, speed])

  // Update particle positions
  const updateParticles = useCallback((width, height) => {
    setParticles(prevParticles =>
      prevParticles.map(particle => {
        let { x, y, vx, vy } = particle

        // Update position
        x += vx
        y += vy

        // Bounce off edges
        if (x < 0 || x > width) {
          vx = -vx
          x = Math.max(0, Math.min(width, x))
        }
        if (y < 0 || y > height) {
          vy = -vy
          y = Math.max(0, Math.min(height, y))
        }

        return { x, y, vx, vy }
      })
    )
  }, [])

  // Handle mouse movement
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }, [])

  // Handle mouse leaving canvas
  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: null, y: null })
  }, [])

  return {
    particles,
    mousePos,
    initParticles,
    updateParticles,
    handleMouseMove,
    handleMouseLeave
  }
}

export default useParticles
