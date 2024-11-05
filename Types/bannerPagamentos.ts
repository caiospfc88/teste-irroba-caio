type itemBannerPag = {
    id: number;
    titulo: string;
    descricao: string;
    imagem: string;
    imagemW: number;
    imagemH: number;
}

export const bannerPagamentos: Array<itemBannerPag> = [
    {
        id: 0,
        titulo: "Pagamento por boleto",
        descricao: "Mais um meio de pagamento para facilitar",
        imagem: "/images/codigo-barras.png",
        imagemW: 75,
        imagemH: 57,
    },
    {
        id: 1,
        titulo: "Até 3 vezes",
        descricao: "Com todos os cartões de crédito",
        imagem: "/images/cartoes.png",
        imagemW: 60,
        imagemH: 61,
    },
    {
        id: 2,
        titulo: "Site Seguro",
        descricao: "Protegemos seus dados",
        imagem: "/images/seguro.png",
        imagemW: 53,
        imagemH: 62,
    }
]