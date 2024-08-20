import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { TbTrash } from "react-icons/tb";

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext);

  if (!all_products || !cartItems) {
    return <div>Loading...</div>;
  }

  const cartProductIds = Object.keys(cartItems).map(id => parseInt(id));

  const filteredProducts = all_products.filter(product => cartProductIds.includes(product.id));

  return (
    <section className='max_padd_container pt-28'>
      <table className='w-full mx-auto'>
        <thead>
          <tr className='bg-slate-900/10 regular-18 sm:regular-22 text-start py-12'>
            <th className='p-1 py-2'>Product</th>
            <th className='p-1 py-2'>Title</th>
            <th className='p-1 py-2'>Price</th>
            <th className='p-1 py-2'>Quantity</th>
            <th className='p-1 py-2'>Total</th>
            <th className='p-1 py-2'>Remove</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <tr key={product.id} className='border-b border-slate-900/20 p-6 medium-14 text-center'>
                <td className='flexCenter'>
                  <img
                    src={product.image}
                    alt="Product Image"
                    height={43}
                    width={43}
                    className='border-lg ring-1 ring-slate-900/5 my-1 rounded-lg'
                  />
                </td>
                <td>
                  <div className='line-clamp-3'>{product.name}</div>
                </td>
                <td>${product.new_price}</td>
                <td className='w-16 h-16 bg-white flexCenter'>
                  <span className='flex justify-center items-center h-full'>{cartItems[product.id]}</span>
                </td>
                <td>${product.new_price * cartItems[product.id]}</td>
                <td className='flex justify-center items-center'>
                  <button onClick={() => removeFromCart(product.id)} className='text-lg text-red-500'>
                    <TbTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No items in cart</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Cart Summary */}
      <div className='flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-white w-full max-w-[666px]'>
        <div className='flex flex-col gap-10'>
          <h4 className='bold-20'>Summary</h4>
          <div>
            <div className='flexBetween py-4'>
              <h4 className='medium-16'>Subtotal:</h4>
              <h4 className='text-gray-30 font-semibold'>${getTotalCartAmount()}</h4>
            </div>
            <hr />
            <div className='flexBetween py-4'>
              <h4 className='medium-16'>Shipping Fee:</h4>
              <h4 className='text-gray-30 font-semibold'>Free</h4>
            </div>
            <hr />
            <div className='flexBetween py-4'>
              <h4 className='bold-18'>Total</h4>
              <h4 className='bold-18'>${getTotalCartAmount()}</h4>
            </div>
          </div>
          <button className='btn_dark_rounded w-44'>Checkout</button>
          <div className='flex flex-col gap-10'>
            <h4 className='bold-20 capitalize'>Your coupon code enter here:</h4>
            <div className='flexBetween pl-5 h-12 bg-primary rounded-full ring-1 ring-slate-900/10 '>
              <input type="text" placeholder='coupon code' className='bg-transparent border-none outline-none' />
              <button className='btn_dark_rounded'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
