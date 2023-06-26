import React, { useContext } from 'react'
import Mycontext from './Context'
import { Card,CardBody,Text,Heading,Stack,Image,Flex,Box ,Spinner} from '@chakra-ui/react'



const MovieDisplay = (props) => {

    const data=useContext(Mycontext)
   

    
  return (
    <div>
      {data.length>0 ?  <Flex>
        {data.map((ele)=>(
       
          <Box>
<Card w='300px' m={'20px'} h='450px'>
<CardBody overflow={'scroll'}>
  <Image
    src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`}
    alt='Green double couch with wooden legs'
  
    
  />
  <Stack mt='6' spacing='0'>
    <Heading size='md'>{ele.title}</Heading>

    <Text color='blue.600'> {ele.release_date}</Text>
    <Text  fontSize={'x-small'}>{ele.overview}</Text>
  </Stack>
</CardBody>
</Card>
</Box>
        ))}
       </Flex>: <div className='Nodata'> <h1 style={{color:'teal'}}><Spinner ml='100px'></Spinner><br/>NO Data Found</h1></div>}
    
    </div>
  )
}

export default MovieDisplay