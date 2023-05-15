import { bakeAndChew, bakeAndChewLogoMark, facebookIcon, instagramIcon, cakeHeroImg1, cakeHeroImg2, cakeHeroImg3, cakeHeroImg4, cakeHeroImg5, cakeHeroImg6, cakeImg1, cakeImg2, cakeImg3 } from "../assets"

interface NavLinks {
    id: number,
    title: string,
    link: string
}

interface NavIcons {
    id: number,
    name: string,
    icon: string
}

type Logo = {
    source: string,
    name: string
}

interface Testimonials  {
    id: number,
    name: string,
    review: string,
    img: string
}

interface HeroImages {
    id: number,
    img: string,
    name: string
}

const logo:Logo = {
    source: bakeAndChew,
    name: 'bakeAndChew'
};
const logoMark:Logo = {
    source: bakeAndChewLogoMark,
    name: 'bakeAndChew'
};

const heroImages1: Array<HeroImages> = [
    {
        id: 1,
        img: cakeHeroImg1,
        name: 'cakeHeroImg1'
    },
    {
        id: 2,
        img: cakeHeroImg2,
        name: 'cakeHeroImg2'
    },
    {
        id: 3,
        img: cakeHeroImg3,
        name: 'cakeHeroImg3'
    },
]

const heroImages2: Array<HeroImages> = [
    {
        id: 1,
        img: cakeHeroImg4,
        name: 'cakeHeroImg4'
    },
    {
        id: 2,
        img: cakeHeroImg5,
        name: 'cakeHeroImg5'
    },
    {
        id: 3,
        img: cakeHeroImg6,
         name: 'cakeHeroImg6'
    }
]

const navLinks: Array<NavLinks> = [
    {
        id: 1,
        title: 'home',
        link: "/"
    },{
        id: 2,
        title: 'about',
        link: '/about'
    },{
        id: 3,
        title: 'order',
        link: '/order'
    },{
        id: 4,
        title: 'contact',
        link: '/contact'
    }
];

const navIcons: Array<NavIcons> = [
    {
        id: 1,
        name: 'facebook',
        icon: facebookIcon
    },{
        id: 2,
        name: 'instagram',
        icon: instagramIcon
    }
]

const testimonials: Array<Testimonials> = [
    {
        id: 1,
        name: 'Adnan Mehmood',
        review: 'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a.',
        img: cakeImg1
    },
    {
        id: 2,
        name: 'Mehmood',
        review: 'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a.',
        img: cakeImg2

    },
    {
        id: 3,
        name: 'Mehmood',
        review: 'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a.',
        img: cakeImg3
    },
]
export {navLinks, navIcons, logo,logoMark, testimonials, heroImages1, heroImages2}