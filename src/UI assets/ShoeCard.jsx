import React from 'react'

const ShoeCard = ({imgUrl,changeBigShoeImg,bigShoeImg}) => {
  const handleClick = () => {
    if(bigShoeImg !== imgUrl){
      changeBigShoeImg(imgUrl.bigShoe)
    }
  }
  return (
    <div className={`border-2 rounded-xl
      ${bigShoeImg === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
      >
        <div className='flex justify-center items-center bg-card bg-cover bg-center sm:w-40 rounded-xl sm:h-40 max-sm:p-4'>
       <img
        src={imgUrl.thumbnail}
        alt='Shoe Collection'
        width={127}
        height={103}
        className='object-contain'
      />
        </div>
      </div>
  )
}

export default ShoeCard;