import React from 'react';

const Header = ({titulo}) => {
    return ( 
        <nav className="nav-wrapper light-blue darken-2">
            <div>
                <a href="#!" className="brand-logo">{titulo}</a>
            </div>
        </nav>
     );
}
 
export default Header;