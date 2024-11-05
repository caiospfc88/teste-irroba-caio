import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import { PiPaperPlaneRightFill } from 'react-icons/pi'

const Newsletter = () => {
  return (
    <Box >
        <Box
        position={"absolute"}
        w="100vw"
        h="4vh"
        bg="transparent"
        zIndex={2}
        backgroundImage="url('/images/waves-bottom.png')"
        backgroundRepeat="repeat-x" 
        backgroundSize="contain" 
        />
        <Box w={"100vw"} h={{base: "10vw", md: "15vw"}} bgColor={"#F9E0E4"}
        display={"flex"} flexDir={{base: "column", md: "row"}} justifyContent={"center"}
        >
            <Box display={"flex"} justifyContent={"center"} flexDir={"column"}>
                <Box display={"flex"} flexDir={"row"} color={"#69593C"} gap={"1.2vw"}>
                    <Image src={"/images/newsletter.png"} alt='Letter' width={90} height={85}
                    style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    <Text fontSize={"2.2vw"} fontWeight={700} mt={"1.2vw"}>
                        Nossa Newsletter
                    </Text>
                    <Box display={"flex"} flexDir={{base: "column", md: "row"}} 
                    justifyContent={"center"} textColor={"#69593C"} gap={"2vw"}
                    mt={"1.2vw"} fontWeight={700}
                    >
                        <Input placeholder='E-mail' bgColor={"#FFFFFF"} />
                        <Input placeholder='Nome Completo' bgColor={"#FFFFFF"}/>
                    </Box>
                    <Box mt={"1.2vw"}>
                        <Button color={"#FFFFFF"} bgColor={"#7DE3B0"} fontWeight={700}>
                            Me Inscrever <Box ml={"1vw"}><PiPaperPlaneRightFill /></Box>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box
        position={"absolute"}
        w="100vw"
        h="2vh"
        bg="transparent"
        zIndex={2}
        backgroundImage="url('/images/pink-waves-bottom.png')"
        backgroundRepeat="repeat-x" 
        backgroundSize="contain" 
        />
    </Box>
  )
}

export default Newsletter