import { bannerPagamentos } from '@/Types/bannerPagamentos'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

const BannerPagamentosRodape = () => {
  return (
    <Box>
        <Box display={"flex"} justifyContent={"center"} mt={"3rem"} mb={"2rem"}>
            <Box display={"flex"} justifyContent={"space-around"} flexDir={"row"} w={"70vw"}>
                {bannerPagamentos.map((item)=>(
                    <Box key={item.id} display={"flex"} flexDir={"column"} color={"#69593C"} alignItems={"center"}>
                        <Image src={item.imagem} width={item.imagemW} height={item.imagemH} alt={item.titulo} />
                    
                        <Box fontSize={"1.4rem"} fontWeight={"700"}>
                            {item.titulo}
                        </Box>
                        <Box>
                            {item.descricao}
                        </Box>
                    </Box>
                ))}

            </Box>        
        </Box>
        <Box color={"#999999"} mt={"10vh"} ml={"14vw"} mb={"6vh"}>
            <Text>Copyright Primeira Moda Roupas e Produtos Importados Ltda - 2020. Todos os direitos reservados.</Text>
        </Box>
    </Box>
  )
}

export default BannerPagamentosRodape