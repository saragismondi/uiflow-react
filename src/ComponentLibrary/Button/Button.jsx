import PropTypes from 'prop-types'
import styles from './Button.module.css'

/**
 * Button Component
 *
 * Reusable button with multiple variants and sizes
 * Features glassmorphic design with glow effects
 *
 * @param {string} variant - Button style variant: 'primary', 'secondary', 'ghost'
 * @param {string} size - Button size: 'small', 'medium', 'large'
 * @param {boolean} fullWidth - Makes button take full width of container
 * @param {boolean} disabled - Disables the button
 * @param {function} onClick - Click handler
 * @param {ReactNode} children - Button content
 * @param {string} type - Button type: 'button', 'submit', 'reset'
 * @param {string} className - Additional CSS classes
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  onClick,
  children,
  type = 'button',
  className = '',
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string
}

export default Button
