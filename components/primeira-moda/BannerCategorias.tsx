import { opcoesSubmenu } from '@/Types/submenu'
import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const BannerCategorias = () => {

    const principaisCategorias = opcoesSubmenu.filter((item) => item.destaque === true)

  return (
    <Box w={"100%"} flexDir={"column"} mt={"1rem"} mb={"5rem"}>
        <Box display={"flex"} justifyContent={"center"} color={"#69593C"} fontSize={"2.2rem"} fontWeight={700}>
            Categorias Principais
        </Box>
        <Box w={"100%"} display={"flex"} justifyContent={"center"} mt={"1.5rem"}>
            <Box display={"flex"} gap={"1rem"}>
            {principaisCategorias.map((item)=>(
                <Button key={item.id} color={item.btTextColor} bgColor={item.btColor} fontSize={"1.2rem"}
                p={"1.6rem"}
                >
                    {item.titulo}
                </Button>
            ))}
            </Box>
        </Box>
    </Box>
  )
}

export default BannerCategorias