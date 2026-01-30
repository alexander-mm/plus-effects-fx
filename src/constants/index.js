import { facebook, instagram,  tiktok, youtube } from "../assets/icons";
import { wafmix, profile, fivestars, fourstars, threestars } from "../assets/images";
import { containerImg, colorant, colorantSix, pumpKit, xpowder} from "../assets/shop-items";


export const navLinks = [
    { to:"/", to2: "/", label: "Inicio", translationKey: "home" },
    { to: "/machines#machines", to2: "/machines", label: "Nuestros Equipos", translationKey: "ourMachines" },
    { to: "/supplies#supplies", to2: "/supplies", label: "Insumos & Accs", translationKey: "suppliesAccessories" },
];

export const homeDetails = [
    {
        thumbnail: "https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemgen1.jpg",
        bigCanon:  "https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemgen1.jpg",
    },
    {
        thumbnail: "https://www.masqueunefecto.com/wp-content/uploads/2023/12/ventilador2.jpg",
        bigCanon:  "https://www.masqueunefecto.com/wp-content/uploads/2023/12/ventilador2.jpg",
    },
    {
        thumbnail: "https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemgen2.jpg",
        bigCanon:  "https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemgen2.jpg",
    },
    {
        thumbnail: "https://www.masqueunefecto.com/wp-content/uploads/2023/12/conacoplesbanner.jpg",
        bigCanon:  "https://www.masqueunefecto.com/wp-content/uploads/2023/12/conacoplesbanner.jpg",
    },
];

export const swiperHome = [
    {
        src:"https://www.masqueunefecto.com/wp-content/uploads/2024/02/swiper-7.jpg",
        aspect: 'right',
        id:"z"
    },
    {
        aspect: 'center',
        src:"https://www.masqueunefecto.com/wp-content/uploads/2024/02/swiper-8-scaled.jpg",
        id:"y"
    },
    {
        aspect: 'center',
        src:"https://www.masqueunefecto.com/wp-content/uploads/2024/02/swiper-4-scaled.jpg",
        id:"x"
    },
    {
        aspect: 'center',
        src:"https://www.masqueunefecto.com/wp-content/uploads/2024/02/swiper-9-scaled.jpg",
        id:"w"
    },
    {
        aspect: 'center',
        src:"https://www.masqueunefecto.com/wp-content/uploads/2024/02/swiper-3-scaled.jpg",
        id:"v"
    },
    {
        aspect: 'center',
        src:"https://www.masqueunefecto.com/wp-content/uploads/2024/02/swiper-11-scaled.jpg",
        id:"u"
    },
    {
        aspect: 'center',
        src:"https://www.masqueunefecto.com/wp-content/uploads/2024/02/swiper-1-scaled.jpg",
        id:"t"
    },
    {
        src:"https://www.masqueunefecto.com/wp-content/uploads/2024/02/swiper-12-scaled.jpg",
        aspect: 'center',
        id:"s"
    },
    {
        src:"https://www.masqueunefecto.com/wp-content/uploads/2024/02/slider-2-scaled.jpg",
        aspect: 'center',
        id:"r"
    },
    {
        aspect: 'center',
        src:"https://www.masqueunefecto.com/wp-content/uploads/2024/02/swiper-10-scaled.jpg",
        id:"q"
    },
]
export const swiperNeo = [
    {
        src:"https://www.masqueunefecto.com/wp-content/uploads/2025/02/neobannerred.jpg",
        aspect: 'top',
        id:"z"
    },
    {
        src:"https://www.masqueunefecto.com/wp-content/uploads/2025/02/neobanneryellow.jpg",
        aspect: 'top',
        id:"y"
    },
    {
        src:"https://www.masqueunefecto.com/wp-content/uploads/2025/02/neobannerpurple.jpg",
        aspect: 'top',
        id:"x"
    },
    {
        src:"https://www.masqueunefecto.com/wp-content/uploads/2025/02/neobannergray.jpg",
        aspect: 'top',
        id:"w"
    },
    {
        src:"https://www.masqueunefecto.com/wp-content/uploads/2025/02/neobannerblue.jpg",
        aspect: 'top',
        id:"v"
    },
    {
        src:"https://www.masqueunefecto.com/wp-content/uploads/2025/02/neobannergreen.jpg",
        aspect: 'top',
        id:"u"
    },
]
export const swiperFooter = [
    {
        src: profile,
        name: 'User Plus Machines 1',
        company:'ForExample Entertainment 1',
        opinion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium libero natus fugit quidem cumque! Fugit excepturi libero qui autem minus, exercitationem temporibus ex ratione, quis fugiat accusantium eius inventore?',
        stars: fivestars,
        id:"1"
    },
    {
        src: profile,
        name: 'User Plus Machines 2',
        company:'ForExample Entertainment 2',
        opinion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium libero natus fugit quidem cumque! Fugit excepturi libero qui autem minus, exercitationem temporibus ex ratione, quis fugiat accusantium eius inventore?',
        stars: fourstars,
        id:"2"
    },
    {
        src: profile,
        name: 'User Plus Machines 3',
        company:'ForExample Entertainment 3',
        opinion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium libero natus fugit quidem cumque! Fugit excepturi libero qui autem minus, exercitationem temporibus ex ratione, quis fugiat accusantium eius inventore?',
        stars: threestars,
        id:"2"
    },
]

export const machineOne = [
    {
        thumbnail: "https://www.masqueunefecto.com/wp-content/uploads/2023/12/canonone.png",
        bigCanon: "https://www.masqueunefecto.com/wp-content/uploads/2023/12/canonone.png",
    },
    {
        thumbnail: "https://www.masqueunefecto.com/wp-content/uploads/2023/12/canon2.png",
        bigCanon: "https://www.masqueunefecto.com/wp-content/uploads/2023/12/canon2.png",
    },
    {
        thumbnail: "https://www.masqueunefecto.com/wp-content/uploads/2023/12/canon3.png",
        bigCanon: "https://www.masqueunefecto.com/wp-content/uploads/2023/12/canon3.png",
    },
    {
        thumbnail: wafmix,
        bigCanon: wafmix,
    },
];
export const machineNeo = [
    {
        thumbnail: "https://www.masqueunefecto.com/wp-content/uploads/2025/02/NEO-RED.png",
        bigCanon: "https://www.masqueunefecto.com/wp-content/uploads/2025/02/NEO-RED.png",
    },
    {
        thumbnail: "https://www.masqueunefecto.com/wp-content/uploads/2025/02/NEO-BLUE.png",
        bigCanon: "https://www.masqueunefecto.com/wp-content/uploads/2025/02/NEO-BLUE.png",
    },
    {
        thumbnail: "https://www.masqueunefecto.com/wp-content/uploads/2025/02/NEO-PURPLE.png",
        bigCanon: "https://www.masqueunefecto.com/wp-content/uploads/2025/02/NEO-PURPLE.png",
    },
    {
        thumbnail: "https://www.masqueunefecto.com/wp-content/uploads/2025/02/NEO-GREEN.png",
        bigCanon: "https://www.masqueunefecto.com/wp-content/uploads/2025/02/NEO-GREEN.png",
    },
    {
        thumbnail: "https://www.masqueunefecto.com/wp-content/uploads/2025/02/NEO-YELLOW.png",
        bigCanon: "https://www.masqueunefecto.com/wp-content/uploads/2025/02/NEO-YELLOW.png",
    },
    {
        thumbnail: "https://www.masqueunefecto.com/wp-content/uploads/2025/02/NEO-GRAY.png",
        bigCanon: "https://www.masqueunefecto.com/wp-content/uploads/2025/02/NEO-GRAY.png",
    },
];

export const supplies = [
    {
        thumbnail: containerImg,
        bigImg: containerImg,
        confirm: "bidon"
    },
    {
        thumbnail: xpowder,
        bigImg: xpowder,
        confirm: "powder"
    },
    {
        thumbnail: colorant,
        bigImg: colorant,
        confirm: "colorante"
    },
    {
        thumbnail: colorantSix,
        bigImg: colorantSix,
        confirm: "coloranteX6"
    },
    {
        thumbnail: pumpKit,
        bigImg: pumpKit,
        confirm: "bombeo"
    },
]

export const foamMachines = [
    {
        keyword: 'launch',
        name1: 'Espuma ',
        name2: '- One',
        thumbnail: "https://www.masqueunefecto.com/wp-content/uploads/2024/08/one.png",
        to:"/espumaone#one"
    },
    {
        comingSoon: 'comingSoon',
        name1: 'Espuma ',
        name2: '- Neo',
        auxText: 'Muy Pronto', translationKey: "auxText",
        thumbnail: "https://www.masqueunefecto.com/wp-content/uploads/2025/02/neo-foam.png",
        to:"/espumaneo#neo"
    },
];

export const detailsGalery = [
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sinacoplesbanner.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2023/12/conacoplesbanner.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sinacoplesbanner.jpg',
        bottomText: 'INSTALACIÓN SIN HERRAMIENTAS!', translationKey: "no-tools",
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/acoples.mp4',
    },
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemagrad1-1.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemagrad2.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemagrad1-1.jpg',
        bottomText: 'SISTEMA DE INCLINACION',translationKey: "inclination",
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemgradvid.mp4',
    },
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/mancuernas1.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2023/12/mancuernas2.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/mancuernas1.jpg',
        bottomText: 'MANCUERNAS PARA OPERACIÓN', translationKey: "dumbbells",
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/mancuernasvid.mp4',
    },
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemgen1.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemgen2.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemgen1.jpg',
        bottomText: 'SISTEMA DE GENERACIÓN', translationKey: "gen-system",
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemgenvid.mp4',
    },
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/ventilador1.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2023/12/ventilador2.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/ventilador1.jpg',
        bottomText: 'PROTECCIÓN VENTILADOR', translationKey: "protection",
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/ventiladorvid.mp4',
    },
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/cable2.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2023/12/cable1.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/cable2.jpg',
        bottomText: '10 METROS DE CABLE', translationKey: "wire",
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/cable1.jpg',
    },
];
export const detailsGaleryNeo = [
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2025/02/neoacoples.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2025/02/switch.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2025/02/neoacoples.jpg',
        bottomText: 'INSTALACIÓN SIN HERRAMIENTAS!', translationKey: "no-tools",
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/acoples.mp4',
    },
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2025/02/neoinclination2.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2025/02/onefoam2.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2025/02/neoinclination2.jpg',
        bottomText: 'SISTEMA DE INCLINACION',translationKey: "inclination",
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemgradvid.mp4',
    },
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2025/02/neoinclination.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2025/02/onefoam.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2025/02/neoinclination.jpg',
        bottomText: 'MANCUERNAS PARA OPERACIÓN', translationKey: "dumbbells",
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/mancuernasvid.mp4',
    },
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2025/02/neogeneration.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2025/02/neogeneration2.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2025/02/neogeneration.jpg',
        bottomText: 'SISTEMA DE GENERACIÓN', translationKey: "gen-system",
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/sistemgenvid.mp4',
    },
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/cable2.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2025/02/neoacoples.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/cable2.jpg',
        bottomText: '10 METROS DE CABLE', translationKey: "wire",
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/cable1.jpg',
    },
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2025/02/neogrid.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2025/02/neosupport2.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2025/02/neogrid.jpg',
        bottomText: 'PROTECCIÓN VENTILADOR', translationKey: "protectionneo",
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2023/12/ventiladorvid.mp4',
    },
];

export const userManual = [
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2024/01/min-manual-canon.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2024/01/min-manual-canon.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2024/01/min-manual-canon.jpg',
        bottomText: 'INSTALACIÓN SIN HERRAMIENTAS!', translationKey: "no-tools",
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2024/01/MANUAL-INSTALACION.mp4',
    },
    {
        background1: 'https://www.masqueunefecto.com/wp-content/uploads/2024/01/min-manual-box.jpg',
        background2:'https://www.masqueunefecto.com/wp-content/uploads/2024/01/min-manual-box.jpg',
        imgExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2024/01/min-manual-box.jpg',
        bottomText: 'SISTEMA DE INCLINACION',translationKey: "inclination",
        videoExpand: 'https://www.masqueunefecto.com/wp-content/uploads/2024/01/QR-MANUAL.mp4',
    },
];

export const foamFluid= [
    {
        thumbnail: containerImg,
        nombre: 'Espuma XPLUS',
        descripcion: 'Bidon: 20 Litros', translationKey: "bidon20",
        to:"/fluidcontainer#container"
    },
    {
        thumbnail: xpowder,
        nombre: 'Espuma XPOWDER',
        descripcion: 'Bidon: 20 Litros', translationKey: "xpowder",
        to:"/foampowder#container"
    },
];

export const additives = [
    {
        thumbnail: colorant,
        nombre: 'Espuma XCOLOR',
        descripcion: '1 UND', translationKey: "1-unit",
        to:"/espumacolor#espumacolor"
    },
    {
        thumbnail: colorantSix,
        nombre: 'Espuma XCOLOR SIX PACK',
        descripcion: '6 UNDS', translationKey: "6-unit",
        to:"/espumacolorsix#espumacolorsix"
    },
];

export const accesories = [
    {
        thumbnail: pumpKit,
        nombre: 'Kit de Bombeo AUX', translationKey: "pump",        equipo: 'ESPUMA ONE',
        to:"/pumpkit#pumpkit"
    },
];

export const footerLinks = [
    {
        title: "Máquinas", translationKey: "section",
        links: [
            { name: "Espuma", link: "/machines#machines", translationKey:"foam" },
            { name: "Nieve", link: "/buildpage", translationKey:"snow" },
            { name: "CO2", link: "/buildpage" },
            { name: "Burbujas", link: "/buildpage", translationKey:"bubbles" },
        ],
    },
];

export const helpLinks = [
    {
        title: "Ayuda", translationKey: "section-help",
        links: [
            { name: "Políticas de Garantía", translationKey:"p-warranty", link: "/buildpage", },
            { name: "Políticas de Devolución", translationKey:"p-return", link: "/buildpage"},
            { name: "Sitios Asociados", translationKey:"sites-aso", link: "https://espumaplay.com/" },
        ],
    },
];

export const contactLinks = [
    {
        title: "Contacto", translationKey: "section-contact",
        links: [
            { name: "ventas@masqueunefecto.com", link: "ventas@masqueunefecto.com" },
            { name: "Tel. (+593) 98 04 29 801", link: "https://api.whatsapp.com/send?phone=593980429801" },
            { name: "Nicanor Gavilanes y Luis Padilla - Lote #6 - San Gabriel, Carchi - Ecuador", link: "https://maps.app.goo.gl/nrMm5zkETkZpvzWn7" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", href: "https://www.facebook.com/masqueunefecto"},
    { src: instagram, alt: "instagram logo", href: "https://www.instagram.com/masqueunefecto/" },
    { src: tiktok, alt: "tiktok logo", href: "https://www.tiktok.com/@masqueunefecto" },
    { src: youtube, alt: "youtube logo", href: "https://www.youtube.com/channel/UCBQ952GNUt3RXTz2Iw0JwUg" },
];