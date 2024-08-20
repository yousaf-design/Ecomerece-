import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
      <div className='flex gap-3 mb-4'>
        <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px ]w-36'>Description</button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px ]w-36'>Care Guide</button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px ]w-36'>Size Guide</button>
      </div>
      <div className='flex flex-col mb-16'>
        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sequi, dolore, nisi esse totam ipsa natus officiis dignissimos ratione in eligendi, dolor nulla consequatur doloribus itaque. Culpa animi vero modi iure itaque natus fugit temporibus error ea aspernatur asperiores vitae, molestiae doloribus ipsum quaerat officia beatae nihil id voluptatum aperiam, expedita nesciunt tenetur! Eligendi, nesciunt?</p>
        <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio velit deleniti laborum amet nam quisquam aut iusto, dignissimos provident reprehenderit doloribus natus delectus eveniet facilis?</p>
      </div>
    </div>
  )
}

export default ProductDescription
