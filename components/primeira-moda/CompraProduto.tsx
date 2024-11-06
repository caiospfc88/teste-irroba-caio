"use client"
import { ItemCarrinho, useCarrinho } from '@/context/CarrinhoContext';
import { listaProdutos } from '@/Types/produto';
import { Box, Button, Grid, GridItem, NumberInput, NumberInputField, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { IoHomeSharp } from "react-icons/io5";
import { TiShoppingCart } from 'react-icons/ti';

interface CompraProdutoI {
    id: number;
}

const CompraProduto = ({id}: CompraProdutoI) => {

    const { carrinho, adicionaCarrinho, removerItem, total } = useCarrinho();

    const produtoParam = listaProdutos.filter((item) => item.id == id)
    const [selectedImage,setSelectedImage] = useState<string>(produtoParam[0].imagens[0])
    const [gridImages, setGridImages] = useState<Array<string>>([""])
    const [quantidade, setQuantidade] = useState<number>(1)

    const toast = useToast()
    
    useEffect(()=>{
        const temp = produtoParam[0].imagens.filter((item) => item !== selectedImage)
        setGridImages(temp)
    },[selectedImage])

    const handleAdicionaItemCarrinho = () => {
        const produto: ItemCarrinho = {
            id: produtoParam[0].id,
            nome: produtoParam[0].nome,
            preco: produtoParam[0].precoPromocao,
            imagem: produtoParam[0].imagens[0]
        }
        
        adicionaCarrinho(produto, quantidade);
    
        toast(
            {
            title: 'Produto adicionado ao carrinho!',
            status: "success",
            description: "Para finalizar a compra, abra o carrinho e clique em comprar",
            duration: 4000
            }
        );
    };

  return (
    <Box mt={"5vh"}>
        <Box ml={"10vw"}>
            <Box color={"#69593C"} display={"flex"} gap={"0.8vw"}>
                <Box mt={"0.5vh"}><IoHomeSharp/></Box> <Box mt={"0.5vh"}><FaChevronRight /></Box> 
                {produtoParam[0].categoria} <Box mt={"0.5vh"}><FaChevronRight /></Box> 
                {produtoParam[0].subCategoria} <Box mt={"0.5vh"}><FaChevronRight /></Box> 
                <strong>{produtoParam[0].nome}</strong>
            </Box>
        </Box>
        <Box display={"flex"} ml={"3vw"}>
            <Grid
            templateRows={{ base: 'repeat(4, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(4, 1fr)' }}
            gap={6}
            m={{ base: '1rem', md: '2rem', lg: '4rem', xl: '6rem' }}
            >
                {gridImages.map((item,index)=>(
                    <GridItem
                    key={index}
                    alignContent={"center"}
                    onClick={() => setSelectedImage(item)}
                    cursor={"pointer"}
                    bgColor="transparent"
                    backgroundImage={`url(${item})`}
                    backgroundSize={"contain"}
                    backgroundRepeat={"no-repeat"}
                    w={{ base: '3vw', md: '4vw', lg: '6vw' }}
                    h={{ base: '3vw', md: '4vw', lg: '6vw' }}
                    border="none"
                    borderRadius="10px"
                    p="1rem" position={"relative"}
                    >

                    </GridItem>
                ))}
                
            </Grid>
            <Box 
            mt={"5vw"}
            w={{ base: '20vw', md: '25vw', lg: '30vw' }}
            h={{ base: '20vw', md: '25vw', lg: '30vw' }}
            backgroundImage={`url(${selectedImage})`}
            backgroundSize={"contain"}
            backgroundRepeat={"no-repeat"}
            position={"relative"}
            >
                <Box display={"flex"} position={"absolute"} top={"1.2vh"} right={"4.6vw"} gap={"1vw"}>
                    <Box bgColor={"#1059E6"} color={"#FFFFFF"} p={"0.2vw"} px={"0.8vw"} borderRadius={"5px"}
                    fontWeight={500} fontSize={"0.8vw"} zIndex={1}
                    >
                      34% OFF
                    </Box>
                    <Box bgColor={"#7DE3B0"} color={"#FFFFFF"} p={"0.2vw"} px={"0.8vw"} borderRadius={"5px"}
                    fontWeight={500} fontSize={"0.8vw"} zIndex={1}
                    >
                      OFERTA
                    </Box>
                  </Box>
            </Box>
            <Box mt={"5vw"}>
                <Box fontSize={"2.5vw"} fontWeight={700} color={"#69593C"} maxWidth={"30vw"}>
                    {produtoParam[0].nome}
                </Box>
                <Box textDecoration={"line-through"} color={"#999999"} fontWeight={700} fontSize={"1.1vw"}>
                    {produtoParam[0].preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </Box>
                <Box width={"50vw"}>
                    <Box display={"flex"} flexDir={"row"} gap={"0.5vw"}>
                        <Box fontSize={"2.2vw"} color={"#1059E6"} fontWeight={700}>
                            {produtoParam[0].precoPromocao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </Box>
                        <Box color={"#999999"} display={"flex"} flexDir={"column"} justifyContent={"end"}>
                            <Box display={"flex"} gap={"0.4vw"} mb={"1vh"}>
                                <Box display={"flex"} flexDir={"column"} justifyContent={"center"}>
                                    3X de
                                </Box> 
                                <Box color={"#7DE3B0"} fontWeight={700} fontSize={"1vw"} display={"flex"} 
                                flexDir={"column"} justifyContent={"center"}
                                >
                                    {(produtoParam[0].precoPromocao / 3).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </Box> 
                                <Box display={"flex"} flexDir={"column"} justifyContent={"center"}
                                >
                                    Sem juros
                                </Box>
                            </Box>
                        </Box>
                        <Box mt={"1.5vh"} ml={"0.2vw"}>
                            <Button bgColor={"transparent"} color={"#999999"} border={"2px solid #999999"} size={"xs"}>
                                Ver meios de pagamento
                            </Button>
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDir={"row"} gap={"0.5vw"} mt={"1vh"}>
                        <Box gap={"5vw"} color={"#999999"}>
                            Tamanho: {produtoParam[0].tamanho.map((item,index)=>(
                                <Button key={index} bgColor={"#7DE3B0"} color={"#FFFFFF"} mr={"0.2vw"}
                                w={"1.8vw"} size={"xs"}
                                >
                                    {item}
                                </Button>
                            ))}
                        </Box>
                        <Box gap={"5vw"} color={"#999999"}>
                            Cores: {produtoParam[0].cores.map((item)=>(
                                <Button key={item.id} bgColor={item.buttonColor} color={item.textButtonColor} mr={"0.2vw"}
                                border={`1px solid ${item.borderButtonColor}`} size={"xs"}
                                >
                                    {item.nome}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDir={"row"} gap={"2.5vw"} mt={"2.5vh"}>
                        <Box w={"15.5vw"} h={"10vh"} p={"0.8vw"} border={"2px solid #999999"} color={"#999999"} fontSize={"1vw"} borderRadius={"0.6vw"}
                        display={"flex"}>
                            <Box pr={"1vw"} display={"flex"} flexDir={"column"} justifyContent={"center"}>Quantidade</Box>
                            <Box display={"flex"} flexDir={"column"} justifyContent={"center"}> 
                                <Box borderLeft={"2px solid #999999"} display={"flex"} gap={"0.5vw"}>
                                    <Box pl={"1vw"} cursor={"pointer"} onClick={()=> ( quantidade > 0 ? setQuantidade(quantidade - 1) : setQuantidade(0))}
                                    display={"flex"} flexDir={"column"} justifyContent={"center"}
                                    > 
                                        <FaMinus /> 
                                    </Box>
                                    <NumberInput color={"#999999"} min={0} max={99} onChange={(val) => setQuantidade(parseFloat(val) || 0)} 
                                    value={quantidade} border={"none"} minW={"3.5vw"} h={"8vh"} display={"flex"} flexDir={"column"} justifyContent={"center"}
                                    >
                                        <NumberInputField p={"1vw"} minW={"2vw"}/>
                                    </NumberInput> 
                                    <Box cursor={"pointer"} onClick={()=>( quantidade < 99 ? setQuantidade(quantidade + 1) : setQuantidade(99))}
                                    display={"flex"} flexDir={"column"} justifyContent={"center"}
                                    >
                                        <FaPlus />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box display={"flex"} flexDir={"column"} justifyContent={"center"}>
                            <Button onClick={handleAdicionaItemCarrinho} w={"16vw"} h={"7.8vh"} bgColor={"#1059E6"} 
                            color={"#FFFFFF"} fontSize={"1.2vw"}>
                                <Box mr={"0.5vw"} fontSize={"1.8vw"}>
                                    <TiShoppingCart />
                                </Box>
                                Comprar Agora
                            </Button>
                        </Box>
                    </Box>
                    <Box display={"flex"} mt={"1.8vw"} gap={"1vw"}>
                        <Box  color={"#999999"} fontSize={"1vw"} mt={"0.2vw"}>
                            Compartilhar:
                        </Box>
                        <Box display={"flex"} gap={"1vw"}>
                            <Box>
                                <Button bgImage={"url('/images/icone-facebook.png')"} backgroundSize={"contain"} borderRadius={"50%"}
                                _hover={{bgColor: "transparent", transform: "scale(1.5)", transition: "0.8s"}}
                                />
                            </Box>
                            <Box>
                                <Button bgImage={"url('/images/icone-instagram.png')"} backgroundSize={"contain"} borderRadius={"50%"}
                                _hover={{bgColor: "transparent", transform: "scale(1.5)", transition: "0.8s"}}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default CompraProduto