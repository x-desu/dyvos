import { useEffect, useState } from "react"

const Review = () => {
    const [currentSlide,setCurrentSlide]= useState(0)
   

    useEffect(()=>{
        const interval = setInterval(handleNextSlide, 5000);
        return ()=> clearInterval(interval)
    },[])

    const reviews = [
        { text: "This website is amazing! I found exactly what I needed.", name: "Alex T." },
        { text: "Highly recommend! The user interface is super easy to navigate.", name: "Mia S." },
        { text: "Great customer service, quick response time!", name: "Rahul K." },
        { text: "An excellent platform for finding quality products.", name: "Tech Solutions Inc." }
    ];

    const handleNextSlide = () => {
        setCurrentSlide((prev)=>(prev+1)%reviews.length)
    }
  return (
    <div className="px-4 lg:px-8 max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto py-16 lg:flex lg:flex-row">
        <div className="flex flex-col gap-4 lg:w-1/2">
        <div className=" border rounded-full px-2 py-1 mb-4 w-fit text-xs text-btn_txt">
            <span>Testimonial</span>
        </div>
        <h1 className="text-2xl lg:text-4xl font-semibold">What our Clients say!</h1>
        <p >Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
        </div>
    <div className="flex sm:flex-row flex-col w-full my-8 justify-center items-center ">
        <div className="sm:w-1/2 h-1/2 sm:h-full flex flex-col justify-center gap-4 p-8  lg:w-full">
        <div className=" flex justify-center text-neutral-400 items-center max-h-4">
                <p className="text-lg sm:text-xl max-w-full break-words text-center italic">`{reviews[currentSlide].text}`</p>
            </div>
            <div className="flex justify-center items-center mt-2 ">
                <p className="text-sm font-semibold">{reviews[currentSlide].name}</p>
            </div>
            {/* dots */}
            <div className="flex justify-center gap-3 ">
            {reviews.map((item,index)=>(
                <div key={index}
                className={`w-2 h-2 rounded-full transition-all
                    ${index === currentSlide ? 'bg-btn_txt ' : 'bg-btn_bg'}`}
                    >  
                </div>
            ))}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Review