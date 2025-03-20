import { Route, Routes } from 'react-router'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import './styles/global.css'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import AboutPage from './pages/AboutPage'
import QuizLayout from './components/layout/QuizLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
      </Route>
      <Route path="/" element={<QuizLayout />}>
        <Route path="quiz" element={<QuizPage />} />
      </Route>
    </Routes>
  )
}

export default App
