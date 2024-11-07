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
        <Box w={"100vw"} h={{base: "50vw", md: "15vw"}} bgColor={"#F9E0E4"}
        display={"flex"} flexDir={{base: "column", md: "row"}} justifyContent={"center"}
        >
            <Box display={"flex"} justifyContent={"center"} flexDir={"column"} alignItems={"center"}>
                <Box display={"flex"} flexDir={{base: "column", md: "row"}} color={"#69593C"} gap={"1.2vw"}
                alignItems={"center"}
                >
                    <Box display={"flex"} alignItems={"center"}>
                        <Box maxW={{ base: "10vw", md: "55%", lg: "100%" }} h="auto">
                            <Image src={"/images/newsletter.png"} alt='Letter' width={90} height={85}
                            style={{ maxWidth: '100%', height: 'auto' }} 
                            />
                        </Box>                    
                        <Text fontSize={{base: "5vw", md: "2.2vw"}} fontWeight={700} mt={"1.2vw"} ml={"1vw"}>
                            Nossa Newsletter
                        </Text>
                    </Box>
                    <Box display={"flex"} flexDir={{base: "column", md: "row"}} 
                    justifyContent={"center"} textColor={"#69593C"} gap={"2vw"}
                    mt={"1.2vw"} fontWeight={700}
                    >
                        <Input placeholder='E-mail' bgColor={"#FFFFFF"} 
                        w={{base: "60vw", md: "25vw"}} h={{base: "9vh", md: "7vh"}}/>
                        <Input placeholder='Nome Completo' bgColor={"#FFFFFF"} 
                        w={{base: "60vw", md: "25vw"}} h={{base: "9vh", md: "7vh"}}/>
                    </Box>
                    <Box mt={"1.2vw"} alignItems={"center"}>
                        <Button color={"#FFFFFF"} bgColor={"#7DE3B0"} fontWeight={700}
                        h={{base: "9vh", md: "7vh"}}
                        >
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