import { Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import Image from "next/image";
import { LuSearch } from 'react-icons/lu';

import MenuInstitucional from './MenuInstitucional';
import MenuMinhaConta from './MenuMinhaConta';


const TopMenu = () => {

  return (
    <Box display={"flex"} flexDir={"row"} justifyContent={"center"}
    w="100%" h="20vh" bgColor="#F8F6F2" gap={"3%"}
    >
        <Box display={"flex"} flexDir={"column"} h={"100%"} justifyContent={"center"}>
            <Image src={"/images/logo_primeira_moda.png"} alt='Logo Primeira Moda' width={216} height={96}/>  
        </Box>
        <Box w={"20vw"} display={"flex"} flexDir={"column"} justifyContent={"center"}>
            <Box h={"35%"}>
                <InputGroup bgColor={"snow"} 
                flex="1"
                w={"95%"} borderRadius={"5%"}
                >
                    <Input placeholder="Busque na Loja" border={"2px #69593C solid"} />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' >
                            <LuSearch />
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>
        </Box>
        <Box w={"10vw"} display={"flex"} flexDir={"column"} justifyContent={"center"}>
            <MenuInstitucional/>
        </Box>
        <Box w={"10vw"} display={"flex"} flexDir={"column"} justifyContent={"center"}>
            <MenuMinhaConta/>
        </Box>
    </Box>
  )
}

export default TopMenu