import { Box } from '@chakra-ui/react'
import React from 'react'

const RodapeMobile = () => {
  return (
    <Box display={{base: "flex", md: "none"}} flexDir={"column"} alignItems={"center"}>
        <Box cursor={"pointer"} color={"#7DE3B0"} fontWeight={700} fontSize={"5vh"} display={"flex"}>
            Institucional
        </Box>
        
    </Box>
  )
}

export default RodapeMobile