import { bakeAndChew, bakeAndChewLogoMark, facebookIcon, instagramIcon, cakeHeroImg1, cakeHeroImg2, cakeHeroImg3, cakeHeroImg4, cakeHeroImg5, cakeHeroImg6, cakeImg1, cakeImg2, cakeImg3, bakedImg1, bakedImg2, otherFoodImg1 } from "../assets"

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
    bgImg: string,
    cakeType: string
}

interface HeroImages {
    id: number,
    img: string,
    name: string
}

interface DropDownMenuItems {
    id: number,
    title: string,
    handleDispatch?: () => void
}

interface BakeAndChewMenuData{
    id: number
    noOfItem: number
    title: string,
    description: string,
    type: string,
    cardData: {
        id: number,
        title: string,
        price: number,
        img: string,
        imgName: string
    }[]
}

const bakeAndChewMenuData: Array<BakeAndChewMenuData> = [
    {
        id: 1,
        noOfItem: 0,
        title: "Wedding Cakes",
        description: "I'm a description. Click me and Edit Menu to open the Restaurant Menu editor and change my text.",
        type: "Cake",
        cardData:  [
            {
                id: 1,
                title: "Flowers Wedding Cake",
                price: 1500,
                img: cakeImg1,
                imgName: "cakeImg1"
            },
            {
                id: 2,
                title: "Golden Wedding Cake",
                price: 1500,
                img: cakeImg2,
                imgName: "cakeImg2"
            },
            {
                id: 3,
                title: "Romantic Wedding Cake",
                price: 1400,
                img: cakeImg3,
                imgName: "cakeImg3"
            },
            {
                id: 4,
                title: "Flowers Wedding Cake",
                price: 1300,
                img: cakeImg1,
                imgName: "cakeImg1"
            },
            {
                id: 5,
                title: "Flowers Wedding Cake",
                price: 1500,
                img: cakeImg1,
                imgName: "cakeImg1"
            },
            {
                id: 6,
                title: "Flowers Wedding Cake",
                price: 1500,
                img: cakeImg1,
                imgName: "cakeImg1"
            },
        ]
    },
    {
        id:2,
        noOfItem: 1,
        title: "Celebration Cakes",
        description: "I'm a description. Click me and Edit Menu to open the Restaurant Menu editor and change my text.",
        type:"Cake",
        cardData:  [
            {
                id: 1,
                title: "Flowers Wedding Cake",
                price: 1500,
                img: cakeImg1,
                imgName: "cakeImg1"
            },
            {
                id: 2,
                title: "Golden Wedding Cake",
                price: 1500,
                img: cakeImg2,
                imgName: "cakeImg2"
            },
            {
                id: 3,
                title: "Romantic Wedding Cake",
                price: 1400,
                img: cakeImg3,
                imgName: "cakeImg3"
            },
            {
                id: 4,
                title: "Flowers Wedding Cake",
                price: 1300,
                img: cakeImg1,
                imgName: "cakeImg1"
            },
            {
                id: 5,
                title: "Flowers Wedding Cake",
                price: 1500,
                img: cakeImg1,
                imgName: "cakeImg1"
            },
            {
                id: 6,
                title: "Flowers Wedding Cake",
                price: 1100,
                img: cakeImg1,
                imgName: "cakeImg1"
            },
        ]
    },
    {
        id:3,
        noOfItem: 0,
        title: "Bakery Normal Item",
        description: "I'm a description. Click me and Edit Menu to open the Restaurant Menu editor and change my text.",
        type: "Bake",
        cardData:  [
            {
                id: 1,
                title: "Bakery",
                price: 1500,
                img: bakedImg1,
                imgName: "bakedImg1"
            },
            {
                id: 2,
                title: "Bakery",
                price: 1500,
                img: bakedImg2,
                imgName: "bakedImg2"
            },
            {
                id: 3,
                title: "Bakery",
                price: 1400,
                img: bakedImg1,
                imgName: "bakedImg1"
            },
            {
                id: 4,
                title: "Bakery",
                price: 1300,
                img: bakedImg1,
                imgName: "bakedImg1"
            },
            {
                id: 5,
                title: "Bakery",
                price: 1500,
                img: bakedImg1,
                imgName: "bakedImg1"
            },
            {
                id: 6,
                title: "Bakery",
                price: 1500,
                img: bakedImg2,
                imgName: "bakedImg2"
            },
        ]
    },
    {
        id:4        ,
        noOfItem: 1,
        title: "Bakery Extra Item",
        description: "I'm a description. Click me and Edit Menu to open the Restaurant Menu editor and change my text.",
        type: "Bake",
        cardData:  [
            {
                id: 1,
                title: "Bakery",
                price: 1500,
                img: bakedImg1,
                imgName: "bakedImg1"
            },
            {
                id: 2,
                title: "Bakery",
                price: 1500,
                img: bakedImg2,
                imgName: "bakedImg2"
            },
            {
                id: 3,
                title: "Bakery",
                price: 1400,
                img: bakedImg1,
                imgName: "bakedImg1"
            },
            {
                id: 4,
                title: "Bakery",
                price: 1300,
                img: bakedImg1,
                imgName: "bakedImg1"
            },
            {
                id: 5,
                title: "Bakery",
                price: 1500,
                img: bakedImg1,
                imgName: "bakedImg1"
            },
            {
                id: 6,
                title: "Bakery",
                price: 1500,
                img: bakedImg2,
                imgName: "bakedImg2"
            },
        ]
    },
    {
        id:5,
        noOfItem: 0,
        title: "Other Items",
        description: "I'm a description. Click me and Edit Menu to open the Restaurant Menu editor and change my text.",
        type: "Other",
        cardData:  [
            {
                id: 1,
                title: "Other Item",
                price: 1500,
                img: otherFoodImg1,
                imgName: "otherFoodImg1"
            },
            {
                id: 2,
                title: "Other Item",
                price: 1500,
                img: otherFoodImg1,
                imgName: "otherFoodImg2"
            },
            {
                id: 3,
                title: "Other Item",
                price: 1400,
                img: otherFoodImg1,
                imgName: "otherFoodImg1"
            },
            {
                id: 4,
                title: "Other Item",
                price: 1300,
                img: otherFoodImg1,
                imgName: "otherFoodImg1"
            },
            {
                id: 5,
                title: "Other Item",
                price: 1500,
                img: otherFoodImg1,
                imgName: "otherFoodImg1"
            },
            {
                id: 6,
                title: "Other Item",
                price: 1500,
                img: otherFoodImg1,
                imgName: "otherFoodImg1"
            },
        ]
    },
    {
        id:6,
        noOfItem: 1,
        title: "Other Items",
        description: "I'm a description. Click me and Edit Menu to open the Restaurant Menu editor and change my text.",
        type: "Other",
        cardData:  [
            {
                id: 1,
                title: "Other Item",
                price: 1500,
                img: otherFoodImg1,
                imgName: "otherFoodImg1"
            },
            {
                id: 2,
                title: "Other Item",
                price: 1500,
                img: otherFoodImg1,
                imgName: "otherFoodImg2"
            },
            {
                id: 3,
                title: "Other Item",
                price: 1400,
                img: otherFoodImg1,
                imgName: "otherFoodImg1"
            },
            {
                id: 4,
                title: "Other Item",
                price: 1300,
                img: otherFoodImg1,
                imgName: "otherFoodImg1"
            },
            {
                id: 5,
                title: "Other Item",
                price: 1500,
                img: otherFoodImg1,
                imgName: "otherFoodImg1"
            },
            {
                id: 6,
                title: "Other Item",
                price: 1500,
                img: otherFoodImg1,
                imgName: "otherFoodImg1"
            },
        ]
    },

]
const dropDownMenuItems: Array<DropDownMenuItems> = [
    {
        id: 1,
        title: "Cake Menu",
    },
    {
        id: 2,
        title: "Bake Menu",
    },
    {
        id: 3,
        title: "Other Menu",
    },
]

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
        bgImg: "bg-[url('./assets/cakeImage7.jpg')]",
        cakeType: 'Awesome with our Delight Cake'
    },
    {
        id: 2,
        name: 'Abubaker Jamil',
        review: 'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a.',
        bgImg: "bg-[url('./assets/cakeImage8.jpg')]",
        cakeType: 'Awesome with our Delight Cake'

    },
    {
        id: 3,
        name: 'Mehmood',
        review: 'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, a.',
        bgImg: "bg-[url('./assets/cakeImage9.jpg')]",
        cakeType: 'Awesome with our Delight Cake'
    },
]
export {navLinks, navIcons, logo,logoMark, testimonials, heroImages1, heroImages2, dropDownMenuItems, bakeAndChewMenuData}