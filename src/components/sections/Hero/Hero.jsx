import { Button } from '../../../ComponentLibrary'
import ParticleNetwork from '../../canvas/ParticleNetwork'
import styles from './Hero.module.css'

/**
 * Hero Section Component
 * Main hero section with two-column layout
 * Based on ui-flow.com design with interactive canvas animations
 */
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          {/* Left Column - Content */}
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleMain}>UI FLOW</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Web Development Specialist
            </p>
            <p className={styles.heroDescription}>
              Creating modern, responsive, and interactive web experiences
              with cutting-edge technologies and design systems.
            </p>
            <div className={styles.heroActions}>
              <Button
                variant="secondary"
                size="large"
                onClick={() => window.location.href = 'mailto:contact@example.com'}
              >
                Get In Touch
              </Button>
              <Button
                variant="ghost"
                size="large"
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Right Column - Graphics */}
          <div className={styles.heroRight}>
            <div className={styles.graphicsContainer}>
              {/* Particle Network Canvas */}
              <div className={styles.particleContainer}>
                <ParticleNetwork
                  particleCount={100}
                  maxDistance={150}
                  particleSpeed={0.5}
                  particleSize={2}
                />
              </div>

              {/* 3D Wireframe Cube */}
              <div className={styles.wireframeContainer}>
                <div className={styles.cube}>
                  <div className={styles.cubeFace}></div>
                  <div className={styles.cubeFace}></div>
                  <div className={styles.cubeFace}></div>
                  <div className={styles.cubeFace}></div>
                  <div className={styles.cubeFace}></div>
                  <div className={styles.cubeFace}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
