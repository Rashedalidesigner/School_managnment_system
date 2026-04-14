
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ShowData from './components/ShowData';

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<ShowData />} />
    </Routes>
  </BrowserRouter>
}

export default App