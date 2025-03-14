import { Route, Routes } from 'react-router'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import './styles/global.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="quiz" element={<QuizPage />} />
      </Route>
    </Routes>
  )
}

export default App
