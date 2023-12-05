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
        name1: 'Espuma ',
        name2: '- One',
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
            { name: "Nieve", link: "/buildpage" },
            { name: "CO2", link: "/buildpage" },
            { name: "Burbujas", link: "/buildpage" },
        ],
    },
];

export const helpLinks = [
    {
        title: "Ayuda",
        links: [
            { name: "Mapa del Sitio", link: "https://maps.app.goo.gl/nrMm5zkETkZpvzWn7" },
            { name: "Políticas de Garantía", link: "/buildpage" },
            { name: "Políticas de Devolución", link: "/buildpage" },
            { name: "Sitios Asociados", link: "https://espumaplay.com/" },
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

export const contactLinks = [
    {
        title: "Contacto",
        links: [
            { name: "ventas@masqueunefecto.com", link: "ventas@masqueunefecto.com" },
            { name: "Tel. (+593) 98 04 29 801", link: "https://api.whatsapp.com/send?phone=593980429801" },
            { name: "Nicanor Gavilanes y Luis Padilla - Lote #6 - San Gabriel, Carchi", link: "https://maps.app.goo.gl/nrMm5zkETkZpvzWn7" },
        ],
    },
];