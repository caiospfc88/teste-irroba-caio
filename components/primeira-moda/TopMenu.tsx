import { Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import Image from "next/image";
import { LuSearch } from 'react-icons/lu';

import MenuInstitucional from './MenuInstitucional';
import MenuMinhaConta from './MenuMinhaConta';
import Carrinho from './Carrinho';
import ListaSubmenus from './ListaSubmenus';


const TopMenu = () => {

  return (
    <Box>
        <Box bgColor="#F8F6F2" pb={"1rem"}>
            <Box display={"flex"} flexDir={"row"} justifyContent={"center"}
            w="100%" h="17vh" bgColor="#F8F6F2" gap={"1.5%"}
            >
                <Box display={"flex"} flexDir={"column"} h={"100%"} justifyContent={"center"}>
                    <Image src={"/images/logo_primeira_moda.png"} alt='Logo Primeira Moda' width={216} height={96}/>  
                </Box>
                <Box w={"32vw"} display={"flex"} flexDir={"column"} justifyContent={"center"} pr={0}>
                    <Box h={"35%"}>
                        <InputGroup bgColor={"snow"} 
                        flex="1" 
                        w={"98%"} borderRadius={"5%"}
                        >
                            <Input placeholder="Busque na Loja" border={"2px #69593C solid"} h={"50px"} fontSize={"1.2rem"}/>
                            <InputRightElement width='4.5rem' h={'3rem'}>
                                <Button h='2.5rem' size='md' bgColor={"transparent"}>
                                    <LuSearch />
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Box>
                </Box>
                <Box w={"10vw"} display={"flex"} flexDir={"column"} justifyContent={"center"}>
                    <MenuInstitucional/>
                </Box>
                <Box w={"11vw"} display={"flex"} flexDir={"column"} justifyContent={"center"}>
                    <MenuMinhaConta/>
                </Box>
                <Box w={"6vw"} display={"flex"} flexDir={"column"} justifyContent={"center"}>
                    <Carrinho/>
                </Box>
            </Box>
            <Box mt={"1rem"} bgColor="#F8F6F2">
                <ListaSubmenus/>
            </Box>  
        </Box>
        <Box
        position={"absolute"}
        w="100vw"
        h="4vh"
        bg="transparent"
        zIndex={2}
        backgroundImage="url('/images/waves-bottom.png')"
        backgroundRepeat="repeat-x" 
        backgroundSize="contain" 
        />
    </Box>
  )
}

export default TopMenu