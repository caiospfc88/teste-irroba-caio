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
    opcoesfinais: Array<opcoesFinais>;
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
    opcoesfinais: [
        {
            id: 0,
            label: "",
            path: "",
        },
        {
            id: 1,
            label: "",
            path: ""
        }
    ]
}

const macacoes: opcoesMenu = {
    id: 2,
    label: "Macacões",
    opcoesfinais: [
        {
            id: 0,
            label: "",
            path: "",
        },
        {
            id: 1,
            label: "",
            path: ""
        }
    ]
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
        opcoes: [bodies],
        imagem: "/images/imagemMenu.png",
        btColor: "#69593C",
        btTextColor: "#DED5C5",
        destaque: true,
    },
    {
        id: 3,
        titulo: "Alimentação",
        opcoes: [bodies],
        imagem: "/images/imagemMenu.png",
        btColor: "#F9E0E4",
        btTextColor: "#E06175",
        destaque: false,
    },
    {
        id: 4,
        titulo: "Higiene e cuidados com o bebê",
        opcoes: [bodies],
        imagem: "/images/imagemMenu.png",
        btColor: "#7DE3B0",
        btTextColor: "#FBFEFC",
        destaque: true,
    },
    {
        id: 5,
        titulo: "Mamãe",
        opcoes: [bodies],
        imagem: "/images/imagemMenu.png",
        btColor: "#E8D3FD",
        btTextColor: "#9C40F7",
        destaque: true,
    },
    {
        id: 6,
        titulo: "Ofertas",
        opcoes: [bodies],
        imagem: "/images/imagemMenu.png",
        btColor: "#FCF6B3",
        btTextColor: "#AC9E07",
        destaque: true,
    }
]