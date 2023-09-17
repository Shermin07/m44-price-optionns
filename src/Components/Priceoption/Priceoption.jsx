


import PropTypes from 'prop-types'
import Features from '../Features/Features';

const Priceoption = ({option}) => {
    const {name, price, features} = option ;
  return (
    <div className='bg-blue-500 p-7  text-white rounded flex flex-col'>
       <h2 className='text-3xl  font-bold  mb-3 text-center'>
        <span>{price}</span>
       </h2>
       <h3 className='text-2xl text-center'>{name}</h3>
      <div className='flex-grow'>
      {
       features.map((feature,idx) => <Features key={idx} feature={feature}></Features>)
    }
      </div>
      <button className=' px-7 p-3  bg-white text-blue-600 rounded mt-8  hover:bg-green-400'>Buy now</button> 
    </div>
    
  )
}

Priceoption.propTypes = {
    option: PropTypes.object 
}

export default Priceoption