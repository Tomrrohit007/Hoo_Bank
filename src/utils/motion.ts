const viewOnScrollVarients = (i:number) => {
    return{
        initial:{
            opacity:0,
            y:"40px"
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                type:"spring",
                delay:0.3 * i,
                mass:0.6,
                damping:15
            }
        }
    }
}

const footerVariants = (i:number) => {
    return{
        initial:{
            opacity:0,
            y:"10px"
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                type:"spring",
                delay:0.2 + i,
                mass:0.6,
                damping:15
            }
        }
    }
}






export {viewOnScrollVarients, footerVariants}