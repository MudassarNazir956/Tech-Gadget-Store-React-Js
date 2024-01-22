import react from 'react';
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
];

const Collections = () => {

  const handleClick = () => {
    alert('Item Addded to be Favorite Section');
  };
  const Wishlisthandle = () => {
    alert('This item will be back soon in stock');
  };

  return (
    <>
    <div className="bg-green-900 h-max w-screen" >
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-6 text-center pt-10 text-green-100">Top Tech_Gadgets Collections</h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:grid-cols-1 XXsm:grid-cols-1">
        {gadgetsData.map((gadget) => (
          <div key={gadget.id} className=" p-6 rounded-lg shadow-2xl">
            <img src={gadget.image} alt={gadget.name} className="w-full h-48 object-cover mb-4 rounded-md " />
            <h2 className="text-xl font-bold mb-2 text-green-100">{gadget.name}</h2>
            <p className="text-white">{gadget.description}</p>

            <div className="flex">
            <button className="mt-4 bg-green-700 text-white font-bold py-2 px-4 rounded cursor-default">
              {gadget.price}
            </button>
            <button className="mt-4 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded flex ml-32 XXsm:ml-1">
              <Link to="/cart">
              Visit Cart
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
                <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>

            </button>
            </div>
          </div>
        ))}
      </div>
      <div className="py-10 text-center">
      <button className="mt-4 bg-sky-800 hover:bg-blue-700 text-white font-bold px-12 py-3 rounded">
            <Link to="/Gadgets" className="flex">View More
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1">
                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
            </Link>

        </button>
      </div>
         
    </div>
</div>
<section className='lg:flex md:flex-wrap w-screen'>
    <div class="text-gray-400 bg-gray-600 body-font overflow-hidden lg:1/2 lg:w-1/2 body-font">
    <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://img.freepik.com/premium-photo/cute-white-robotic-teen-mini-unit-robot-toy-3d-rendering_379823-4384.jpg"/>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">ROBOTS</h2>
            <h1 class="text-white text-3xl title-font font-medium mb-1">Machines surprise us frequently</h1>
            <div class="flex mb-4">
            <span class="flex items-center">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span class="ml-3">40 Reviews</span>
            </span>
            </div>
            <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
            <div class="flex">
                <span class="mr-3">Color</span>
                <button class="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
                <button class="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button class="border-2 border-gray-800 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
            </div>
            </div>
            <div class="flex">
            <span class="title-font font-medium text-2xl text-white">$58.00</span>
            <button class="flex ml-1 text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded" onClick={Wishlisthandle}>Add to Wishlist</button>
            <button class="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"  onClick={handleClick}>
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
            </button>
            </div>
        </div>
        </div>
    </div>
    </div>


    <div class="text-gray-400 bg-gray-600 body-font overflow-hidden lg:1/2 lg:w-1/2 body-font lg:pl-10 lg:py-6 mt-6 lg:mt-0  body-font md:w-full md:py-4 ">
    <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" class="lg:w-1/2 w-full md:w-1 lg:h-auto h-64 object-cover object-center rounded" src="https://plus.unsplash.com/premium_photo-1683134061306-547f5231944a?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">VR HANDSET</h2>
            <h1 class="text-white text-3xl title-font font-medium mb-1">Where pixels meet passion VR</h1>
            <div class="flex mb-4">
            <span class="flex items-center">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span class="ml-3">23 Reviews</span>
            </span>
            </div>
            <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
            <div class="flex">
                <span class="mr-3">Color</span>
                <button class="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
                <button class="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button class="border-2 border-gray-800 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
            </div>
            </div>
            <div class="flex">
            <span class="title-font font-medium text-2xl text-white">$58.00</span>
            <button class="flex ml-1 text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={Wishlisthandle}>Add to Wishlist</button>
            <button class="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4" onClick={handleClick}>
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
            </button>
            </div>
        </div>
        </div>
    </div>
    </div>
</section>
        


</>
  );
};

export default Collections;
