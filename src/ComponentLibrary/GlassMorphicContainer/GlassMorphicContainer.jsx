import PropTypes from 'prop-types'
import styles from './GlassMorphicContainer.module.css'

/**
 * GlassMorphicContainer Component
 *
 * Flexible container with glassmorphic styling
 * Can be used as a wrapper for various content types
 *
 * @param {ReactNode} children - Container content
 * @param {string} variant - Style variant: 'default', 'bordered', 'solid'
 * @param {string} blur - Blur intensity: 'light', 'medium', 'heavy'
 * @param {boolean} rounded - Enable rounded corners
 * @param {string} padding - Padding size: 'none', 'small', 'medium', 'large'
 * @param {string} className - Additional CSS classes
 * @param {string} as - HTML element to render as (default: 'div')
 */
const GlassMorphicContainer = ({
  children,
  variant = 'default',
  blur = 'medium',
  rounded = true,
  padding = 'medium',
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const containerClasses = [
    styles.container,
    styles[variant],
    styles[`blur-${blur}`],
    rounded ? styles.rounded : '',
    styles[`padding-${padding}`],
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={containerClasses} {...props}>
      {children}
    </Component>
  )
}

GlassMorphicContainer.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'bordered', 'solid']),
  blur: PropTypes.oneOf(['light', 'medium', 'heavy']),
  rounded: PropTypes.bool,
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  className: PropTypes.string,
  as: PropTypes.elementType
}

export default GlassMorphicContainer
