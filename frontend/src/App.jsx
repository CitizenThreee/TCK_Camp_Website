import './App.css'
import AppRoutes from './AppRoutes'
import { RegistrationProvider } from './context/RegistrationProvider'

function App() {
  return (
    <RegistrationProvider>
      <AppRoutes>
        
      </AppRoutes>
    </RegistrationProvider>
    
  )
}

export default App
