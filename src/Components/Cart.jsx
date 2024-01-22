
import React, { useState } from 'react';



const Cart = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { 
        id: 1, 
        name: "Sony's Headphones", 
        price: 69.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",

    },
    {   
        id: 2, 
        name: 'Digital Cameras', 
        price: 499.99 ,
        image: 'https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?cs=srgb&dl=pexels-fox-225157.jpg&fm=jpg',
    },
    {   
        id: 3, 
        name: 'Mobile Phones', 
        price: 299.99,
        image: 'https://images.expertreviews.co.uk/wp-content/uploads/2023/03/best_android_smartphone_uk_2023_phones.jpg',
    },
    {
        id: 4,
        name: 'Macbook Pro 2',
        price: 499.99,
        image: 'https://9to5mac.com/wp-content/uploads/sites/6/2021/10/MacBook-Pro-2021.jpg?quality=82&strip=all&w=1024',
      },
      {
        id: 5,
        name: 'Mobile Phones',
        image: "https://www.digitaltrends.com/wp-content/uploads/2022/09/Apple-Watch-Ultra-on-Wrist-Pocket.jpg?p=1",
        price: 199.99
      },
      {
        id: 6,
        name: 'Mobile Phones',
        image: "https://www.zdnet.com/a/img/resize/7c135e7748ad80aa72743c58c1d067ba1a0fddcf/2023/10/06/4e7663f4-fe43-424e-8fde-64a5612cdfd7/img-1950.jpg?auto=webp&width=1280",
        price: 199.99
      },
      {
        id: 7,
        name: 'Mobile Phones',
        image: 'https://media.gq-magazine.co.uk/photos/639c863c994f7680774f8c3c/16:9/w_2560%2Cc_limit/GQ_WATCH_GUIDE_ONLINE_LV_HEADER.jpg',
        price: 199.99
      },
      {
        id: 8,
        name: 'Mobile Phones',
        image: "https://fotografias.lasexta.com/clipping/cmsimages01/2023/04/04/6B9C494E-05ED-4060-9979-6FF04A829BC9/ojo-funda-proximos-airpods-pro-contarian-pantalla-tactil_98.jpg?crop=1300,731,x0,y9&width=1900&height=1069&optimize=high&format=webply",
        price: 199.99
      },
      {
        id: 9,
        name: 'Mobile Phones',
        image: 'https://www.suriaklcc.com.my/wp-content/uploads/2021/12/Tambour_Horizon_Light_Up_Matte_Black_vue_plongeante_3.jpg',
        price: 199.99
      },
  ];

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.product.id !== product.id);
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
  };

  const Checkedout = () => {
    alert("Purchased Successfully!");
  };
  

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1 XXsm:grid-cols-1">
        <div>
        <h2 className="text-2xl font-semibold mb-4 mt-20 XXsm:grid-cols-1">Shopping Cart
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1 mt-2">
                <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
        </h2>
        {cart.length === 0 ? (
            <p>Your cart is empty.</p>
        ) : (
            cart.map((item) => (
            <div key={item.product.id} className="border p-4 mb-4 w-1/2 inline-block space-y-1 XXsm:grid-cols-1">
                <h3 className="text-lg font-semibold XXsm:grid-cols-1">{item.product.name}</h3>
                <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button
                onClick={() => removeFromCart(item.product)}
                className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
                >
                Remove
                </button>
            </div>
            ))
            )}
             <p className="text-lg font-bold mt-4">Total Price: ${calculateTotalPrice()}</p>
            <button className='bg-blue-500 rounded-lg p-3 mt-3 w-full font-semibold text-white hover:bg-blue-800 hover:text-white hover:font-bold' onClick={Checkedout}
            >Check Out
            </button>
        </div>

        <div className="col-span-1 mt-20">
          <h1 className="text-3xl font-semibold mb-4">Tech Gadgets</h1>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-1 xsm:grid-cols-1 XXsm:grid-cols-1">
            {products.map((product) => (
              <div key={product.id} className="border p-4 mb-4">
                <img src={product.image} alt={products.name} className="w-full h-48 object-cover mb-4 rounded-md " />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
