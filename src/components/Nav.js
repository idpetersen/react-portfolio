import React from 'react';

function Nav (props) {
    return (
        <ul className='nav'>
            <li className='nav-item'>
                <a href='#About' className={props.currentPage === tab ? 'nav-link active' : 'nav-link'}>About</a>
            </li>
            <li className='nav-item'>
                <a href='#About' className={props.currentPage === tab ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            </li>
            <li className='nav-item'>
                <a href='#About' className={props.currentPage === tab ? 'nav-link active' : 'nav-link'}>Contact</a>
            </li>
        </ul>
    )
}

export default Nav