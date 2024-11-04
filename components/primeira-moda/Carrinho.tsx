import { Box, Button, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverFooter, PopoverTrigger, Text } from '@chakra-ui/react'
import React from 'react'
import { GiShoppingCart } from "react-icons/gi";

const Carrinho = () => {
  return (
    <Box>
        <Popover>
        <PopoverTrigger>
        <Box w={"6rem"} h={"3rem"} borderRadius={"10px"} bgColor={"#7DE3B0"} 
        display={"flex"} justifyContent={"center"} flexDir={"row"} cursor={"pointer"}
        >
            <Box fontSize={"35px"} display={"flex"} justifyContent={"center"} flexDir={"column"} color={"snow"}
            w={"50%"}
            >
                <GiShoppingCart/>
            </Box>
            <Box display={"flex"} justifyContent={"center"} flexDir={"column"}>
                <Box borderRadius={"50%"} fontSize={"20px"} display={"flex"} justifyContent={"center"} flexDir={"column"}
                bgColor={"#FCF6B3"} w={"2rem"} h={"2rem"} textAlign={"center"}
                >
                    <Text color={"#7DE3B0"}>3</Text>
                </Box>
            </Box>
        </Box>
        </PopoverTrigger>
        <PopoverContent w={280}>
            <PopoverArrow />
            <PopoverBody></PopoverBody>
            <PopoverFooter>
                <Box display={"flex"} justifyContent={"space-between"} flexDir={"row"} color={"#69593C"}>
                    Total <Text color={"#7DE3B0"} fontWeight={"bold"}>R$ 450,00</Text>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} mt={"5px"}>
                    <Button bgColor={"#EAFAF2"} color={"#7DE3B0"}>Ver carrinho</Button>
                    <Button bgColor={"#7DE3B0"} color={"snow"}>Comprar</Button>
                </Box>
            </PopoverFooter>
        </PopoverContent>
        </Popover>
    </Box>
  )
}

export default Carrinho