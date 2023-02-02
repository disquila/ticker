import { Route, Routes } from 'react-router-dom'
import { Navigation } from './Components/Navigation';
import { MainPage } from './Pages/MainPage';
import { QuotesPage } from './Pages/QuotesPage';

function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/quotes' element={<QuotesPage />} />
    </Routes>
    </>
  )
}

export default App;