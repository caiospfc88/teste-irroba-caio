import { listaProdutos } from '@/Types/produto'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

const Destaques = () => {
  return (
    <Box>
        <Box
            w="100vw"
            h="1.4vh"
            bg="transparent"
            backgroundImage="url('/images/waves-top.png')"
            backgroundRepeat="repeat-x" 
            backgroundSize="contain" 
            />
        <Box w={"100vw"} bgColor={"#F8F6F2"} minH={"20rem"} display={"flex"} flexDir={"column"}>
            <Box display={"flex"} justifyContent={"center"} w={"100vw"} color={"#69593C"} mt={"2rem"}
            fontSize={"2rem"} fontWeight={700}
            >
                Destaques
            </Box>
            <Grid templateColumns='repeat(4, 1fr)' gap={6} m={"5rem"}>
                {listaProdutos.map((item)=>(
                    <GridItem key={item.id} bgColor={"#FBFAF8"} w={339} h={622} border={"2px solid #F6F3EF"} borderRadius={"10px"}>
                        <Box display={"flex"} justifyContent={"center"} flexDir={"column"}>
                            <Box w={"100%"} display={"flex"} justifyContent={"center"} mt={"1rem"}>
                                <Image src={item.imagens[0]} width={299} height={374} alt={item.nome}/>
                            </Box>
                            <Box fontSize={"1.5rem"} fontWeight={700} textAlign={"center"} color={"#69593C"}>
                                {item.nome}
                            </Box>
                            <Box display={"flex"} justifyContent={"center"} mt={"0.6rem"}>
                                <Box display={"flex"} justifyContent={"center"} bgColor={"#7DE3B0"} color={"#FFFFFF"} w={"6rem"}
                                borderRadius={"5px"}
                                >
                                    {item.desconto}
                                </Box>
                            </Box>
                            <Box display={"flex"} justifyContent={"center"} mt={"0.6rem"}>
                                <Box display={"flex"} justifyContent={"center"} color={"#69593C"} w={"6rem"}
                                borderRadius={"5px"}
                                >
                                    <Text textDecor={"line-through"}>
                                        {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                    </Text>
                                </Box>
                            </Box>
                            <Box display={"flex"} justifyContent={"center"} mt={"0.6rem"}>
                                <Box display={"flex"} justifyContent={"center"} w={"8rem"} fontSize={"1.8rem"}
                                borderRadius={"5px"} color={"#7DE3B0"} fontWeight={700}
                                >
                                    <Text>
                                        {item.precoPromocao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                ))}
                
            </Grid>
        </Box>
    </Box>
  )
}

export default Destaques