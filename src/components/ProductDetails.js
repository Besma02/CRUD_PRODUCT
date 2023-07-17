
import React, { useEffect,useState} from 'react'
import { Text,Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Button } from '@chakra-ui/react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteProduct, getallProducts } from './services'

const ProductDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const[product,setProduct]=useState({})
    const[isPending,setIsPending]=useState(true)
    const[error,setError]=useState(null)
    useEffect(()=>{
    getallProducts(id)
     .then(res=>{
         setProduct(res.data)
         setIsPending(false)
         setError(null)
     })
     .catch(err=>{
         setError(err.message)
         setIsPending(false)
     })
 
    },[])
 const handledelete=async(id)=>{
    await deleteProduct(product.id)
    navigate('/')

 }
  return (
    <div>
        {isPending && <div>loading...</div>}
        {error && <div>{error}</div>}
        {product && 
        <article>
            <Card key={product.id} bg="white" p="10px" >
        <CardHeader>
        {/* <img src={product.img} className='photo'/> */}
        <Heading textAlign='center' color='#f1356d'>{product.name}</Heading>
        </CardHeader>
        <CardBody>
        <Text>{product.description}</Text>
        </CardBody>
        <CardFooter>
        <Heading as="h3" textAlign='center' fontSize="20px" paddingRight="20px">{product.price}$</Heading>
        <Heading as="h3"textAlign='center' fontSize="20px">{product.quantity}</Heading>
        </CardFooter>
        <Link to='/'><Button marginRight="5px" onClick={()=>handledelete(product.id)}>delete</Button></Link>
        </Card>
        </article>
         }
    </div>
  )
}

export default ProductDetails