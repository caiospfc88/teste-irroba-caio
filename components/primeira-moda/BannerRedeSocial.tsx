import { AbsoluteCenter, Box, Button, Divider } from '@chakra-ui/react'
import React from 'react'

const BannerRedeSocial = () => {
  return (
    <Box display={{base: "none", md: "block"}}>
        <Box position='relative' padding='10'>
            <Divider size={"100px"}/>
            <AbsoluteCenter bg='white' px='4' display={"flex"} gap={"1vw"}>
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
            </AbsoluteCenter>
        </Box>
    </Box>
  )
}

export default BannerRedeSocial