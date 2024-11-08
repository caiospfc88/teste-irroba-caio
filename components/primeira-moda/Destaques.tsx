"use client"
import { listaProdutos } from '@/Types/produto'
import { Box, Button, Grid, GridItem, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaRegHeart } from 'react-icons/fa6'
import { PiEye } from 'react-icons/pi'
import { useRouter } from 'next/navigation'

const Destaques = () => {

  const [itemHover,setItemHover] = useState<number | null>(null);
  const router = useRouter();

  const irParaCompraProduto = (id:number) => {
    router.push(`/produto/${id}`);
  };

  return (
    <Box pb={"2vw"} bgColor="#F8F6F2">
      <Box
        w="100vw"
        h="1.4vh"
        bg="transparent"
        backgroundImage="url('/images/waves-top.png')"
        backgroundRepeat="repeat-x"
        backgroundSize="contain"
      />
      <Box w="100vw" bgColor="#F8F6F2" minH="20rem" display="flex" flexDir="column">
        <Box display="flex" justifyContent="center" w="100vw" color="#69593C" mt="2rem" fontSize="2rem" fontWeight={700}>
          Destaques
        </Box>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }}
          gap={6}
          m={{ base: '1rem', md: '2rem', lg: '3rem', xl: '6rem' }}
        >
          {listaProdutos.map((item) => (
            <Box key={item.id}>
            {itemHover === item.id ?
            <GridItem
              cursor={"pointer"}
              bgColor="#FBFAF8"
              w="100%"
              h={'auto'}
              border="2px solid #FCF6B3"
              borderRadius="10px"
              p="1rem" position={"relative"}
              onMouseEnter={() => setItemHover(item.id)}
              onMouseLeave={() => setItemHover(null)}
            >
              
              <Box display={"flex"} position={"absolute"} zIndex={2} w={"100%"} h={"100%"}
              flexDir={"column"} left={0} top={"9vw"}
              >
                <Box display={"flex"} justifyContent={"center"} mt={{base: "15vh", md: "0vh"}}>
                  <Button bgColor={"#7DE3B0"} color={"#FFFFFF"} onClick={()=>irParaCompraProduto(item.id)}>
                    Que fofo, eu quero!
                  </Button>
                </Box>
                <Box display={"flex"} justifyContent={"center"} mt={{base: "30vw", md: "8vw"}} gap={"1.5vw"}>
                  <Box fontSize={{base: "5vw", md: "2vw"}} color={"#69593C"}
                  >
                    <FaRegHeart />
                  </Box>
                  <Box fontSize={{base: "5vw", md: "2vw"}} color={"#69593C"}
                  >
                    <PiEye />
                  </Box>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center" flexDir="column">
                <Box w="100%" display="flex" justifyContent="center" mt="1rem" position={"relative"}>
                  <Box display={"flex"} position={"absolute"} top={"1.2vh"} right={"0.2vw"} gap={"1vw"}>
                    <Box bgColor={"#F9E0E4"} color={"#69593C"} p={"0.2vw"} px={"0.8vw"} borderRadius={"5px"}
                    fontWeight={500} fontSize={{base: "2.5vw", md: "0.8vw"}} zIndex={1}
                    >
                      SEM ESTOQUE
                    </Box>
                    <Box bgColor={"#7DE3B0"} color={"#FFFFFF"} p={"0.2vw"} px={"0.8vw"} borderRadius={"5px"}
                    fontWeight={500} fontSize={{base: "2.5vw", md: "0.8vw"}} zIndex={1}
                    >
                      OFERTA
                    </Box>
                  </Box>
                  <Image src={item.imagens[0]} width={299} height={374} alt={item.nome} style={{ maxWidth: '100%', height: 'auto', opacity: "10%" }} />
                </Box>
                <Box fontSize="1.5rem" fontWeight={700} textAlign="center" color="#69593C">
                  {item.nome}
                </Box>
                <Box display="flex" justifyContent="center" mt="0.6rem">
                  <Box display="flex" justifyContent="center" bgColor="#7DE3B0" color="#FFFFFF" w="6rem" borderRadius="5px">
                    {item.desconto}
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" mt="0.6rem">
                  <Box display="flex" justifyContent="center" color="#69593C" w="6rem" borderRadius="5px">
                    <Text textDecor="line-through">
                      {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </Text>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" mt="0.6rem">
                  <Box display="flex" justifyContent="center" w="8rem" fontSize="1.8rem" borderRadius="5px" color="#7DE3B0" fontWeight={700}>
                    <Text>{item.precoPromocao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
                  </Box>
                </Box>
                <Box borderTop={"2px #F6F3EF solid"} display={"flex"} justifyContent={"center"} mt={"4vh"}>
                    <Text color={"#999999"} pt={"2vh"}>
                        3X de {(item.precoPromocao / 3).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} Sem juros
                    </Text>
                </Box>
              </Box>  
              </GridItem>
              : 
              <GridItem
              cursor={"pointer"}
              bgColor="#FBFAF8"
              w="100%"
              h={'auto'}
              border="2px solid #F6F3EF"
              borderRadius="10px"
              p="1rem"
              onMouseEnter={() => setItemHover(item.id)}
              onMouseLeave={() => setItemHover(null)}
            >
              <Box display="flex" justifyContent="center" flexDir="column">
                <Box w="100%" display="flex" justifyContent="center" mt="1rem" position={"relative"}>
                  <Box display={"flex"} position={"absolute"} top={"1.2vh"} right={"0.2vw"} gap={"1vw"}>
                    <Box bgColor={"#F9E0E4"} color={"#69593C"} p={"0.2vw"} px={"0.8vw"} borderRadius={"5px"}
                    fontWeight={500} fontSize={{base: "2.5vw", md: "0.8vw"}}
                    >
                      SEM ESTOQUE
                    </Box>
                    <Box bgColor={"#7DE3B0"} color={"#FFFFFF"} p={"0.2vw"} px={"0.8vw"} borderRadius={"5px"}
                    fontWeight={500} fontSize={{base: "2.5vw", md: "0.8vw"}}
                    >
                      OFERTA
                    </Box>
                  </Box>
                  <Image src={item.imagens[0]} width={299} height={374} alt={item.nome} style={{ maxWidth: '100%', height: 'auto' }} />
                </Box>
                <Box fontSize="1.5rem" fontWeight={700} textAlign="center" color="#69593C">
                  {item.nome}
                </Box>
                <Box display="flex" justifyContent="center" mt="0.6rem">
                  <Box display="flex" justifyContent="center" bgColor="#7DE3B0" color="#FFFFFF" w="6rem" borderRadius="5px">
                    {item.desconto}
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" mt="0.6rem">
                  <Box display="flex" justifyContent="center" color="#69593C" w="6rem" borderRadius="5px">
                    <Text textDecor="line-through">
                      {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </Text>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" mt="0.6rem">
                  <Box display="flex" justifyContent="center" w="8rem" fontSize="1.8rem" borderRadius="5px" color="#7DE3B0" fontWeight={700}>
                    <Text>{item.precoPromocao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
                  </Box>
                </Box>
                <Box borderTop={"2px #F6F3EF solid"} display={"flex"} justifyContent={"center"} mt={"4vh"}>
                    <Text color={"#999999"} pt={"2vh"}>
                        3X de {(item.precoPromocao / 3).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} Sem juros
                    </Text>
                </Box>
              </Box>
              </GridItem>
              }
            </Box>
          ))}
        </Grid>
        <Box display={"flex"} justifyContent={"center"}>
          <Button color={"#FFFFFF"} bgColor={"#7DE3B0"} w={{ base: 'auto', md: '22vw' }} 
          h={{base: "11vh", 'md': "8vh"}} fontSize={{base: "5vw", 'md': "1.4rem"}} fontWeight={700}>
            Ver todos os produtos
          </Button>

        </Box>
      </Box>     
    </Box>
  )
}

export default Destaques
