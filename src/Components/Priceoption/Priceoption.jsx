


import PropTypes from 'prop-types'
import Features from '../Features/Features';

const Priceoption = ({option}) => {
    const {name, price, features} = option ;
  return (
    <div className='bg-blue-500 p-7 text-center text-white font-bold rounded'>
       <h2 className='text-3xl mb-3'>
        <span>{price}</span>
       </h2>
       <h3 className='text-2xl'>{name}</h3>
       {
       features.map((feature,idx) => <Features key={idx} feature={feature}></Features>)
    }
    </div>
    
  )
}

Priceoption.propTypes = {
    option: PropTypes.object 
}

export default Priceoption