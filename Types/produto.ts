export type ProdutoT = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    precoPromocao: number;
    cores: CorT[];
    imagens: string[];
    desconto: string;
    categoria: string;
    subCategoria:string;
    tamanho: string[];
}

type CorT = {
    id:number;
    nome: string;
    buttonColor: string;
    textButtonColor: string;
    borderButtonColor: string;
}

const branco: CorT = {
    id:0,
    nome: "Branco",
    buttonColor: "#FFFFFF",
    textButtonColor: "#999999",
    borderButtonColor: "#999999"
}

const azul: CorT = {
    id:1,
    nome: "Azul",
    buttonColor: "#7D87E3",
    textButtonColor: "#FFFFFF",
    borderButtonColor: "#7D87E3"
}

const cinza: CorT = {
    id:2,
    nome: "Cinza",
    buttonColor: "#999999",
    textButtonColor: "#FFFFFF",
    borderButtonColor: "#999999"
}

const preto: CorT = {
    id:3,
    nome: "Preto",
    buttonColor: "#1F1F1F",
    textButtonColor: "#FFFFFF",
    borderButtonColor: "#1F1F1F"
}

const multi: CorT = {
    id:4,
    nome: "Multi",
    buttonColor: "#69593C",
    textButtonColor: "#FFFFFF",
    borderButtonColor: "#69593C"
}

export const listaProdutos: Array<ProdutoT> = [
    {
        id: 0,
        nome: "Kit Bodies manga longa carters 4 peças",
        descricao: "O Kit Bodies Manga Longa Basics Carters 4 peças é produzido em algodão com tecido leve e macio. O kit é composto por quatro bodies lisos e básicos. Os bodies possuem ombros expansíveis, que facilitam o vestir da peça, mangas longas e fechamento entrepernas com botões de pressão niquel-free. Delicados o Kit deixará seu pequeno pronto para qualquer ocasião.",
        preco: 114.90,
        precoPromocao: 75.90,
        cores: [branco,azul,cinza,preto,multi],
        imagens: ["/images/kit-body-4-pecas-carter.png","/images/body-azul.png","/images/body-branco.png","/images/body-rosa.png","/images/body-verde.png",],
        desconto: "34% OFF",
        categoria: "Bodies",
        subCategoria: "Manga Longa",
        tamanho: ["3M","6M","9M"]
    },
    {
        id: 1,
        nome: "Kit Bodies manga longa carters 4 peças",
        descricao: "O Kit Bodies Manga Longa Basics Carters 4 peças é produzido em algodão com tecido leve e macio. O kit é composto por quatro bodies lisos e básicos. Os bodies possuem ombros expansíveis, que facilitam o vestir da peça, mangas longas e fechamento entrepernas com botões de pressão niquel-free. Delicados o Kit deixará seu pequeno pronto para qualquer ocasião.",
        preco: 114.90,
        precoPromocao: 75.90,
        cores: [branco,azul,cinza,preto,multi],
        imagens: ["/images/kit-body-4-pecas-carter.png","/images/body-azul.png","/images/body-branco.png","/images/body-rosa.png","/images/body-verde.png",],
        desconto: "34% OFF",
        categoria: "Bodies",
        subCategoria: "Manga Longa",
        tamanho: ["3M","6M","9M"]
    },
    {
        id: 2,
        nome: "Kit Bodies manga longa carters 4 peças",
        descricao: "O Kit Bodies Manga Longa Basics Carters 4 peças é produzido em algodão com tecido leve e macio. O kit é composto por quatro bodies lisos e básicos. Os bodies possuem ombros expansíveis, que facilitam o vestir da peça, mangas longas e fechamento entrepernas com botões de pressão niquel-free. Delicados o Kit deixará seu pequeno pronto para qualquer ocasião.",
        preco: 114.90,
        precoPromocao: 75.90,
        cores: [branco,azul,cinza,preto,multi],
        imagens: ["/images/kit-body-4-pecas-carter.png","/images/body-azul.png","/images/body-branco.png","/images/body-rosa.png","/images/body-verde.png",],
        desconto: "34% OFF",
        categoria: "Bodies",
        subCategoria: "Manga Longa",
        tamanho: ["3M","6M","9M"]
    },
    {
        id: 3,
        nome: "Kit Bodies manga longa carters 4 peças",
        descricao: "O Kit Bodies Manga Longa Basics Carters 4 peças é produzido em algodão com tecido leve e macio. O kit é composto por quatro bodies lisos e básicos. Os bodies possuem ombros expansíveis, que facilitam o vestir da peça, mangas longas e fechamento entrepernas com botões de pressão niquel-free. Delicados o Kit deixará seu pequeno pronto para qualquer ocasião.",
        preco: 114.90,
        precoPromocao: 75.90,
        cores: [branco,azul,cinza,preto,multi],
        imagens: ["/images/kit-body-4-pecas-carter.png","/images/body-azul.png","/images/body-branco.png","/images/body-rosa.png","/images/body-verde.png",],
        desconto: "34% OFF",
        categoria: "Bodies",
        subCategoria: "Manga Longa",
        tamanho: ["3M","6M","9M"]
    },
    {
        id: 4,
        nome: "Kit Bodies manga longa carters 4 peças",
        descricao: "O Kit Bodies Manga Longa Basics Carters 4 peças é produzido em algodão com tecido leve e macio. O kit é composto por quatro bodies lisos e básicos. Os bodies possuem ombros expansíveis, que facilitam o vestir da peça, mangas longas e fechamento entrepernas com botões de pressão niquel-free. Delicados o Kit deixará seu pequeno pronto para qualquer ocasião.",
        preco: 114.90,
        precoPromocao: 75.90,
        cores: [branco,azul,cinza,preto,multi],
        imagens: ["/images/kit-body-4-pecas-carter.png","/images/body-azul.png","/images/body-branco.png","/images/body-rosa.png","/images/body-verde.png",],
        desconto: "34% OFF",
        categoria: "Bodies",
        subCategoria: "Manga Longa",
        tamanho: ["3M","6M","9M"]
    },
    {
        id: 5,
        nome: "Kit Bodies manga longa carters 4 peças",
        descricao: "O Kit Bodies Manga Longa Basics Carters 4 peças é produzido em algodão com tecido leve e macio. O kit é composto por quatro bodies lisos e básicos. Os bodies possuem ombros expansíveis, que facilitam o vestir da peça, mangas longas e fechamento entrepernas com botões de pressão niquel-free. Delicados o Kit deixará seu pequeno pronto para qualquer ocasião.",
        preco: 114.90,
        precoPromocao: 75.90,
        cores: [branco,azul,cinza,preto,multi],
        imagens: ["/images/kit-body-4-pecas-carter.png","/images/body-azul.png","/images/body-branco.png","/images/body-rosa.png","/images/body-verde.png",],
        desconto: "34% OFF",
        categoria: "Bodies",
        subCategoria: "Manga Longa",
        tamanho: ["3M","6M","9M"]
    },
    {
        id: 6,
        nome: "Kit Bodies manga longa carters 4 peças",
        descricao: "O Kit Bodies Manga Longa Basics Carters 4 peças é produzido em algodão com tecido leve e macio. O kit é composto por quatro bodies lisos e básicos. Os bodies possuem ombros expansíveis, que facilitam o vestir da peça, mangas longas e fechamento entrepernas com botões de pressão niquel-free. Delicados o Kit deixará seu pequeno pronto para qualquer ocasião.",
        preco: 114.90,
        precoPromocao: 75.90,
        cores: [branco,azul,cinza,preto,multi],
        imagens: ["/images/kit-body-4-pecas-carter.png","/images/body-azul.png","/images/body-branco.png","/images/body-rosa.png","/images/body-verde.png",],
        desconto: "34% OFF",
        categoria: "Bodies",
        subCategoria: "Manga Longa",
        tamanho: ["3M","6M","9M"]
    },
    {
        id: 7,
        nome: "Kit Bodies manga longa carters 4 peças",
        descricao: "O Kit Bodies Manga Longa Basics Carters 4 peças é produzido em algodão com tecido leve e macio. O kit é composto por quatro bodies lisos e básicos. Os bodies possuem ombros expansíveis, que facilitam o vestir da peça, mangas longas e fechamento entrepernas com botões de pressão niquel-free. Delicados o Kit deixará seu pequeno pronto para qualquer ocasião.",
        preco: 114.90,
        precoPromocao: 75.90,
        cores: [branco,azul,cinza,preto,multi],
        imagens: ["/images/kit-body-4-pecas-carter.png","/images/body-azul.png","/images/body-branco.png","/images/body-rosa.png","/images/body-verde.png",],
        desconto: "34% OFF",
        categoria: "Bodies",
        subCategoria: "Manga Longa",
        tamanho: ["3M","6M","9M"]
    },
    {
        id: 8,
        nome: "Kit Bodies manga longa carters 4 peças",
        descricao: "O Kit Bodies Manga Longa Basics Carters 4 peças é produzido em algodão com tecido leve e macio. O kit é composto por quatro bodies lisos e básicos. Os bodies possuem ombros expansíveis, que facilitam o vestir da peça, mangas longas e fechamento entrepernas com botões de pressão niquel-free. Delicados o Kit deixará seu pequeno pronto para qualquer ocasião.",
        preco: 114.90,
        precoPromocao: 75.90,
        cores: [branco,azul,cinza,preto,multi],
        imagens: ["/images/kit-body-4-pecas-carter.png","/images/body-azul.png","/images/body-branco.png","/images/body-rosa.png","/images/body-verde.png",],
        desconto: "34% OFF",
        categoria: "Bodies",
        subCategoria: "Manga Longa",
        tamanho: ["3M","6M","9M"]
    },
    {
        id: 9,
        nome: "Kit Bodies manga longa carters 4 peças",
        descricao: "O Kit Bodies Manga Longa Basics Carters 4 peças é produzido em algodão com tecido leve e macio. O kit é composto por quatro bodies lisos e básicos. Os bodies possuem ombros expansíveis, que facilitam o vestir da peça, mangas longas e fechamento entrepernas com botões de pressão niquel-free. Delicados o Kit deixará seu pequeno pronto para qualquer ocasião.",
        preco: 114.90,
        precoPromocao: 75.90,
        cores: [branco,azul,cinza,preto,multi],
        imagens: ["/images/kit-body-4-pecas-carter.png","/images/body-azul.png","/images/body-branco.png","/images/body-rosa.png","/images/body-verde.png",],
        desconto: "34% OFF",
        categoria: "Bodies",
        subCategoria: "Manga Longa",
        tamanho: ["3M","6M","9M"]
    },
    {
        id: 10,
        nome: "Kit Bodies manga longa carters 4 peças",
        descricao: "O Kit Bodies Manga Longa Basics Carters 4 peças é produzido em algodão com tecido leve e macio. O kit é composto por quatro bodies lisos e básicos. Os bodies possuem ombros expansíveis, que facilitam o vestir da peça, mangas longas e fechamento entrepernas com botões de pressão niquel-free. Delicados o Kit deixará seu pequeno pronto para qualquer ocasião.",
        preco: 114.90,
        precoPromocao: 75.90,
        cores: [branco,azul,cinza,preto,multi],
        imagens: ["/images/kit-body-4-pecas-carter.png","/images/body-azul.png","/images/body-branco.png","/images/body-rosa.png","/images/body-verde.png",],
        desconto: "34% OFF",
        categoria: "Bodies",
        subCategoria: "Manga Longa",
        tamanho: ["3M","6M","9M"]
    },
    {
        id: 11,
        nome: "Kit Bodies manga longa carters 4 peças",
        descricao: "O Kit Bodies Manga Longa Basics Carters 4 peças é produzido em algodão com tecido leve e macio. O kit é composto por quatro bodies lisos e básicos. Os bodies possuem ombros expansíveis, que facilitam o vestir da peça, mangas longas e fechamento entrepernas com botões de pressão niquel-free. Delicados o Kit deixará seu pequeno pronto para qualquer ocasião.",
        preco: 114.90,
        precoPromocao: 75.90,
        cores: [branco,azul,cinza,preto,multi],
        imagens: ["/images/kit-body-4-pecas-carter.png","/images/body-azul.png","/images/body-branco.png","/images/body-rosa.png","/images/body-verde.png",],
        desconto: "34% OFF",
        categoria: "Bodies",
        subCategoria: "Manga Longa",
        tamanho: ["3M","6M","9M"]
    },
]