import React from 'react';
import phone from '../asets/win.png';

function Home() {
  return (
    <div>
        <div className="add-to-cart">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="" />
        </div>
        <h1>Home Component</h1>
        <div className='cart-wrapper'>
            <div className='img-wrapper item'>
               <img src={phone} alt="" />
            </div>
            <div className='text-wrapper item'>
                <span>I-Phone</span>
                <span>Price $1000.00</span>
            </div>
            <div className='btn-wrapper item'>
                <button>Add to Cart</button>
              
            </div>
        </div>
    </div>
  )
}

export default Home;