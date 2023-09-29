import { facebook, instagram, whatsapp, tiktok, youtube } from "../assets/icons";
import { canon1,canon2,canon3, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import { bidon, colorante, colorantex6, sistemadebombeo } from "../assets/shop-items";

export const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/maquinas", label: "Máquinas" },
    { to: "/insumos&accs", label: "Insumos & Accs" },
];


export const machines = [
    {
        thumbnail: thumbnailShoe1,
        bigCanon: canon1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigCanon: canon2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigCanon: canon3,
    },
];

export const articulos = [
    {
        thumbnail: bidon,
        nombre: 'Espuma XPLUS',
        descripcion: 'Bidon: 20 Litros',
        to:"/bidon"
    },
    {
        thumbnail: bidon,
        nombre: 'Espuma XPLUS',
        descripcion: 'Bidon: 20 Litros',
        to:"/bidon"
    },
    {
        thumbnail: bidon,
        nombre: 'Espuma XPLUS',
        descripcion: 'Bidon: 20 Litros',
        to:"/bidon"
    },
    {
        thumbnail: bidon,
        nombre: 'Espuma XPLUS',
        descripcion: 'Bidon: 20 Litros',
        to:"/bidon"
    },
];

export const aditivos = [
    {
        thumbnail: colorante,
        nombre: 'Espuma XCOLOR',
        descripcion: '1 UND',
        to:"/aditivo"
    },
    {
        thumbnail: colorantex6,
        nombre: 'Espuma XCOLOR',
        descripcion: '6 UNDS',
        to:"/aditivox6"
    },
];
export const accesoriosRefaccion = [
    {
        thumbnail: sistemadebombeo,
        nombre: 'Kit de Bombeo AUX',
        equipo: 'ESPUMA ONE',
        to:"/kitbombeo"
    },
];

export const footerLinks = [
    {
        title: "Productos",
        links: [
            { name: "Espuma One", link: "/maquinas" },
            { name: "MHB-400", link: "/" },
            { name: "FCM-350 SP", link: "/" },
            { name: "FCM-350", link: "/" },
        ],
    },
    {
        title: "Ayuda",
        links: [
            { name: "Mapa del Sitio", link: "/" },
            { name: "Políticas de Garantía", link: "/" },
            { name: "Políticas de Devolución", link: "/" },
            { name: "Sitios Asociados", link: "/" },
        ],
    },
];

export const socialMedia = [
    { src: whatsapp, alt: "whatsapp logo" },
    { src: facebook, alt: "facebook logo", href: "https://www.facebook.com/masqueunefecto"},
    { src: instagram, alt: "instagram logo" },
    { src: tiktok, alt: "tiktok logo" },
    { src: youtube, alt: "youtube logo" },
];