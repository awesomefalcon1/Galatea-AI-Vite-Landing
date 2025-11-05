import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { Layout } from "@/Layout"
import LandingPage from "@pages/LandingPage"
import { CompanionsPage } from "@pages/CompanionsPage"
import { ProfilePage } from "@pages/ProfilePage/ProfilePage"
import WelcomeDashboard from "@pages/WelcomeDashboard"
import { MatchesPage } from "@pages/MatchesPage"
import ProfileOnboardingScreen from "@pages/ProfilePage/ProfileOnboardingScreen"
import TinderStyleOnboarding from "@pages/ProfilePage/TinderStyleOnboarding"
import SwipesPage from "@pages/SwipesPage"
import cyberpunkTheme from "@/theme/theme"

function App() {
  return (
    <ThemeProvider theme={cyberpunkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="dashboard" element={<WelcomeDashboard />} />
            <Route path="companions" element={<CompanionsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="matches" element={<MatchesPage />} />
            <Route path="swipes" element={<SwipesPage />} />
            <Route path="onboarding" element={<TinderStyleOnboarding />} />
            <Route path="onboarding-detailed" element={<ProfileOnboardingScreen />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
