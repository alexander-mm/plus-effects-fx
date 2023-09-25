import { facebook, instagram, whatsapp, tiktok, youtube } from "../assets/icons";
import { canon1,canon2,canon3, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "#products", label: "Productos" },
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

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const footerLinks = [
    {
        title: "Productos",
        links: [
            { name: "Espuma One", link: "/" },
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