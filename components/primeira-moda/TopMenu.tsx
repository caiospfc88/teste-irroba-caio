"use client"
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, InputGroup, InputRightElement, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Image from "next/image";
import { LuMenu, LuSearch } from 'react-icons/lu';

import MenuInstitucional from './MenuInstitucional';
import MenuMinhaConta from './MenuMinhaConta';
import Carrinho from './Carrinho';
import ListaSubmenus from './ListaSubmenus';


const TopMenu = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
        <Box bgColor="#F8F6F2" pb={"1rem"} w={"100vw"}>
            <Box display={"flex"} flexDir={"row"} justifyContent={"center"}
            w="100vw" h={{base: "34vh", md: "17vh"}} bgColor="#F8F6F2" gap={"1.5%"}
            >
                <Box display={{base: "flex", md: "none"}} alignItems={"center"}>
                    <Button color={"#69593C"} onClick={onOpen} bgColor={"transparent"} 
                    fontSize={"8vw"} _hover={{bgColor: "transparent", transform: "scale(1.1)"}}
                    >
                        <LuMenu />
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement='left'
                        onClose={onClose}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Create your account</DrawerHeader>

                        <DrawerBody>
                            <Input placeholder='Type here...' />
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                            </Button>
                            <Button colorScheme='blue'>Save</Button>
                        </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </Box>
                <Box display={"flex"} gap={"4vh"} flexDir={{base: "column", md: "row"}} alignItems={"center"} justifyContent={"center"}
                pos={"relative"}
                >
                    <Box display={"flex"} flexDir={"column"} justifyContent={"center"}
                    maxW={{ base: "60%", md: "85%", lg: "100%" }} h="auto" mt={{base: "5%", md: "1%"}}
                    >
                        <Image src={"/images/logo_primeira_moda.png"} alt='Logo Primeira Moda' width={216} height={96}/>  
                    </Box>
                    <Box w={{base: "60vw", md: "32vw"}} display={"flex"} flexDir={"column"} justifyContent={"center"} pr={0}>
                        <Box h={"35%"}>
                            <InputGroup bgColor={"snow"} 
                            flex="1" pos={{base: "absolute", md: "relative"}}
                            w={"98%"} borderRadius={"5%"}
                            >
                                <Input placeholder="Busque na Loja" border={"2px #69593C solid"} h={{base: "38px", md: "50px"}} 
                                fontSize={{base:"1rem",md:"1.2rem"}}/>
                                <InputRightElement width={{base: "2rem", md:'4.5rem'}} position={"absolute"}
                                top={{base:"0",md:"5px"}} right={{base: "2px", md: "0"}}
                                >
                                    <Button h='1.5rem' size={{base: "sm", md:'md'}} bgColor={"transparent"}
                                    fontSize={{base: "5vw"}}
                                    >
                                        <LuSearch />
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                    </Box>
                </Box>
                <Box w={"10vw"} display={{base: "none",md: "flex"}} flexDir={"column"} justifyContent={"center"}>
                    <MenuInstitucional/>
                </Box>
                <Box w={"11vw"} display={{base: "none",md: "flex"}} flexDir={"column"} justifyContent={"center"}>
                    <MenuMinhaConta/>
                </Box>
                <Box w={"6vw"} display={"flex"} flexDir={"column"} justifyContent={"center"}
                alignItems={"center"}
                >
                    <Carrinho/>
                </Box>
            </Box>
            <Box bgColor="#F8F6F2">
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