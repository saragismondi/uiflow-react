import PropTypes from 'prop-types'
import styles from './Card.module.css'

/**
 * Card Component
 *
 * Reusable card with glassmorphic design
 * Perfect for displaying content with visual hierarchy
 *
 * @param {ReactNode} children - Card content
 * @param {boolean} hover - Enable hover lift effect
 * @param {boolean} glow - Enable glow effect
 * @param {string} padding - Padding size: 'none', 'small', 'medium', 'large'
 * @param {string} className - Additional CSS classes
 * @param {function} onClick - Click handler (makes card interactive)
 */
const Card = ({
  children,
  hover = true,
  glow = false,
  padding = 'medium',
  className = '',
  onClick,
  ...props
}) => {
  const cardClasses = [
    styles.card,
    hover ? styles.hover : '',
    glow ? styles.glow : '',
    styles[`padding-${padding}`],
    onClick ? styles.clickable : '',
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick(e)
        }
      } : undefined}
      {...props}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  hover: PropTypes.bool,
  glow: PropTypes.bool,
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Card
