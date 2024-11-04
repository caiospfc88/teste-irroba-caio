type itemBannerPag = {
    id: number;
    titulo: string;
    descricao: string;
    imagem: string
}

export const bannerPagamentos: Array<itemBannerPag> = [
    {
        id: 0,
        titulo: "Pagamento por boleto",
        descricao: "Mais um meio de pagamento para facilitar",
        imagem: "/images/codigo-barras.png"
    },
    {
        id: 1,
        titulo: "Até 3 vezes",
        descricao: "Com todos os cartões de crédito",
        imagem: "/images/cartoes.png"
    },
    {
        id: 2,
        titulo: "Site Seguro",
        descricao: "Protegemos seus dados",
        imagem: "/images/seguro.png"
    }
]