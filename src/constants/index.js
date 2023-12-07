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
    {
        name1: 'Espuma ',
        name2: '- X',
        auxText: 'Muy Pronto / Coming Soon...',
        to:"/"
    },
];

export const galeriaDetalles = [
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sinacoplesbanner.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2023/12/conacoplesbanner.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sinacoplesbanner.jpg',
        bottomText: 'INSTALACIÓN SIN HERRAMIENTAS!',
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/acoples.mp4',
    },
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemagrad1-1.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemagrad2.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemagrad1-1.jpg',
        bottomText: 'SISTEMA DE GRADUACION',
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemgradvid.mp4',
    },
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/mancuernas1.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2023/12/mancuernas2.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/mancuernas1.jpg',
        bottomText: 'MANCUERNAS PARA OPERACION',
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/mancuernasvid.mp4',
    },
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemgen1.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemgen2.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemgen1.jpg',
        bottomText: 'SISTEMA GENERACION',
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemgenvid.mp4',
    },
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/ventilador1.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2023/12/ventilador2.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/ventilador1.jpg',
        bottomText: 'PROTECCIÓN VENTILADOR',
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/ventiladorvid.mp4',
    },
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/cable2.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2023/12/cable1.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/cable2.jpg',
        bottomText: '10 METROS DE CABLE',
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