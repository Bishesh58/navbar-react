import React, { useState } from 'react';
import '../Components/NavButton.css';

function NavButton({title, img}) {

    const [isShown, setIsShown] = useState(false);

    return (
        <div className='navButton'>
           <div className="navContainer"
                onMouseEnter={() =>{setIsShown(true)}}
                onMouseLeave={() =>{setIsShown(false)}}
            >
                <div className="nav__button">
                    {title}
                    </div>
               
                {isShown && (
                        <div className="nav__dropdown">
                          <img src={img} alt=""/>
                        </div>
                    )
                }
           </div>
        </div>
    )
}

export default NavButton
