import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => {
    return ( 
        <nav className="nav-wrapper light-blue darken-2">
            <div>
                <a href="#!" className="brand-logo">{titulo}</a>
            </div>
        </nav>
     );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired 
}
 
export default Header;