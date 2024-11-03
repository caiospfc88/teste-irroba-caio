"use client"
import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";



const MenuMinhaConta = () => {

    const [logado,setLogado] = useState<boolean>(false)

    const logar = () =>{
        setLogado(true)
    }

    if (logado == true) {
        return (
            <Box>
                <Menu>
                <MenuButton as={Button} rightIcon={<IoIosArrowDown />} color={"#69593C"} bgColor={"transparent"}>
                    Minha Conta
                </MenuButton>
                <MenuList>
                    <MenuItem value="Inicio" gap={"5px"}><Box color={"#7DE3B0"} ><FaClipboardList/></Box> Meus pedidos</MenuItem>
                    <MenuItem value="Inicio" gap={"5px"}><Box color={"#7DE3B0"} ><IoMdHeart/></Box> Favoritos</MenuItem>
                    <MenuItem value="Inicio" gap={"5px"}><Box color={"#7DE3B0"} ><FaUserLarge/></Box> Editar perfil</MenuItem>
                </MenuList>
                </Menu>
            </Box>
          )
    } else {
        return (
            <Box>
                <Menu>
                <MenuButton as={Button} rightIcon={<IoIosArrowDown />} color={"#69593C"} bgColor={"transparent"}>
                    Minha Conta
                </MenuButton>
                <MenuList>
                    <MenuItem value="Inicio" gap={"5px"}><Box color={"#7DE3B0"}><FaUserPlus/></Box> Criar Conta</MenuItem>
                    <MenuItem value="Inicio" onClick={logar} gap={"5px"}><Box color={"#7DE3B0"} ><BsFillDoorOpenFill/></Box> Entrar</MenuItem>
                </MenuList>
                </Menu>
            </Box>
          )
    }

  
}

export default MenuMinhaConta