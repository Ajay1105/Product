import React from 'react';
import './ProductCard.css';

const ProductCard = (props) => {
  return (
    <>
     <div className='flex flex-col ml-8 px-2 py-3 w-60 h-96 rounded-2xl outline-1 mb-8 outline'>
       <div>
       <img src = {props.img} alt = "img" className='my-2 rounded-xl p-img'/>
       </div>
       <div className='mt-3'>
        <h4 className='mb-3 flex justify-center bold-text'> {props.name} </h4>
        <p className='p-text'>{props.desc}</p>
       </div>
     </div>
    </>
  )
}

export default ProductCard