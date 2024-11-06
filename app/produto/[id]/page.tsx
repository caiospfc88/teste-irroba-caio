"use client"
import { Box } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'next/navigation';
import TopMenu from '@/components/primeira-moda/TopMenu';
import CompraProduto from '@/components/primeira-moda/CompraProduto';
import { CarrinhoProvider } from '@/context/CarrinhoContext';
import DescricaoProduto from '@/components/primeira-moda/DescricaoProduto';
import Comentarios from '@/components/primeira-moda/Comentarios';
import Newsletter from '@/components/primeira-moda/Newsletter';
import RodapeCategorias from '@/components/primeira-moda/RodapeCategorias';
import BannerRedeSocial from '@/components/primeira-moda/BannerRedeSocial';
import BannerPagamentosRodape from '@/components/primeira-moda/BannerPagamentosRodape';
import ProdutosRelacionados from '@/components/primeira-moda/ProdutosRelacionados';
import Destaques from '@/components/primeira-moda/Destaques';

const Produto = () => {

    const { id } = useParams();

  return (
    <Box>
      <CarrinhoProvider>
        <TopMenu/>
        <CompraProduto id={Number(id)}/>
      </CarrinhoProvider>
      <DescricaoProduto id={Number(id)}/>
      <Comentarios id={Number(id)}/>
      <ProdutosRelacionados/>
      <Newsletter/>
      <RodapeCategorias/>
      <BannerRedeSocial/>
      <BannerPagamentosRodape/>
    </Box>
  )
}

export default Produto