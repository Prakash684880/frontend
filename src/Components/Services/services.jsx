import React from 'react'
import Img1 from "../../assets/food1.jpg";
import Img2 from "../../assets/food2.jpg";
import Img3 from "../../assets/food3.webp";


const ServicesData = [
    {
      id: 1,
      img: Img1,
      name: "Burger",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
      id: 2,
      img: Img1,
      name: "Burger combo",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
    {
      id: 3,
      img: Img3,
      name: "Chicken curry",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
  ];

const services = () => {
  return (
    <>
    <div  className='py-10'>
        <div className='container'>
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p className='text-sm bg-clip-text
                text-transparent bg-gradient-to-r
                from-primary to-secondary'>
                    Our Services
                </p>
                <h1 className='text-xs- text-gray font-bold'>
                    Services
                </h1>
                <p className='text-xs text-gray-400'>
                    {""}
                    Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Voluptates officiis temporibus beatae
                     molestias maiores laboriosam magnam quo 
                     unde, tempora dolorum fugiat magni vitae 
                     accusamus natus 
                    provident minus debitis excepturi ipsa!
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl  bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[150px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300 rounded-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
    </>
  )
}

export default services
