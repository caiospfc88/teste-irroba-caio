"use client"
import { Box } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'next/navigation';
import TopMenu from '@/components/primeira-moda/TopMenu';
import CompraProduto from '@/components/primeira-moda/CompraProduto';

const Produto = () => {

    const { id } = useParams();

  return (
    <Box>
        <TopMenu/>
        <CompraProduto id={Number(id)}/>
    </Box>
  )
}

export default Produto