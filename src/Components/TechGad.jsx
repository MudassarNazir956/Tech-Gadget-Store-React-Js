import React from 'react'
import { Link } from 'react-router-dom';
const gadgetsData = [
    {
      id: 1,
      name: 'Headphones',
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, omnis..",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      price: "$69.99",
    },
    {
      id: 2,
      name: 'Digital Cameras',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, omnis..',
      image: 'https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?cs=srgb&dl=pexels-fox-225157.jpg&fm=jpg',
      price: "$499.99"
    },
    {
      id: 3,
      name: 'Mobile Phones',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, omnis..',
      image: 'https://images.expertreviews.co.uk/wp-content/uploads/2023/03/best_android_smartphone_uk_2023_phones.jpg',
      price: "$199.99"
    },
    {
      id: 4,
      name: 'Mobile Phones',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, omnis..',
      image: 'https://9to5mac.com/wp-content/uploads/sites/6/2021/10/MacBook-Pro-2021.jpg?quality=82&strip=all&w=1024',
      price: "$199.99"
    },
    {
      id: 5,
      name: 'Mobile Phones',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, omnis..',
      image: "https://www.digitaltrends.com/wp-content/uploads/2022/09/Apple-Watch-Ultra-on-Wrist-Pocket.jpg?p=1",
      price: "$199.99"
    },
    {
      id: 6,
      name: 'Mobile Phones',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, omnis..',
      image: "https://www.zdnet.com/a/img/resize/7c135e7748ad80aa72743c58c1d067ba1a0fddcf/2023/10/06/4e7663f4-fe43-424e-8fde-64a5612cdfd7/img-1950.jpg?auto=webp&width=1280",
      price: "$199.99"
    },
    {
      id: 7,
      name: 'Mobile Phones',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, omnis..',
      image: 'https://media.gq-magazine.co.uk/photos/639c863c994f7680774f8c3c/16:9/w_2560%2Cc_limit/GQ_WATCH_GUIDE_ONLINE_LV_HEADER.jpg',
      price: "$199.99"
    },
    {
      id: 8,
      name: 'Mobile Phones',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, omnis..',
      image: "https://fotografias.lasexta.com/clipping/cmsimages01/2023/04/04/6B9C494E-05ED-4060-9979-6FF04A829BC9/ojo-funda-proximos-airpods-pro-contarian-pantalla-tactil_98.jpg?crop=1300,731,x0,y9&width=1900&height=1069&optimize=high&format=webply",
      price: "$199.99"
    },
    {
      id: 9,
      name: 'Mobile Phones',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, omnis..',
      image: 'https://www.suriaklcc.com.my/wp-content/uploads/2021/12/Tambour_Horizon_Light_Up_Matte_Black_vue_plongeante_3.jpg',
      price: "$199.99"
    },
  ];


const TechGad = () => {

  
  return (
    <>
    <div className="h-max w-screen" >
    <div className="mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center pt-24 text-black">Overall Collections</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gadgetsData.map((gadget) => (
          <div key={gadget.id} className=" p-6 rounded-lg shadow-2xl">
            <img src={gadget.image} alt={gadget.name} className="w-full h-48 object-cover mb-4 rounded-md " />
            <h2 className="text-xl font-bold mb-2 text-black">{gadget.name}</h2>
            <p className="  text-black">{gadget.description}</p>

            <div className="flex">
            <button className=" bg-green-700 text-slate-950 font-bold py-2 px-4 rounded cursor-default">
              {gadget.price}
            </button>
            <button className=" bg-green-700 hover:bg-green-800 hover:text-slate-200 text-black font-bold py-2 px-4 rounded flex ml-40 sm:ml-3 XXsm:ml-1">
              <Link to="/Cart">Visit Cart </Link>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
                <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>

            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
    </>
  )
}

export default TechGad
