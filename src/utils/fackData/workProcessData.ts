type DataType = {
    id: number
    title: string,
    img: string,
    description: string,
    icon: string
}[]

export const workProcessData: DataType = [
    {
        id: 1,
        title: "Design",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-pencil-ruler-line",
        description: "We begin with understanding your goals and crafting pixel-perfect designs tailored to your brand’s vision and user needs.",
    },
    {
        id: 2,
        title: "Build",
        img: "/images/shapes/workprocess-shape2.png",
        icon: "ri-code-s-slash-line",
        description: "Our development team brings the designs to life with clean, scalable, and responsive code using modern technologies.",
    },
    {
        id: 3,
        title: "Deploy",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-rocket-2-line",
        description: "After rigorous testing and feedback loops, we launch your product with confidence—fully optimized and ready to grow.",
    },
]
