import React from 'react'
import Layout from '../components/Layout'
import Product from '../components/Product';

interface IProductProps {
  name: string;
  price: number;
  description: string;
  imgUrl: string;
}

export default function services() {
  const products: IProductProps[] = [
    { name: "Cabelo", price: 80, description: "Na tesoura ou na máquina, como o cliente preferir!", imgUrl: "https://i.pinimg.com/originals/cb/c5/ba/cbc5ba36a527569a0f62fcba3e69a2d8.png" },
    { name: "Barba", price: 60, description: "Corte e desenho profissional de barba!", imgUrl: "https://i.pinimg.com/564x/91/e0/81/91e081caaeece275b7d3e49e2b5a6516.jpg"},
    { name: "Corte e barba", price: 120, description: "Corte de barba!", imgUrl: "https://i.pinimg.com/1200x/e0/fd/a1/e0fda1b380107103774d7a0e9243483d.jpg"}
  ];
  return (
    <Layout>
      <div className='h-screen'>
      <ul className='flex my-4'>
        {products.map(currentProduct => {
          return <Product key={currentProduct.name} product={currentProduct} />
        })}
      </ul>
      </div>
    </Layout>
  )
}
