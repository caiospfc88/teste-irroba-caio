"use client"

import { opcoesSubmenu } from '@/Types/submenu'
import { Box, HStack, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { RxDotFilled } from 'react-icons/rx'

const ListaSubmenus = () => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState<number | null>(null); 

    return (
        <Box w={"100vw"} h={"2vw"} bgColor="#F8F6F2" display={"flex"} justifyContent={"center"}>
            <HStack as="ul" spacing={8}>
                {opcoesSubmenu.map((itemMenu) => (
                    <Box key={itemMenu.id.toString()} position="relative">
                        <Menu>
                            <MenuButton as={Box} bgColor={"transparent"} cursor={"pointer"}>
                                <Box display={"flex"} flexDir={"row"} color={"#7DE3B0"} gap={"5px"} fontSize={"1.1rem"} fontWeight={"500"}>
                                    <Box color={"#69593C"} mt={"4px"}>
                                        <RxDotFilled />
                                    </Box>
                                    {itemMenu.titulo}
                                </Box>
                            </MenuButton>

                            <MenuList p={0}>
                                <Box display={"flex"} flexDir={"column"}>
                                    {itemMenu.opcoes.map((subItem) => (
                                        <MenuItem
                                            minH="48px"
                                            key={subItem.id}
                                            as={Box}
                                            cursor={"pointer"}
                                            position="relative"
                                            onMouseEnter={() => setIsSubmenuOpen(subItem.id)}
                                            onMouseLeave={() => setIsSubmenuOpen(null)}
                                        >
                                            <Box display={"flex"} flexDir={"row"} color={"#69593C"}>
                                                {subItem.label}
                                                <Box fontSize={"10px"} display={"flex"} justifyContent={"center"} flexDir={"column"} ml={"8px"}>
                                                    <FaChevronRight />
                                                </Box>
                                            </Box>
                                            <Box w={"10vw"} position={"relative"}>
                                            {/* Submenu */}
                                            {isSubmenuOpen === subItem.id && (
                                                <Box
                                                    position="absolute"
                                                    left="10%" // Posiciona o submenu à direita do item principal
                                                    top="0"
                                                    bg="white"
                                                    zIndex="dropdown"
                                                    minWidth="150px"
                                                    p="4"
                                                    onMouseEnter={() => setIsSubmenuOpen(subItem.id)}
                                                    onMouseLeave={() => setIsSubmenuOpen(null)}
                                                >
                                                    {subItem.opcoesfinais.map((opcaoFinal) => (
                                                        <Text key={opcaoFinal.id} p={2} _hover={{ bg: "gray.100" }}>
                                                            {opcaoFinal.label}
                                                        </Text>
                                                    ))}
                                                </Box>
                                            )}
                                            </Box>
                                        </MenuItem>
                                    ))}
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