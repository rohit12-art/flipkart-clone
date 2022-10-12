import Header from './components/header/Header';
import { AppBar , Toolbar , Box } from '@mui/material'
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import { Routes , Route } from 'react-router-dom'
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';

function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/product/:id' element={ <DetailView /> } />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </Box>
    </DataProvider>
  );
}

export default App;
