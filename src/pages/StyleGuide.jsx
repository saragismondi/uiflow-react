import { Button, Card, GlassMorphicContainer } from '../ComponentLibrary'
import styles from './StyleGuide.module.css'

/**
 * Style Guide Page
 * Complete showcase of the Component Library
 * Design system documentation and component examples
 */
const StyleGuide = () => {
  return (
    <div className={styles.demo}>
      <div className="container">
        <header className={styles.header}>
          <h1 className="text-glow">UI Flow Style Guide</h1>
          <p>Component Library & Design System Documentation</p>
        </header>

        {/* Button Variants Section */}
        <section className={styles.section}>
          <h2>Button Variants</h2>

          <div className={styles.group}>
            <h3>Primary Buttons</h3>
            <div className={styles.row}>
              <Button variant="primary" size="small">Small Primary</Button>
              <Button variant="primary" size="medium">Medium Primary</Button>
              <Button variant="primary" size="large">Large Primary</Button>
            </div>
          </div>

          <div className={styles.group}>
            <h3>Secondary Buttons</h3>
            <div className={styles.row}>
              <Button variant="secondary" size="small">Small Secondary</Button>
              <Button variant="secondary" size="medium">Medium Secondary</Button>
              <Button variant="secondary" size="large">Large Secondary</Button>
            </div>
          </div>

          <div className={styles.group}>
            <h3>Ghost Buttons</h3>
            <div className={styles.row}>
              <Button variant="ghost" size="small">Small Ghost</Button>
              <Button variant="ghost" size="medium">Medium Ghost</Button>
              <Button variant="ghost" size="large">Large Ghost</Button>
            </div>
          </div>

          <div className={styles.group}>
            <h3>Button States</h3>
            <div className={styles.row}>
              <Button variant="primary">Normal</Button>
              <Button variant="primary" disabled>Disabled</Button>
              <Button variant="secondary" fullWidth>Full Width</Button>
            </div>
          </div>
        </section>

        {/* Card Component Section */}
        <section className={styles.section}>
          <h2>Card Component</h2>

          <div className={styles.grid}>
            <Card padding="medium" hover glow>
              <h3>Card with Hover & Glow</h3>
              <p>This card has hover lift effect and glow. Try hovering over it!</p>
              <Button variant="secondary" size="small">Learn More</Button>
            </Card>

            <Card padding="medium" hover={false}>
              <h3>Card without Hover</h3>
              <p>This card remains static with no hover effect.</p>
              <Button variant="ghost" size="small">Details</Button>
            </Card>

            <Card padding="large" hover glow>
              <h3>Large Padding Card</h3>
              <p>This card has more generous padding for content breathing room.</p>
              <p>Perfect for important content that needs emphasis.</p>
            </Card>

            <Card
              padding="medium"
              hover
              onClick={() => alert('Card clicked!')}
            >
              <h3>Clickable Card</h3>
              <p>This entire card is interactive. Click anywhere on it!</p>
            </Card>
          </div>
        </section>

        {/* GlassMorphic Container Section */}
        <section className={styles.section}>
          <h2>GlassMorphic Containers</h2>

          <div className={styles.group}>
            <h3>Default Container</h3>
            <GlassMorphicContainer variant="default" padding="medium">
              <p>Default glassmorphic container with medium blur</p>
            </GlassMorphicContainer>
          </div>

          <div className={styles.group}>
            <h3>Bordered Container with Cyan Glow</h3>
            <GlassMorphicContainer variant="bordered" padding="medium">
              <p>Bordered variant with cyan accent and glow effect</p>
            </GlassMorphicContainer>
          </div>

          <div className={styles.group}>
            <h3>Solid Container</h3>
            <GlassMorphicContainer variant="solid" padding="medium">
              <p>Solid background variant for higher contrast</p>
            </GlassMorphicContainer>
          </div>

          <div className={styles.group}>
            <h3>Blur Variants</h3>
            <div className={styles.grid}>
              <GlassMorphicContainer blur="light" padding="small">
                <p><strong>Light Blur</strong></p>
                <p>Subtle blur effect</p>
              </GlassMorphicContainer>

              <GlassMorphicContainer blur="medium" padding="small">
                <p><strong>Medium Blur</strong></p>
                <p>Standard blur effect</p>
              </GlassMorphicContainer>

              <GlassMorphicContainer blur="heavy" padding="small">
                <p><strong>Heavy Blur</strong></p>
                <p>Intense blur effect</p>
              </GlassMorphicContainer>
            </div>
          </div>
        </section>

        {/* Combined Example Section */}
        <section className={styles.section}>
          <h2>Combined Components</h2>
          <Card padding="large" hover glow>
            <GlassMorphicContainer variant="bordered" padding="medium">
              <h3>Nested Components</h3>
              <p>Card containing a glassmorphic container with buttons</p>
              <div className={styles.row} style={{ marginTop: 'var(--spacing-lg)' }}>
                <Button variant="primary" size="medium">Get Started</Button>
                <Button variant="ghost" size="medium">Learn More</Button>
              </div>
            </GlassMorphicContainer>
          </Card>
        </section>

        <footer className={styles.footer}>
          <p>Component Library by Sara Gismondi</p>
          <p className={styles.muted}>UI Flow Clone - React Project</p>
        </footer>
      </div>
    </div>
  )
}

export default StyleGuide
