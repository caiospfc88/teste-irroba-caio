"use client"
import { useCarrinho } from '@/context/CarrinhoContext';
import { Box, Button, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverFooter, PopoverTrigger, Text } from '@chakra-ui/react';
import React from 'react';
import { GiShoppingCart } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import Image from 'next/image';

export interface ProdutoCarrinho {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    imagem: string;
}

const Carrinho = () => {
    
    const { carrinho, removerItem, total } = useCarrinho();

    return (
        <Box>
            <Popover>
                <PopoverTrigger>
                    <Box w={{base: "3.5rem", md: "6rem"}} h={"3rem"} borderRadius={"10px"} bgColor={"#7DE3B0"} alignItems={"center"}
                         display={"flex"} justifyContent={"center"} flexDir={{base: "column", md: "row"}} cursor={"pointer"}>
                        <Box fontSize={{base: "15vh", md: "35px"}} display={"flex"} justifyContent={"center"} flexDir={{base: "row", md: "column"}} 
                        color={"snow"} w={"50%"} fontWeight={700}>
                            <GiShoppingCart />
                        </Box>
                        <Box display={{base: "none", md: "flex"}} justifyContent={"center"} flexDir={"column"}>
                            <Box borderRadius={"50%"} fontSize={"20px"} display={"flex"} justifyContent={"center"} flexDir={"column"}
                                 bgColor={"#FCF6B3"} w={"2rem"} h={"2rem"} textAlign={"center"}>
                                <Text color={"#7DE3B0"}>{carrinho.length}</Text>
                            </Box>
                        </Box>
                    </Box>
                </PopoverTrigger>
                
                <PopoverContent w={300}>
                    <PopoverArrow />
                    <PopoverBody>
                        {carrinho.length > 0 ? (
                            carrinho.map((item, index) => (
                                <Box key={index} display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={2}>
                                    <Box>
                                        <Text fontWeight={"bold"} color={"#69593C"}>{item.nome}</Text>
                                        <Text fontSize={"sm"} color={"gray.500"}>
                                            {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                        </Text>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <Image src={item.imagem} alt={item.nome} width={50} style={{ marginRight: "8px" }} />
                                    </Box>
                                    <Box>
                                        <Button color={"#69593C"} size="xs" ml={"0.5vw"} bgColor={"transparent"}
                                        onClick={() => removerItem(index)} fontSize={"1.5vws"} w={"2vw"} p={0}
                                        _hover={{bgColor: "red",color: "snow", transform: "scale(1.1)", transition:"0.8s"}}
                                        >
                                            <RiCloseFill />
                                        </Button>
                                    </Box>
                                </Box>
                            ))
                        ) : (
                            <Text color="gray.500">Seu carrinho está vazio</Text>
                        )}
                    </PopoverBody>
                    
                    <PopoverFooter>
                        <Box display={"flex"} justifyContent={"space-between"} flexDir={"row"} color={"#69593C"}>
                            Total: <Text color={"#7DE3B0"} fontWeight={"bold"}>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
                        </Box>
                        <Box display={"flex"} justifyContent={"space-between"} mt={"5px"}>
                            <Button bgColor={"#EAFAF2"} color={"#7DE3B0"}>Ver carrinho</Button>
                            <Button bgColor={"#7DE3B0"} color={"snow"}>Comprar</Button>
                        </Box>
                    </PopoverFooter>
                </PopoverContent>
            </Popover>
        </Box>
    );
};

export default Carrinho;
