"use client"

import { opcoesSubmenu } from '@/Types/submenu'
import { Box, HStack, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { RxDotFilled } from 'react-icons/rx'

const ListaSubmenus = () => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState<number | null>(null); 

    return (
        <Box w={"100%"} h={"2vw"} bgColor="#F8F6F2" display={"flex"} justifyContent={"center"}>
            <HStack spacing={8}>
                {opcoesSubmenu.map((itemMenu) => (
                    <Box key={itemMenu.id.toString()}>
                        <Menu>
                            <MenuButton as={Box} bgColor={"transparent"} cursor={"pointer"}>
                                <Box display={"flex"} flexDir={"row"} color={"#7DE3B0"} gap={"5px"} fontSize={"1.1rem"} fontWeight={"500"}>
                                    <Box color={"#69593C"} mt={"4px"}>
                                        <RxDotFilled />
                                    </Box>
                                    {itemMenu.titulo}
                                </Box>
                            </MenuButton>

                            <MenuList p={0} >
                                <Box display={"flex"} flexDir={"row"} border={"none"} borderRadius={"10px"}>
                                    <Box display={"flex"} flexDir={"column"} minH="148px">
                                        {itemMenu.opcoes.map((subItem) => (
                                            <MenuItem
                                                minH="48px"
                                                key={subItem.id}
                                                as={Box}
                                                cursor={"pointer"}
                                                onMouseEnter={() => setIsSubmenuOpen(subItem.id)}
                                                onMouseLeave={() => setIsSubmenuOpen(null)}
                                                borderLeftRadius={"10px"}
                                            >
                                                <Box display={"flex"} flexDir={"row"} color={"#69593C"} 
                                                _hover={{color: "#7DE3B0"}}
                                                >
                                                    {subItem.label}
                                                    <Box fontSize={"10px"} display={"flex"} position="relative" 
                                                    justifyContent={"center"} flexDir={"column"} ml={"8px"}
                                                    onMouseEnter={() => setIsSubmenuOpen(subItem.id)}
                                                    onMouseLeave={() => setIsSubmenuOpen(null)}
                                                    _hover={{color: "#7DE3B0"}}
                                                    >
                                                        <FaChevronRight />
                                                    </Box>
                                                </Box>
                                                <Box w={"12vw"} borderLeftRadius={"10px"}>
                                                {/* Submenu */}
                                                {isSubmenuOpen === subItem.id && (
                                                    <Box w={"100%"} borderLeftRadius={"10px"} ml={"1.8rem"}>
                                                        {subItem.opcoesfinais.map((opcaoFinal) => (
                                                            <Text key={opcaoFinal.id} color={"#7DE3B0"} p={2} _hover={{ bg: "transparent" }}>
                                                                {opcaoFinal.label}
                                                            </Text>
                                                        ))}
                                                    </Box>
                                                )}
                                                </Box>
                                            </MenuItem>

                                        ))}
                                    </Box>
                                    <Box 
                                    w="25vh"
                                    backgroundImage={`url(${itemMenu.imagem})`}
                                    backgroundSize="cover"
                                    backgroundPosition="center" // centraliza a imagem
                                    backgroundRepeat="no-repeat" // evita repetição da imagem
                                    borderRightRadius={"10px"}
                                    >
                                    </Box>
                                </Box>
                            </MenuList>
                        </Menu>
                    </Box>
                ))}
            </HStack>
        </Box>
    );
}

export default ListaSubmenus;