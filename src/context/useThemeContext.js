import { useContext } from 'react'
import { ThemeContext } from './ThemeContextProvider'

export function useThemeContext() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useThemeContext must be used within a ThemeProvider')
  return ctx
}
