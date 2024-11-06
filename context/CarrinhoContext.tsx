"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type CarrinhoProviderT = {
    children: ReactNode
}

export interface ItemCarrinho {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

interface CarrinhoContextType {
  carrinho: ItemCarrinho[];
  adicionaCarrinho: (item: ItemCarrinho, quantidade: number) => void;
  removerItem: (id: number) => void;
  total: number;
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export const CarrinhoProvider = ({ children }:CarrinhoProviderT) => {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const carrinhoLocal = localStorage.getItem('carrinho');
    const carrinhoArray = carrinhoLocal ? JSON.parse(carrinhoLocal) : [];
    setCarrinho(carrinhoArray);
    const totalCarrinho = carrinhoArray.reduce((acc: number, item: ItemCarrinho) => acc + item.preco, 0);
    setTotal(totalCarrinho);
  }, []);

  const atualizarTotalCarrinho = (carrinho: ItemCarrinho[]) => {
    const totalCarrinho = carrinho.reduce((acc, item) => acc + item.preco, 0);
    setTotal(totalCarrinho);
  };

  const adicionaCarrinho = (produto: ItemCarrinho, quantidade: number) => {
    const carrinhoAtual = [...carrinho];

    for (let i = 0; i < quantidade; i++) {
        carrinhoAtual.push({ ...produto });
    }

    setCarrinho(carrinhoAtual);
    atualizarTotalCarrinho(carrinhoAtual);
    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
};

const removerItem = (index: number) => {
    const carrinhoAtual = [...carrinho];
    carrinhoAtual.splice(index, 1);

    setCarrinho(carrinhoAtual);
    atualizarTotalCarrinho(carrinhoAtual);
    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
};

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionaCarrinho, removerItem, total }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider');
  }
  return context;
};
