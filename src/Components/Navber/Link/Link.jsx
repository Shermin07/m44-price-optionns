
import PropTypes from 'prop-types'

function Link({route}) {
  return (
    <li className='md:mr-10'>
    <a href={route.path}>{route.name}</a>
   </li>
  )
}

Link.propTypes = {
    route:PropTypes.object
}

export default Link


