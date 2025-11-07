import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { Layout } from "@/Layout"
import LandingPage from "@pages/LandingPage"
import cyberpunkTheme from "@/theme/theme"

function App() {
  return (
    <ThemeProvider theme={cyberpunkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
