type itemMenu = {
    id: number;
    titulo: string;
    opcoes: Array<opcoesMenu>;
    imagem: string;
    btColor: string;
    btTextColor: string;
    destaque: boolean;
}

type opcoesMenu = {
    id: number;
    label: string;
    opcoesfinais: Array<opcoesFinais> | null;
}

type opcoesFinais = {
    id: number;
    label: string;
    path: string;
}

const bodies: opcoesMenu = {
    id: 0,
    label: "Bodies",
    opcoesfinais: [
        {
            id: 0,
            label: "Manga longa",
            path: "",
        },
        {
            id: 1,
            label: "Manga curta",
            path: ""
        }
    ]
}

const conjuntos: opcoesMenu = {
    id: 1,
    label: "Conjuntos",
    opcoesfinais: null,
}

const macacoes: opcoesMenu = {
    id: 2,
    label: "Macacões",
    opcoesfinais: null,
}

const brinquedos: opcoesMenu = {
    id: 3,
    label: "Brinquedos/Mordedores",
    opcoesfinais: null,
}

const chupetas: opcoesMenu = {
    id: 4,
    label: "Chupetas",
    opcoesfinais: null,
}

const cobertores: opcoesMenu = {
    id: 5,
    label: "Cobertores/Mantas",
    opcoesfinais: null,
}

const babaEletronica: opcoesMenu = {
    id: 6,
    label: "Babá Eletrônica/Termômetros",
    opcoesfinais: null,
}

const seguranca: opcoesMenu = {
    id: 7,
    label: "Segurança",
    opcoesfinais: null,
}

const skipHop: opcoesMenu = {
    id: 8,
    label: "Skip Hop",
    opcoesfinais: null,
}

const mamadeiras: opcoesMenu = {
    id: 9,
    label: "Mamadeiras",
    opcoesfinais: null,
}

const utensilios: opcoesMenu = {
    id: 10,
    label: "Utensílios",
    opcoesfinais: null,
}

const vitaminas: opcoesMenu = {
    id: 11,
    label: "Vitaminas",
    opcoesfinais: null,
}

const banho: opcoesMenu = {
    id: 12,
    label: "Banho",
    opcoesfinais: null,
}

const colicas: opcoesMenu = {
    id: 13,
    label: "Cólicas",
    opcoesfinais: null,
}

const alivio: opcoesMenu = {
    id: 14,
    label: "Alívio de gripes e resfriados",
    opcoesfinais: null,
}

const pele: opcoesMenu = {
    id: 15,
    label: "Pele",
    opcoesfinais: null,
}

const dentes: opcoesMenu = {
    id: 16,
    label: "Dentes",
    opcoesfinais: null,
}

const gravidez: opcoesMenu = {
    id: 17,
    label: "Gravidez",
    opcoesfinais: null,
}

const amamentacao: opcoesMenu = {
    id: 18,
    label: "Amamentação",
    opcoesfinais: null,
}

const oferta: opcoesMenu = {
    id: 19,
    label: "",
    opcoesfinais: null,
}





export const opcoesSubmenu: Array<itemMenu> = [
    {
        id: 0,
        titulo: "Meninas",
        opcoes: [bodies,conjuntos,macacoes],
        imagem: "/images/imagemMenu.png",
        btColor: "#F9E0E4",
        btTextColor: "#E06175",
        destaque: true,
    },
    {
        id: 1,
        titulo: "Meninos",
        opcoes: [bodies,conjuntos,macacoes],
        imagem: "/images/imagemMenu.png",
        btColor: "#DAEFFB",
        btTextColor: "#229FE7",
        destaque: true,
    },
    {
        id: 2,
        titulo: "Acessorios",
        opcoes: [brinquedos,chupetas,cobertores,babaEletronica,seguranca,skipHop],
        imagem: "/images/imagemMenu.png",
        btColor: "#69593C",
        btTextColor: "#DED5C5",
        destaque: true,
    },
    {
        id: 3,
        titulo: "Alimentação",
        opcoes: [mamadeiras,utensilios,vitaminas],
        imagem: "/images/imagemMenu.png",
        btColor: "#F9E0E4",
        btTextColor: "#E06175",
        destaque: false,
    },
    {
        id: 4,
        titulo: "Higiene e cuidados com o bebê",
        opcoes: [banho,colicas,alivio,pele,dentes],
        imagem: "/images/imagemMenu.png",
        btColor: "#7DE3B0",
        btTextColor: "#FBFEFC",
        destaque: true,
    },
    {
        id: 5,
        titulo: "Mamãe",
        opcoes: [gravidez,amamentacao],
        imagem: "/images/imagemMenu.png",
        btColor: "#E8D3FD",
        btTextColor: "#9C40F7",
        destaque: true,
    },
    {
        id: 6,
        titulo: "Ofertas",
        opcoes: [oferta],
        imagem: "/images/imagemMenu.png",
        btColor: "#FCF6B3",
        btTextColor: "#AC9E07",
        destaque: true,
    }
]