import Footer from './'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Footer', () => {
    test('Should render without crashing', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
    })
})
test('Change theme', async () => {
  render(
      <ThemeProvider>
          <Footer />
      </ThemeProvider>
  )
  const nightModeButton = screen.getByRole('button')
  expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
})
