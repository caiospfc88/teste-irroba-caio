import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const RodapeMobile = () => {
  return (
    <Box display={{base: "flex", md: "none"}} flexDir={"column"} alignItems={"center"} h={"65vh"} mt={"4vh"}
    gap={"2vw"} letterSpacing={"0.5vw"}
    >
        <Box cursor={"pointer"} color={"#7DE3B0"} fontWeight={700} fontSize={"6vh"} display={"flex"}
        position={"relative"} w={"100%"} alignItems={"center"}
        >
          <Box display={"flex"} flexDir={"row"} w={"100%"} justifyContent={"center"}>
            Institucional <Box position={"absolute"} right={"4vw"} top={"1.6vh"}><FaPlus /></Box>
          </Box>
            
        </Box>
        <Box cursor={"pointer"} color={"#7DE3B0"} fontWeight={700} fontSize={"6vh"} display={"flex"}
        position={"relative"} w={"100%"} alignItems={"center"}
        >
          <Box display={"flex"} flexDir={"row"} w={"100%"} justifyContent={"center"}>
            Minha Conta <Box position={"absolute"} right={"4vw"} top={"1.6vh"}><FaPlus /></Box>
          </Box>
        </Box>
        <Box cursor={"pointer"} color={"#7DE3B0"} fontWeight={700} fontSize={"6vh"} display={"flex"}
        position={"relative"} w={"100%"} alignItems={"center"}
        >
          <Box display={"flex"} flexDir={"row"} w={"100%"} justifyContent={"center"}>
            Fale Conosco <Box position={"absolute"} right={"4vw"} top={"1.6vh"}><FaPlus /></Box>
          </Box>
        </Box>
        <Box cursor={"pointer"} color={"#7DE3B0"} fontWeight={700} fontSize={"6vh"} display={"flex"}
        position={"relative"} w={"100%"} alignItems={"center"}
        >
          <Box display={"flex"} flexDir={"row"} w={"100%"} justifyContent={"center"}>
            Redes Sociais 
          </Box>
        </Box>
        <Box cursor={"pointer"} color={"#7DE3B0"} fontWeight={700} fontSize={"6vh"} display={"flex"}
        position={"relative"} w={"100%"} alignItems={"center"}
        >
          <Box display={"flex"} flexDir={"row"} w={"100%"} justifyContent={"center"} gap={"3vw"} mt={"2vh"}>
            <Box>
              <Button bgImage={"url('/images/icone-facebook.png')"} backgroundSize={"contain"} borderRadius={"50%"}
              _hover={{bgColor: "transparent", transform: "scale(1.5)", transition: "0.8s"}}
              />
            </Box>
            <Box>
              <Button bgImage={"url('/images/icone-instagram.png')"} backgroundSize={"contain"} borderRadius={"50%"}
              _hover={{bgColor: "transparent", transform: "scale(1.5)", transition: "0.8s"}}
              />
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default RodapeMobile