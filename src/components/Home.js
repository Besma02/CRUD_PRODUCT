import React, { useEffect,useState} from 'react'
import ProductsList from './ProductsList'
import { getallProducts } from './services'

const Home = () => {
    const [products, setProducts] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>{
        getallProducts()
        .then(res=>{
            setProducts(res.data)
            setIsPending(false)
            setError(null)
        })
        .catch(err=>{
            setError(err.message)
            setIsPending(false)
        })
    
    
       },[])
  return (
    <div>
        {isPending && <div>loading...</div>}
        {error && <div>{error}</div>}
        {products && <ProductsList products={products} title='All products'/>}
    </div>
  )
}

export default Home