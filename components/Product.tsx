import React from 'react'

interface IProductProps {
  name: string;
  price: number;
  description: string;
  imgUrl: string;
}

export default function Product({ product }: { product: IProductProps }) {
  const { name, price, description, imgUrl } = product;
  return (
    <li className='flex flex-col items-center bg-gray-200 rounded-lg w-1/3 h-1/3 px-3 py-3 mx-4 my-2 shadow-xl'>
       <h1 className='font-semibold text-xl'>
        {name}
      </h1>
      <img src={imgUrl} alt=""  className='rounded-xl shadow-md'/>
      <p className='text-md mt-2'>
        {description}
      </p>
      <p className='text-md mt-2'>
        R$ {price.toFixed(2)}
      </p>
    </li>
  )
}
