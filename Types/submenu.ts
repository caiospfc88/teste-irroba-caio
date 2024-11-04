type itemMenu = {
    id: number;
    titulo: string;
    opcoes: Array<opcoesMenu>;
    imagem: string;
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
        imagem: "/images/imagemMenu.png"
    },
    {
        id: 1,
        titulo: "Meninos",
        opcoes: [bodies,conjuntos,macacoes],
        imagem: "/images/imagemMenu.png"
    },
    {
        id: 2,
        titulo: "Acessorios",
        opcoes: [bodies],
        imagem: "/images/imagemMenu.png"
    },
    {
        id: 3,
        titulo: "Alimentação",
        opcoes: [bodies],
        imagem: "/images/imagemMenu.png"
    },
    {
        id: 4,
        titulo: "Higiene e cuidados com o bebê",
        opcoes: [bodies],
        imagem: "/images/imagemMenu.png"
    },
    {
        id: 5,
        titulo: "Mamãe",
        opcoes: [bodies],
        imagem: "/images/imagemMenu.png"
    },
    {
        id: 6,
        titulo: "Ofertas",
        opcoes: [bodies],
        imagem: "/images/imagemMenu.png"
    }
]