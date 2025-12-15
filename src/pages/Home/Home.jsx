import { Link } from 'react-router-dom'
import Hero from '../../components/sections/Hero'
import styles from './Home.module.css'

/**
 * Home Page
 * Main landing page with Hero section
 */
const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />

      {/* Temporary navigation link to Style Guide */}
      <div className={styles.devNav}>
        <Link to="/style-guide" className={styles.devLink}>
          → View Component Library / Style Guide
        </Link>
      </div>
    </div>
  )
}

export default Home
