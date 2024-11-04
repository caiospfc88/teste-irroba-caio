"use client"
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Image } from '@chakra-ui/react'
import React, { useState } from 'react'

const Banner = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Box display={"flex"} w={"100vw"}>
      <Tabs defaultIndex={1} p={0} as={Box} onChange={(index) => setSelectedIndex(index)}>
        <TabPanels>
          <TabPanel as={Box}
          w={"100vw"}
          h={"65vh"}
          bgImage={"url('/images/banner.png')"}
          bgSize={"cover"}
          bgPosition={"center"}
          position={"relative"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          >            
          </TabPanel>
          <TabPanel
          w={"100vw"}
          h={"65vh"}
          bgImage={"url('/images/banner.png')"}
          bgSize={"cover"}
          bgPosition={"center"}
          position={"relative"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          >
          </TabPanel>
          <TabPanel
          w={"100vw"}
          h={"65vh"}
          bgImage={"url('/images/banner.png')"}
          bgSize={"cover"}
          bgPosition={"center"}
          position={"relative"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          >
          </TabPanel>
        </TabPanels>
        <TabList as={Box} display={"flex"} justifyContent={"center"}>
          <Tab _selected={{}}>
            {selectedIndex === 0 ? 
              <Box
              bgColor={"#F9E0E4"}
              w={"3rem"}
              h={"0.5rem"}
              borderRadius={"10px"}
              />
              : 
              <Box
              bgColor={"#7DE3B0"}
              w={"0.5rem"}
              h={"0.5rem"}
              borderRadius={"50%"}
              />
            }
          </Tab>
          <Tab _selected={{}}>
          {selectedIndex === 1 ? 
              <Box
              bgColor={"#F9E0E4"}
              w={"3rem"}
              h={"0.5rem"}
              borderRadius={"10px"}
              />
              : 
              <Box
              bgColor={"#7DE3B0"}
              w={"0.5rem"}
              h={"0.5rem"}
              borderRadius={"50%"}
              />
            }
          </Tab>
          <Tab _selected={{}}>
          {selectedIndex === 2 ? 
              <Box
              bgColor={"#F9E0E4"}
              w={"3rem"}
              h={"0.5rem"}
              borderRadius={"10px"}
              />
              : 
              <Box
              bgColor={"#7DE3B0"}
              w={"0.5rem"}
              h={"0.5rem"}
              borderRadius={"50%"}
              />
            }
          </Tab>
        </TabList>
      </Tabs>
      
    </Box>
  )
}

export default Banner