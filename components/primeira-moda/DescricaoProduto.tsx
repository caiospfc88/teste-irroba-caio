import { listaProdutos } from '@/Types/produto';
import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

interface DescricaoProdutoI {
    id: number;
}

const DescricaoProduto = ({id}: DescricaoProdutoI) => {

    const produtoParam = listaProdutos.filter((item) => item.id == id)

  return (
    <Box color={"#999999"} display={"flex"} justifyContent={"center"}>
        <Box w={{base: "92vw",md: "80vw"}} h={"auto"} mb={{base: "5vh", md: "0"}}>
            <Tabs fontSize={{base: "2.4vw",md: "1.2vw"}}>
            <TabList>
                <Tab  _selected={{color: "#69593C", fontWeight: "700"}}
                fontSize={{base: "2.5vw", md: "1.2vw"}}
                >
                    Descrição
                </Tab>
                <Tab  _selected={{color: "#69593C", fontWeight: "700"}}
                fontSize={{base: "2.5vw", md: "1.2vw"}}
                >
                    Formas de pagamento
                </Tab>
                <Tab  _selected={{color: "#69593C", fontWeight: "700"}}
                fontSize={{base: "2.5vw", md: "1.2vw"}}
                >
                    Comentários
                </Tab>
                <Tab  _selected={{color: "#69593C", fontWeight: "700"}}
                fontSize={{base: "2.5vw", md: "1.2vw"}}
                >
                    Tabela de Medidas
                </Tab>
            </TabList>
            <TabIndicator
            mt="-1.5px" 
            height="4px"
            bg="#69593C"
            />
            <TabPanels>
                <TabPanel h={"20vh"}>
                {produtoParam[0].descricao}
                </TabPanel >
                <TabPanel h={"20vh"}>
                <p>Formas de pagamento</p>
                </TabPanel>
                <TabPanel h={"20vh"}>
                <p>Comentários</p>
                </TabPanel>
                <TabPanel h={"20vh"}>
                <p>Tabela de Medidas</p>
                </TabPanel>
            </TabPanels>
            </Tabs>
        </Box>                
    </Box>
  )
}

export default DescricaoProduto