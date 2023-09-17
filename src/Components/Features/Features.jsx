
import PropTypes from 'prop-types'
import { AiFillCheckCircle } from 'react-icons/ai';

const Features = ({feature})=> {
    
  return (
    <div>
        <p className='mt-4 flex items-center gap-2'> <AiFillCheckCircle className='text-green-600'></AiFillCheckCircle>{feature}</p>
    </div>
    
  )
}

Features.propTypes = {
    feature: PropTypes.string
}

export default Features