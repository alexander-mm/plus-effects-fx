import { facebook, instagram, whatsapp, tiktok, youtube } from "../assets/icons";
import { canon1,canon2,canon3, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import { bidon, colorante, colorantex6, sistemadebombeo } from "../assets/shop-items";

export const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/maquinas", label: "Nuestros Equipos" },
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

export const maquinasEspuma = [
    {
        thumbnail: canon1,
        to:"/espumaone"
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
        nombre: 'Espuma XCOLOR SIX PACK',
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
        title: "Máquinas",
        links: [
            { name: "Espuma", link: "/maquinas" },
            { name: "Nieve", link: "/" },
            { name: "CO2", link: "/" },
            { name: "Burbujas", link: "/" },
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
    { src: whatsapp, alt: "whatsapp logo", href: "https://api.whatsapp.com/send?phone=593980429801" },
    { src: facebook, alt: "facebook logo", href: "https://www.facebook.com/masqueunefecto"},
    { src: instagram, alt: "instagram logo", href: "https://www.instagram.com/masqueunefecto/" },
    { src: tiktok, alt: "tiktok logo", href: "https://www.tiktok.com/@masqueunefecto" },
    { src: youtube, alt: "youtube logo", href: "https://www.youtube.com/channel/UCBQ952GNUt3RXTz2Iw0JwUg" },
];