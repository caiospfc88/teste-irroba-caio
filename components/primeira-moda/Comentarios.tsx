import { listaProdutos } from '@/Types/produto';
import { Avatar, Box, Button, Divider, Menu, MenuButton, MenuItem, MenuList, Textarea, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

interface ComentariosI {
    id: number;
}

const Comentarios = ({id}:ComentariosI) => {

    const produtoParam = listaProdutos.filter((item) => item.id == id)

  return (
    <Box color={"#69593C"} display={"flex"} justifyContent={"center"} mb={"8vh"}>
        <Box w={"80vw"}>
            <Box fontWeight={700} fontSize={"1.6vw"} position={"relative"}>
                Comentários
                <Box display={"flex"} position={"absolute"} right={"0.2vw"} top={"0.2vw"} 
                fontSize={"1vw"} color={"#69593C"}>
                    Classificar por:
                    <Box>
                    <Menu>
                    <MenuButton as={Button} rightIcon={<FaAngleDown  />}
                    bgColor={"transparent"} w={"10vw"} h={"vw"} fontSize={"1vw"} 
                    color={"#69593C"} _hover={{bgColor: "transparent"}} fontWeight={700}
                    >
                       Mais recentes 
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Mais antigos</MenuItem>
                        <MenuItem>Mais relevantes</MenuItem>
                    </MenuList>
                    </Menu>
                    </Box> 
                </Box>
            </Box>
            <Box>
                <Textarea placeholder='Escreva um comentario aqui...' 
                borderColor={"#69593C"} color={"#69593C"} minH={"30vh"}
                />
            </Box>
            <Box display={"flex"} justifyContent={"end"} mt={"1.5vh"}>
                <Button bgColor={"#69593C"} color={"#FFFFFF"}>
                    Publicar Comentario
                </Button>
            </Box>
            <Box mt={"2.5vh"} mb={"2.5vh"}>
                <Divider orientation='horizontal' />
            </Box>
            <Box display={"flex"} gap={"1.2vw"} position={"relative"}>
                <Box>
                    <Wrap>
                        <WrapItem>
                            <Avatar name='Rudi Duarte' src='/images/usuario-comentario.jfif' size={"lg"}/>
                        </WrapItem>
                    </Wrap>
                </Box>
                <Box>
                    <Box color={"#69593C"} fontSize={"1.2vw"} fontWeight={700}>
                        Rudi Duarte
                    </Box>
                    <Box color={"#69593C"} mt={"0.8vh"} fontSize={"1vw"}>
                    {produtoParam[0].descricao}
                    </Box>
                </Box>
                <Box color={"#69593C"} position={"absolute"} right={"0.2vw"} fontSize={"1vw"}>
                    12/03/2020 - 18:42
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Comentarios