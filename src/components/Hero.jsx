import { FaStar } from "react-icons/fa6";
import { MdOutlineLocalOffer } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='relative bg-hero bg-center bg-no-repeat bg-cover h-screen w-full'>
      <div className='max_padd_container relative top-0 flex flex-col justify-center h-full'>
        {/* Heading */}
        <h1 className='h1 capitalize text-6xl max-w-[37rem] mb-4'>
          Digital Shopping Hub Junction
        </h1>
        
        {/* Paragraph */}
        <p className='text-gray-50 regular-16 max-w-[33rem] mb-6'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi incidunt minima voluptatum velit rerum voluptatem, ullam eum itaque aspernatur quidem dolorem sit harum error repellat cumque eius dignissimos commodi, corrupti in quod eaque.
        </p>
        
        {/* Stars, Reviews, and Buttons */}
        <div className='flex flex-col items-start gap-y-4'>
          <div className='flex items-center gap-x-4'>
            <div className='regular-24 flexCenter gap-x-3'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className='bold-16 sm:bold-20'>
              176K <span className='regular-16 sm:regular-20'>Excellent Reviews</span>
            </div>
          </div>

          {/* Buttons */}
          <div className='flex gap-x-4 mt-4'>
            <NavLink to={''} className="btn_dark_rounded flexCenter">Shop now</NavLink>
            <NavLink to={''} className="btn_dark_rounded flexCenter gap-x-2">
              <MdOutlineLocalOffer className='text-2xl' />Offers
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
