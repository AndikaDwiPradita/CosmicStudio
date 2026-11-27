import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App'

const container = document.getElementById('root') as HTMLElement | null
if (container) {
  const root = createRoot(container)
  root.render(<App />)
} else {
  console.error('Root element not found')
}