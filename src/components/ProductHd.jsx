import {TbArrowRight} from 'react-icons/tb'

const ProductHd = (props) => {

const { product } = props;

  return (
    <div className="flex items-center flex-wrap gap-x-2 medium-16 my-4 capitalize">
      Home <TbArrowRight/> shop <TbArrowRight/> {product.catogery} <TbArrowRight/> {product.name}
    </div>
  )
}

export default ProductHd
