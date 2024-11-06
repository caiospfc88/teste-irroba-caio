import { opcoesSubmenu } from '@/Types/submenu'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { HiChevronRight } from 'react-icons/hi2'

const RodapeCategorias = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }}
          gap={12}
          m={{ base: '1rem', md: '2rem', lg: '3rem', xl: '4rem' }}
        >
            
                {opcoesSubmenu.map((item)=>(
                    <GridItem
                    w="100%" display={"flex"} flexDir={"column"}
                    h={{ base: 'auto', md: '120px', lg: '240px' }}
                    key={item.id}
                    >
                        <Box maxW={"14vw"} color={"#7DE3B0"} fontSize={"1.4vw"} fontWeight={700}
                        >
                            {item.titulo}
                        </Box>
                        {item.opcoes.map((subItem) => (
                            <Box key={subItem.id} color={"#999999"} m={"0.5vw"} cursor={"pointer"}
                            display={"flex"} position={"relative"} _hover={{color: "black"}}
                            >
                                {subItem.label}
                                {subItem.opcoesfinais !== null && <Box mt={"0.6vh"} ml={"1vw"}><HiChevronRight /></Box>}
                                {subItem.opcoesfinais !== null ? 
                                <Box position={"absolute"} right={0} top={0}>
                                    {subItem.opcoesfinais.map((opcao)=>(
                                        <Box key={opcao.id} color={"#999999"} m={"0.5vw"} cursor={"pointer"}>
                                            {opcao.label}
                                        </Box>
                                    ))}
                                </Box>
                                :
                                ""
                                }
                            </Box>
                        ))}
                    </GridItem>
                ))}
                    <GridItem
                    w="100%"
                    h={{ base: 'auto', md: '100px', lg: '200px' }}
                    >
                        <Box maxW={"14vw"} color={"#69593C"} fontSize={"1.4vw"} fontWeight={700}
                        >
                            Institucional
                        </Box>
                        <Box color={"#999999"} m={"0.5vw"} cursor={"pointer"} _hover={{color: "black"}}>
                            Página inicial
                        </Box>
                        <Box color={"#999999"} m={"0.5vw"} cursor={"pointer"} _hover={{color: "black"}}>
                            Quem Somos
                        </Box>
                        <Box color={"#999999"} m={"0.5vw"} cursor={"pointer"} _hover={{color: "black"}}>
                            Fale Conosco
                        </Box>
                        <Box color={"#999999"} m={"0.5vw"} cursor={"pointer"} _hover={{color: "black"}}>
                            Criar Conta
                        </Box>
                        <Box color={"#999999"} m={"0.5vw"} cursor={"pointer"} _hover={{color: "black"}}>
                            Entrar
                        </Box>
                    </GridItem>     
        </Grid>
    </Box>
  )
}

export default RodapeCategorias