import { bannerPagamentos } from '@/Types/bannerPagamentos'
import { Box } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

const BannerPagamentos = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} mt={"3rem"} mb={"2rem"}>
        <Box display={"flex"} justifyContent={"space-between"} flexDir={"row"} w={"70vw"}>
            {bannerPagamentos.map((item)=>(
                <Box key={item.id} display={"flex"} flexDir={"row"} gap={"1rem"}>
                    <Image src={item.imagem} width={item.imagemW} height={item.imagemH} alt={item.titulo} />
                    <Box display={"flex"} flexDir={"column"} color={"#69593C"}>
                        <Box fontSize={"1.4rem"} fontWeight={"700"}>
                            {item.titulo}
                        </Box>
                        <Box>
                            {item.descricao}
                        </Box>
                    </Box>
                </Box>
            ))}

        </Box>
    </Box>
  )
}

export default BannerPagamentos