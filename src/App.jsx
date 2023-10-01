
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SellerAuth from './sellerPages/SellerAuth'
import SellerHome from './sellerPages/SellerHome'
import { useSelector } from 'react-redux'
import CreateProduct from './sellerPages/CreateProduct'

function App() {
const {token,seller} = useSelector((state)=>state.registerReducer)

  return (
    <>
  <Routes>
  <Route path='/seller/auth' element={<SellerAuth/>}/>
  <Route path='/seller' element={token ?   <SellerHome/> : <Navigate to={"/seller"} /> }/>
  <Route path='/seller/createProduct' element={token ?   <CreateProduct/> : <Navigate to={"/seller"} /> }/>
  </Routes>

    </>
  )
}

export default App
