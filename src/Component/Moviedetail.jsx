import React, { useState } from "react";
import MovieDisplay from "./MovieDisplay";
import Mycontext from "./Context";
import { Input, Button, Flex, Box } from "@chakra-ui/react";

const Moviedetail = () => {
  const [data, setData] = useState([]);
  const [changeMovie, setChangemovie] = useState("bahubali");
  const API_KEY = "b1e07746b22a1a95afeb707ea616637c";

  const fetchapi =() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${changeMovie}`
    )
      .then((resp) => resp.json())
      .then((data) => setData(data.results))
      .catch((err) => console.log(err));
  };
  console.log(data);
 

  return (
    <div>
      <h1 style={{color:'teal',fontWeight:'bold',fontSize:'50px',marginLeft:'40%'}}>Movie App</h1>
      <Flex>
        <Box m="12px auto" >
          <Input
            variant="outline"
            placeholder="Enter Movie here!!"
            type="text"
            onChange={(e) => setChangemovie(e.target.value)}
            w="50vw"
            m="10px"
            focusBorderColor='teal'
            border={'1px solid white'}
            color={'white'}
          />

          <Button colorScheme="teal" size="md" type="submit"  mb='5px'onClick={fetchapi}>
            Search
          </Button>
        </Box>
      </Flex>
      <Mycontext.Provider value={data}>
        <MovieDisplay></MovieDisplay>
      </Mycontext.Provider>
    </div>
  );
};

export default Moviedetail;
