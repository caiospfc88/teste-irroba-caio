"use client"

import { opcoesSubmenu } from '@/Types/submenu'
import { Box, HStack, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { RxDotFilled } from 'react-icons/rx'

const ListaSubmenus = () => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState<number | null>(null);

    return (
        <Box w={"100vw"} h={"2vw"} bgColor="#F8F6F2" display={"flex"} justifyContent={"center"}>
            <HStack as="ul" spacing={8}>
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

                            <MenuList p={0}>
                                <Box display={"flex"} position="relative">
                                    <Box>
                                        {itemMenu.opcoes.map((subItem) => (
                                            <MenuItem
                                                minH="48px"
                                                key={subItem.id}
                                                as={Box}
                                                cursor={"pointer"}
                                                onMouseEnter={() => setIsSubmenuOpen(subItem.id)}
                                                onMouseLeave={() => setIsSubmenuOpen(null)}
                                            >
                                                <Box display={"flex"} flexDir={"row"} color={"#69593C"}>
                                                    {subItem.label}
                                                    <Box fontSize={"10px"} display={"flex"} justifyContent={"center"} flexDir={"column"} ml={"8px"}>
                                                        <FaChevronRight />
                                                    </Box>
                                                </Box>

                                                {/* Submenu */}
                                                {isSubmenuOpen === subItem.id && (
                                                    <Box w={"10vw"}
                                                    bg="white"
                                                    onMouseEnter={() => setIsSubmenuOpen(subItem.id)}
                                                    onMouseLeave={() => setIsSubmenuOpen(null)}
                                                    >
                                                        {subItem.opcoesfinais.map((opcaoFinal) => (
                                                            <MenuItem key={opcaoFinal.id}>
                                                                {opcaoFinal.label}
                                                            </MenuItem>
                                                        ))}
                                                    </Box>
                                                )}
                                            </MenuItem>
                                        ))}
                                    </Box>
                                    <Box
                                        w={"9vw"}
                                        backgroundImage={`url(${itemMenu.imagem})`}
                                        backgroundSize="cover"
                                        backgroundPosition="center"
                                        backgroundRepeat="no-repeat"
                                    ></Box>
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