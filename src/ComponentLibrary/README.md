# UI Flow Component Library

A comprehensive collection of reusable React components with glassmorphic design, built as part of the UI Flow clone project.

## 📚 Overview

This component library provides a set of pre-built, customizable UI components that follow the UI Flow design system. All components feature:

- **Glassmorphic Design**: Beautiful glass-like effects with backdrop blur
- **Consistent Styling**: Uses the centralized design system (CSS variables)
- **Full Accessibility**: Keyboard navigation and ARIA support
- **Responsive**: Mobile-first approach with responsive breakpoints
- **TypeScript-Ready**: PropTypes validation included
- **Performance Optimized**: CSS Modules for scoped styling

## 🎨 Design System

The library is built on top of a comprehensive design system located in `/src/styles/`:

- **variables.css**: All design tokens (colors, spacing, typography, effects)
- **reset.css**: Modern CSS reset with accessibility features
- **index.css**: Global styles and utility classes

## 📦 Components

### Button

Versatile button component with multiple variants and sizes.

**Variants:**
- `primary` - Glassmorphic with cyan glow (default)
- `secondary` - Solid cyan background
- `ghost` - Transparent with border

**Sizes:**
- `small` - Compact button (32px height)
- `medium` - Standard button (44px height) [default]
- `large` - Large button (56px height)

**Props:**
```jsx
<Button
  variant="primary"     // 'primary' | 'secondary' | 'ghost'
  size="medium"         // 'small' | 'medium' | 'large'
  fullWidth={false}     // boolean
  disabled={false}      // boolean
  onClick={handleClick} // function
  type="button"         // 'button' | 'submit' | 'reset'
>
  Click Me
</Button>
```

**Examples:**
```jsx
import { Button } from './ComponentLibrary'

// Primary button
<Button variant="primary" size="medium">Get Started</Button>

// Full width secondary
<Button variant="secondary" fullWidth>Subscribe</Button>

// Disabled ghost button
<Button variant="ghost" disabled>Coming Soon</Button>
```

---

### Card

Container component with glassmorphic styling and interactive effects.

**Features:**
- Glassmorphic background with blur
- Optional hover lift effect
- Optional glow effect
- Configurable padding
- Can be clickable/interactive

**Props:**
```jsx
<Card
  hover={true}          // boolean - enable hover lift
  glow={false}          // boolean - enable glow effect
  padding="medium"      // 'none' | 'small' | 'medium' | 'large'
  onClick={handleClick} // function - makes card interactive
>
  Card content here
</Card>
```

**Examples:**
```jsx
import { Card } from './ComponentLibrary'

// Basic card with hover
<Card padding="medium" hover>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// Glowing card
<Card padding="large" hover glow>
  <h3>Featured Content</h3>
  <p>This card stands out with a glow effect</p>
</Card>

// Interactive/clickable card
<Card onClick={() => console.log('clicked')} hover>
  <p>Click anywhere on this card</p>
</Card>
```

---

### GlassMorphicContainer

Flexible container component for creating glassmorphic layouts.

**Variants:**
- `default` - Standard glass effect
- `bordered` - Cyan border with glow
- `solid` - Solid background (less transparent)

**Blur Levels:**
- `light` - 10px blur
- `medium` - 20px blur (default)
- `heavy` - 30px blur

**Props:**
```jsx
<GlassMorphicContainer
  variant="default"     // 'default' | 'bordered' | 'solid'
  blur="medium"         // 'light' | 'medium' | 'heavy'
  rounded={true}        // boolean - rounded corners
  padding="medium"      // 'none' | 'small' | 'medium' | 'large'
  as="div"              // HTML element to render as
>
  Container content
</GlassMorphicContainer>
```

**Examples:**
```jsx
import { GlassMorphicContainer } from './ComponentLibrary'

// Basic container
<GlassMorphicContainer padding="medium">
  <p>Glassmorphic content</p>
</GlassMorphicContainer>

// Bordered container with heavy blur
<GlassMorphicContainer variant="bordered" blur="heavy" padding="large">
  <h2>Important Section</h2>
  <p>Stands out with border and glow</p>
</GlassMorphicContainer>

// As a section element
<GlassMorphicContainer as="section" variant="solid">
  <article>Content here</article>
</GlassMorphicContainer>
```

---

## 🚀 Usage

### Importing Components

**Individual imports:**
```jsx
import Button from './ComponentLibrary/Button'
import Card from './ComponentLibrary/Card'
```

**Named imports (recommended):**
```jsx
import { Button, Card, GlassMorphicContainer } from './ComponentLibrary'
```

### Basic Example

```jsx
import { Button, Card } from './ComponentLibrary'

function MyComponent() {
  return (
    <Card padding="large" hover glow>
      <h2>Welcome</h2>
      <p>Get started with our amazing product</p>
      <Button variant="primary" size="large">
        Get Started
      </Button>
    </Card>
  )
}
```

### Combining Components

```jsx
import { Button, Card, GlassMorphicContainer } from './ComponentLibrary'

function FeatureCard({ title, description }) {
  return (
    <Card padding="large" hover>
      <GlassMorphicContainer variant="bordered" padding="medium">
        <h3>{title}</h3>
        <p>{description}</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Button variant="primary">Learn More</Button>
          <Button variant="ghost">Documentation</Button>
        </div>
      </GlassMorphicContainer>
    </Card>
  )
}
```

---

## 🎨 Styling & Customization

### CSS Variables

All components use CSS variables from the design system. You can customize the appearance by modifying `/src/styles/variables.css`.

**Key variables:**
```css
--color-accent-cyan: #00ffff;
--glass-bg: rgba(255, 255, 255, 0.05);
--glass-blur: 20px;
--glow-cyan: 0 0 10px rgba(0, 255, 255, 0.5);
```

### CSS Modules

Each component uses CSS Modules for scoped styling. You can override styles using the `className` prop:

```jsx
<Button className="my-custom-button" variant="primary">
  Custom Styled Button
</Button>
```

### Utility Classes

The design system provides utility classes in `/src/index.css`:

```jsx
<div className="container">        {/* Max-width centered container */}
<p className="text-glow">          {/* Text with cyan glow */}
<div className="glass">            {/* Glassmorphic effect */}
```

---

## ♿ Accessibility

All components follow accessibility best practices:

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus Visible**: Clear focus indicators for keyboard navigation
- **ARIA Support**: Proper ARIA attributes where needed
- **Semantic HTML**: Uses appropriate HTML elements
- **Reduced Motion**: Respects `prefers-reduced-motion` preference

---

## 📱 Responsive Design

Components are built mobile-first and include responsive breakpoints:

- **Mobile**: ≤480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Wide**: ≥1200px

Responsive behavior includes:
- Adjusted font sizes
- Flexible layouts
- Touch-friendly sizes on mobile
- Reduced blur intensity on mobile for performance

---

## 🧪 Testing

To see all components in action, visit the **Style Guide** page:

```jsx
import StyleGuide from './pages/StyleGuide'
```

The Style Guide showcases:
- All component variants
- Interactive examples
- Different configurations
- Combined usage patterns

---

## 📝 Best Practices

1. **Always use named imports** for better tree-shaking
2. **Prefer semantic variants** over custom styling
3. **Use the design system variables** instead of hardcoded values
4. **Test with keyboard navigation** to ensure accessibility
5. **Check mobile responsiveness** on small screens
6. **Avoid deeply nesting** glassmorphic components (performance)

---

## 🔮 Future Components

Planned additions to the library:

- [ ] Input / TextArea
- [ ] Checkbox / Radio
- [ ] Select / Dropdown
- [ ] Modal / Dialog
- [ ] Tooltip
- [ ] Badge / Tag
- [ ] Progress Bar
- [ ] Skeleton Loader
- [ ] ServiceCard (specialized)
- [ ] Navigation components

---

## 📄 Component Structure

Each component follows this structure:

```
ComponentName/
├── ComponentName.jsx        # Component logic
├── ComponentName.module.css # Component styles
└── index.js                 # Re-export for clean imports
```

---

## 🤝 Contributing

When adding new components:

1. Follow the existing component structure
2. Use CSS Modules for styling
3. Include PropTypes validation
4. Add examples to the Style Guide
5. Update this README
6. Ensure accessibility compliance
7. Test on mobile and desktop

---

## 📚 Resources

- [React Documentation](https://react.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Glassmorphism Design](https://glassmorphism.com/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Author**: Sara Gismondi
**Project**: UI Flow Clone - Educational React Project
**Last Updated**: 2025-12-15
