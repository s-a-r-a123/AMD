import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero Component', () => {
  it('renders the correct heading', () => {
    render(<Hero />)
    const heading = screen.getByText(/Defy the Gravity/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders the CTA buttons with correct aria-labels', () => {
    render(<Hero />)
    const accessButton = screen.getByLabelText(/Enter the LUMINANCE orbit/i)
    const blueprintButton = screen.getByLabelText(/View technical blueprint/i)
    expect(accessButton).toBeInTheDocument()
    expect(blueprintButton).toBeInTheDocument()
  })

  it('contains the hero image with alt text', () => {
    render(<Hero />)
    const img = screen.getByAltText(/Futuristic LUMINANCE retail environment/i)
    expect(img).toBeInTheDocument()
  })
})
