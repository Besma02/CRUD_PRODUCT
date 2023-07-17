import { Button,Text,Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductsList = ({products,title}) => {
  return (
    <div>
        <Heading textAlign='center' marginBottom="20px">{title}</Heading>
    <SimpleGrid minChildWidth={250} gap="10px" bg='gray.50'm="10px">
       {products.map(product=>(
        <Card key={product.id} bg="white" p="10px" >
        <CardHeader>
        {/* <img src={product.img}/> */}
       <Heading textAlign='center' color='#f1356d'>{product.name}</Heading>
        </CardHeader>
        <CardBody>
        <Text>{product.description}</Text>
        </CardBody>
        <CardFooter>
        <Heading as="h3" textAlign='center' fontSize="20px" paddingRight="20px">{product.price}$</Heading>
        <Heading as="h3"textAlign='center' fontSize="20px">{product.quantity}</Heading>
        </CardFooter>
        <Box d-flex justifyContent="center" alignItems="center" marginLeft="25%">
        <Link to={`/products/${product.id}`}><Button marginRight="5px">More</Button></Link>
        <Link to={`/update/${product.id}`}><Button marginRight="5px">update</Button></Link>
        </Box>
        </Card>
        
       ))}
       
      </SimpleGrid> 
    </div>

  )
}

export default ProductsList