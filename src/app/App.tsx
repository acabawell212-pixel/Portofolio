import { BrowserRouter } from 'react-router-dom'

import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { PageBackground } from '../components/layout/PageBackground'
import { AppProviders } from './providers'
import { AppRoutes } from './routes'

export default function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <div className="relative min-h-screen bg-[#101a2b] text-slate-100">
          <PageBackground />
          <div className="relative z-10">
            <Navbar />
            <main>
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </div>
      </AppProviders>
    </BrowserRouter>
  )
}
