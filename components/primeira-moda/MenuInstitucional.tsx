import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { IoHome } from "react-icons/io5";
import { HiChatBubbleLeft } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { IoStorefront } from "react-icons/io5";

const MenuInstitucional = () => {
  return (
    <Box color={"#69593C"} display={{ base: "none", md: "flex" }}>
        <Menu>
        <MenuButton as={Button} rightIcon={<IoIosArrowDown />} color={"#69593C"} bgColor={"transparent"}>
            Institucional
        </MenuButton>
        <MenuList>
            <MenuItem value="Inicio" gap={"5px"}><Box color={"#7DE3B0"}><IoHome/></Box> Início</MenuItem>
            <MenuItem value="Inicio" gap={"5px"}><Box color={"#7DE3B0"}><IoStorefront/></Box> Quem somos</MenuItem>
            <MenuItem value="Inicio" gap={"5px"}><Box color={"#7DE3B0"}><HiChatBubbleLeft/></Box> Fale Conosco</MenuItem>
        </MenuList>
        </Menu>
    </Box>
  )
}

export default MenuInstitucional