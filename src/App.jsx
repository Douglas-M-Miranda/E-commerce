import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './component/Menu'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        setData(response.data);
      } catch (e) {
        setError(e);
      }
    }

    fetchData ()
  }, []);

  if(!data.length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/products' element={<Product data={data} />} />
        <Route path='/products/:id' element={<ProductDetails data={data} />} />
        <Route path='*' element={<p className='errorPage'>Page not found</p>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
