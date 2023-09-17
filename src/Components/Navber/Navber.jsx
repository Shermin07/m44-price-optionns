import { useState } from "react";
import Link from "./Link/Link";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';




const Navber = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Courses', path: '/courses' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Profile', path: '/profile' },
      ];
      
      
      
    return (
        
      <nav className="bg-yellow-200 p-4">
       <div className="text-3xl md:hidden  " onClick={() => setOpen(!open)}>
        {
            open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu ></AiOutlineMenu>  
        }
       
       </div>
<ul className={`md:flex absolute md:static duration-1000 bg-yellow-200 px-3
${open ? 'top-16':'-top-60'}
`}>
    {
        routes.map((route) =><Link key={route.id} route={route} ></Link>)
    }
</ul>


      </nav>
    );
};

export default Navber;